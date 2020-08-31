(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-otp-otp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otp/otp.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otp/otp.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n \n</ion-header>\n\n<ion-content>\n  <ion-img id=\"img\" src=\"assets/LOGO4.png\"></ion-img>\n  \n  <div id=\"container\">\n    \n    <ion-label id=\"h-title\" class=\"ion-text-center\">\n      <h1>OTP VERIFICATION</h1>\n    </ion-label>\n      <ion-label id=\"sub-title\" class=\"ion-text-center\">\n        <h3>Please enter your 6-digit One-Time-Pin</h3>\n     </ion-label>\n      \n      <ion-grid id=\"code-grid\">\n        <ion-row id=\"row\">\n          <ion-col>\n            <div>\n              <ion-input id=\"textInput\" [(ngModel)]=\"cd1\" name=\"cd1\" required=\"true\"  maxlength=\"1\" type=\"one-time-pin\" #Field1 (keyup)=\"gotoNextField(Field2)\" autofocus=\"true\"></ion-input>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-input id=\"textInput\" [(ngModel)]=\"cd2\" name=\"cd2\" required=\"true\"  maxlength=\"1\" type=\"one-time-pin\" #Field2 (keyup)=\"gotoNextField(Field3)\"></ion-input>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-input id=\"textInput\" [(ngModel)]=\"cd3\" name=\"cd3\" required=\"true\"  maxlength=\"1\" type=\"one-time-pin\" #Field3 (keyup)=\"gotoNextField(Field4)\"></ion-input>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-input id=\"textInput\" [(ngModel)]=\"cd4\" name=\"cd4\" required=\"true\"  maxlength=\"1\" type=\"one-time-pin\" #Field4 (keyup)=\"gotoNextField(Field5)\"></ion-input>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-input id=\"textInput\" [(ngModel)]=\"cd5\" name=\"cd5\" required=\"true\"  maxlength=\"1\" type=\"one-time-pin\" #Field5 (keyup)=\"gotoNextField(Field6)\"></ion-input>\n            </div>\n          </ion-col>\n          <ion-col>\n            <div>\n              <ion-input id=\"textInput\" [(ngModel)]=\"cd6\" name=\"cd6\" required=\"true\"  maxlength=\"1\" type=\"one-time-pin\" #Field6 (keyup)=\"otpvalidate()\"></ion-input>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    \n    <section id=\"otpresend\" class=\"full-width\">\n      <ion-label id=\"sub-title\" class=\"ion-text-center\">\n        <h3>Didn't received OTP?<span id=\"span-resend\"><strong><p>Re-send</p></strong></span></h3>\n     </ion-label>\n    </section>\n    <section id=\"otpdesc\" class=\"full-width\">\n      <ion-label id=\"sub-title\" class=\"ion-text-center\">\n        <h3>A one-time password <strong><i>(OTP)</i></strong>,also known as one-time pin or dynamic password. It's a password that is valid for \n          only one login session or transaction, on a computer system or other digital device.</h3>\n     </ion-label>\n    </section>\n   \n\n  </div>\n  \n\n  <ion-img id=\"img\" src=\"assets/CrisCross3.png\"></ion-img>\n \n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/pages/otp/otp-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/otp/otp-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OtpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function() { return OtpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otp.page */ "./src/app/pages/otp/otp.page.ts");




const routes = [
    {
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
    }
];
let OtpPageRoutingModule = class OtpPageRoutingModule {
};
OtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OtpPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/otp/otp.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/otp/otp.module.ts ***!
  \*****************************************/
/*! exports provided: OtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageModule", function() { return OtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otp-routing.module */ "./src/app/pages/otp/otp-routing.module.ts");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp.page */ "./src/app/pages/otp/otp.page.ts");







let OtpPageModule = class OtpPageModule {
};
OtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"]
        ],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
    })
], OtpPageModule);



/***/ }),

