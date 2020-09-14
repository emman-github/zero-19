import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ConfigService } from 'src/app/services/config/config.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  inputToFocus: any;
  cd1:any;
  cd2:any;
  cd3:any;
  cd4:any;
  cd5:any;
  cd6:any;
  arrayOfDigits: any;
  c1:any;
  c2:any;
  c3:any;
  c4:any;
  c5:any;
  c6:any;

  constructor(public alertCtrl:AlertController, 
    private router: Router , private storage: Storage,  
    private configService: ConfigService, 
    private httpClient:HttpClient,
    private loadingController: LoadingController,) { }

  ngOnInit() {
    console.log('OTP Validation is now running...');
    console.log('USERS',this.storage.get('users'));
    
  }

  gotoNextField(nextElement){
    nextElement.setFocus();
  }


  otpvalidate(){
    this.validate()
    }

    async validate(){

      this.storage.get('code').then(async (result) => {
        console.log('OTP-CODE:',result);
        let arrayOfDigits = Array.from(String(result), Number);
        console.log("first element",arrayOfDigits[0]);
        this.c1 = arrayOfDigits[0];
        this.c2 = arrayOfDigits[1];
        this.c3 = arrayOfDigits[2];
        this.c4 = arrayOfDigits[3];
        this.c5 = arrayOfDigits[4];
        this.c6 = arrayOfDigits[5];
        // validating otp code

        const loading = await this.loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Please wait...' 
        });
        //await loading.present(); 
       
          if(this.cd1 == this.c1 || this.cd2 == this.c2 || this.cd3 == this.c3 || this.cd4 == this.c4 || this.cd5 == this.c5 || this.cd6 == this.c6 ){
            let alert = this.alertCtrl.create({
              header :'Alert',
              message :'Your code is Verified!',
              buttons:['Ok']
            });
            (await alert).present();

                this.storage.get("users").then((val) => {
                  let data = val;
                  for(let Data of data){
                    console.log(`${this.configService.baseUrl}create_new_user/?` + Data);
                    this.httpClient.post(`${this.configService.baseUrl}create_new_user/?`,Data).subscribe(async(response: any) => {
                      if (response.status === 'error') {
                        let alert = await this.alertCtrl.create({
                          header :`error`,
                          message :'Sorry unable to register. Please try again later.',
                          buttons:['Ok']
                          
                        });
                        loading.dismiss();
                        
                        await alert.present();
                        await loading.dismiss();    
                      } else if (response.status === 'success') {
                        this.router.navigate(['login'])
                        loading.dismiss();
                      }
                      console.log(response);
                    });
                    this.storage.clear();
                    
                  }
                  
              
              })
           
          } else {

            let alert = this.alertCtrl.create({
              header :'Alert',
              message :'Sorry you code is not valid!!',
              buttons:['Ok']
            });
            (await alert).present();

          }

        // End of code

        return result
      })
     
  }

}
