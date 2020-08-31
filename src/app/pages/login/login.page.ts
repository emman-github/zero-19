import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginFormGroup: any;
  mobileNumber: any;
  password: any;
  phone:any; 

  constructor(
    private navCtrl: NavController,
    public alertCtrl: AlertController,
    private router: Router,
    private storage: Storage,
    private formBuilder: FormBuilder,
    private loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.loginFormGroup = this.formBuilder.group({
      mobileNumber: ['', [
        Validators.required,  
        Validators.maxLength(16)
      ]],
      password: ['', [
        Validators.required,
        Validators.maxLength(16)
      ]],
    });
  }

  async login() {   
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...' 
    });
    await loading.present(); 

    const user = this.loginFormGroup.value;
    console.log(user);
    // await this.storage.set('user', JSON.stringify(user)); 
    // console.log(JSON.parse(await this.storage.get('user')));
    let users: Array<any> = await this.storage.get('users');
    if (users === null) {
      users = [];
    }

    console.log(users);
    for (var i = 0; i < users.length; i++) {
      console.log(users[i])
      let doesUserExists = user.mobileNumber === users[i].mobileNumber && user.password === users[i].password;

      if (doesUserExists) { 
        this.router.navigate(['/dashboard']);
        loading.dismiss();
        return false;
      } else { 
        let alert = await this.alertCtrl.create({
          header :`User doesn't exists`,
          message :'Incorrect mobile number or password',
          buttons:['Ok']
        });
        await alert.present();
        loading.dismiss();
        return false;
      }
    }

    console.log(users); 
  }

}