/***/ "./src/app/pages/otp/otp.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/otp/otp.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#h-title {\n  width: auto;\n  color: white;\n  background-color: #0cb0d3;\n  margin-right: auto;\n  margin-left: auto;\n  font-size: 20px;\n  font-family: \"Century Gothic\", \"Futura\", san-serif;\n  font-weight: bolder;\n}\n\n#sub-title {\n  color: white;\n  font-family: \"Century Gothic\", \"Futura\", san-serif;\n  font-weight: bolder;\n}\n\n#container {\n  margin-top: 50px;\n  margin-left: 0px;\n  margin-right: 0px;\n  background-color: #0cb0d3;\n  height: auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n#img {\n  margin-top: 50px;\n  height: 120px;\n  width: 120px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n}\n\n#signupbtn {\n  margin-left: 16px;\n  margin-right: 16px;\n  color: white;\n}\n\n#textInput {\n  background-color: white;\n  height: 50px;\n  width: 40px;\n  font-size: 40px;\n  text-align: center;\n  color: #600088;\n}\n\n#icon-left {\n  padding-left: 5px;\n  margin-left: 5px;\n}\n\n#footerIcon {\n  height: 40px;\n  width: 40px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#login {\n  font-size: 20px;\n  margin-right: 20px;\n  color: white;\n  margin-left: 250px;\n}\n\n#row {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#otpdesc {\n  margin-top: 40px;\n  text-align: justify;\n  margin-left: 30px;\n  margin-right: 30px;\n  font-family: \"Century Gothic\", \"Futura\", san-serif;\n  font-weight: bolder;\n}\n\n#span-resend {\n  font-family: \"Century Gothic\", \"Futura\", san-serif;\n  font-weight: bolder;\n  color: #600088;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3RwL290cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBS0c7RUFDSSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtBQUZQOztBQU1HO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUpQOztBQU9HO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUpQOztBQU9HO0VBQ0ssaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFKUjs7QUFRRztFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTFA7O0FBU0c7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBTlA7O0FBVUc7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQUDs7QUFZRztFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVRQOztBQWFHO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFWUDs7QUFjRztFQUNLLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtBQVhSOztBQWdCRztFQUNJLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBYlAiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdHAvb3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoLXRpdGxlIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMGNiMGQzIDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnLCdGdXR1cmEnLHNhbi1zZXJpZjtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIFxuXG4gICAgXG4gICB9XG5cbiAgICNzdWItdGl0bGUge1xuICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJywnRnV0dXJhJyxzYW4tc2VyaWY7XG4gICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcblxuICAgfVxuICAgXG4gICAjY29udGFpbmVyIHtcbiAgICAgICBcbiAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjojMGNiMGQzIDtcbiAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICB9XG5cbiAgICNpbWcge1xuICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICB3aWR0aDogIDEyMHB4O1xuICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgfVxuXG4gICAjc2lnbnVwYnRuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgY29sb3I6d2hpdGU7XG4gICAgICAgIFxuICAgfVxuXG4gICAjdGV4dElucHV0IHtcbiAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICBjb2xvcjojNjAwMDg4IFxuXG4gICB9XG5cbiAgICNpY29uLWxlZnQge1xuICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICB9XG5cblxuICAgI2Zvb3Rlckljb24ge1xuICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgXG5cbiAgIH1cblxuICAgI2xvZ2luIHtcbiAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcbiAgICBcbiAgIH1cblxuICAgI3JvdyB7XG4gICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgfVxuXG4gICAjb3RwZGVzYyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnLCdGdXR1cmEnLHNhbi1zZXJpZjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcblxuXG4gICB9XG5cbiAgICNzcGFuLXJlc2VuZCB7XG4gICAgICAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYycsJ0Z1dHVyYScsc2FuLXNlcmlmO1xuICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgY29sb3I6IzYwMDA4OCA7XG4gICB9IFxuXG4gICAiXX0= */");

/***/ }),

/***/ "./src/app/pages/otp/otp.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/otp/otp.page.ts ***!
  \***************************************/
/*! exports provided: OtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPage", function() { return OtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");





let OtpPage = class OtpPage {
    constructor(alertCtrl, router, storage) {
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.storage = storage;
    }
    ngOnInit() {
        console.log('OTP Validation is now running...');
        console.log('USERS', this.storage.get('users'));
    }
    gotoNextField(nextElement) {
        nextElement.setFocus();
    }
    otpvalidate() {
        this.validate();
    }
    validate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storage.get('code').then((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log('OTP-CODE:', result);
                let arrayOfDigits = Array.from(String(result), Number);
                console.log("first element", arrayOfDigits[0]);
                this.c1 = arrayOfDigits[0];
                this.c2 = arrayOfDigits[1];
                this.c3 = arrayOfDigits[2];
                this.c4 = arrayOfDigits[3];
                this.c5 = arrayOfDigits[4];
                this.c6 = arrayOfDigits[5];
                // validating otp code
                if (this.cd1 == this.c1 || this.cd2 == this.c2 || this.cd3 == this.c3 || this.cd4 == this.c4 || this.cd5 == this.c5 || this.cd6 == this.c6) {
                    let alert = this.alertCtrl.create({
                        header: 'Alert',
                        message: 'Your code is Verified!',
                        buttons: ['Ok']
                    });
                    (yield alert).present();
                    this.router.navigate(['login']);
                }
                else {
                    let alert = this.alertCtrl.create({
                        header: 'Alert',
                        message: 'Sorry you code is not valid!!',
                        buttons: ['Ok']
                    });
                    (yield alert).present();
                }
                // End of code
                return result;
            }));
        });
    }
};
OtpPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }
];
OtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./otp.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otp/otp.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./otp.page.scss */ "./src/app/pages/otp/otp.page.scss")).default]
    })
], OtpPage);



/***/ })

}]);
//# sourceMappingURL=pages-otp-otp-module-es2015.js.map