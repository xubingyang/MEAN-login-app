webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    color: inherit;\n}\n\na:link { \n    text-decoration: none;\n}\n\na:visited {\n    text-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n<hr>\n<div class=\"footer\" style=\"text-align: right\">版权所有. <a href=\"https://xubingyang.com\">xubingyang.com</a> 2012-2017 &copy; All right reserved.\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_contact_service__ = __webpack_require__("../../../../../src/app/services/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_13__components_contacts_contacts_component__["a" /* ContactsComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_14__components_contact_contact_component__["a" /* ContactComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_contacts_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_contact_contact_component__["a" /* ContactComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_18__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_17__services_contact_service__["a" /* ContactService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/app.module.js.map

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

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/components/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ContactComponent);

var _a, _b;
//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/contacts/contacts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    color: inherit;\n}\n\na:link {\n    text-decoration: none;\n}\n\na:visited {\n    text-decoration: none;\n}\n\n.realname{\n   text-indent: 30px;\n}\n\n.list-header{\n  text-indent: 15px;\n  font-size: 18px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"page-header\">\n    <h1>通讯录<small> | 备份来自Goole&nbsp;&amp;&nbsp;Apple</small></h1>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1\">\n      <div class=\"input-group\">\n        <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\n        <input type=\"text\" id=\"filterInput\" class=\"form-control\" placeholder=\"搜索...\" aria-describedby=\"basic-addon1\">\n      </div>\n      <hr>\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">\n          <strong>A</strong>\n        </div>\n        <ul class=\"list-group\" id=\"contact-list\">\n          <li class=\"list-group-item\">\n            <div class=\"col-xs-3\">\n              <img src=\"http://api.randomuser.me/portraits/men/50.jpg\" height=\"50\" width=\"50\" alt=\"Scott Stevens\" class=\"img-circle\" />\n            </div>\n            <div class=\"col-xs-9\">\n              <div class=\"pinyin\">\n                <small>Xu&nbsp;Bingyang</small>\n              </div>\n              <div class=\"character\">\n                <Strong>徐&nbsp;秉阳</Strong>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n          </li>\n          <li class=\"list-group-item\">\n            <div class=\"col-xs-3\">\n              <img src=\"http://api.randomuser.me/portraits/men/50.jpg\" height=\"50\" width=\"50\" alt=\"Scott Stevens\" class=\"img-circle\" />\n            </div>\n            <div class=\"col-xs-9\">\n              <div class=\"pinyin\">\n                <small>Xu&nbsp;Bingyang</small>\n              </div>\n              <div class=\"character\">\n                <Strong>徐&nbsp;秉阳</Strong>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n          </li>\n        </ul>\n        <div class=\"panel-heading\">\n          <strong>B</strong>\n        </div>\n        <ul class=\"list-group\" id=\"contact-list\">\n          <li class=\"list-group-item\">\n            <div class=\"col-xs-3\">\n              <img src=\"http://api.randomuser.me/portraits/men/50.jpg\" height=\"50\" width=\"50\" alt=\"Scott Stevens\" class=\"img-circle\" />\n            </div>\n            <div class=\"col-xs-9\">\n              <div class=\"pinyin\">\n                <small>Xu&nbsp;Bingyang</small>\n              </div>\n              <div class=\"character\">\n                <Strong>徐&nbsp;秉阳</Strong>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contact_service__ = __webpack_require__("../../../../../src/app/services/contact.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-contacts',
        template: __webpack_require__("../../../../../src/app/components/contacts/contacts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/contacts/contacts.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_contact_service__["a" /* ContactService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ContactsComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/contacts.component.js.map

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

module.exports = "<h2 class=page-header>VPN账号<small> | 无限流量</small></h2>\n<ul class=\"nav nav-pills\">\n  <li class=\"active\"><a href=\"#shadowsocks\" data-toggle=\"tab\" aria-expanded=\"false\">ShadowSocks服务器</a></li>\n  <li class=\"active\"><a href=\"#gfwpress\" data-toggle=\"tab\" aria-expanded=\"false\">GFW.press服务器</a></li>\n</ul>\n<br>\n<div id=\"myTabContent\" class=\"tab-content\">\n  <div class=\"tab-pane active in\" id=\"shadowsocks\">\n    <p>服务器在美国迈阿密。</p>\n    <p>服务器地址为：45.77.74.148</p>\n    <p>加密方式为：aes-256-cfb</p>\n    <p>开放端口20001:20100用于ShadowSock代理服务。</p>\n    <p>已经配置Fast TCP服务和锐速加速服务。</p>\n    <p>软件我iOS设备上用的是waterdrop. 不过只要能使用ShadowSocks服务的软件都可以。</p>\n    <br>\n    <table class=\"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>端口号</th>\n          <th>密码</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>1</td>\n          <td>20001</td>\n          <td>xbysspw20001</td>\n        </tr>\n        <tr>\n          <td>2</td>\n          <td>20002</td>\n          <td>xbysspw20002</td>\n        </tr>\n        <tr>\n          <td>3</td>\n          <td>20003</td>\n          <td>xbysspw20003</td>\n        </tr>\n        <tr>\n          <td>4</td>\n          <td>20004</td>\n          <td>xbysspw20004</td>\n        </tr>\n        <tr>\n          <td>5</td>\n          <td>20005</td>\n          <td>xbysspw20005</td>\n        </tr>\n        <tr>\n          <td>6</td>\n          <td>20006</td>\n          <td>xbysspw20006</td>\n        </tr>\n        <tr>\n          <td>7</td>\n          <td>20007</td>\n          <td>xbysspw20007</td>\n        </tr>\n        <tr>\n          <td>8</td>\n          <td>20008</td>\n          <td>xbysspw20008</td>\n        </tr>\n        <tr>\n          <td>9</td>\n          <td>20009</td>\n          <td>xbysspw20009</td>\n        </tr>\n        <tr>\n          <td>10</td>\n          <td>20010</td>\n          <td>xbysspw20010</td>\n        </tr>\n        <tr>\n          <td>11</td>\n          <td>20011</td>\n          <td>xbysspw20011</td>\n        </tr>\n        <tr>\n          <td>12</td>\n          <td>20012</td>\n          <td>xbysspw20012</td>\n        </tr>\n        <tr>\n          <td>13</td>\n          <td>20013</td>\n          <td>xbysspw20013</td>\n        </tr>\n        <tr>\n          <td>14</td>\n          <td>20014</td>\n          <td>xbysspw20014</td>\n        </tr>\n        <tr>\n          <td>15</td>\n          <td>20015</td>\n          <td>xbysspw20015</td>\n        </tr>\n        <tr>\n          <td>16</td>\n          <td>20016</td>\n          <td>xbysspw20016</td>\n        </tr>\n        <tr>\n          <td>17</td>\n          <td>20017</td>\n          <td>xbysspw20017</td>\n        </tr>\n        <tr>\n          <td>18</td>\n          <td>20018</td>\n          <td>xbysspw20018</td>\n        </tr>\n        <tr>\n          <td>19</td>\n          <td>20019</td>\n          <td>xbysspw20019</td>\n        </tr>\n        <tr>\n          <td>20</td>\n          <td>20020</td>\n          <td>xbysspw20020</td>\n        </tr>\n        <tr>\n          <td>21</td>\n          <td>20021</td>\n          <td>xbysspw20021</td>\n        </tr>\n        <tr>\n          <td>22</td>\n          <td>20022</td>\n          <td>xbysspw20022</td>\n        </tr>\n        <tr>\n          <td>23</td>\n          <td>20023</td>\n          <td>xbysspw20023</td>\n        </tr>\n        <tr>\n          <td>24</td>\n          <td>20024</td>\n          <td>xbysspw20024</td>\n        </tr>\n        <tr>\n          <td>25</td>\n          <td>20025</td>\n          <td>xbysspw20025</td>\n        </tr>\n        <tr>\n          <td>26</td>\n          <td>20026</td>\n          <td>xbysspw20026</td>\n        </tr>\n        <tr>\n          <td>27</td>\n          <td>20027</td>\n          <td>xbysspw20027</td>\n        </tr>\n        <tr>\n          <td>28</td>\n          <td>20028</td>\n          <td>xbysspw20028</td>\n        </tr>\n        <tr>\n          <td>29</td>\n          <td>20029</td>\n          <td>xbysspw20029</td>\n        </tr>\n        <tr>\n          <td>30</td>\n          <td>20030</td>\n          <td>xbysspw20030</td>\n        </tr>\n        <tr>\n          <td>31</td>\n          <td>20031</td>\n          <td>xbysspw20031</td>\n        </tr>\n        <tr>\n          <td>32</td>\n          <td>20032</td>\n          <td>xbysspw20032</td>\n        </tr>\n        <tr>\n          <td>33</td>\n          <td>20033</td>\n          <td>xbysspw20033</td>\n        </tr>\n        <tr>\n          <td>34</td>\n          <td>20034</td>\n          <td>xbysspw20034</td>\n        </tr>\n        <tr>\n          <td>35</td>\n          <td>20035</td>\n          <td>xbysspw20035</td>\n        </tr>\n        <tr>\n          <td>36</td>\n          <td>20036</td>\n          <td>xbysspw20036</td>\n        </tr>\n        <tr>\n          <td>37</td>\n          <td>20037</td>\n          <td>xbysspw20037</td>\n        </tr>\n        <tr>\n          <td>38</td>\n          <td>20038</td>\n          <td>xbysspw20038</td>\n        </tr>\n        <tr>\n          <td>39</td>\n          <td>20039</td>\n          <td>xbysspw20039</td>\n        </tr>\n        <tr>\n          <td>40</td>\n          <td>20040</td>\n          <td>xbysspw20040</td>\n        </tr>\n        <tr>\n          <td>41</td>\n          <td>20041</td>\n          <td>xbysspw20041</td>\n        </tr>\n        <tr>\n          <td>42</td>\n          <td>20042</td>\n          <td>xbysspw20042</td>\n        </tr>\n        <tr>\n          <td>43</td>\n          <td>20043</td>\n          <td>xbysspw20043</td>\n        </tr>\n        <tr>\n          <td>44</td>\n          <td>20044</td>\n          <td>xbysspw20044</td>\n        </tr>\n        <tr>\n          <td>45</td>\n          <td>20045</td>\n          <td>xbysspw20045</td>\n        </tr>\n        <tr>\n          <td>46</td>\n          <td>20046</td>\n          <td>xbysspw20046</td>\n        </tr>\n        <tr>\n          <td>47</td>\n          <td>20047</td>\n          <td>xbysspw20047</td>\n        </tr>\n        <tr>\n          <td>48</td>\n          <td>20048</td>\n          <td>xbysspw20048</td>\n        </tr>\n        <tr>\n          <td>49</td>\n          <td>20049</td>\n          <td>xbysspw20049</td>\n        </tr>\n        <tr>\n          <td>50</td>\n          <td>20050</td>\n          <td>xbysspw20050</td>\n        </tr>\n        <tr>\n          <td>51</td>\n          <td>20051</td>\n          <td>xbysspw20051</td>\n        </tr>\n        <tr>\n          <td>52</td>\n          <td>20052</td>\n          <td>xbysspw20052</td>\n        </tr>\n        <tr>\n          <td>53</td>\n          <td>20053</td>\n          <td>xbysspw20053</td>\n        </tr>\n        <tr>\n          <td>54</td>\n          <td>20054</td>\n          <td>xbysspw20054</td>\n        </tr>\n        <tr>\n          <td>55</td>\n          <td>20055</td>\n          <td>xbysspw20055</td>\n        </tr>\n        <tr>\n          <td>56</td>\n          <td>20056</td>\n          <td>xbysspw20056</td>\n        </tr>\n        <tr>\n          <td>57</td>\n          <td>20057</td>\n          <td>xbysspw20057</td>\n        </tr>\n        <tr>\n          <td>58</td>\n          <td>20058</td>\n          <td>xbysspw20058</td>\n        </tr>\n        <tr>\n          <td>59</td>\n          <td>20059</td>\n          <td>xbysspw20059</td>\n        </tr>\n        <tr>\n          <td>60</td>\n          <td>20060</td>\n          <td>xbysspw20060</td>\n        </tr>\n        <tr>\n          <td>61</td>\n          <td>20061</td>\n          <td>xbysspw20061</td>\n        </tr>\n        <tr>\n          <td>62</td>\n          <td>20062</td>\n          <td>xbysspw20062</td>\n        </tr>\n        <tr>\n          <td>63</td>\n          <td>20063</td>\n          <td>xbysspw20063</td>\n        </tr>\n        <tr>\n          <td>64</td>\n          <td>20064</td>\n          <td>xbysspw20064</td>\n        </tr>\n        <tr>\n          <td>65</td>\n          <td>20065</td>\n          <td>xbysspw20065</td>\n        </tr>\n        <tr>\n          <td>66</td>\n          <td>20066</td>\n          <td>xbysspw20066</td>\n        </tr>\n        <tr>\n          <td>67</td>\n          <td>20067</td>\n          <td>xbysspw20067</td>\n        </tr>\n        <tr>\n          <td>68</td>\n          <td>20068</td>\n          <td>xbysspw20068</td>\n        </tr>\n        <tr>\n          <td>69</td>\n          <td>20069</td>\n          <td>xbysspw20069</td>\n        </tr>\n        <tr>\n          <td>70</td>\n          <td>20070</td>\n          <td>xbysspw20070</td>\n        </tr>\n        <tr>\n          <td>71</td>\n          <td>20071</td>\n          <td>xbysspw20071</td>\n        </tr>\n        <tr>\n          <td>72</td>\n          <td>20072</td>\n          <td>xbysspw20072</td>\n        </tr>\n        <tr>\n          <td>73</td>\n          <td>20073</td>\n          <td>xbysspw20073</td>\n        </tr>\n        <tr>\n          <td>74</td>\n          <td>20074</td>\n          <td>xbysspw20074</td>\n        </tr>\n        <tr>\n          <td>75</td>\n          <td>20075</td>\n          <td>xbysspw20075</td>\n        </tr>\n        <tr>\n          <td>76</td>\n          <td>20076</td>\n          <td>xbysspw20076</td>\n        </tr>\n        <tr>\n          <td>77</td>\n          <td>20077</td>\n          <td>xbysspw20077</td>\n        </tr>\n        <tr>\n          <td>78</td>\n          <td>20078</td>\n          <td>xbysspw20078</td>\n        </tr>\n        <tr>\n          <td>79</td>\n          <td>20079</td>\n          <td>xbysspw20079</td>\n        </tr>\n        <tr>\n          <td>80</td>\n          <td>20080</td>\n          <td>xbysspw20080</td>\n        </tr>\n        <tr>\n          <td>81</td>\n          <td>20081</td>\n          <td>xbysspw20081</td>\n        </tr>\n        <tr>\n          <td>82</td>\n          <td>20082</td>\n          <td>xbysspw20082</td>\n        </tr>\n        <tr>\n          <td>83</td>\n          <td>20083</td>\n          <td>xbysspw20083</td>\n        </tr>\n        <tr>\n          <td>84</td>\n          <td>20084</td>\n          <td>xbysspw20084</td>\n        </tr>\n        <tr>\n          <td>85</td>\n          <td>20085</td>\n          <td>xbysspw20085</td>\n        </tr>\n        <tr>\n          <td>86</td>\n          <td>20086</td>\n          <td>xbysspw20086</td>\n        </tr>\n        <tr>\n          <td>87</td>\n          <td>20087</td>\n          <td>xbysspw20087</td>\n        </tr>\n        <tr>\n          <td>88</td>\n          <td>20088</td>\n          <td>xbysspw20088</td>\n        </tr>\n        <tr>\n          <td>89</td>\n          <td>20089</td>\n          <td>xbysspw20089</td>\n        </tr>\n        <tr>\n          <td>90</td>\n          <td>20090</td>\n          <td>xbysspw20090</td>\n        </tr>\n        <tr>\n          <td>91</td>\n          <td>20091</td>\n          <td>xbysspw20091</td>\n        </tr>\n        <tr>\n          <td>92</td>\n          <td>20092</td>\n          <td>xbysspw20092</td>\n        </tr>\n        <tr>\n          <td>93</td>\n          <td>20093</td>\n          <td>xbysspw20093</td>\n        </tr>\n        <tr>\n          <td>94</td>\n          <td>20094</td>\n          <td>xbysspw20094</td>\n        </tr>\n        <tr>\n          <td>95</td>\n          <td>20095</td>\n          <td>xbysspw20095</td>\n        </tr>\n        <tr>\n          <td>96</td>\n          <td>20096</td>\n          <td>xbysspw20096</td>\n        </tr>\n        <tr>\n          <td>97</td>\n          <td>20097</td>\n          <td>xbysspw20097</td>\n        </tr>\n        <tr>\n          <td>98</td>\n          <td>20098</td>\n          <td>xbysspw20098</td>\n        </tr>\n        <tr>\n          <td>99</td>\n          <td>20099</td>\n          <td>xbysspw20099</td>\n        </tr>\n        <tr>\n          <td>100</td>\n          <td>20100</td>\n          <td>xbysspw20100</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"tab-pane active in\" id=\"gfwpress\">\n    <p>服务器在美国迈阿密</p>\n    <p>服务器地址为：45.77.74.148</p>\n    <p>开放端口10001:10100用于GFW.press代理服务。</p>\n    <p>密码长度10位，区分大小写。</p>\n    <p>GFW.press各平台软件<a href=\"https://gfw.press/download.php\">下载</a></p>\n    <br>\n    <table class=\"table table-striped table-hover\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>端口号</th>\n          <th>密码</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>1</td>\n          <td>10001</td>\n          <td>dpCxJbRt7x</td>\n        </tr>\n        <tr>\n          <td>2</td>\n          <td>10002</td>\n          <td>f9qF9ngqrg</td>\n        </tr>\n        <tr>\n          <td>3</td>\n          <td>10003</td>\n          <td>nyCnX7xbPU</td>\n        </tr>\n        <tr>\n          <td>4</td>\n          <td>10004</td>\n          <td>chivfYAc4P</td>\n        </tr>\n        <tr>\n          <td>5</td>\n          <td>10005</td>\n          <td>MKYWCEi9ty</td>\n        </tr>\n        <tr>\n          <td>6</td>\n          <td>10006</td>\n          <td>9MWKTkbqy9</td>\n        </tr>\n        <tr>\n          <td>7</td>\n          <td>10007</td>\n          <td>zNEtW3Uqm4</td>\n        </tr>\n        <tr>\n          <td>8</td>\n          <td>10008</td>\n          <td>qiANK4woxE</td>\n        </tr>\n        <tr>\n          <td>9</td>\n          <td>10009</td>\n          <td>uHd7jqHi4t</td>\n        </tr>\n        <tr>\n          <td>10</td>\n          <td>10010</td>\n          <td>Mmw7PMkuoo</td>\n        </tr>\n        <tr>\n          <td>11</td>\n          <td>10011</td>\n          <td>KgXY3iW7k9</td>\n        </tr>\n        <tr>\n          <td>12</td>\n          <td>10012</td>\n          <td>3cVn9zpe9c</td>\n        </tr>\n        <tr>\n          <td>13</td>\n          <td>10013</td>\n          <td>FbYaXnC9zo</td>\n        </tr>\n        <tr>\n          <td>14</td>\n          <td>10014</td>\n          <td>9LpavMfj9w</td>\n        </tr>\n        <tr>\n          <td>15</td>\n          <td>10015</td>\n          <td>9r4HKdwXLu</td>\n        </tr>\n        <tr>\n          <td>16</td>\n          <td>10016</td>\n          <td>b3NrfMRXLW</td>\n        </tr>\n        <tr>\n          <td>17</td>\n          <td>10017</td>\n          <td>JEu3MVqqRC</td>\n        </tr>\n        <tr>\n          <td>18</td>\n          <td>10018</td>\n          <td>ExdFPfmrK4</td>\n        </tr>\n        <tr>\n          <td>19</td>\n          <td>10019</td>\n          <td>3FTPNepjEU</td>\n        </tr>\n        <tr>\n          <td>20</td>\n          <td>10020</td>\n          <td>PaxYKjN4R4</td>\n        </tr>\n        <tr>\n          <td>21</td>\n          <td>10021</td>\n          <td>z49thKeaoV</td>\n        </tr>\n        <tr>\n          <td>22</td>\n          <td>10022</td>\n          <td>3rPpx7TMpd</td>\n        </tr>\n        <tr>\n          <td>23</td>\n          <td>10023</td>\n          <td>3rPpx7TMpd</td>\n        </tr>\n        <tr>\n          <td>24</td>\n          <td>10024</td>\n          <td>RHET9xeJpW</td>\n        </tr>\n        <tr>\n          <td>25</td>\n          <td>10025</td>\n          <td>ipjxAp74MW</td>\n        </tr>\n        <tr>\n          <td>26</td>\n          <td>10026</td>\n          <td>XMaz3CWh7T</td>\n        </tr>\n        <tr>\n          <td>27</td>\n          <td>10027</td>\n          <td>KkY9Ljneek</td>\n        </tr>\n        <tr>\n          <td>28</td>\n          <td>10028</td>\n          <td>XgxamT7Yse</td>\n        </tr>\n        <tr>\n          <td>29</td>\n          <td>10029</td>\n          <td>Wda7VYcq94</td>\n        </tr>\n        <tr>\n          <td>30</td>\n          <td>10030</td>\n          <td>fJ4agssngm</td>\n        </tr>\n        <tr>\n          <td>31</td>\n          <td>10031</td>\n          <td>FcUPRJ4kHA</td>\n        </tr>\n        <tr>\n          <td>32</td>\n          <td>10032</td>\n          <td>AwXWRpTK7c</td>\n        </tr>\n        <tr>\n          <td>33</td>\n          <td>10033</td>\n          <td>MVoaXgq3Rw</td>\n        </tr>\n        <tr>\n          <td>34</td>\n          <td>10034</td>\n          <td>3T77vEbUec</td>\n        </tr>\n        <tr>\n          <td>35</td>\n          <td>10035</td>\n          <td>NMmjMz4XAy</td>\n        </tr>\n        <tr>\n          <td>36</td>\n          <td>10036</td>\n          <td>UoPxXNh9EU</td>\n        </tr>\n        <tr>\n          <td>37</td>\n          <td>10037</td>\n          <td>N4vjsNTYMK</td>\n        </tr>\n        <tr>\n          <td>38</td>\n          <td>10038</td>\n          <td>jsHNRb3hLo</td>\n        </tr>\n        <tr>\n          <td>39</td>\n          <td>10039</td>\n          <td>eYeRqd93bL</td>\n        </tr>\n        <tr>\n          <td>40</td>\n          <td>10040</td>\n          <td>p49fbwRmL4</td>\n        </tr>\n        <tr>\n          <td>41</td>\n          <td>10041</td>\n          <td>4dEaAcU39o</td>\n        </tr>\n        <tr>\n          <td>42</td>\n          <td>10042</td>\n          <td>UPPwps3KHz</td>\n        </tr>\n        <tr>\n          <td>43</td>\n          <td>10043</td>\n          <td>Mk4WKAqKFm</td>\n        </tr>\n        <tr>\n          <td>44</td>\n          <td>10044</td>\n          <td>3joEJeienb</td>\n        </tr>\n        <tr>\n          <td>45</td>\n          <td>10045</td>\n          <td>XkATxXFb7J</td>\n        </tr>\n        <tr>\n          <td>46</td>\n          <td>10046</td>\n          <td>YdC3Ai9MLj</td>\n        </tr>\n        <tr>\n          <td>47</td>\n          <td>10047</td>\n          <td>FHC7snrVaV</td>\n        </tr>\n        <tr>\n          <td>48</td>\n          <td>10048</td>\n          <td>WzRc4bxeCz</td>\n        </tr>\n        <tr>\n          <td>49</td>\n          <td>10049</td>\n          <td>c9ubcX3TVA</td>\n        </tr>\n        <tr>\n          <td>50</td>\n          <td>10050</td>\n          <td>7iw9yvKanL</td>\n        </tr>\n        <tr>\n          <td>51</td>\n          <td>10051</td>\n          <td>aRtynHNmY3</td>\n        </tr>\n        <tr>\n          <td>52</td>\n          <td>10052</td>\n          <td>T4NekqWLqo</td>\n        </tr>\n        <tr>\n          <td>53</td>\n          <td>10053</td>\n          <td>3iVjayRbhr</td>\n        </tr>\n        <tr>\n          <td>54</td>\n          <td>10054</td>\n          <td>NLCUvUya9m</td>\n        </tr>\n        <tr>\n          <td>55</td>\n          <td>10055</td>\n          <td>TPxo3YpPab</td>\n        </tr>\n        <tr>\n          <td>56</td>\n          <td>10056</td>\n          <td>uF9h3FoFFF</td>\n        </tr>\n        <tr>\n          <td>57</td>\n          <td>10057</td>\n          <td>Vnhna7XPTJ</td>\n        </tr>\n        <tr>\n          <td>58</td>\n          <td>10058</td>\n          <td>3eacnKuMwm</td>\n        </tr>\n        <tr>\n          <td>59</td>\n          <td>10059</td>\n          <td>gf4qhsnsM3</td>\n        </tr>\n        <tr>\n          <td>60</td>\n          <td>10060</td>\n          <td>hJFnKUt7tC</td>\n        </tr>\n        <tr>\n          <td>61</td>\n          <td>10061</td>\n          <td>ALCVKbJ9YE</td>\n        </tr>\n        <tr>\n          <td>62</td>\n          <td>10062</td>\n          <td>Th4dicVMXy</td>\n        </tr>\n        <tr>\n          <td>63</td>\n          <td>10063</td>\n          <td>4KYeuK4wXw</td>\n        </tr>\n        <tr>\n          <td>64</td>\n          <td>10064</td>\n          <td>k7HkHcyu4x</td>\n        </tr>\n        <tr>\n          <td>65</td>\n          <td>10065</td>\n          <td>hwaYRP4fXo</td>\n        </tr>\n        <tr>\n          <td>66</td>\n          <td>10066</td>\n          <td>vVtsq9CdYF</td>\n        </tr>\n        <tr>\n          <td>67</td>\n          <td>10067</td>\n          <td>j3NrpiKakt</td>\n        </tr>\n        <tr>\n          <td>68</td>\n          <td>10068</td>\n          <td>n7FyUwwx7m</td>\n        </tr>\n        <tr>\n          <td>69</td>\n          <td>10069</td>\n          <td>tRngiCz7aJ</td>\n        </tr>\n        <tr>\n          <td>70</td>\n          <td>10070</td>\n          <td>VgUgn4rsHs</td>\n        </tr>\n        <tr>\n          <td>71</td>\n          <td>10071</td>\n          <td>HhugAhmtL7</td>\n        </tr>\n        <tr>\n          <td>72</td>\n          <td>10072</td>\n          <td>rkbXAiLr77</td>\n        </tr>\n        <tr>\n          <td>73</td>\n          <td>10073</td>\n          <td>uJ4UPTxLCT</td>\n        </tr>\n        <tr>\n          <td>74</td>\n          <td>10074</td>\n          <td>jbU3kmfysU</td>\n        </tr>\n        <tr>\n          <td>75</td>\n          <td>10075</td>\n          <td>Mpqkcu7fAq</td>\n        </tr>\n        <tr>\n          <td>76</td>\n          <td>10076</td>\n          <td>4EzApKXCpU</td>\n        </tr>\n        <tr>\n          <td>77</td>\n          <td>10077</td>\n          <td>4WKJueiyYo</td>\n        </tr>\n        <tr>\n          <td>78</td>\n          <td>10078</td>\n          <td>NjgJfPy7uC</td>\n        </tr>\n        <tr>\n          <td>79</td>\n          <td>10079</td>\n          <td>UYEHiJ7Pyq</td>\n        </tr>\n        <tr>\n          <td>80</td>\n          <td>10080</td>\n          <td>7FHkRkaT9U</td>\n        </tr>\n        <tr>\n          <td>81</td>\n          <td>10081</td>\n          <td>wMh7oPmTvk</td>\n        </tr>\n        <tr>\n          <td>82</td>\n          <td>10082</td>\n          <td>LCVhd9V743</td>\n        </tr>\n        <tr>\n          <td>83</td>\n          <td>10083</td>\n          <td>zhVodwoio7</td>\n        </tr>\n        <tr>\n          <td>84</td>\n          <td>10084</td>\n          <td>jMUL3wvpnq</td>\n        </tr>\n        <tr>\n          <td>85</td>\n          <td>10085</td>\n          <td>e3HxoAc3mg</td>\n        </tr>\n        <tr>\n          <td>86</td>\n          <td>10086</td>\n          <td>yXNhLdM7go</td>\n        </tr>\n        <tr>\n          <td>87</td>\n          <td>10087</td>\n          <td>ggvgq4bCEF</td>\n        </tr>\n        <tr>\n          <td>88</td>\n          <td>10088</td>\n          <td>s9wakLJVxh</td>\n        </tr>\n        <tr>\n          <td>89</td>\n          <td>10089</td>\n          <td>Liq3eexieA</td>\n        </tr>\n        <tr>\n          <td>90</td>\n          <td>10090</td>\n          <td>AisYqPN4Ky</td>\n        </tr>\n        <tr>\n          <td>91</td>\n          <td>10091</td>\n          <td>jJgzx7HFsJ</td>\n        </tr>\n        <tr>\n          <td>92</td>\n          <td>10092</td>\n          <td>7mzFu7s3JT</td>\n        </tr>\n        <tr>\n          <td>93</td>\n          <td>10093</td>\n          <td>KHN7EykUn</td>\n        </tr>\n        <tr>\n          <td>94</td>\n          <td>10094</td>\n          <td>bU3bHoVKUP</td>\n        </tr>\n        <tr>\n          <td>95</td>\n          <td>10095</td>\n          <td>xVkakE7CNL</td>\n        </tr>\n        <tr>\n          <td>96</td>\n          <td>10096</td>\n          <td>z4gULa3LzJ</td>\n        </tr>\n        <tr>\n          <td>97</td>\n          <td>10097</td>\n          <td>voE9pHLWwt</td>\n        </tr>\n        <tr>\n          <td>98</td>\n          <td>10098</td>\n          <td>seEvARnU3g</td>\n        </tr>\n        <tr>\n          <td>99</td>\n          <td>10099</td>\n          <td>uJnqorwzC3</td>\n        </tr>\n        <tr>\n          <td>100</td>\n          <td>10100</td>\n          <td>qo3nbNaufN</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\n  <h1>信息管理系统</h1>\n  <p class=\"lead\">写了个简单的信息管理、发布系统。现在主要用于我自己的VPN服务器端口和密码的发布。</p>\n  <div>\n    <a class=\"btn btn-primary\" [routerLink]=\"['/register']\">注册</a> <a class=\"btn btn-default\" [routerLink]=\"['/login']\">登录</a>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <h3>Node.js+Express做后端</h3>\n    <p>Node.js+Express做服务器端，用Mongoose链接数据库。</p>\n  </div>\n  <div class=\"col-md-3\">\n    <h3>Angular做前端</h3>\n    <p>刚开始用Angular2，就发布了Angular4。无限Debugging中，我也是很无语…</p>\n  </div>\n  <div class=\"col-md-3\">\n    <h3>Tokens验证</h3>\n    <p>JSON web tokens存在Local Storage里，并没有使用cookie.</p>\n  </div>\n  <div class=\"col-md-3\">\n    <h3>Guest账号</h3>\n    <p>为了安全性，设置了注册和登录系统。\n    Guest账号密码是123456.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">登录</h2>\n<form (submit)=\"onLoginSubmit()\">\n  <div class=\"form-group\">\n    <label>用户名</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n  </div>\n  <div class=\"form-group\">\n    <label>密码</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"提交\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{\n  border-radius: 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\" (click)=\"toggleState()\">\n            <span class=\"sr-only\">导航条</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n      <a class=\"navbar-brand\" href=\"#\">账号信息发布</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\" [ngClass]=\"{ 'in': isIn }\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">主页</a></li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">VPN发布页</a></li>\n        <!-- <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">用户信息</a></li>-->\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">登录</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">注册</a></li>\n        <!-- <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">登出</a></li>-->\n        <li class=\"dropdown\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">用户<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['/contacts']\">通讯录</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['/profile']\">用户信息</a></li>\n            <li class=\"divider\"></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">登出</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    <!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\n  <h2 class=\"page-header\">{{user.name}}</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">用户名: {{user.username}}</li>\n    <li class=\"list-group-item\">邮箱: {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">注册</h2>\n<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>姓名</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>用户名</label>\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n  </div>\n  <div class=\"form-group\">\n    <label>邮箱</label>\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" >\n  </div>\n  <div class=\"form-group\">\n    <label>密码</label>\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"提交\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
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
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/contact.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactService; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ContactService);

var _a;
//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/contact.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/validate.service.js.map

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
//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/environment.js.map

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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/xubingyang/Documents/GitHub/MEAN-login-app/angular-src/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map