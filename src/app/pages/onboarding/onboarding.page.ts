import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
	slides: Array<any>
	@ViewChild('slidesViewChild', {static: false}) slidesViewChild: IonSlides;
	slidesViewChildOptions: object;
	isShowLoginButton: boolean;
	isShowNextButton: boolean;

  constructor(
  	private router: Router
  ) { }

  ngOnInit() {
  	this.initializeSlides();
  	this.isShowNextButton = true;
  	this.isShowLoginButton = false;
  }

  initializeSlides() {
  	this.slides = [
  		{
  			title: 'PERSPECIATUS UT',
  			avatarImage: 'assets/onboarding/1.png',
  		  paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  		},
  		{
  			title: 'EXCEPTEUR',
  			avatarImage: 'assets/onboarding/2.png',
  		  paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  		},
  		{
  			title: 'LOREM IPSUM',
  			avatarImage: 'assets/onboarding/3.png',
  		  paragraph: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  		}
  	];

  	this.slidesViewChildOptions = {
  		pagination: true
  	};  	
  }

  async showNextSlide() {  
  	this.slidesViewChild.slideNext();  
  	if (await this.slidesViewChild.isEnd()) { 
  		this.isShowLoginButton = true;
  		this.isShowNextButton = false;
  	} 
  }

  async showLoginPage() {
  	await this.router.navigate(['/login'])
  } 

  async onSlideWillChange() {
  	if (await this.slidesViewChild.isEnd()) { 
  		this.isShowLoginButton = true;
  		this.isShowNextButton = false;
  	} else {
  		this.isShowLoginButton = false;
  		this.isShowNextButton = true;
  	}
  }

}
