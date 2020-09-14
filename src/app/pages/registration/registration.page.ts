import { Component, OnInit } from '@angular/core';
import { AlertController, NavController, ToastController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { HTTP } from '@ionic-native/http/ngx';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/services/config/config.service';
import { FormBuilder, Validators, NgForm } from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  phone: string;
  password: string;
  usertype:string;
  userList: any[] = [];
  secret: string = 'F3440211-EBA8-1DE0-9F16-0A536A7853A1';
  userEmail: string='ejjars@gmail.com	';
  baseurl: string='https://api-mapper.clicksend.com/http/v2/send.php?username=';

  constructor(
    private storage: Storage , 
    private alertCtrl: AlertController , 
    public navCtrl: NavController , 
    public toastCtrl: ToastController, 
    private router:Router , 
    private platform: Platform,
    private http: HTTP,
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
  }

  async regVal(){

    const areFieldsNotEmpty = this.phone !== "" && this.password !== "";

    if (areFieldsNotEmpty) {
      let users: Array<any> = await this.storage.get('users');
      if (users === null) {
        users = [];
      }
      /*const user = { 
        'mobile_number': this.phone,
        'password': this.password,
        'user_type': this.usertype
      };*/

      const user = 'mobile_number=' + this.phone + '&password=' + this.password+ '&user_type=' + this.usertype;

      console.log(users);

      users.push(user);

      await this.storage.set('users', users);
      await this.router.navigate(['otp']);
      this.sendOTP();
    } else {
      let alert = this.alertCtrl.create({
        header :'Alert',
        message :'Please don\'t Empty the fields!',
        buttons:['Ok']
      });
      (await alert).present();
    }
    console.log(await this.storage.get('users'));



    /* old codes

    if(this.phone !== "" && this.password !== ""){
      const data = [];
      data.push({
        "mobileNumber": this.phone,
        "password": this.password
      });
      this.userList = data
      this.router.navigate(['otp'])
      await this.storage.set('users', this.userList);
      this.storage.get("users").then((val) => {
        console.log(val);
        this.sendOTP()
    })
  }else {
      let alert = this.alertCtrl.create({
        header :'Alert',
        message :'Please don\'t Empty the fields!',
        buttons:['Ok']
      });
      (await alert).present();
    } */

  
  }

  sendOTP(){
    let code = Math.floor((Math.random()*1000000)+1);
    this.storage.set('code',code);
    this.httpClient.get(this.baseurl+ this.userEmail+'&key='+this.secret+'&to='+this.phone +'&senderid=180038&message= Your%20ZERO-19%20verification%20code:%20' + code).subscribe( async res => {
      if(!res){
        let alert = this.alertCtrl.create({
          header :'Alert',
          message :'Sorry failed request!',
          buttons:['Ok']
        });
        (await alert).present();
      }else{
        let alert = this.alertCtrl.create({
          header :'Alert',
          message :'Success!',
          buttons:['Ok']
        });
        (await alert).present();
      }
    });

  
  }

}
