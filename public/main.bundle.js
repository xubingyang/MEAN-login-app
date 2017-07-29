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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_contacts_contacts_component__ = __webpack_require__("../../../../../src/app/components/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_contact_contact_component__ = __webpack_require__("../../../../../src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'contacts', component: __WEBPACK_IMPORTED_MODULE_12__components_contacts_contacts_component__["a" /* ContactsComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_13__components_contact_contact_component__["a" /* ContactComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_contacts_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_contact_contact_component__["a" /* ContactComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_16_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_14__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* AuthGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function ContactsComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ContactsComponent);

var _a, _b;
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

module.exports = "<h2 class=page-header>VPN账号<small> | 无限流量</small></h2>\n<ul class=\"nav nav-pills\">\n  <li class=\"active\"><a href=\"/dashboard#shadowsocks\" data-toggle=\"tab\" aria-expanded=\"false\">ShadowSocks服务器</a></li>\n  <li class=\"active\"><a href=\"/dashboard#gfwpress\" data-toggle=\"tab\" aria-expanded=\"false\">GFW.press服务器</a></li>\n</ul>\n<br>\n<div id=\"myTabContent\" class=\"tab-content\">\n  <div class=\"tab-pane active in\" id=\"shadowsocks\">\n    <p>服务器在美国迈阿密。</p>\n\t<p>服务器地址为：45.77.74.148</p>\n\t<p>加密方式为：aes-256-cfb</p>\n\t<p>开放端口20001:20100用于ShadowSock代理服务。</p>\n\t<p>已经配置Fast TCP服务和锐速加速服务。</p>\n\t<p>软件我iOS设备上用的是waterdrop. 不过只要能使用ShadowSocks服务的软件都可以。</p>\n\t<br>\n\t<table class=\"table table-striped table-hover\">\n\t  <thead>\n\t    <tr>\n\t      <th>#</th>\n\t      <th>端口号</th>\n\t      <th>密码</th>\n\t    </tr>\n\t  </thead>\n\t  <tbody>\n\t    <tr>\n\t      <td>1</td>\n\t      <td>20001</td>\n\t      <td>xbysspw20001</td>\n\t    </tr>\n\t    <tr>\n\t      <td>2</td>\n\t      <td>20002</td>\n\t      <td>xbysspw20002</td>\n\t    </tr>\n\t    <tr>\n\t      <td>3</td>\n\t      <td>20003</td>\n\t      <td>xbysspw20003</td>\n\t    </tr>\n\t    <tr>\n\t      <td>4</td>\n\t      <td>20004</td>\n\t      <td>xbysspw20004</td>\n\t    </tr>\n\t    <tr>\n\t      <td>5</td>\n\t      <td>20005</td>\n\t      <td>xbysspw20005</td>\n\t    </tr>\n\t    <tr>\n\t      <td>6</td>\n\t      <td>20006</td>\n\t      <td>xbysspw20006</td>\n\t    </tr>\n\t    <tr>\n\t      <td>7</td>\n\t      <td>20007</td>\n\t      <td>xbysspw20007</td>\n\t    </tr>\n\t    <tr>\n\t      <td>8</td>\n\t      <td>20008</td>\n\t      <td>xbysspw20008</td>\n\t    </tr>\n\t    <tr>\n\t      <td>9</td>\n\t      <td>20009</td>\n\t      <td>xbysspw20009</td>\n\t    </tr>\n\t    <tr>\n\t      <td>10</td>\n\t      <td>20010</td>\n\t      <td>xbysspw20010</td>\n\t    </tr>\n\t    <tr>\n\t      <td>11</td>\n\t      <td>20011</td>\n\t      <td>xbysspw20011</td>\n\t    </tr>\n\t    <tr>\n\t      <td>12</td>\n\t      <td>20012</td>\n\t      <td>xbysspw20012</td>\n\t    </tr>\n\t    <tr>\n\t      <td>13</td>\n\t      <td>20013</td>\n\t      <td>xbysspw20013</td>\n\t    </tr>\n\t    <tr>\n\t      <td>14</td>\n\t      <td>20014</td>\n\t      <td>xbysspw20014</td>\n\t    </tr>\n\t    <tr>\n\t      <td>15</td>\n\t      <td>20015</td>\n\t      <td>xbysspw20015</td>\n\t    </tr>\n\t    <tr>\n\t      <td>16</td>\n\t      <td>20016</td>\n\t      <td>xbysspw20016</td>\n\t    </tr>\n\t    <tr>\n\t      <td>17</td>\n\t      <td>20017</td>\n\t      <td>xbysspw20017</td>\n\t    </tr>\n\t    <tr>\n\t      <td>18</td>\n\t      <td>20018</td>\n\t      <td>xbysspw20018</td>\n\t    </tr>\n\t    <tr>\n\t      <td>19</td>\n\t      <td>20019</td>\n\t      <td>xbysspw20019</td>\n\t    </tr>\n\t    <tr>\n\t      <td>20</td>\n\t      <td>20020</td>\n\t      <td>xbysspw20020</td>\n\t    </tr>\n\t    <tr>\n\t      <td>21</td>\n\t      <td>20021</td>\n\t      <td>xbysspw20021</td>\n\t    </tr>\n\t    <tr>\n\t      <td>22</td>\n\t      <td>20022</td>\n\t      <td>xbysspw20022</td>\n\t    </tr>\n\t    <tr>\n\t      <td>23</td>\n\t      <td>20023</td>\n\t      <td>xbysspw20023</td>\n\t    </tr>\n\t    <tr>\n\t      <td>24</td>\n\t      <td>20024</td>\n\t      <td>xbysspw20024</td>\n\t    </tr>\n\t    <tr>\n\t      <td>25</td>\n\t      <td>20025</td>\n\t      <td>xbysspw20025</td>\n\t    </tr>\n\t    <tr>\n\t      <td>26</td>\n\t      <td>20026</td>\n\t      <td>xbysspw20026</td>\n\t    </tr>\n\t    <tr>\n\t      <td>27</td>\n\t      <td>20027</td>\n\t      <td>xbysspw20027</td>\n\t    </tr>\n\t    <tr>\n\t      <td>28</td>\n\t      <td>20028</td>\n\t      <td>xbysspw20028</td>\n\t    </tr>\n\t    <tr>\n\t      <td>29</td>\n\t      <td>20029</td>\n\t      <td>xbysspw20029</td>\n\t    </tr>\n\t    <tr>\n\t      <td>30</td>\n\t      <td>20030</td>\n\t      <td>xbysspw20030</td>\n\t    </tr>\n\t    <tr>\n\t      <td>31</td>\n\t      <td>20031</td>\n\t      <td>xbysspw20031</td>\n\t    </tr>\n\t    <tr>\n\t      <td>32</td>\n\t      <td>20032</td>\n\t      <td>xbysspw20032</td>\n\t    </tr>\n\t    <tr>\n\t      <td>33</td>\n\t      <td>20033</td>\n\t      <td>xbysspw20033</td>\n\t    </tr>\n\t    <tr>\n\t      <td>34</td>\n\t      <td>20034</td>\n\t      <td>xbysspw20034</td>\n\t    </tr>\n\t    <tr>\n\t      <td>35</td>\n\t      <td>20035</td>\n\t      <td>xbysspw20035</td>\n\t    </tr>\n\t    <tr>\n\t      <td>36</td>\n\t      <td>20036</td>\n\t      <td>xbysspw20036</td>\n\t    </tr>\n\t    <tr>\n\t      <td>37</td>\n\t      <td>20037</td>\n\t      <td>xbysspw20037</td>\n\t    </tr>\n\t    <tr>\n\t      <td>38</td>\n\t      <td>20038</td>\n\t      <td>xbysspw20038</td>\n\t    </tr>\n\t    <tr>\n\t      <td>39</td>\n\t      <td>20039</td>\n\t      <td>xbysspw20039</td>\n\t    </tr>\n\t    <tr>\n\t      <td>40</td>\n\t      <td>20040</td>\n\t      <td>xbysspw20040</td>\n\t    </tr>\n\t    <tr>\n\t      <td>41</td>\n\t      <td>20041</td>\n\t      <td>xbysspw20041</td>\n\t    </tr>\n\t    <tr>\n\t      <td>42</td>\n\t      <td>20042</td>\n\t      <td>xbysspw20042</td>\n\t    </tr>\n\t    <tr>\n\t      <td>43</td>\n\t      <td>20043</td>\n\t      <td>xbysspw20043</td>\n\t    </tr>\n\t    <tr>\n\t      <td>44</td>\n\t      <td>20044</td>\n\t      <td>xbysspw20044</td>\n\t    </tr>\n\t    <tr>\n\t      <td>45</td>\n\t      <td>20045</td>\n\t      <td>xbysspw20045</td>\n\t    </tr>\n\t    <tr>\n\t      <td>46</td>\n\t      <td>20046</td>\n\t      <td>xbysspw20046</td>\n\t    </tr>\n\t    <tr>\n\t      <td>47</td>\n\t      <td>20047</td>\n\t      <td>xbysspw20047</td>\n\t    </tr>\n\t    <tr>\n\t      <td>48</td>\n\t      <td>20048</td>\n\t      <td>xbysspw20048</td>\n\t    </tr>\n\t    <tr>\n\t      <td>49</td>\n\t      <td>20049</td>\n\t      <td>xbysspw20049</td>\n\t    </tr>\n\t    <tr>\n\t      <td>50</td>\n\t      <td>20050</td>\n\t      <td>xbysspw20050</td>\n\t    </tr>\n\t    <tr>\n\t      <td>51</td>\n\t      <td>20051</td>\n\t      <td>xbysspw20051</td>\n\t    </tr>\n\t    <tr>\n\t      <td>52</td>\n\t      <td>20052</td>\n\t      <td>xbysspw20052</td>\n\t    </tr>\n\t    <tr>\n\t      <td>53</td>\n\t      <td>20053</td>\n\t      <td>xbysspw20053</td>\n\t    </tr>\n\t    <tr>\n\t      <td>54</td>\n\t      <td>20054</td>\n\t      <td>xbysspw20054</td>\n\t    </tr>\n\t    <tr>\n\t      <td>55</td>\n\t      <td>20055</td>\n\t      <td>xbysspw20055</td>\n\t    </tr>\n\t    <tr>\n\t      <td>56</td>\n\t      <td>20056</td>\n\t      <td>xbysspw20056</td>\n\t    </tr>\n\t    <tr>\n\t      <td>57</td>\n\t      <td>20057</td>\n\t      <td>xbysspw20057</td>\n\t    </tr>\n\t    <tr>\n\t      <td>58</td>\n\t      <td>20058</td>\n\t      <td>xbysspw20058</td>\n\t    </tr>\n\t    <tr>\n\t      <td>59</td>\n\t      <td>20059</td>\n\t      <td>xbysspw20059</td>\n\t    </tr>\n\t    <tr>\n\t      <td>60</td>\n\t      <td>20060</td>\n\t      <td>xbysspw20060</td>\n\t    </tr>\n\t    <tr>\n\t      <td>61</td>\n\t      <td>20061</td>\n\t      <td>xbysspw20061</td>\n\t    </tr>\n\t    <tr>\n\t      <td>62</td>\n\t      <td>20062</td>\n\t      <td>xbysspw20062</td>\n\t    </tr>\n\t    <tr>\n\t      <td>63</td>\n\t      <td>20063</td>\n\t      <td>xbysspw20063</td>\n\t    </tr>\n\t    <tr>\n\t      <td>64</td>\n\t      <td>20064</td>\n\t      <td>xbysspw20064</td>\n\t    </tr>\n\t    <tr>\n\t      <td>65</td>\n\t      <td>20065</td>\n\t      <td>xbysspw20065</td>\n\t    </tr>\n\t    <tr>\n\t      <td>66</td>\n\t      <td>20066</td>\n\t      <td>xbysspw20066</td>\n\t    </tr>\n\t    <tr>\n\t      <td>67</td>\n\t      <td>20067</td>\n\t      <td>xbysspw20067</td>\n\t    </tr>\n\t    <tr>\n\t      <td>68</td>\n\t      <td>20068</td>\n\t      <td>xbysspw20068</td>\n\t    </tr>\n\t    <tr>\n\t      <td>69</td>\n\t      <td>20069</td>\n\t      <td>xbysspw20069</td>\n\t    </tr>\n\t    <tr>\n\t      <td>70</td>\n\t      <td>20070</td>\n\t      <td>xbysspw20070</td>\n\t    </tr>\n\t    <tr>\n\t      <td>71</td>\n\t      <td>20071</td>\n\t      <td>xbysspw20071</td>\n\t    </tr>\n\t    <tr>\n\t      <td>72</td>\n\t      <td>20072</td>\n\t      <td>xbysspw20072</td>\n\t    </tr>\n\t    <tr>\n\t      <td>73</td>\n\t      <td>20073</td>\n\t      <td>xbysspw20073</td>\n\t    </tr>\n\t    <tr>\n\t      <td>74</td>\n\t      <td>20074</td>\n\t      <td>xbysspw20074</td>\n\t    </tr>\n\t    <tr>\n\t      <td>75</td>\n\t      <td>20075</td>\n\t      <td>xbysspw20075</td>\n\t    </tr>\n\t    <tr>\n\t      <td>76</td>\n\t      <td>20076</td>\n\t      <td>xbysspw20076</td>\n\t    </tr>\n\t    <tr>\n\t      <td>77</td>\n\t      <td>20077</td>\n\t      <td>xbysspw20077</td>\n\t    </tr>\n\t    <tr>\n\t      <td>78</td>\n\t      <td>20078</td>\n\t      <td>xbysspw20078</td>\n\t    </tr>\n\t    <tr>\n\t      <td>79</td>\n\t      <td>20079</td>\n\t      <td>xbysspw20079</td>\n\t    </tr>\n\t    <tr>\n\t      <td>80</td>\n\t      <td>20080</td>\n\t      <td>xbysspw20080</td>\n\t    </tr>\n\t    <tr>\n\t      <td>81</td>\n\t      <td>20081</td>\n\t      <td>xbysspw20081</td>\n\t    </tr>\n\t    <tr>\n\t      <td>82</td>\n\t      <td>20082</td>\n\t      <td>xbysspw20082</td>\n\t    </tr>\n\t    <tr>\n\t      <td>83</td>\n\t      <td>20083</td>\n\t      <td>xbysspw20083</td>\n\t    </tr>\n\t    <tr>\n\t      <td>84</td>\n\t      <td>20084</td>\n\t      <td>xbysspw20084</td>\n\t    </tr>\n\t    <tr>\n\t      <td>85</td>\n\t      <td>20085</td>\n\t      <td>xbysspw20085</td>\n\t    </tr>\n\t    <tr>\n\t      <td>86</td>\n\t      <td>20086</td>\n\t      <td>xbysspw20086</td>\n\t    </tr>\n\t    <tr>\n\t      <td>87</td>\n\t      <td>20087</td>\n\t      <td>xbysspw20087</td>\n\t    </tr>\n\t    <tr>\n\t      <td>88</td>\n\t      <td>20088</td>\n\t      <td>xbysspw20088</td>\n\t    </tr>\n\t    <tr>\n\t      <td>89</td>\n\t      <td>20089</td>\n\t      <td>xbysspw20089</td>\n\t    </tr>\n\t    <tr>\n\t      <td>90</td>\n\t      <td>20090</td>\n\t      <td>xbysspw20090</td>\n\t    </tr>\n\t    <tr>\n\t      <td>91</td>\n\t      <td>20091</td>\n\t      <td>xbysspw20091</td>\n\t    </tr>\n\t    <tr>\n\t      <td>92</td>\n\t      <td>20092</td>\n\t      <td>xbysspw20092</td>\n\t    </tr>\n\t    <tr>\n\t      <td>93</td>\n\t      <td>20093</td>\n\t      <td>xbysspw20093</td>\n\t    </tr>\n\t    <tr>\n\t      <td>94</td>\n\t      <td>20094</td>\n\t      <td>xbysspw20094</td>\n\t    </tr>\n\t    <tr>\n\t      <td>95</td>\n\t      <td>20095</td>\n\t      <td>xbysspw20095</td>\n\t    </tr>\n\t    <tr>\n\t      <td>96</td>\n\t      <td>20096</td>\n\t      <td>xbysspw20096</td>\n\t    </tr>\n\t    <tr>\n\t      <td>97</td>\n\t      <td>20097</td>\n\t      <td>xbysspw20097</td>\n\t    </tr>\n\t    <tr>\n\t      <td>98</td>\n\t      <td>20098</td>\n\t      <td>xbysspw20098</td>\n\t    </tr>\n\t    <tr>\n\t      <td>99</td>\n\t      <td>20099</td>\n\t      <td>xbysspw20099</td>\n\t    </tr>\n\t    <tr>\n\t      <td>100</td>\n\t      <td>20100</td>\n\t      <td>xbysspw20100</td>\n\t    </tr>\n\t  </tbody>\n\t</table>\n  </div>\n  <div class=\"tab-pane active in\" id=\"gfwpress\">\n    <p>服务器在美国迈阿密</p>\n\t<p>服务器地址为：45.77.74.148</p>\n\t<p>开放端口10001:10100用于GFW.press代理服务。</p>\n\t<p>密码长度10位，区分大小写。</p>\n\t<p>GFW.press各平台软件<a href=\"https://gfw.press/download.php\">下载</a></p>\n\t<br>\n\t<table class=\"table table-striped table-hover\">\n\t  <thead>\n\t    <tr>\n\t      <th>#</th>\n\t      <th>端口号</th>\n\t      <th>密码</th>\n\t    </tr>\n\t  </thead>\n\t  <tbody>\n\t    <tr>\n\t      <td>1</td>\n\t      <td>10001</td>\n\t      <td>dpCxJbRt7x</td>\n\t    </tr>\n\t    <tr>\n\t      <td>2</td>\n\t      <td>10002</td>\n\t      <td>f9qF9ngqrg</td>\n\t    </tr>\n\t    <tr>\n\t      <td>3</td>\n\t      <td>10003</td>\n\t      <td>nyCnX7xbPU</td>\n\t    </tr>\n\t    <tr>\n\t      <td>4</td>\n\t      <td>10004</td>\n\t      <td>chivfYAc4P</td>\n\t    </tr>\n\t    <tr>\n\t      <td>5</td>\n\t      <td>10005</td>\n\t      <td>MKYWCEi9ty</td>\n\t    </tr>\n\t    <tr>\n\t      <td>6</td>\n\t      <td>10006</td>\n\t      <td>9MWKTkbqy9</td>\n\t    </tr>\n\t    <tr>\n\t      <td>7</td>\n\t      <td>10007</td>\n\t      <td>zNEtW3Uqm4</td>\n\t    </tr>\n\t    <tr>\n\t      <td>8</td>\n\t      <td>10008</td>\n\t      <td>qiANK4woxE</td>\n\t    </tr>\n\t    <tr>\n\t      <td>9</td>\n\t      <td>10009</td>\n\t      <td>uHd7jqHi4t</td>\n\t    </tr>\n\t    <tr>\n\t      <td>10</td>\n\t      <td>10010</td>\n\t      <td>Mmw7PMkuoo</td>\n\t    </tr>\n\t    <tr>\n\t      <td>11</td>\n\t      <td>10011</td>\n\t      <td>KgXY3iW7k9</td>\n\t    </tr>\n\t    <tr>\n\t      <td>12</td>\n\t      <td>10012</td>\n\t      <td>3cVn9zpe9c</td>\n\t    </tr>\n\t    <tr>\n\t      <td>13</td>\n\t      <td>10013</td>\n\t      <td>FbYaXnC9zo</td>\n\t    </tr>\n\t    <tr>\n\t      <td>14</td>\n\t      <td>10014</td>\n\t      <td>9LpavMfj9w</td>\n\t    </tr>\n\t    <tr>\n\t      <td>15</td>\n\t      <td>10015</td>\n\t      <td>9r4HKdwXLu</td>\n\t    </tr>\n\t    <tr>\n\t      <td>16</td>\n\t      <td>10016</td>\n\t      <td>b3NrfMRXLW</td>\n\t    </tr>\n\t    <tr>\n\t      <td>17</td>\n\t      <td>10017</td>\n\t      <td>JEu3MVqqRC</td>\n\t    </tr>\n\t    <tr>\n\t      <td>18</td>\n\t      <td>10018</td>\n\t      <td>ExdFPfmrK4</td>\n\t    </tr>\n\t    <tr>\n\t      <td>19</td>\n\t      <td>10019</td>\n\t      <td>3FTPNepjEU</td>\n\t    </tr>\n\t    <tr>\n\t      <td>20</td>\n\t      <td>10020</td>\n\t      <td>PaxYKjN4R4</td>\n\t    </tr>\n\t    <tr>\n\t      <td>21</td>\n\t      <td>10021</td>\n\t      <td>z49thKeaoV</td>\n\t    </tr>\n\t    <tr>\n\t      <td>22</td>\n\t      <td>10022</td>\n\t      <td>3rPpx7TMpd</td>\n\t    </tr>\n\t    <tr>\n\t      <td>23</td>\n\t      <td>10023</td>\n\t      <td>3rPpx7TMpd</td>\n\t    </tr>\n\t    <tr>\n\t      <td>24</td>\n\t      <td>10024</td>\n\t      <td>RHET9xeJpW</td>\n\t    </tr>\n\t    <tr>\n\t      <td>25</td>\n\t      <td>10025</td>\n\t      <td>ipjxAp74MW</td>\n\t    </tr>\n\t    <tr>\n\t      <td>26</td>\n\t      <td>10026</td>\n\t      <td>XMaz3CWh7T</td>\n\t    </tr>\n\t    <tr>\n\t      <td>27</td>\n\t      <td>10027</td>\n\t      <td>KkY9Ljneek</td>\n\t    </tr>\n\t    <tr>\n\t      <td>28</td>\n\t      <td>10028</td>\n\t      <td>XgxamT7Yse</td>\n\t    </tr>\n\t    <tr>\n\t      <td>29</td>\n\t      <td>10029</td>\n\t      <td>Wda7VYcq94</td>\n\t    </tr>\n\t    <tr>\n\t      <td>30</td>\n\t      <td>10030</td>\n\t      <td>fJ4agssngm</td>\n\t    </tr>\n\t    <tr>\n\t      <td>31</td>\n\t      <td>10031</td>\n\t      <td>FcUPRJ4kHA</td>\n\t    </tr>\n\t    <tr>\n\t      <td>32</td>\n\t      <td>10032</td>\n\t      <td>AwXWRpTK7c</td>\n\t    </tr>\n\t    <tr>\n\t      <td>33</td>\n\t      <td>10033</td>\n\t      <td>MVoaXgq3Rw</td>\n\t    </tr>\n\t    <tr>\n\t      <td>34</td>\n\t      <td>10034</td>\n\t      <td>3T77vEbUec</td>\n\t    </tr>\n\t    <tr>\n\t      <td>35</td>\n\t      <td>10035</td>\n\t      <td>NMmjMz4XAy</td>\n\t    </tr>\n\t    <tr>\n\t      <td>36</td>\n\t      <td>10036</td>\n\t      <td>UoPxXNh9EU</td>\n\t    </tr>\n\t    <tr>\n\t      <td>37</td>\n\t      <td>10037</td>\n\t      <td>N4vjsNTYMK</td>\n\t    </tr>\n\t    <tr>\n\t      <td>38</td>\n\t      <td>10038</td>\n\t      <td>jsHNRb3hLo</td>\n\t    </tr>\n\t    <tr>\n\t      <td>39</td>\n\t      <td>10039</td>\n\t      <td>eYeRqd93bL</td>\n\t    </tr>\n\t    <tr>\n\t      <td>40</td>\n\t      <td>10040</td>\n\t      <td>p49fbwRmL4</td>\n\t    </tr>\n\t    <tr>\n\t      <td>41</td>\n\t      <td>10041</td>\n\t      <td>4dEaAcU39o</td>\n\t    </tr>\n\t    <tr>\n\t      <td>42</td>\n\t      <td>10042</td>\n\t      <td>UPPwps3KHz</td>\n\t    </tr>\n\t    <tr>\n\t      <td>43</td>\n\t      <td>10043</td>\n\t      <td>Mk4WKAqKFm</td>\n\t    </tr>\n\t    <tr>\n\t      <td>44</td>\n\t      <td>10044</td>\n\t      <td>3joEJeienb</td>\n\t    </tr>\n\t    <tr>\n\t      <td>45</td>\n\t      <td>10045</td>\n\t      <td>XkATxXFb7J</td>\n\t    </tr>\n\t    <tr>\n\t      <td>46</td>\n\t      <td>10046</td>\n\t      <td>YdC3Ai9MLj</td>\n\t    </tr>\n\t    <tr>\n\t      <td>47</td>\n\t      <td>10047</td>\n\t      <td>FHC7snrVaV</td>\n\t    </tr>\n\t    <tr>\n\t      <td>48</td>\n\t      <td>10048</td>\n\t      <td>WzRc4bxeCz</td>\n\t    </tr>\n\t    <tr>\n\t      <td>49</td>\n\t      <td>10049</td>\n\t      <td>c9ubcX3TVA</td>\n\t    </tr>\n\t    <tr>\n\t      <td>50</td>\n\t      <td>10050</td>\n\t      <td>7iw9yvKanL</td>\n\t    </tr>\n\t    <tr>\n\t      <td>51</td>\n\t      <td>10051</td>\n\t      <td>aRtynHNmY3</td>\n\t    </tr>\n\t    <tr>\n\t      <td>52</td>\n\t      <td>10052</td>\n\t      <td>T4NekqWLqo</td>\n\t    </tr>\n\t    <tr>\n\t      <td>53</td>\n\t      <td>10053</td>\n\t      <td>3iVjayRbhr</td>\n\t    </tr>\n\t    <tr>\n\t      <td>54</td>\n\t      <td>10054</td>\n\t      <td>NLCUvUya9m</td>\n\t    </tr>\n\t    <tr>\n\t      <td>55</td>\n\t      <td>10055</td>\n\t      <td>TPxo3YpPab</td>\n\t    </tr>\n\t    <tr>\n\t      <td>56</td>\n\t      <td>10056</td>\n\t      <td>uF9h3FoFFF</td>\n\t    </tr>\n\t    <tr>\n\t      <td>57</td>\n\t      <td>10057</td>\n\t      <td>Vnhna7XPTJ</td>\n\t    </tr>\n\t    <tr>\n\t      <td>58</td>\n\t      <td>10058</td>\n\t      <td>3eacnKuMwm</td>\n\t    </tr>\n\t    <tr>\n\t      <td>59</td>\n\t      <td>10059</td>\n\t      <td>gf4qhsnsM3</td>\n\t    </tr>\n\t    <tr>\n\t      <td>60</td>\n\t      <td>10060</td>\n\t      <td>hJFnKUt7tC</td>\n\t    </tr>\n\t    <tr>\n\t      <td>61</td>\n\t      <td>10061</td>\n\t      <td>ALCVKbJ9YE</td>\n\t    </tr>\n\t    <tr>\n\t      <td>62</td>\n\t      <td>10062</td>\n\t      <td>Th4dicVMXy</td>\n\t    </tr>\n\t    <tr>\n\t      <td>63</td>\n\t      <td>10063</td>\n\t      <td>4KYeuK4wXw</td>\n\t    </tr>\n\t    <tr>\n\t      <td>64</td>\n\t      <td>10064</td>\n\t      <td>k7HkHcyu4x</td>\n\t    </tr>\n\t    <tr>\n\t      <td>65</td>\n\t      <td>10065</td>\n\t      <td>hwaYRP4fXo</td>\n\t    </tr>\n\t    <tr>\n\t      <td>66</td>\n\t      <td>10066</td>\n\t      <td>vVtsq9CdYF</td>\n\t    </tr>\n\t    <tr>\n\t      <td>67</td>\n\t      <td>10067</td>\n\t      <td>j3NrpiKakt</td>\n\t    </tr>\n\t    <tr>\n\t      <td>68</td>\n\t      <td>10068</td>\n\t      <td>n7FyUwwx7m</td>\n\t    </tr>\n\t    <tr>\n\t      <td>69</td>\n\t      <td>10069</td>\n\t      <td>tRngiCz7aJ</td>\n\t    </tr>\n\t    <tr>\n\t      <td>70</td>\n\t      <td>10070</td>\n\t      <td>VgUgn4rsHs</td>\n\t    </tr>\n\t    <tr>\n\t      <td>71</td>\n\t      <td>10071</td>\n\t      <td>HhugAhmtL7</td>\n\t    </tr>\n\t    <tr>\n\t      <td>72</td>\n\t      <td>10072</td>\n\t      <td>rkbXAiLr77</td>\n\t    </tr>\n\t    <tr>\n\t      <td>73</td>\n\t      <td>10073</td>\n\t      <td>uJ4UPTxLCT</td>\n\t    </tr>\n\t    <tr>\n\t      <td>74</td>\n\t      <td>10074</td>\n\t      <td>jbU3kmfysU</td>\n\t    </tr>\n\t    <tr>\n\t      <td>75</td>\n\t      <td>10075</td>\n\t      <td>Mpqkcu7fAq</td>\n\t    </tr>\n\t    <tr>\n\t      <td>76</td>\n\t      <td>10076</td>\n\t      <td>4EzApKXCpU</td>\n\t    </tr>\n\t    <tr>\n\t      <td>77</td>\n\t      <td>10077</td>\n\t      <td>4WKJueiyYo</td>\n\t    </tr>\n\t    <tr>\n\t      <td>78</td>\n\t      <td>10078</td>\n\t      <td>NjgJfPy7uC</td>\n\t    </tr>\n\t    <tr>\n\t      <td>79</td>\n\t      <td>10079</td>\n\t      <td>UYEHiJ7Pyq</td>\n\t    </tr>\n\t    <tr>\n\t      <td>80</td>\n\t      <td>10080</td>\n\t      <td>7FHkRkaT9U</td>\n\t    </tr>\n\t    <tr>\n\t      <td>81</td>\n\t      <td>10081</td>\n\t      <td>wMh7oPmTvk</td>\n\t    </tr>\n\t    <tr>\n\t      <td>82</td>\n\t      <td>10082</td>\n\t      <td>LCVhd9V743</td>\n\t    </tr>\n\t    <tr>\n\t      <td>83</td>\n\t      <td>10083</td>\n\t      <td>zhVodwoio7</td>\n\t    </tr>\n\t    <tr>\n\t      <td>84</td>\n\t      <td>10084</td>\n\t      <td>jMUL3wvpnq</td>\n\t    </tr>\n\t    <tr>\n\t      <td>85</td>\n\t      <td>10085</td>\n\t      <td>e3HxoAc3mg</td>\n\t    </tr>\n\t    <tr>\n\t      <td>86</td>\n\t      <td>10086</td>\n\t      <td>yXNhLdM7go</td>\n\t    </tr>\n\t    <tr>\n\t      <td>87</td>\n\t      <td>10087</td>\n\t      <td>ggvgq4bCEF</td>\n\t    </tr>\n\t    <tr>\n\t      <td>88</td>\n\t      <td>10088</td>\n\t      <td>s9wakLJVxh</td>\n\t    </tr>\n\t    <tr>\n\t      <td>89</td>\n\t      <td>10089</td>\n\t      <td>Liq3eexieA</td>\n\t    </tr>\n\t    <tr>\n\t      <td>90</td>\n\t      <td>10090</td>\n\t      <td>AisYqPN4Ky</td>\n\t    </tr>\n\t    <tr>\n\t      <td>91</td>\n\t      <td>10091</td>\n\t      <td>jJgzx7HFsJ</td>\n\t    </tr>\n\t    <tr>\n\t      <td>92</td>\n\t      <td>10092</td>\n\t      <td>7mzFu7s3JT</td>\n\t    </tr>\n\t    <tr>\n\t      <td>93</td>\n\t      <td>10093</td>\n\t      <td>KHN7EykUn</td>\n\t    </tr>\n\t    <tr>\n\t      <td>94</td>\n\t      <td>10094</td>\n\t      <td>bU3bHoVKUP</td>\n\t    </tr>\n\t    <tr>\n\t      <td>95</td>\n\t      <td>10095</td>\n\t      <td>xVkakE7CNL</td>\n\t    </tr>\n\t    <tr>\n\t      <td>96</td>\n\t      <td>10096</td>\n\t      <td>z4gULa3LzJ</td>\n\t    </tr>\n\t    <tr>\n\t      <td>97</td>\n\t      <td>10097</td>\n\t      <td>voE9pHLWwt</td>\n\t    </tr>\n\t    <tr>\n\t      <td>98</td>\n\t      <td>10098</td>\n\t      <td>seEvARnU3g</td>\n\t    </tr>\n\t    <tr>\n\t      <td>99</td>\n\t      <td>10099</td>\n\t      <td>uJnqorwzC3</td>\n\t    </tr>\n\t    <tr>\n\t      <td>100</td>\n\t      <td>10100</td>\n\t      <td>qo3nbNaufN</td>\n\t    </tr>\n\t  </tbody>\n\t</table>\n  </div>\n</div>\n"

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

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\" (click)=\"toggleState()\">\n            <span class=\"sr-only\">导航条</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n      <a class=\"navbar-brand\" href=\"#\">账号信息发布</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\" [ngClass]=\"{ 'in': isIn }\">\n      <ul class=\"nav navbar-nav navbar-left\">\n        <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">主页</a></li>\n      </ul>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <!-- <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/dashboard']\">VPN发布页</a></li>\n            <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\"><a [routerLink]=\"['/profile']\">用户信息</a></li>\n          -->\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">登录</a></li>\n        <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">注册</a></li>\n        <!-- <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">登出</a></li>-->\n        <li class=\"dropdown\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">用户<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['/dashboard']\">VPN发布页</a></li>\n            <li *ngIf=\"authService.loggedIn()\"><a [routerLink]=\"['/profile']\">用户信息</a></li>\n            <li class=\"divider\"></li>\n            <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">登出</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n    <!--/.nav-collapse -->\n  </div>\n</nav>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
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
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
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
            return 'http://localhost:8080/' + ep;
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