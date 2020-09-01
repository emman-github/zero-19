(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\t<ion-img id=\"logo-img\" src=\"assets/LOGO4.png\"></ion-img>\r\n\t<form id=\"login-form\" [formGroup]=\"loginFormGroup\" (ngSubmit)=\"login()\">\r\n\t\t<ion-text>\r\n\t\t\t<h2 id=\"login-h2\">LOGIN</h2>\r\n\t\t</ion-text>\r\n\t\t<ion-item id=\"mobile-number-item\"> \r\n\t\t\t<ion-avatar slot=\"start\" id=\"mobile-number-avatar\">\r\n\t\t\t\t<ion-img src=\"assets/mobile.png\" id=\"mobile-number-img\"></ion-img>\r\n\t\t\t</ion-avatar>   \r\n\t\t\t<ion-input id=\"mobile-number-input\" name=\"mobileNumber\" placeholder=\"Mobile number\" formControlName=\"mobileNumber\" type=\"text\" value=\"61298765432\"></ion-input> \r\n\t\t</ion-item>\r\n\t\r\n\t\t<ion-item id=\"password-item\">\r\n\t\t\t<ion-avatar slot=\"start\" id=\"password-avatar\">\r\n\t\t\t\t<ion-img src=\"assets/lock icon.png\" id=\"password-img\"></ion-img>\r\n\t\t\t</ion-avatar>\r\n\t\t\t<ion-input id=\"password-input\" name=\"password\" placeholder=\"Password\" formControlName=\"password\" type=\"password\"></ion-input>\r\n\t\t</ion-item>\r\n\t\t<ion-button id=\"forgot-password-button\" fill=\"clear\" expand=\"full\">Forgot Password?</ion-button>\r\n\t\t<ion-button id=\"login-button\" expand=\"full\" color=\"secondary\" [disabled]=\"!loginFormGroup.valid\" type=\"submit\" value=\"12345678\">login</ion-button>\r\n\t</form>\r\n\t<p id=\"sign-up-button\" routerLink=\"/registration\">Sign up</p>\r\n\t<ion-img id=\"footer-img\" src=\"assets/CrisCross3.png\"></ion-img> \r\n\r\n\t\t<div *ngIf=\"mobileNumber?.errors.maxlength\">\r\n\t\t\t    Phone number should \r\n\t\t\t  </div>\r\n</ion-content> \r\n\t\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("#logo-img {\n  width: 100px;\n  margin: 0 auto;\n  margin-top: 4rem;\n  margin-bottom: 1rem;\n}\n\n#login-form {\n  background-color: #0cb0d3;\n  padding: 15px 15px 2.5rem 15px;\n}\n\n#login-form #login-h2 {\n  margin-top: 0px;\n  color: white;\n  font-weight: 550;\n  margin-bottom: 3px;\n  margin-left: 5px;\n}\n\n#login-form #mobile-number-item {\n  margin-bottom: 10px;\n  border-radius: 5px;\n  --background: #eee;\n}\n\n#login-form #mobile-number-item #mobile-number-avatar {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n}\n\n#login-form #mobile-number-item #mobile-number-avatar #mobile-number-img {\n  width: 25px;\n  height: 25px;\n  padding: 0;\n  margin-right: -15px;\n}\n\n#login-form #mobile-number-item #mobile-number-input {\n  border-left: 1.5px solid #999;\n  height: 65%;\n  --padding-start: 10px;\n}\n\n#login-form #password-item {\n  border-radius: 5px;\n  --background: #eee;\n}\n\n#login-form #password-item #password-avatar {\n  width: 25px;\n  height: 25px;\n  margin-right: 10px;\n}\n\n#login-form #password-item #password-avatar #password-img {\n  width: 25px;\n  height: 25px;\n  padding: 0;\n  margin-right: -15px;\n}\n\n#login-form #password-item #password-input {\n  border-left: 1.5px solid #999;\n  height: 65%;\n  --padding-start: 10px;\n}\n\n#login-form #forgot-password-button {\n  text-transform: none;\n  margin: 1rem 0rem 1rem 0rem;\n  color: white;\n  font-size: 12px;\n  font-weight: lighter;\n}\n\n#login-form #login-button {\n  --box-shadow: none;\n  --padding-top: 24px;\n  --padding-bottom: 24px;\n  font-weight: 550;\n  font-size: 18px;\n}\n\n#sign-up-button {\n  text-transform: none;\n  float: right;\n  margin: 1rem 1rem 0rem 0rem;\n  color: #0cb0d3;\n}\n\n#footer-img {\n  min-height: 10rem;\n  width: 10rem;\n  margin: 0 auto;\n  margin-top: 5rem;\n}\n\n.vertical-lign-div {\n  position: absolute;\n  border-left: 6px solid green;\n  height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDRyx5QkFBQTtFQUNBLDhCQUFBO0FBQ0g7O0FBQUc7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUVQOztBQUFHO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRVA7O0FBRE87RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBR1g7O0FBRlc7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQUlmOztBQURPO0VBQ0ksNkJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFHWDs7QUFFRztFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUFBUDs7QUFDTztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDWDs7QUFBVztFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBRWY7O0FBQ087RUFDSSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUNYOztBQUVHO0VBQ0ksb0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFBUDs7QUFFRztFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFQOztBQUlBO0VBQ0csb0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBREg7O0FBSUE7RUFDRyxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFESDs7QUFJQTtFQUNHLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FBREgiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nby1pbWcgeyBcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbiNsb2dpbi1mb3JtIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogIzBjYjBkMztcclxuICAgcGFkZGluZzogMTVweCAxNXB4IDIuNXJlbSAxNXB4O1xyXG4gICAjbG9naW4taDIge1xyXG4gICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgIH1cclxuICAgI21vYmlsZS1udW1iZXItaXRlbSB7IFxyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgIC0tYmFja2dyb3VuZDogI2VlZTtcclxuICAgICAgICNtb2JpbGUtbnVtYmVyLWF2YXRhciB7IFxyXG4gICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgI21vYmlsZS1udW1iZXItaW1nIHsgXHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgICAgI21vYmlsZS1udW1iZXItaW5wdXQgeyBcclxuICAgICAgICAgICBib3JkZXItbGVmdDogMS41cHggc29saWQgIzk5OTtcclxuICAgICAgICAgICBoZWlnaHQ6IDY1JTtcclxuICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAgICB9XHJcbiAgIH1cclxuICAgXHJcbiAgIFxyXG4gICAjcGFzc3dvcmQtaXRlbSB7IFxyXG4gICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgLS1iYWNrZ3JvdW5kOiAjZWVlOyBcclxuICAgICAgICNwYXNzd29yZC1hdmF0YXIge1xyXG4gICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgI3Bhc3N3b3JkLWltZyB7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTE1cHg7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG4gICAgICAgI3Bhc3N3b3JkLWlucHV0IHtcclxuICAgICAgICAgICBib3JkZXItbGVmdDogMS41cHggc29saWQgIzk5OTtcclxuICAgICAgICAgICBoZWlnaHQ6IDY1JTtcclxuICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcbiAgICAgICB9XHJcbiAgIH1cclxuICAgI2ZvcmdvdC1wYXNzd29yZC1idXR0b24ge1xyXG4gICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICBtYXJnaW46IDFyZW0gMHJlbSAxcmVtIDByZW07XHJcbiAgICAgICBjb2xvcjogd2hpdGU7XHRcclxuICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICB9IFxyXG4gICAjbG9naW4tYnV0dG9uIHtcclxuICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTsgXHJcbiAgICAgICAtLXBhZGRpbmctdG9wOiAyNHB4O1xyXG4gICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMjRweDtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgIH1cclxufVxyXG5cclxuI3NpZ24tdXAtYnV0dG9uIHtcclxuICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgIGZsb2F0OiByaWdodDtcclxuICAgbWFyZ2luOiAxcmVtIDFyZW0gMHJlbSAwcmVtOyBcclxuICAgY29sb3I6ICMwY2IwZDM7XHJcbn1cclxuXHJcbiNmb290ZXItaW1nIHtcclxuICAgbWluLWhlaWdodDogMTByZW07XHJcbiAgIHdpZHRoOiAxMHJlbTtcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIG1hcmdpbi10b3A6IDVyZW07XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1saWduLWRpdiB7XHJcbiAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCBncmVlbjtcclxuICAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuIl19 */");

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");






let LoginPage = class LoginPage {
    constructor(navCtrl, alertCtrl, router, storage, formBuilder, loadingController) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        this.loginFormGroup = this.formBuilder.group({
            mobileNumber: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(16)
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(16)
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
            // await this.storage.set('user', JSON.stringify(user)); 
            // console.log(JSON.parse(await this.storage.get('user')));
            let users = yield this.storage.get('users');
            if (users === null) {
                users = [];
            }
            console.log(users);
            for (var i = 0; i < users.length; i++) {
                console.log(users[i]);
                let doesUserExists = user.mobileNumber === users[i].mobileNumber && user.password === users[i].password;
                if (doesUserExists) {
                    this.router.navigate(['/dashboard']);
                    loading.dismiss();
                    return false;
                }
                else {
                    let alert = yield this.alertCtrl.create({
                        header: `User doesn't exists`,
                        message: 'Incorrect mobile number or password',
                        buttons: ['Ok']
                    });
                    yield alert.present();
                    loading.dismiss();
                    return false;
                }
            }
            console.log(users);
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
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