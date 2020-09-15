(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\t<ion-img id=\"logo-img\" src=\"assets/LOGO4.png\"></ion-img>\n\t<form id=\"login-form\" [formGroup]=\"loginFormGroup\" (ngSubmit)=\"login()\">\n\t\t<ion-text>\n\t\t\t<h2 id=\"login-h2\">LOGIN</h2>\n\t\t</ion-text>\n\t\t<ion-item id=\"mobile-number-item\"> \n\t\t\t<ion-avatar slot=\"start\" id=\"mobile-number-avatar\">\n\t\t\t\t<ion-img src=\"assets/mobile.png\" id=\"mobile-number-img\"></ion-img>\n\t\t\t</ion-avatar>   \n\t\t\t<ion-input id=\"mobile-number-input\" name=\"mobileNumber\" placeholder=\"Mobile number\" formControlName=\"mobileNumber\" type=\"text\" value=\"61298765432\"></ion-input> \n\t\t</ion-item>\n\t\n\t\t<ion-item id=\"password-item\">\n\t\t\t<ion-avatar slot=\"start\" id=\"password-avatar\">\n\t\t\t\t<ion-img src=\"assets/lock icon.png\" id=\"password-img\"></ion-img>\n\t\t\t</ion-avatar>\n\t\t\t<ion-input id=\"password-input\" name=\"password\" placeholder=\"Password\" formControlName=\"password\" type=\"password\"></ion-input>\n\t\t</ion-item>\n\t\t<ion-button id=\"forgot-password-button\" fill=\"clear\" expand=\"full\">Forgot Password?</ion-button>\n\t\t<ion-button id=\"login-button\" expand=\"full\" color=\"secondary\" [disabled]=\"!loginFormGroup.valid\" type=\"submit\" value=\"12345678\">login</ion-button>\n\t</form>\n\t<p id=\"sign-up-button\" routerLink=\"/registration\">Sign up</p>\n\t<ion-img id=\"footer-img\" src=\"assets/CrisCross3.png\"></ion-img> \n\n\t\t<div *ngIf=\"mobileNumber?.errors.maxlength\">\n\t\t\t    Phone number should \n\t\t\t  </div>\n</ion-content> \n\t\n");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_5__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#logo-img {\n  width: 100px;\n  margin: 0 auto;\n  margin-top: 4rem;\n  margin-bottom: 1rem;\n}\n\n#login-form {\n  background-color: #0cb0d3;\n  padding: 15px 15px 2.5rem 15px;\n}\n\n#login-form #login-h2 {\n  margin-top: 0px;\n  color: white;\n  font-weight: 550;\n  margin-bottom: 3px;\n  margin-left: 5px;\n}\n\n#login-form #mobile-number-item {\n  margin-bottom: 10px;\n  border-radius: 5px;\n  --background: #eee;\n}\n\n#login-form #mobile-number-item #mobile-number-avatar {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n}\n\n#login-form #mobile-number-item #mobile-number-avatar #mobile-number-img {\n  width: 25px;\n  height: 25px;\n  padding: 0;\n  margin-right: -15px;\n}\n\n#login-form #mobile-number-item #mobile-number-input {\n  border-left: 1.5px solid #999;\n  height: 65%;\n  --padding-start: 10px;\n}\n\n#login-form #password-item {\n  border-radius: 5px;\n  --background: #eee;\n}\n\n#login-form #password-item #password-avatar {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n}\n\n#login-form #password-item #password-avatar #password-img {\n  width: 25px;\n  height: 25px;\n  padding: 0;\n  margin-right: -15px;\n}\n\n#login-form #password-item #password-input {\n  border-left: 1.5px solid #999;\n  height: 65%;\n  --padding-start: 10px;\n}\n\n#login-form #forgot-password-button {\n  text-transform: none;\n  margin: 1rem 0rem 1rem 0rem;\n  color: white;\n  font-size: 12px;\n  font-weight: lighter;\n}\n\n#login-form #login-button {\n  --box-shadow: none;\n  --padding-top: 24px;\n  --padding-bottom: 24px;\n  font-weight: 550;\n  font-size: 18px;\n}\n\n#sign-up-button {\n  text-transform: none;\n  float: right;\n  margin: 1rem 1rem 0rem 0rem;\n  color: #0cb0d3;\n}\n\n#footer-img {\n  min-height: 10rem;\n  width: 10rem;\n  margin: 0 auto;\n  margin-top: 5rem;\n}\n\n.vertical-lign-div {\n  position: absolute;\n  border-left: 6px solid green;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDRyx5QkFBQTtFQUNBLDhCQUFBO0FBQ0g7O0FBQUc7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUVQOztBQUFHO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRVA7O0FBRE87RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBR1g7O0FBRlc7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUlmOztBQURPO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFHWDs7QUFFRztFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFBUDs7QUFDTztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDWDs7QUFBVztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBRWY7O0FBQ087RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUNYOztBQUVHO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFBUDs7QUFFRztFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFQOztBQUlBO0VBQ0csb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBREg7O0FBSUE7RUFDRyxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFESDs7QUFJQTtFQUNHLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBREgiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nby1pbWcgeyBcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLXRvcDogNHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4jbG9naW4tZm9ybSB7XG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGNiMGQzO1xuICAgcGFkZGluZzogMTVweCAxNXB4IDIuNXJlbSAxNXB4O1xuICAgI2xvZ2luLWgyIHtcbiAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG4gICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICB9XG4gICAjbW9iaWxlLW51bWJlci1pdGVtIHsgXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgLS1iYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICNtb2JpbGUtbnVtYmVyLWF2YXRhciB7IFxuICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICNtb2JpbGUtbnVtYmVyLWltZyB7IFxuICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgICAgICAgICAgfVxuICAgICAgIH1cbiAgICAgICAjbW9iaWxlLW51bWJlci1pbnB1dCB7IFxuICAgICAgICAgICBib3JkZXItbGVmdDogMS41cHggc29saWQgIzk5OTtcbiAgICAgICAgICAgaGVpZ2h0OiA2NSU7XG4gICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAgICB9XG4gICB9XG4gICBcbiAgIFxuICAgI3Bhc3N3b3JkLWl0ZW0geyBcbiAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgLS1iYWNrZ3JvdW5kOiAjZWVlOyBcbiAgICAgICAjcGFzc3dvcmQtYXZhdGFyIHtcbiAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAjcGFzc3dvcmQtaW1nIHtcbiAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XG4gICAgICAgICAgIH1cbiAgICAgICB9XG4gICAgICAgI3Bhc3N3b3JkLWlucHV0IHtcbiAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDEuNXB4IHNvbGlkICM5OTk7XG4gICAgICAgICAgIGhlaWdodDogNjUlO1xuICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgICAgfVxuICAgfVxuICAgI2ZvcmdvdC1wYXNzd29yZC1idXR0b24ge1xuICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgIG1hcmdpbjogMXJlbSAwcmVtIDFyZW0gMHJlbTtcbiAgICAgICBjb2xvcjogd2hpdGU7XHRcbiAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICB9IFxuICAgI2xvZ2luLWJ1dHRvbiB7XG4gICAgICAgLS1ib3gtc2hhZG93OiBub25lOyBcbiAgICAgICAtLXBhZGRpbmctdG9wOiAyNHB4O1xuICAgICAgIC0tcGFkZGluZy1ib3R0b206IDI0cHg7XG4gICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICB9XG59XG5cbiNzaWduLXVwLWJ1dHRvbiB7XG4gICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgIGZsb2F0OiByaWdodDtcbiAgIG1hcmdpbjogMXJlbSAxcmVtIDByZW0gMHJlbTsgXG4gICBjb2xvcjogIzBjYjBkMztcbn1cblxuI2Zvb3Rlci1pbWcge1xuICAgbWluLWhlaWdodDogMTByZW07XG4gICB3aWR0aDogMTByZW07XG4gICBtYXJnaW46IDAgYXV0bztcbiAgIG1hcmdpbi10b3A6IDVyZW07XG59XG5cbi52ZXJ0aWNhbC1saWduLWRpdiB7XG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICBib3JkZXItbGVmdDogNnB4IHNvbGlkIGdyZWVuO1xuICAgaGVpZ2h0OiA1MDBweDtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/config/config.service */ "./src/app/services/config/config.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");








let LoginPage = class LoginPage {
    constructor(navCtrl, alertCtrl, router, storage, formBuilder, loadingController, configService, httpClient) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
        this.configService = configService;
        this.httpClient = httpClient;
    }
    ngOnInit() {
        this.loginFormGroup = this.formBuilder.group({
            mobileNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(16)
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(16)
                ]],
        });
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...'
            });
            yield loading.present();
            const user = this.loginFormGroup.value;
            console.log(user);
            let formData = new FormData();
            formData.append('mobile_number', user.mobileNumber);
            formData.append('password', user.password);
            // formData.append('mobile_number', '09123456789');
            // formData.append('password', 'password');
            this.httpClient.post(`${this.configService.baseUrl}login_user`, formData).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (response.status === 'error') {
                    let alert = yield this.alertCtrl.create({
                        header: `User doesn't exists`,
                        message: 'Incorrect mobile number or password',
                        buttons: ['Ok']
                    });
                    this.loginFormGroup.reset();
                    yield alert.present();
                    yield loading.dismiss();
                }
                else if (response.status === 'success') {
                    this.router.navigate(['/dashboard']);
                    loading.dismiss();
                    this.loginFormGroup.reset();
                }
                console.log(response);
            }));
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map