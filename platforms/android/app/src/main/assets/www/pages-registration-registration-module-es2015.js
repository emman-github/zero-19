(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registration-registration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n \n</ion-header>\n\n<ion-content> \n  <ion-img id=\"img\" src=\"assets/LOGO4.png\"></ion-img>\n  \n  <div id=\"container\">\n    <form id=\"formRegistration\">\n      <ion-label id=\"h-title\">\n        REGISTRATION\n      </ion-label>\n      \n        <ion-card>\n          <ion-input id=\"textInput\" [(ngModel)]=\"phone\" name=\"phone\" type=\"number\"><ion-icon name=\"phone-portrait-outline\" item-left></ion-icon></ion-input>\n      </ion-card>\n      \n      <ion-card>\n        <ion-input id=\"textInput\" [(ngModel)]=\"password\" name=\"password\" type=\"password\"><ion-icon name=\"lock-closed\" item-left></ion-icon></ion-input>\n      </ion-card>\n      \n      <section class=\"full-width\">\n        <ion-button id=\"signupbtn\" (click)=\"regVal()\" expand=\"full\" color=\"secondary\">SIGNUP</ion-button> \n  \n      </section>\n\n    </form>\n   \n\n  </div>\n\n  <div class=\"ion-text-end\"><ion-label id=\"login\" routerLink=\"/login\">Login</ion-label></div>\n  \n\n  <ion-img id=\"img\" src=\"assets/CrisCross3.png\"></ion-img>\n \n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/registration/registration-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/registration/registration-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function() { return RegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.page */ "./src/app/pages/registration/registration.page.ts");




const routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }
];
let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {
};
RegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/registration/registration.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/registration/registration.module.ts ***!
  \***********************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/pages/registration/registration-routing.module.ts");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration.page */ "./src/app/pages/registration/registration.page.ts");







let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"]
        ],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
    })
], RegistrationPageModule);



/***/ }),

/***/ "./src/app/pages/registration/registration.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#h-title {\n  margin-left: 20px;\n  padding-left: 0px;\n  width: auto;\n  color: white;\n  background-color: #0cb0d3;\n  margin-right: 20px;\n  font-size: 20px;\n  font-weight: bolder;\n  font-family: \"Century Gothic\", \"Futura\", san-serif;\n}\n\n#container {\n  margin-top: 50px;\n  margin-left: 0px;\n  margin-right: 0px;\n  background-color: #0cb0d3;\n  height: auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n#img {\n  margin-top: 50px;\n  height: 120px;\n  width: 120px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n}\n\n#signupbtn {\n  font-family: \"Century Gothic\", \"Futura\", san-serif;\n  font-weight: bolder;\n  margin-left: 16px;\n  margin-right: 16px;\n  color: white;\n}\n\n#textInput {\n  font-size: 25px;\n  margin-left: 15px;\n  margin-right: 15px;\n}\n\n#icon-left {\n  padding-left: 5px;\n  margin-left: 5px;\n}\n\n#footerIcon {\n  height: 40px;\n  width: 40px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#login {\n  font-family: \"Century Gothic\", \"Futura\", san-serif;\n  margin-top: 10px;\n  margin-right: 20px;\n  color: #0cb0d3;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7QUFDSjs7QUFJRztFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFGUDs7QUFLRztFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGUDs7QUFLRztFQUNLLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUZSOztBQU1HO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFIUDs7QUFPRztFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKUDs7QUFRRztFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUxQOztBQVVHO0VBQ0ksa0RBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFQUCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2gtdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwY2IwZDMgO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJywnRnV0dXJhJyxzYW4tc2VyaWY7XG5cbiAgICBcbiAgIH1cbiAgIFxuICAgI2NvbnRhaW5lciB7XG4gICAgICAgXG4gICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6IzBjYjBkMyA7XG4gICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgfVxuXG4gICAjaW1nIHtcbiAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgd2lkdGg6ICAxMjBweDtcbiAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgIH1cblxuICAgI3NpZ251cGJ0biB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnLCdGdXR1cmEnLHNhbi1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIFxuICAgfVxuXG4gICAjdGV4dElucHV0IHtcbiAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuXG4gICB9XG5cbiAgICNpY29uLWxlZnQge1xuICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICB9XG5cblxuICAgI2Zvb3Rlckljb24ge1xuICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgXG5cbiAgIH1cblxuICAgI2xvZ2luIHtcbiAgICAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJywnRnV0dXJhJyxzYW4tc2VyaWY7XG4gICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgY29sb3I6IzBjYjBkMztcbiAgICAgICBmbG9hdDogcmlnaHQ7IFxuICAgICAgICBcbiAgIH0gXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/registration/registration.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/registration/registration.page.ts ***!
  \*********************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







let RegistrationPage = class RegistrationPage {
    constructor(storage, alertCtrl, navCtrl, toastCtrl, router, platform, http, httpClient) {
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.platform = platform;
        this.http = http;
        this.httpClient = httpClient;
        this.userList = [];
        this.secret = 'F3440211-EBA8-1DE0-9F16-0A536A7853A1';
        this.userEmail = 'ejjars@gmail.com	';
        this.baseurl = 'https://api-mapper.clicksend.com/http/v2/send.php?username=';
    }
    ngOnInit() {
    }
    regVal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const areFieldsNotEmpty = this.phone !== "" && this.password !== "";
            if (areFieldsNotEmpty) {
                let users = yield this.storage.get('users');
                if (users === null) {
                    users = [];
                }
                const user = {
                    "mobileNumber": this.phone,
                    "password": this.password
                };
                users.push(user);
                yield this.storage.set('users', users);
                yield this.router.navigate(['otp']);
                this.sendOTP();
            }
            else {
                let alert = this.alertCtrl.create({
                    header: 'Alert',
                    message: 'Please don\'t Empty the fields!',
                    buttons: ['Ok']
                });
                (yield alert).present();
            }
            console.log(yield this.storage.get('users'));
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
        });
    }
    sendOTP() {
        let code = Math.floor((Math.random() * 1000000) + 1);
        this.storage.set('code', code);
        this.httpClient.get(this.baseurl + this.userEmail + '&key=' + this.secret + '&to=' + this.phone + '&senderid=180038&message=' + code).subscribe((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!res) {
                let alert = this.alertCtrl.create({
                    header: 'Alert',
                    message: 'Sorry failed request!',
                    buttons: ['Ok']
                });
                (yield alert).present();
            }
            else {
                let alert = this.alertCtrl.create({
                    header: 'Alert',
                    message: 'Success!',
                    buttons: ['Ok']
                });
                (yield alert).present();
            }
        }));
    }
};
RegistrationPage.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_4__["HTTP"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
RegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registration.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration/registration.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registration.page.scss */ "./src/app/pages/registration/registration.page.scss")).default]
    })
], RegistrationPage);



/***/ })

}]);
//# sourceMappingURL=pages-registration-registration-module-es2015.js.map