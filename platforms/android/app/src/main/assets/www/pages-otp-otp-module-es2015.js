(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-otp-otp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otp/otp.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otp/otp.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-img id=\"img\" src=\"assets/LOGO4.png\"></ion-img>\r\n  \r\n  <div id=\"container\">\r\n    \r\n    <ion-label id=\"h-title\" class=\"ion-text-center\">\r\n      <h1>OTP VERIFICATION</h1>\r\n    </ion-label>\r\n      <ion-label id=\"sub-title\" class=\"ion-text-center\">\r\n        <h3>Please enter your 6-digit One-Time-Pin</h3>\r\n     </ion-label>\r\n      \r\n      <ion-grid id=\"code-grid\">\r\n        <ion-row id=\"row\">\r\n          <ion-col>\r\n            <div>\r\n              <ion-input id=\"textInput\" [(ngModel)]=\"cd1\" name=\"cd1\" required=\"true\"  maxlength=\"1\" type=\"one-time-pin\" #Field1 (keyup)=\"gotoNextField(Field2)\" autofocus=\"true\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div>\r\n              <ion-input id=\"textInput\" [(ngModel)]=\"cd2\" name=\"cd2\" required=\"true\"  maxlength=\"1\" type=\"one-time-pin\" #Field2 (keyup)=\"gotoNextField(Field3)\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div>\r\n              <ion-input id=\"textInput\" [(ngModel)]=\"cd3\" name=\"cd3\" required=\"true\"  maxlength=\"1\" type=\"one-time-pin\" #Field3 (keyup)=\"gotoNextField(Field4)\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div>\r\n              <ion-input id=\"textInput\" [(ngModel)]=\"cd4\" name=\"cd4\" required=\"true\"  maxlength=\"1\" type=\"one-time-pin\" #Field4 (keyup)=\"gotoNextField(Field5)\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div>\r\n              <ion-input id=\"textInput\" [(ngModel)]=\"cd5\" name=\"cd5\" required=\"true\"  maxlength=\"1\" type=\"one-time-pin\" #Field5 (keyup)=\"gotoNextField(Field6)\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n          <ion-col>\r\n            <div>\r\n              <ion-input id=\"textInput\" [(ngModel)]=\"cd6\" name=\"cd6\" required=\"true\"  maxlength=\"1\" type=\"one-time-pin\" #Field6 (keyup)=\"otpvalidate()\"></ion-input>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n    \r\n    <section id=\"otpresend\" class=\"full-width\">\r\n      <ion-label id=\"sub-title\" class=\"ion-text-center\">\r\n        <h3>Didn't received OTP?<span id=\"span-resend\"><strong><p>Re-send</p></strong></span></h3>\r\n     </ion-label>\r\n    </section>\r\n    <section id=\"otpdesc\" class=\"full-width\">\r\n      <ion-label id=\"sub-title\" class=\"ion-text-center\">\r\n        <h3>A one-time password <strong><i>(OTP)</i></strong>,also known as one-time pin or dynamic password. It's a password that is valid for \r\n          only one login session or transaction, on a computer system or other digital device.</h3>\r\n     </ion-label>\r\n    </section>\r\n   \r\n\r\n  </div>\r\n  \r\n\r\n  <ion-img id=\"img\" src=\"assets/CrisCross3.png\"></ion-img>\r\n \r\n</ion-content>\r\n\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("#h-title {\n  width: auto;\n  color: white;\n  background-color: #0cb0d3;\n  margin-right: auto;\n  margin-left: auto;\n  font-size: 20px;\n  font-family: \"Century Gothic\", \"Futura\", san-serif;\n  font-weight: bolder;\n}\n\n#sub-title {\n  color: white;\n  font-family: \"Century Gothic\", \"Futura\", san-serif;\n  font-weight: bolder;\n}\n\n#container {\n  margin-top: 50px;\n  margin-left: 0px;\n  margin-right: 0px;\n  background-color: #0cb0d3;\n  height: auto;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n\n#img {\n  margin-top: 50px;\n  height: 120px;\n  width: 120px;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 30px;\n}\n\n#signupbtn {\n  margin-left: 16px;\n  margin-right: 16px;\n  color: white;\n}\n\n#textInput {\n  background-color: white;\n  height: 50px;\n  width: 40px;\n  font-size: 40px;\n  text-align: center;\n  color: #600088;\n}\n\n#icon-left {\n  padding-left: 5px;\n  margin-left: 5px;\n}\n\n#footerIcon {\n  height: 40px;\n  width: 40px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#login {\n  font-size: 20px;\n  margin-right: 20px;\n  color: white;\n  margin-left: 250px;\n}\n\n#row {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n#otpdesc {\n  margin-top: 40px;\n  text-align: justify;\n  margin-left: 30px;\n  margin-right: 30px;\n  font-family: \"Century Gothic\", \"Futura\", san-serif;\n  font-weight: bolder;\n}\n\n#span-resend {\n  font-family: \"Century Gothic\", \"Futura\", san-serif;\n  font-weight: bolder;\n  color: #600088;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3RwL290cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrREFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBS0c7RUFDSSxZQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtBQUZQOztBQU1HO0VBRUksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUpQOztBQU9HO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUpQOztBQU9HO0VBQ0ssaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFKUjs7QUFRRztFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBTFA7O0FBU0c7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBTlA7O0FBVUc7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFQUDs7QUFZRztFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVRQOztBQWFHO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFWUDs7QUFjRztFQUNLLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtBQVhSOztBQWdCRztFQUNJLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBYlAiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vdHAvb3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNoLXRpdGxlIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMGNiMGQzIDtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdDZW50dXJ5IEdvdGhpYycsJ0Z1dHVyYScsc2FuLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIFxyXG5cclxuICAgIFxyXG4gICB9XHJcblxyXG4gICAjc3ViLXRpdGxlIHtcclxuICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnLCdGdXR1cmEnLHNhbi1zZXJpZjtcclxuICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblxyXG4gICB9XHJcbiAgIFxyXG4gICAjY29udGFpbmVyIHtcclxuICAgICAgIFxyXG4gICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IzBjYjBkMyA7XHJcbiAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICB9XHJcblxyXG4gICAjaW1nIHtcclxuICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICBoZWlnaHQ6IDEyMHB4O1xyXG4gICAgICAgd2lkdGg6ICAxMjBweDtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgfVxyXG5cclxuICAgI3NpZ251cGJ0biB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIFxyXG4gICB9XHJcblxyXG4gICAjdGV4dElucHV0IHtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICBjb2xvcjojNjAwMDg4IFxyXG5cclxuICAgfVxyXG5cclxuICAgI2ljb24tbGVmdCB7XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgIH1cclxuXHJcblxyXG4gICAjZm9vdGVySWNvbiB7XHJcbiAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgXHJcblxyXG4gICB9XHJcblxyXG4gICAjbG9naW4ge1xyXG4gICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogMjUwcHg7XHJcbiAgICBcclxuICAgfVxyXG5cclxuICAgI3JvdyB7XHJcbiAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbiAgIH1cclxuXHJcbiAgICNvdHBkZXNjIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ2VudHVyeSBHb3RoaWMnLCdGdXR1cmEnLHNhbi1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG5cclxuXHJcbiAgIH1cclxuXHJcbiAgICNzcGFuLXJlc2VuZCB7XHJcbiAgICAgICBmb250LWZhbWlseTogJ0NlbnR1cnkgR290aGljJywnRnV0dXJhJyxzYW4tc2VyaWY7XHJcbiAgICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAgY29sb3I6IzYwMDA4OCA7XHJcbiAgIH0gXHJcblxyXG4gICAiXX0= */");

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