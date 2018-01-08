webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    color: inherit;\r\n}\r\n\r\na:link { \r\n    text-decoration: none;\r\n}\r\n\r\na:visited {\r\n    text-decoration: none;\r\n}\r\n\r\nhr {\r\n    margin: 10px 0 5px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n</div>\r\n<router-outlet></router-outlet>\r\n<hr>\r\n<div class=\"footer\" style=\"text-align: right\">版权所有. <a href=\"https://xubingyang.com\">xubingyang.com</a> 2012-2017 &copy; All right reserved.\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_contacts_contacts_component__ = __webpack_require__("../../../../../src/app/components/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_sandbox_sandbox_component__ = __webpack_require__("../../../../../src/app/components/sandbox/sandbox.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_vpn_vpn_component__ = __webpack_require__("../../../../../src/app/components/vpn/vpn.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_contact_service__ = __webpack_require__("../../../../../src/app/services/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_13__components_contacts_contacts_component__["a" /* ContactsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_14__components_contact_contact_component__["a" /* ContactComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'sandbox', component: __WEBPACK_IMPORTED_MODULE_15__components_sandbox_sandbox_component__["a" /* SandboxComponent */] },
    { path: 'vpn', component: __WEBPACK_IMPORTED_MODULE_16__components_vpn_vpn_component__["a" /* VpnComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_contacts_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_sandbox_sandbox_component__["a" /* SandboxComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_vpn_vpn_component__["a" /* VpnComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_20__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_19__services_contact_service__["a" /* ContactService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<p>\r\n  contact works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    color: inherit;\r\n}\r\n\r\na:link {\r\n    text-decoration: none;\r\n}\r\n\r\na:visited {\r\n    text-decoration: none;\r\n}\r\n\r\n.page-header {\r\n    margin: 20px 0;\r\n}\r\n\r\n.btn-primary, \r\n.btn-primary:hover, \r\n.btn-primary:focus, \r\n.btn-primary:active, \r\n.btn-primary.active, \r\n.btn-primary.focus, \r\n.btn-primary:active, \r\n.btn-primary:focus, \r\n.btn-primary:hover, \r\n.open>.dropdown-toggle.btn-primary {\r\n    background-color: #3bc0c3;\r\n    border: 1px solid #3bc0c3;\r\n}\r\n.media-main a.pull-left {\r\n    width: 100px;\r\n}\r\n.thumb-lg {\r\n    height: 84px;\r\n    width: 84px;\r\n}\r\n.media-main .info {\r\n    overflow: hidden;\r\n    color: #000;\r\n}\r\n.media-main .info h4 {\r\n    padding-top: 10px;\r\n    margin-bottom: 5px;\r\n}\r\n.social-links li a {\r\n    background: #EFF0F4;\r\n    width: 30px;\r\n    height: 30px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n    display: inline-block;\r\n    border-radius: 50%;\r\n    -webkit-border-radius: 50%;\r\n    color: #7A7676;\r\n}\r\n\r\n.panel {\r\n    margin: 10px 0 50px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <div class=\"page-header\">\r\n    <h1>通讯录<small> | 备份来自Google&nbsp;&amp;&nbsp;Apple</small></h1>\r\n  </div>\r\n  <link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css\" rel=\"stylesheet\">\r\n  \r\n  <div class=\"row\">\r\n      <div class=\"col-md-2\"></div>\r\n      <div class=\"col-md-8\">\r\n          <div class=\"panel panel-default\">\r\n              <div class=\"panel-body\">\r\n                  <div class=\"input-group\">\r\n                      <input type=\"text\" id=\"search\" name=\"search\" class=\"form-control\" placeholder=\"搜索...\">\r\n                      <span class=\"input-group-btn\">\r\n                          <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i></button>\r\n                      </span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"media-main\">\r\n            <a class=\"pull-left\" href=\"#\">\r\n                          <img class=\"thumb-lg img-circle bx-s\" src=\"https://bootdey.com/img/Content/user_1.jpg\" alt=\"\">\r\n                      </a>\r\n            <div class=\"pull-right btn-group-sm\">\r\n              <a href=\"#\" class=\"btn btn-success tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                          </a>\r\n              <a href=\"#\" class=\"btn btn-danger tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\r\n                              <i class=\"fa fa-close\"></i>\r\n                          </a>\r\n            </div>\r\n            <div class=\"info\">\r\n              <h4>Bingyang Xu</h4>\r\n              <p class=\"text-muted\">Engineer</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <hr>\r\n          <ul class=\"social-links list-inline p-b-10\">\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"LinkedIn\"><i class=\"fa fa-linkedin\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Skype\"><i class=\"fa fa-skype\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Message\"><i class=\"fa fa-envelope-o\"></i></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"media-main\">\r\n            <a class=\"pull-left\" href=\"#\">\r\n                          <img class=\"thumb-lg img-circle bx-s\" src=\"https://bootdey.com/img/Content/user_2.jpg\" alt=\"\">\r\n                      </a>\r\n            <div class=\"pull-right btn-group-sm\">\r\n              <a href=\"#\" class=\"btn btn-success tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                          </a>\r\n              <a href=\"#\" class=\"btn btn-danger tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\r\n                              <i class=\"fa fa-close\"></i>\r\n                          </a>\r\n            </div>\r\n            <div class=\"info\">\r\n              <h4>Bingyang Xu</h4>\r\n              <p class=\"text-muted\">Engineer</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <hr>\r\n          <ul class=\"social-links list-inline\">\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"LinkedIn\"><i class=\"fa fa-linkedin\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Skype\"><i class=\"fa fa-skype\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Message\"><i class=\"fa fa-envelope-o\"></i></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"media-main\">\r\n            <a class=\"pull-left\" href=\"#\">\r\n                          <img class=\"thumb-lg img-circle bx-s\" src=\"https://bootdey.com/img/Content/user_2.jpg\" alt=\"\">\r\n                      </a>\r\n            <div class=\"pull-right btn-group-sm\">\r\n              <a href=\"#\" class=\"btn btn-success tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                          </a>\r\n              <a href=\"#\" class=\"btn btn-danger tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\r\n                              <i class=\"fa fa-close\"></i>\r\n                          </a>\r\n            </div>\r\n            <div class=\"info\">\r\n              <h4>Bingyang Xu</h4>\r\n              <p class=\"text-muted\">Engineer</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <hr>\r\n          <ul class=\"social-links list-inline\">\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"LinkedIn\"><i class=\"fa fa-linkedin\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Skype\"><i class=\"fa fa-skype\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Message\"><i class=\"fa fa-envelope-o\"></i></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"media-main\">\r\n            <a class=\"pull-left\" href=\"#\">\r\n                          <img class=\"thumb-lg img-circle bx-s\" src=\"https://bootdey.com/img/Content/user_2.jpg\" alt=\"\">\r\n                      </a>\r\n            <div class=\"pull-right btn-group-sm\">\r\n              <a href=\"#\" class=\"btn btn-success tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                          </a>\r\n              <a href=\"#\" class=\"btn btn-danger tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\r\n                              <i class=\"fa fa-close\"></i>\r\n                          </a>\r\n            </div>\r\n            <div class=\"info\">\r\n              <h4>Bingyang Xu</h4>\r\n              <p class=\"text-muted\">Engineer</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <hr>\r\n          <ul class=\"social-links list-inline\">\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"LinkedIn\"><i class=\"fa fa-linkedin\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Skype\"><i class=\"fa fa-skype\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Message\"><i class=\"fa fa-envelope-o\"></i></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"media-main\">\r\n            <a class=\"pull-left\" href=\"#\">\r\n                          <img class=\"thumb-lg img-circle bx-s\" src=\"https://bootdey.com/img/Content/user_2.jpg\" alt=\"\">\r\n                      </a>\r\n            <div class=\"pull-right btn-group-sm\">\r\n              <a href=\"#\" class=\"btn btn-success tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                          </a>\r\n              <a href=\"#\" class=\"btn btn-danger tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\r\n                              <i class=\"fa fa-close\"></i>\r\n                          </a>\r\n            </div>\r\n            <div class=\"info\">\r\n              <h4>Bingyang Xu</h4>\r\n              <p class=\"text-muted\">Engineer</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <hr>\r\n          <ul class=\"social-links list-inline\">\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"LinkedIn\"><i class=\"fa fa-linkedin\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Skype\"><i class=\"fa fa-skype\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Message\"><i class=\"fa fa-envelope-o\"></i></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"media-main\">\r\n            <a class=\"pull-left\" href=\"#\">\r\n                          <img class=\"thumb-lg img-circle bx-s\" src=\"https://bootdey.com/img/Content/user_2.jpg\" alt=\"\">\r\n                      </a>\r\n            <div class=\"pull-right btn-group-sm\">\r\n              <a href=\"#\" class=\"btn btn-success tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                          </a>\r\n              <a href=\"#\" class=\"btn btn-danger tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\r\n                              <i class=\"fa fa-close\"></i>\r\n                          </a>\r\n            </div>\r\n            <div class=\"info\">\r\n              <h4>Bingyang Xu</h4>\r\n              <p class=\"text-muted\">Engineer</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <hr>\r\n          <ul class=\"social-links list-inline\">\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"LinkedIn\"><i class=\"fa fa-linkedin\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Skype\"><i class=\"fa fa-skype\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Message\"><i class=\"fa fa-envelope-o\"></i></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"media-main\">\r\n            <a class=\"pull-left\" href=\"#\">\r\n                          <img class=\"thumb-lg img-circle bx-s\" src=\"https://bootdey.com/img/Content/user_2.jpg\" alt=\"\">\r\n                      </a>\r\n            <div class=\"pull-right btn-group-sm\">\r\n              <a href=\"#\" class=\"btn btn-success tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                          </a>\r\n              <a href=\"#\" class=\"btn btn-danger tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\r\n                              <i class=\"fa fa-close\"></i>\r\n                          </a>\r\n            </div>\r\n            <div class=\"info\">\r\n              <h4>Bingyang Xu</h4>\r\n              <p class=\"text-muted\">Engineer</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <hr>\r\n          <ul class=\"social-links list-inline\">\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"LinkedIn\"><i class=\"fa fa-linkedin\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Skype\"><i class=\"fa fa-skype\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Message\"><i class=\"fa fa-envelope-o\"></i></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"media-main\">\r\n            <a class=\"pull-left\" href=\"#\">\r\n                          <img class=\"thumb-lg img-circle bx-s\" src=\"https://bootdey.com/img/Content/user_2.jpg\" alt=\"\">\r\n                      </a>\r\n            <div class=\"pull-right btn-group-sm\">\r\n              <a href=\"#\" class=\"btn btn-success tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                          </a>\r\n              <a href=\"#\" class=\"btn btn-danger tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\r\n                              <i class=\"fa fa-close\"></i>\r\n                          </a>\r\n            </div>\r\n            <div class=\"info\">\r\n              <h4>Bingyang Xu</h4>\r\n              <p class=\"text-muted\">Engineer</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <hr>\r\n          <ul class=\"social-links list-inline\">\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"LinkedIn\"><i class=\"fa fa-linkedin\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Skype\"><i class=\"fa fa-skype\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Message\"><i class=\"fa fa-envelope-o\"></i></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"media-main\">\r\n            <a class=\"pull-left\" href=\"#\">\r\n                          <img class=\"thumb-lg img-circle bx-s\" src=\"https://bootdey.com/img/Content/user_2.jpg\" alt=\"\">\r\n                      </a>\r\n            <div class=\"pull-right btn-group-sm\">\r\n              <a href=\"#\" class=\"btn btn-success tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                          </a>\r\n              <a href=\"#\" class=\"btn btn-danger tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\r\n                              <i class=\"fa fa-close\"></i>\r\n                          </a>\r\n            </div>\r\n            <div class=\"info\">\r\n              <h4>Bingyang Xu</h4>\r\n              <p class=\"text-muted\">Engineer</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <hr>\r\n          <ul class=\"social-links list-inline\">\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"LinkedIn\"><i class=\"fa fa-linkedin\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Skype\"><i class=\"fa fa-skype\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Message\"><i class=\"fa fa-envelope-o\"></i></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"media-main\">\r\n            <a class=\"pull-left\" href=\"#\">\r\n                          <img class=\"thumb-lg img-circle bx-s\" src=\"https://bootdey.com/img/Content/user_2.jpg\" alt=\"\">\r\n                      </a>\r\n            <div class=\"pull-right btn-group-sm\">\r\n              <a href=\"#\" class=\"btn btn-success tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                          </a>\r\n              <a href=\"#\" class=\"btn btn-danger tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\r\n                              <i class=\"fa fa-close\"></i>\r\n                          </a>\r\n            </div>\r\n            <div class=\"info\">\r\n              <h4>Bingyang Xu</h4>\r\n              <p class=\"text-muted\">Engineer</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <hr>\r\n          <ul class=\"social-links list-inline\">\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"LinkedIn\"><i class=\"fa fa-linkedin\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Skype\"><i class=\"fa fa-skype\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Message\"><i class=\"fa fa-envelope-o\"></i></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"media-main\">\r\n            <a class=\"pull-left\" href=\"#\">\r\n                          <img class=\"thumb-lg img-circle bx-s\" src=\"https://bootdey.com/img/Content/user_2.jpg\" alt=\"\">\r\n                      </a>\r\n            <div class=\"pull-right btn-group-sm\">\r\n              <a href=\"#\" class=\"btn btn-success tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                          </a>\r\n              <a href=\"#\" class=\"btn btn-danger tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\r\n                              <i class=\"fa fa-close\"></i>\r\n                          </a>\r\n            </div>\r\n            <div class=\"info\">\r\n              <h4>Bingyang Xu</h4>\r\n              <p class=\"text-muted\">Engineer</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <hr>\r\n          <ul class=\"social-links list-inline\">\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"LinkedIn\"><i class=\"fa fa-linkedin\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Skype\"><i class=\"fa fa-skype\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Message\"><i class=\"fa fa-envelope-o\"></i></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-6\">\r\n      <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"media-main\">\r\n            <a class=\"pull-left\" href=\"#\">\r\n                          <img class=\"thumb-lg img-circle bx-s\" src=\"https://bootdey.com/img/Content/user_2.jpg\" alt=\"\">\r\n                      </a>\r\n            <div class=\"pull-right btn-group-sm\">\r\n              <a href=\"#\" class=\"btn btn-success tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Edit\">\r\n                              <i class=\"fa fa-pencil\"></i>\r\n                          </a>\r\n              <a href=\"#\" class=\"btn btn-danger tooltips\" data-placement=\"top\" data-toggle=\"tooltip\" data-original-title=\"Delete\">\r\n                              <i class=\"fa fa-close\"></i>\r\n                          </a>\r\n            </div>\r\n            <div class=\"info\">\r\n              <h4>Bingyang Xu</h4>\r\n              <p class=\"text-muted\">Engineer</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"clearfix\"></div>\r\n          <hr>\r\n          <ul class=\"social-links list-inline\">\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Facebook\"><i class=\"fa fa-facebook\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Twitter\"><i class=\"fa fa-twitter\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"LinkedIn\"><i class=\"fa fa-linkedin\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Skype\"><i class=\"fa fa-skype\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a title=\"\" data-placement=\"top\" data-toggle=\"tooltip\" class=\"tooltips\" href=\"#\" data-original-title=\"Message\"><i class=\"fa fa-envelope-o\"></i></a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n<script>\r\n$(function(){\r\n $(\"a[data-toggle='tooltip']\").tooltip();\r\n});\r\n</script>"

/***/ }),

/***/ "../../../../../src/app/components/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_service__ = __webpack_require__("../../../../../src/app/services/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactsComponent = (function () {
    function ContactsComponent(authService, contactService, router) {
        this.authService = authService;
        this.contactService = contactService;
        this.router = router;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactService.getContact().subscribe(function (profile) {
            _this.contact = profile.contact;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contacts',
        template: __webpack_require__("../../../../../src/app/components/contacts/contacts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contacts/contacts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], ContactsComponent);

var _a, _b, _c;
//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/contacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<p>Dashboard works!</p>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    margin:0;\r\n    padding:0;\r\n  }\r\n\r\n#main {\r\n  background-image:url('http://source.unsplash.com/random/1920x1080');\r\n  background-size:cover;\r\n  background-position:center;\r\n  height:100vh;\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -webkit-box-orient:vertical;\r\n  -webkit-box-direction:normal;\r\n      -ms-flex-direction:column;\r\n          flex-direction:column;\r\n  -webkit-box-pack:center;\r\n      -ms-flex-pack:center;\r\n          justify-content:center;\r\n  -webkit-box-align:center;\r\n      -ms-flex-align:center;\r\n          align-items:center;\r\n  text-align:center;\r\n  color: #f0f0f0;\r\n}\r\n\r\n#main .btn-row {\r\n  margin: 50px;\r\n}\r\n\r\n#main h1 {\r\n  font-size:60px;\r\n  padding: 10px 20px;\r\n}\r\n\r\n#main p {\r\n  font-size: 25px;\r\n  padding: 5px 20px;\r\n}\r\n\r\n#main .button {\r\n  font-size:25px;\r\n  text-decoration:none;\r\n  color:#F59C15;\r\n  border:#F59C15 1px solid;\r\n  padding:10px 20px;\r\n  border-radius:10px;\r\n  margin-top:20px;\r\n}\r\n\r\n#main .button:hover {\r\n  background:#F59C15;\r\n  color:#f0f0f0;\r\n}\r\n\r\n#section-a {\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -webkit-box-orient:vertical;\r\n  -webkit-box-direction:normal;\r\n      -ms-flex-direction:column;\r\n          flex-direction:column;\r\n  background:#2A80BA;\r\n  opacity: 0.9;\r\n  color:#f0f0f0;\r\n  -webkit-box-pack:center;\r\n      -ms-flex-pack:center;\r\n          justify-content:center;\r\n  -webkit-box-align:center;\r\n      -ms-flex-align:center;\r\n          align-items:center;\r\n  text-align:center;\r\n  font-size:20px;\r\n  padding:30px;\r\n}\r\n\r\n#section-b {\r\n  background:#F59C15;\r\n  opacity: 0.9;\r\n  color: #f0f0f0;\r\n  display:-webkit-box;\r\n  display:-ms-flexbox;\r\n  display:flex;\r\n  -webkit-box-orient:vertical;\r\n  -webkit-box-direction:normal;\r\n      -ms-flex-direction:column;\r\n          flex-direction:column;\r\n  -webkit-box-pack:center;\r\n      -ms-flex-pack:center;\r\n          justify-content:center;\r\n  -webkit-box-align:center;\r\n      -ms-flex-align:center;\r\n          align-items:center;\r\n  text-align:center;\r\n  font-size:20px;\r\n  padding:20px;\r\n}\r\n\r\n#section-c {\r\n  text-align:center;\r\n  font-size:20px;\r\n}\r\n\r\n#section-c .part1 {\r\n  background:#17A087;\r\n  opacity: 0.9;\r\n  padding: 20px;\r\n  color:#f0f0f0;\r\n}\r\n\r\n#section-c .part2 {\r\n  padding: 20px;\r\n  opacity: 0.9;\r\n  color: #f0f0f0;\r\n  background:#D55302;\r\n}\r\n\r\n#section-c .part3 {\r\n  background:#8F43AE;\r\n  opacity: 0.9;\r\n  padding: 20px;\r\n  color:#f0f0f0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"main\">\r\n    <h1>信息管理系统</h1>\r\n    <br>\r\n    <p>写了个简单的用于发布信息和管理后台的系统，</p> \r\n    <p>现在主要用于我自己的VPN服务器端口和密码的发布。</p>\r\n    <div class=\"btn-row\">\r\n        <a class=\"button btn-register\" [routerLink]=\"['/register']\">注册</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <a class=\"button btn-login\" [routerLink]=\"['/login']\">登录</a>\r\n    </div>     \r\n</header>\r\n<section id=\"section-a\">\r\n    <h3>Angular做前端</h3>\r\n    <p>刚开始用Angular2，就发布了Angular4。无限Debugging中，我也是很无语…不过好消息是已经完全适配了Angular4作为前端引擎。</p>\r\n</section>\r\n<section id=\"section-b\">\r\n    <h3>同时适配了Bootstrap4-beta</h3>\r\n    <p>刚发布Bootstrap4-alpha的时候就激动的改了整个UI，但是在Bootstrap4-beta版本里各种classname又TMD莫名其妙的改了，真是太无语了。</p>\r\n    <p>默默祈祷以后的版本里不会再该classname.</p>\r\n</section>\r\n<section id=\"section-c\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 part1\">\r\n            <h3>Node.js+Express做后端</h3>\r\n            <p>Node.js+Express做服务器端，用Mongoose链接数据库。</p>\r\n            <p>但是特别想改用Firebase做后端。</p>\r\n        </div>\r\n        <div class=\"col-md-4 part2\">\r\n            <h3>Tokens验证</h3>\r\n            <p>JSON web tokens存在Local Storage里。</p>\r\n            <p>并没有使用cookie.</p>\r\n        </div>\r\n        <div class=\"col-md-4 part3\">\r\n            <h3>Guest账号</h3>\r\n            <p>为了安全性，设置了注册和登录系统。</p>\r\n            <p>账号:Guest, 密码:123456.</p>\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\r\n    height: 79vh;\r\n}\r\n\r\n.login-screen {\r\n    max-width:450px;\r\n    padding:0;\r\n    margin:100px auto 0 auto;\r\n}\r\n\r\n.login-screen .well {\r\n    padding: 200px 0 0 0;\r\n    border-radius: 3px;\r\n    box-shadow: 10px rgba(0, 0, 0, 0.1);\r\n    background: rgba(255,255,255, 0.2);\r\n}\r\n\r\n.input-group {\r\n    margin-bottom:30px;\r\n}\r\n\r\n\r\n\r\n@media(max-width:767px) {\r\n    .login-screen {\r\n        padding:0 20px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"main-container\">\r\n    <div class=\"login-wrapper\">\r\n        <div class=\"login-screen\">\r\n            <div class=\"well\">\r\n                <div class=\"login-form\">\r\n                    <form action=\"\" method=\"post\" id=\"login-form\" (submit)=\"onLoginSubmit()\">\r\n                      <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"pd-form-username\" placeholder=\"用户名\" [(ngModel)]=\"username\" name=\"username\" autocomplete=\"off\" value=\"\" data-rule=\"用户名:required;username\" />\r\n                      </div>\r\n                      <div class=\"input-group\">\r\n                        <input type=\"password\" class=\"form-control\" id=\"pd-form-password\" placeholder=\"密码\" [(ngModel)]=\"password\" name=\"password\" autocomplete=\"off\" value=\"\" data-rule=\"密码:required;password\" />\r\n                      </div>\r\n                      <div class=\"form-group\">\r\n                        <button type=\"submit\" class=\"btn btn-primary btn-block\">登 录</button>\r\n                      </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('您已成功登录。', {
                    cssClass: 'alert-success',
                    timeout: 2000
                });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 2000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\r\n  border-radius: 0px;\r\n  border-bottom: #008ed6 3px solid;\r\n}\r\n\r\nhr { \r\n  margin: 0px; \r\n}\r\na.nav-link {\r\n  cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\">后台管理系统</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\"\r\n            aria-label=\"Toggle navigation\" (click)=\"toggleState()\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbar\" [ngClass]=\"{ 'in': isIn }\">\r\n            <ul class=\"navbar-nav mr-auto\">\r\n                <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                    <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">主页</a>\r\n                </li>\r\n            </ul>\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/login']\">登录</a></li>\r\n                <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a class=\"nav-link\" [routerLink]=\"['/register']\">注册</a></li>\r\n                <li class=\"nav-item dropdown\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                    <a class=\"nav-link dropdown-toggle\" id=\"dropdown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">VPN发布<span class=\"caret\"></span></a>\r\n                    <div class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdown\">\r\n                        <a *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/vpn']\" class=\"dropdown-item\">Shadowsocks</a>\r\n                    </div>\r\n                </li>\r\n                <li class=\"nav-item dropdown\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\">\r\n                    <a class=\"nav-link dropdown-toggle\" id=\"dropdown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">用户<span class=\"caret\"></span></a>\r\n                    <div class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdown\">\r\n                        <a *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/contacts']\" class=\"dropdown-item\">通讯录</a>\r\n                        <a *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/profile']\" class=\"dropdown-item\">用户信息</a>\r\n                        <hr>\r\n                        <a *ngIf=\"authService.loggedIn()\" (click)=\"onLogoutClick()\" href=\"#\" class=\"dropdown-item\">登出</a>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.isIn = false; // store state
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleState = function () {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('您已登出。', {
            cssClass: 'alert-success',
            timeout: 2000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile {\r\n    margin: 50px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\"></div>\r\n    <div class=\"col-md-6 my-auto\">\r\n      <div class=\"profile\" *ngIf=\"user\">\r\n        <ul class=\"list-group\">\r\n          <li class=\"list-group-item\">用户名: {{user.username}}</li>\r\n          <li class=\"list-group-item\">邮箱: {{user.email}}</li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\r\n    height: 79vh;\r\n}\r\n\r\n.register-screen {\r\n    max-width:450px;\r\n    padding:0;\r\n    margin:100px auto 0 auto;\r\n}\r\n\r\n.register-screen .well {\r\n    padding: 100px 0 0 0;\r\n    border-radius: 3px;\r\n    box-shadow: 10px rgba(0, 0, 0, 0.1);\r\n    background: rgba(255,255,255, 0.2);\r\n}\r\n\r\n.input-group {\r\n    margin-bottom:30px;\r\n}\r\n\r\n@media(max-width:767px) {\r\n    .register-screen {\r\n        padding:0 20px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"main-container\">\r\n    <div class=\"register-wrapper\">\r\n        <div class=\"register-screen\">\r\n            <div class=\"well\">\r\n                <div class=\"register-form\">\r\n                    <form action=\"\" method=\"post\" id=\"login-form\" (submit)=\"onRegisterSubmit()\">\r\n                      <div class=\"input-group\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"pd-form-name\" placeholder=\"姓名\" [(ngModel)]=\"name\" name=\"name\" autocomplete=\"off\" value=\"\" data-rule=\"姓名:required;name\" />\r\n                      </div>\r\n                      <div class=\"input-group\">\r\n                        <input type=\"password\" class=\"form-control\" id=\"pd-form-username\" placeholder=\"用户名\" [(ngModel)]=\"username\" name=\"username\" autocomplete=\"off\" value=\"\" data-rule=\"用户名:required;username\" />\r\n                      </div>\r\n                      <div class=\"input-group\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"pd-form-email\" placeholder=\"邮箱\" [(ngModel)]=\"email\" name=\"email\" autocomplete=\"off\" value=\"\" data-rule=\"邮箱:required;email\" />\r\n                        </div>\r\n                        <div class=\"input-group\">\r\n                          <input type=\"password\" class=\"form-control\" id=\"pd-form-password\" placeholder=\"密码\" [(ngModel)]=\"password\" name=\"password\" autocomplete=\"off\" value=\"\" data-rule=\"密码:required;password\" />\r\n                        </div>\r\n                      <div class=\"form-group\">\r\n                        <button type=\"submit\" class=\"btn btn-primary btn-block\">注 册</button>\r\n                      </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // Required Fields
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('请填写所有信息。', { cssClass: 'alert-danger', timeout: 2000 });
            return false;
        }
        // Validate Email
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('请输入正确的邮箱地址。', { cssClass: 'alert-danger', timeout: 2000 });
            return false;
        }
        // Register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('注册成功！将跳转智登录页。', { cssClass: 'alert-success', timeout: 2000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('出错了。', { cssClass: 'alert-danger', timeout: 2000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sandbox/sandbox.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sandbox/sandbox.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<p>sandbox works!</p>"

/***/ }),

/***/ "../../../../../src/app/components/sandbox/sandbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SandboxComponent = (function () {
    function SandboxComponent() {
    }
    SandboxComponent.prototype.ngOnInit = function () {
    };
    return SandboxComponent;
}());
SandboxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sandbox',
        template: __webpack_require__("../../../../../src/app/components/sandbox/sandbox.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sandbox/sandbox.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SandboxComponent);

//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/sandbox.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/vpn/vpn.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n    color: inherit;\r\n}\r\n\r\na:link { \r\n    text-decoration: none;\r\n}\r\n\r\na:visited {\r\n    text-decoration: none;\r\n}\r\n\r\nhr {\r\n    margin: 10px 0 5px 0;\r\n}\r\n\r\nbutton {\r\n    margin: 10px 0;\r\n}\r\n\r\n#shadowsocks, #gfwpress {\r\n    padding: 0;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.page-header {\r\n    margin: 20px 0 10px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/vpn/vpn.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <h2 class=\"page-header\">Shadowsocks 账号<small> | 无限流量</small></h2>\n  <div id=\"shadowsocks\">\n    <p>服务器在美国迈阿密。</p>\n    <p>服务器地址为：45.77.74.148</p>\n    <p>加密方式为：aes-256-cfb</p>\n    <p>开放端口20001:20100用于ShadowSock代理服务。</p>\n    <p>已经配置Fast TCP服务和锐速加速服务。</p>\n    <br>\n    <table class=\"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>端口号</th>\n          <th>密码</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>1</td>\n          <td>20001</td>\n          <td>xbysspw20001</td>\n        </tr>\n        <tr>\n          <td>2</td>\n          <td>20002</td>\n          <td>xbysspw20002</td>\n        </tr>\n        <tr>\n          <td>3</td>\n          <td>20003</td>\n          <td>xbysspw20003</td>\n        </tr>\n        <tr>\n          <td>4</td>\n          <td>20004</td>\n          <td>xbysspw20004</td>\n        </tr>\n        <tr>\n          <td>5</td>\n          <td>20005</td>\n          <td>xbysspw20005</td>\n        </tr>\n        <tr>\n          <td>6</td>\n          <td>20006</td>\n          <td>xbysspw20006</td>\n        </tr>\n        <tr>\n          <td>7</td>\n          <td>20007</td>\n          <td>xbysspw20007</td>\n        </tr>\n        <tr>\n          <td>8</td>\n          <td>20008</td>\n          <td>xbysspw20008</td>\n        </tr>\n        <tr>\n          <td>9</td>\n          <td>20009</td>\n          <td>xbysspw20009</td>\n        </tr>\n        <tr>\n          <td>10</td>\n          <td>20010</td>\n          <td>xbysspw20010</td>\n        </tr>\n        <tr>\n          <td>11</td>\n          <td>20011</td>\n          <td>xbysspw20011</td>\n        </tr>\n        <tr>\n          <td>12</td>\n          <td>20012</td>\n          <td>xbysspw20012</td>\n        </tr>\n        <tr>\n          <td>13</td>\n          <td>20013</td>\n          <td>xbysspw20013</td>\n        </tr>\n        <tr>\n          <td>14</td>\n          <td>20014</td>\n          <td>xbysspw20014</td>\n        </tr>\n        <tr>\n          <td>15</td>\n          <td>20015</td>\n          <td>xbysspw20015</td>\n        </tr>\n        <tr>\n          <td>16</td>\n          <td>20016</td>\n          <td>xbysspw20016</td>\n        </tr>\n        <tr>\n          <td>17</td>\n          <td>20017</td>\n          <td>xbysspw20017</td>\n        </tr>\n        <tr>\n          <td>18</td>\n          <td>20018</td>\n          <td>xbysspw20018</td>\n        </tr>\n        <tr>\n          <td>19</td>\n          <td>20019</td>\n          <td>xbysspw20019</td>\n        </tr>\n        <tr>\n          <td>20</td>\n          <td>20020</td>\n          <td>xbysspw20020</td>\n        </tr>\n        <tr>\n          <td>21</td>\n          <td>20021</td>\n          <td>xbysspw20021</td>\n        </tr>\n        <tr>\n          <td>22</td>\n          <td>20022</td>\n          <td>xbysspw20022</td>\n        </tr>\n        <tr>\n          <td>23</td>\n          <td>20023</td>\n          <td>xbysspw20023</td>\n        </tr>\n        <tr>\n          <td>24</td>\n          <td>20024</td>\n          <td>xbysspw20024</td>\n        </tr>\n        <tr>\n          <td>25</td>\n          <td>20025</td>\n          <td>xbysspw20025</td>\n        </tr>\n        <tr>\n          <td>26</td>\n          <td>20026</td>\n          <td>xbysspw20026</td>\n        </tr>\n        <tr>\n          <td>27</td>\n          <td>20027</td>\n          <td>xbysspw20027</td>\n        </tr>\n        <tr>\n          <td>28</td>\n          <td>20028</td>\n          <td>xbysspw20028</td>\n        </tr>\n        <tr>\n          <td>29</td>\n          <td>20029</td>\n          <td>xbysspw20029</td>\n        </tr>\n        <tr>\n          <td>30</td>\n          <td>20030</td>\n          <td>xbysspw20030</td>\n        </tr>\n        <tr>\n          <td>31</td>\n          <td>20031</td>\n          <td>xbysspw20031</td>\n        </tr>\n        <tr>\n          <td>32</td>\n          <td>20032</td>\n          <td>xbysspw20032</td>\n        </tr>\n        <tr>\n          <td>33</td>\n          <td>20033</td>\n          <td>xbysspw20033</td>\n        </tr>\n        <tr>\n          <td>34</td>\n          <td>20034</td>\n          <td>xbysspw20034</td>\n        </tr>\n        <tr>\n          <td>35</td>\n          <td>20035</td>\n          <td>xbysspw20035</td>\n        </tr>\n        <tr>\n          <td>36</td>\n          <td>20036</td>\n          <td>xbysspw20036</td>\n        </tr>\n        <tr>\n          <td>37</td>\n          <td>20037</td>\n          <td>xbysspw20037</td>\n        </tr>\n        <tr>\n          <td>38</td>\n          <td>20038</td>\n          <td>xbysspw20038</td>\n        </tr>\n        <tr>\n          <td>39</td>\n          <td>20039</td>\n          <td>xbysspw20039</td>\n        </tr>\n        <tr>\n          <td>40</td>\n          <td>20040</td>\n          <td>xbysspw20040</td>\n        </tr>\n        <tr>\n          <td>41</td>\n          <td>20041</td>\n          <td>xbysspw20041</td>\n        </tr>\n        <tr>\n          <td>42</td>\n          <td>20042</td>\n          <td>xbysspw20042</td>\n        </tr>\n        <tr>\n          <td>43</td>\n          <td>20043</td>\n          <td>xbysspw20043</td>\n        </tr>\n        <tr>\n          <td>44</td>\n          <td>20044</td>\n          <td>xbysspw20044</td>\n        </tr>\n        <tr>\n          <td>45</td>\n          <td>20045</td>\n          <td>xbysspw20045</td>\n        </tr>\n        <tr>\n          <td>46</td>\n          <td>20046</td>\n          <td>xbysspw20046</td>\n        </tr>\n        <tr>\n          <td>47</td>\n          <td>20047</td>\n          <td>xbysspw20047</td>\n        </tr>\n        <tr>\n          <td>48</td>\n          <td>20048</td>\n          <td>xbysspw20048</td>\n        </tr>\n        <tr>\n          <td>49</td>\n          <td>20049</td>\n          <td>xbysspw20049</td>\n        </tr>\n        <tr>\n          <td>50</td>\n          <td>20050</td>\n          <td>xbysspw20050</td>\n        </tr>\n        <tr>\n          <td>51</td>\n          <td>20051</td>\n          <td>xbysspw20051</td>\n        </tr>\n        <tr>\n          <td>52</td>\n          <td>20052</td>\n          <td>xbysspw20052</td>\n        </tr>\n        <tr>\n          <td>53</td>\n          <td>20053</td>\n          <td>xbysspw20053</td>\n        </tr>\n        <tr>\n          <td>54</td>\n          <td>20054</td>\n          <td>xbysspw20054</td>\n        </tr>\n        <tr>\n          <td>55</td>\n          <td>20055</td>\n          <td>xbysspw20055</td>\n        </tr>\n        <tr>\n          <td>56</td>\n          <td>20056</td>\n          <td>xbysspw20056</td>\n        </tr>\n        <tr>\n          <td>57</td>\n          <td>20057</td>\n          <td>xbysspw20057</td>\n        </tr>\n        <tr>\n          <td>58</td>\n          <td>20058</td>\n          <td>xbysspw20058</td>\n        </tr>\n        <tr>\n          <td>59</td>\n          <td>20059</td>\n          <td>xbysspw20059</td>\n        </tr>\n        <tr>\n          <td>60</td>\n          <td>20060</td>\n          <td>xbysspw20060</td>\n        </tr>\n        <tr>\n          <td>61</td>\n          <td>20061</td>\n          <td>xbysspw20061</td>\n        </tr>\n        <tr>\n          <td>62</td>\n          <td>20062</td>\n          <td>xbysspw20062</td>\n        </tr>\n        <tr>\n          <td>63</td>\n          <td>20063</td>\n          <td>xbysspw20063</td>\n        </tr>\n        <tr>\n          <td>64</td>\n          <td>20064</td>\n          <td>xbysspw20064</td>\n        </tr>\n        <tr>\n          <td>65</td>\n          <td>20065</td>\n          <td>xbysspw20065</td>\n        </tr>\n        <tr>\n          <td>66</td>\n          <td>20066</td>\n          <td>xbysspw20066</td>\n        </tr>\n        <tr>\n          <td>67</td>\n          <td>20067</td>\n          <td>xbysspw20067</td>\n        </tr>\n        <tr>\n          <td>68</td>\n          <td>20068</td>\n          <td>xbysspw20068</td>\n        </tr>\n        <tr>\n          <td>69</td>\n          <td>20069</td>\n          <td>xbysspw20069</td>\n        </tr>\n        <tr>\n          <td>70</td>\n          <td>20070</td>\n          <td>xbysspw20070</td>\n        </tr>\n        <tr>\n          <td>71</td>\n          <td>20071</td>\n          <td>xbysspw20071</td>\n        </tr>\n        <tr>\n          <td>72</td>\n          <td>20072</td>\n          <td>xbysspw20072</td>\n        </tr>\n        <tr>\n          <td>73</td>\n          <td>20073</td>\n          <td>xbysspw20073</td>\n        </tr>\n        <tr>\n          <td>74</td>\n          <td>20074</td>\n          <td>xbysspw20074</td>\n        </tr>\n        <tr>\n          <td>75</td>\n          <td>20075</td>\n          <td>xbysspw20075</td>\n        </tr>\n        <tr>\n          <td>76</td>\n          <td>20076</td>\n          <td>xbysspw20076</td>\n        </tr>\n        <tr>\n          <td>77</td>\n          <td>20077</td>\n          <td>xbysspw20077</td>\n        </tr>\n        <tr>\n          <td>78</td>\n          <td>20078</td>\n          <td>xbysspw20078</td>\n        </tr>\n        <tr>\n          <td>79</td>\n          <td>20079</td>\n          <td>xbysspw20079</td>\n        </tr>\n        <tr>\n          <td>80</td>\n          <td>20080</td>\n          <td>xbysspw20080</td>\n        </tr>\n        <tr>\n          <td>81</td>\n          <td>20081</td>\n          <td>xbysspw20081</td>\n        </tr>\n        <tr>\n          <td>82</td>\n          <td>20082</td>\n          <td>xbysspw20082</td>\n        </tr>\n        <tr>\n          <td>83</td>\n          <td>20083</td>\n          <td>xbysspw20083</td>\n        </tr>\n        <tr>\n          <td>84</td>\n          <td>20084</td>\n          <td>xbysspw20084</td>\n        </tr>\n        <tr>\n          <td>85</td>\n          <td>20085</td>\n          <td>xbysspw20085</td>\n        </tr>\n        <tr>\n          <td>86</td>\n          <td>20086</td>\n          <td>xbysspw20086</td>\n        </tr>\n        <tr>\n          <td>87</td>\n          <td>20087</td>\n          <td>xbysspw20087</td>\n        </tr>\n        <tr>\n          <td>88</td>\n          <td>20088</td>\n          <td>xbysspw20088</td>\n        </tr>\n        <tr>\n          <td>89</td>\n          <td>20089</td>\n          <td>xbysspw20089</td>\n        </tr>\n        <tr>\n          <td>90</td>\n          <td>20090</td>\n          <td>xbysspw20090</td>\n        </tr>\n        <tr>\n          <td>91</td>\n          <td>20091</td>\n          <td>xbysspw20091</td>\n        </tr>\n        <tr>\n          <td>92</td>\n          <td>20092</td>\n          <td>xbysspw20092</td>\n        </tr>\n        <tr>\n          <td>93</td>\n          <td>20093</td>\n          <td>xbysspw20093</td>\n        </tr>\n        <tr>\n          <td>94</td>\n          <td>20094</td>\n          <td>xbysspw20094</td>\n        </tr>\n        <tr>\n          <td>95</td>\n          <td>20095</td>\n          <td>xbysspw20095</td>\n        </tr>\n        <tr>\n          <td>96</td>\n          <td>20096</td>\n          <td>xbysspw20096</td>\n        </tr>\n        <tr>\n          <td>97</td>\n          <td>20097</td>\n          <td>xbysspw20097</td>\n        </tr>\n        <tr>\n          <td>98</td>\n          <td>20098</td>\n          <td>xbysspw20098</td>\n        </tr>\n        <tr>\n          <td>99</td>\n          <td>20099</td>\n          <td>xbysspw20099</td>\n        </tr>\n        <tr>\n          <td>100</td>\n          <td>20100</td>\n          <td>xbysspw20100</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/vpn/vpn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VpnComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VpnComponent = (function () {
    function VpnComponent() {
    }
    VpnComponent.prototype.ngOnInit = function () {
    };
    return VpnComponent;
}());
VpnComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-vpn',
        template: __webpack_require__("../../../../../src/app/components/vpn/vpn.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/vpn/vpn.component.css")]
    }),
    __metadata("design:paramtypes", [])
], VpnComponent);

//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/vpn.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/register');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/authenticate');
        return this.http.post(ep, user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            //return 'http://localhost:8080/'+ep;
            return '/' + ep;
        }
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactService = (function () {
    function ContactService(http) {
        this.http = http;
        this.isDev = true; // Change to false before deployment
    }
    ContactService.prototype.editContact = function (contact) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('contact/edit');
        return this.http.post(ep, contact, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactService.prototype.getContact = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var ep = this.prepEndpoint('users/profile');
        return this.http.get(ep, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContactService.prototype.prepEndpoint = function (ep) {
        if (this.isDev) {
            return ep;
        }
        else {
            return '/' + ep;
        }
    };
    return ContactService;
}());
ContactService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ContactService);

var _a;
//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/contact.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=I:/GitHub/MEAN-login-app/angular-src/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map