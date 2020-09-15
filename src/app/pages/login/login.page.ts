import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { FormBuilder, Validators, NgForm } from "@angular/forms";
import { ConfigService } from 'src/app/services/config/config.service';
import { HttpClient } from '@angular/common/http';

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
    private loadingController: LoadingController,
    private configService: ConfigService,
    private httpClient: HttpClient
  ) {}

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

    let formData = new FormData();
    formData.append('mobile_number', user.mobileNumber);
    formData.append('password', user.password);
    // formData.append('mobile_number', '09123456789');
    // formData.append('password', 'password');

    this.httpClient.post(`${this.configService.baseUrl}login_user`, formData).subscribe(async(response: any) => {
      if (response.status === 'error') {
        let alert = await this.alertCtrl.create({
          header :`User doesn't exists`,
          message :'Incorrect mobile number or password',
          buttons:['Ok']
        });

        this.loginFormGroup.reset();
        
        await alert.present();
        await loading.dismiss();    
      } else if (response.status === 'success') {
        this.router.navigate(['/dashboard']);
        loading.dismiss();
        this.loginFormGroup.reset(); 
      }
      console.log(response);
    }, async(error) => {
      await loading.dismiss();
      alert(JSON.stringify(error));
    });
  }

  // async loginVal(){

  //   if(this.phone != "09068354654" && this.password != "Testing123"){
  //     let alert = this.alertCtrl.create({
  //       header :'Alert',
  //       message :'Sorry wrong password!',
  //       buttons:['Ok']
  //     });
  //     (await alert).present();
  //   } else {
  //     let alert = this.alertCtrl.create({
  //       header :'Alert',
  //       message :'Successfully Login!',
  //       buttons:['Ok']
  //     });
  //     (await alert).present();
  //     this.router.navigate(['dashboard'])
  //   }
  // }

}
