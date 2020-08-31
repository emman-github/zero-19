import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router, private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  async logout(){
    
    let alert = this.alertCtrl.create({
      header :'Logout',
      message :'Are you sure you want to logout?',
      buttons:[{
        text: 'Yes',
        handler: async () => {
            (await alert).dismiss(true);
            this.router.navigate(['login'])
            return false;
        }
        }, {
        text: 'No',
        handler: async () => {
            (await alert).dismiss(false);
            return false;
        }
    }]
    });
    (await alert).present();
    

  }

}
