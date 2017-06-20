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
exports.push([module.i, ".router-outlet {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n    padding-bottom: 120px;\r\n    position: relative;\r\n}\r\n\r\n.container {\r\n    min-height: 82%;\r\n    position: relative;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n<app-chat *ngIf=\"checkLogIn()\"></app-chat>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.checkLogIn = function () {
        return this.authService.loggedIn();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ap_angular2_fullcalendar__ = __webpack_require__("../../../../ap-angular2-fullcalendar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ap_angular2_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ap_angular2_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_component__ = __webpack_require__("../../../../../src/app/components/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_help_help_component__ = __webpack_require__("../../../../../src/app/components/help/help.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_help_accordion_accordion_component__ = __webpack_require__("../../../../../src/app/components/help/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_login_guard__ = __webpack_require__("../../../../../src/app/guards/login.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__guards_admin_guard__ = __webpack_require__("../../../../../src/app/guards/admin.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_chat_chat_component__ = __webpack_require__("../../../../../src/app/components/chat/chat.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_login_guard__["a" /* LoginGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_login_guard__["a" /* LoginGuard */]] },
    { path: 'help', component: __WEBPACK_IMPORTED_MODULE_18__components_help_help_component__["a" /* HelpComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_26__guards_admin_guard__["a" /* AdminGuard */]] },
    { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_27__components_chat_chat_component__["a" /* ChatComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_15_ap_angular2_fullcalendar__["CalendarComponent"],
            __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_help_help_component__["a" /* HelpComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_help_accordion_accordion_component__["a" /* AccordionComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_help_accordion_accordion_component__["b" /* AccordionGroupComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_chat_chat_component__["a" /* ChatComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_21__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_22__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_25__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_26__guards_admin_guard__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_24__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_20__guards_login_guard__["a" /* LoginGuard */], __WEBPACK_IMPORTED_MODULE_23__services_chat_service__["a" /* ChatService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkbox {\r\n  width: 1.5em;\r\n  height: auto;\r\n}\r\n\r\n.right {\r\n  width: 40%;\r\n  position: relative;\r\n  float: right;\r\n}\r\n\r\n.form {\r\n  float: right;\r\n  margin-right: 16px;\r\n}\r\n\r\n#input {\r\n  padding-right: 16px;\r\n}\r\n\r\n#searchDiv {\r\n  float: right;\r\n  padding: 0px;\r\n}\r\n\r\n#formSearch {\r\n  width: 40%;\r\n  float: right;\r\n}\r\n\r\n.form-group {\r\n  width: auto;\r\n}\r\n\r\n.hover {\r\n  border-radius: 0px;\r\n  border-top: 0px;\r\n}\r\n\r\n.hover:hover {\r\n  background-color: #f8f5f0\r\n}\r\n\r\n.desc {\r\n  width: auto;\r\n}\r\n\r\n.table-text {\r\n  width: 15em;\r\n}\r\n\r\n.table-name {\r\n  width: 6%;\r\n}\r\n\r\n.table-last {\r\n  width: 160px;\r\n}\r\n\r\n.form-control {\r\n  width: 50%;\r\n}\r\n\r\n.search-box {\r\n  position: absolute;\r\n  width: 50%;\r\n  z-index: 99999;\r\n}\r\n\r\n.col-md-4 {\r\n  position: relative;\r\n  width: 100%;\r\n  margin-top: 2em;\r\n}\r\n\r\n.panel-primary {\r\n  width: 40%;\r\n  height: 5%;\r\n  float: left;\r\n}\r\n\r\n.panel-success {\r\n  float: right;\r\n  width: 100%;\r\n  height: 5%;\r\n}\r\n\r\n.btn-group-vertical {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  border-radius: 0px;\r\n  display: block;\r\n  width: 40%;\r\n}\r\n\r\n.btn {\r\n  border-radius: 0px;\r\n  float: right;\r\n}\r\n\r\n.btn-primary {\r\n  display: inline-block;\r\n  border-radius: 6px;\r\n  margin-bottom: 10px;\r\n  float: right;\r\n}\r\n\r\n.btn-sm {\r\n  margin-bottom: 5px;\r\n  border-radius: 3px;\r\n  float: right;\r\n  margin-right: 0.5em;\r\n}\r\n\r\n.btn-xs {\r\n  margin-left: 0.6em;\r\n  min-width: 4.5em;\r\n  float: right;\r\n  border-radius: 3px;\r\n}\r\n\r\n.btn-ok {\r\n  float: right;\r\n}\r\n\r\n.btn-default {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btn-group-vertical>.btn:not(:first-child):not(:last-child) {\r\n  border-radius: 6px;\r\n}\r\n\r\n.btn-group-vertical>.btn:first-child:not(:last-child) {\r\n  border-radius: 6px;\r\n}\r\n\r\n.btn-group-vertical>.btn:last-child:not(:first-child) {\r\n  border-radius: 6px;\r\n}\r\n\r\n.form-horizontal {\r\n  padding-top: 0em;\r\n  width: 100%;\r\n  float: left;\r\n}\r\n\r\n.table-container {\r\n  width: 100%;\r\n  display: inline-block;\r\n  position: relative;\r\n  margin-top: 2em;\r\n}\r\n\r\n.form-control-left {\r\n  margin: auto;\r\n}\r\n\r\n.control-label {\r\n  text-align: left;\r\n}\r\n\r\n.table-hover {\r\n  position: relative;\r\n  margin-top: 10em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\r\n  <form id=\"form\">\r\n    <div class=\"search-box\" id=\"search-component\">\r\n      <h4>Hae käyttäjiä</h4>\r\n      <input #searchBox id=\"search-box\" name=\"search-box\" (keyup)=\"searchTerm$.next($event.target.value)\" class=\"form-control\" autocomplete=\"off\" />\r\n      <div *ngIf=\"users\">\r\n        <option class=\"form-control hover\" *ngFor=\"let user of users\" (click)=\"onSelect(user); users=null; search = false;\" onclick=\"document.getElementById('form').reset()\">{{ user.name }}</option>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n\r\n  <div class=\"form-horizontal right\" id=\"formSearch\" *ngIf=\"!selectedUser\">\r\n    <h4>Hae tapahtumia ajalla</h4>\r\n    <div class=\"form-group\">\r\n      <label class=\"col-lg-2 control-label\">Alkamisaika</label>\r\n      <input type=\"datetime-local\" step=\"1800\" class=\"form-control form\" id=\"input\" [(ngModel)]=\"start\" name=\"start\" required>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"col-lg-2 control-label \">Päättymisaika</label>\r\n      <input type=\"datetime-local\" step=\"1800\" class=\"form-control form\" id=\"input\" [(ngModel)]=\"end\" name=\"end\" required>\r\n    </div>\r\n    <input type=\"submit\" (click)=\"eventSearch(start,end)\" class=\"btn btn-primary\" value=\"Päivitä\">\r\n  </div>\r\n\r\n  <form class=\"form-horizontal right\" *ngIf=\"selectedUser\" id=\"formSearch\">\r\n    <div class=\"panel panel-success\">\r\n      <div class=\"panel-heading\">\r\n        <legend class=\"panel-title\">{{selectedUser.name}}</legend>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"form-group\">\r\n          <label class=\"col-lg-2 control-label\">Nimi:</label>\r\n          <input type=\"text\" [(ngModel)]=\"selectedUser.name\" id=\"inputName\" name=\"name\" placeholder=\"{{selectedUser.name}}\" text=\"\" class=\"form-control form\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-lg-2 control-label\">Käyttäjänimi:</label>\r\n          <input type=\"text\" [(ngModel)]=\"selectedUser.username\" name=\"username\" id=\"inputUsername\" placeholder=\"{{selectedUser.username}}\" class=\"form-control form\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-lg-2 control-label\">Email:</label>\r\n          <input type=\"email\" [(ngModel)]=\"selectedUser.email\" name=\"email\" id=\"inputEmail\" placeholder=\"{{selectedUser.email}\" class=\"form-control form\" />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-lg-2 control-label\">Admin:</label>\r\n          <input type=\"checkbox\" [(ngModel)]=\"selectedUser.admin\" name=\"admin\" id=\"inputAdmin\" placeholder=\"{{selectedUser.admin}}\" class=\"checkbox\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"reset\" (click)=\"selectedUser = null; getConfirms()\" class=\"btn btn-default btn-xs\">Peruuta</button>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-xs\" (click)=\"updateUser()\">Tallenna</button>\r\n  </form>\r\n</div>\r\n\r\n<div *ngIf=\"events?.length && !selectedUser && !search\" class=\"form-horizontal\">\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <legend>\r\n        Hyväksymättömät varaukset\r\n      </legend>\r\n      <tr>\r\n        <th>Asiakas</th>\r\n        <th>Toimenpide</th>\r\n        <th>Aloitusaika</th>\r\n        <th>Päättymisaika</th>\r\n        <th>Lisätietoja</th>\r\n        <th>Hyväksy/Poista</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let event of events\">\r\n        <td class=\"table-name\">{{event.user}}</td>\r\n        <td class=\"desc\">{{event.title}}</td>\r\n        <td class=\"desc\">{{event.start}}</td>\r\n        <td class=\"desc\">{{event.end}}</td>\r\n        <td class=\"table-text\">{{event.description}}</td>\r\n        <td class=\"table-last\"><button (click)=\"deleteEvent(event)\" class=\"btn btn-danger btn-sm\">Poista</button>\r\n          <button (click)=\"confirmEvent(event)\" class=\"btn btn-success btn-sm\" *ngIf=\"!event.confirm\">Hyväksy</button></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<div class=\"table-container\" *ngIf=\"selectedUser\">\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th>Asiakas</th>\r\n        <th>Toimenpide</th>\r\n        <th>Aloitusaika</th>\r\n        <th>Päättymisaika</th>\r\n        <th>Lisätietoja</th>\r\n        <th>Hyväksy/Poista</th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let event of events\">\r\n        <td class=\"table-name\">{{event.user}}</td>\r\n        <td class=\"desc\">{{event.title}}</td>\r\n        <td class=\"desc\">{{event.start}}</td>\r\n        <td class=\"desc\">{{event.end}}</td>\r\n        <td class=\"table-text\">{{event.description}}</td>\r\n        <td class=\"table-last\"><button (click)=\"(deleteEvent(event))\" class=\"btn btn-danger btn-sm\">Poista</button>\r\n          <button (click)=\"confirmEvent(event)\" class=\"btn btn-success btn-sm\" *ngIf=\"!event.confirm\">Hyväksy</button></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<div class=\"table-container\" *ngIf=\"search\">\r\n  <table class=\"table table-hover \">\r\n    <thead>\r\n      <tr>\r\n        <th>Asiakas</th>\r\n        <th>Toimenpide</th>\r\n        <th>Aloitusaika</th>\r\n        <th>Päättymisaika</th>\r\n        <th>Lisätietoja</th>\r\n        <th>Hyväksy/Poista</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let event of events\">\r\n        <td class=\"table-name\">{{event.user}}</td>\r\n        <td class=\"desc\">{{event.title}}</td>\r\n        <td class=\"desc\">{{event.start}}</td>\r\n        <td class=\"desc\">{{event.end}}</td>\r\n        <td class=\"table-text\">{{event.description}}</td>\r\n        <td class=\"table-last\"><button (click)=\"(deleteEvent(event))\" class=\"btn btn-danger btn-sm\">Poista</button>\r\n          <button (click)=\"confirmEvent(event)\" class=\"btn btn-success btn-sm\" *ngIf=\"!event.confirm\">Hyväksy</button></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_search_service__ = __webpack_require__("../../../../../src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminComponent = (function () {
    function AdminComponent(authService, flashMessage, searchService) {
        var _this = this;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.searchService = searchService;
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.searchService.search(this.searchTerm$).subscribe(function (users) { return _this.users = users; });
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getConfirms();
        this.start = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date()).format('YYYY-MM-DD[T]HH:mm');
        this.end = __WEBPACK_IMPORTED_MODULE_2_moment__(new Date()).format('YYYY-MM-DD[T]HH:mm');
    };
    AdminComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
        this.editUser = null;
        this.onEvents();
    };
    AdminComponent.prototype.editSelected = function () {
        this.editUser = this.selectedUser;
    };
    AdminComponent.prototype.updateUser = function () {
        this.authService.update(this.selectedUser).subscribe();
        location.reload();
    };
    AdminComponent.prototype.onEvents = function () {
        var _this = this;
        this.authService.getAllEvents(this.selectedUser._id).subscribe(function (events) {
            _this.events = events;
            _this.events.forEach(function (event) {
                event.start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.start).format('DD.MM.YYYY [klo] HH:mm');
                event.end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.end).format('DD.MM.YYYY [klo] HH:mm');
                _this.authService.getUserById(event).subscribe(function (user) {
                    if (user != null) {
                        _this.user = user;
                        event.user = _this.user.username;
                    }
                    else
                        event.user = 'Hallinnon luoma';
                });
            });
        });
    };
    AdminComponent.prototype.deleteEvent = function (event) {
        var _this = this;
        this.authService.delEvent(event._id).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Tapahtuma poistettu onnistuneesti', { cssClass: 'alert-success', timeout: 3000 });
                _this.events.splice(_this.events.indexOf(event), 1);
            }
            else {
                _this.flashMessage.show('Jokin meni vikaan', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    AdminComponent.prototype.getConfirms = function () {
        var _this = this;
        this.authService.getConfirmationEvents().subscribe(function (events) {
            _this.events = events;
            _this.events.forEach(function (event) {
                event.start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.start).format('DD.MM.YYYY [klo] HH:mm');
                event.end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.end).format('DD.MM.YYYY [klo] HH:mm');
                _this.authService.getUserById(event).subscribe(function (user) {
                    _this.user = user;
                    if (user != null) {
                        event.user = _this.user.username;
                    }
                    else
                        event.user = 'Hallinnon luoma';
                });
            });
            return _this.events;
        });
    };
    AdminComponent.prototype.confirmEvent = function (event) {
        this.authService.confirmEvent(event._id).subscribe();
        this.events.splice(this.events.indexOf(event), 1);
        this.flashMessage.show('Varaus hyväksytty', { cssClass: 'alert-success', timeout: 3000 });
    };
    AdminComponent.prototype.eventSearch = function (start, end) {
        var _this = this;
        end = __WEBPACK_IMPORTED_MODULE_2_moment__(this.end).format('YYYY-MM-DD[T]HH:mm');
        start = __WEBPACK_IMPORTED_MODULE_2_moment__(this.start).format('YYYY-MM-DD[T]HH:mm');
        var userId = null;
        var admin = true;
        this.authService.getEvents(start, end, userId, admin).subscribe(function (events) {
            _this.events = events;
            _this.events.forEach(function (event) {
                event.start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.start).format('DD.MM.YYYY [klo] HH:mm');
                event.end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.end).format('DD.MM.YYYY [klo] HH:mm');
                _this.authService.getUserById(event).subscribe(function (user) {
                    if (user != null) {
                        _this.user = user;
                        event.user = _this.user.username;
                    }
                    else
                        event.user = 'Hallinnon luoma';
                });
            });
        });
        this.search = true;
    };
    AdminComponent.prototype.getEventUser = function (event) {
        var _this = this;
        this.authService.getUserById(event).subscribe(function (user) {
            _this.user = user;
        });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/components/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_search_service__["a" /* SearchService */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n#chatti {\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 0;\r\n    padding: 0;\r\n    margin-right: 5px;\r\n    z-index: 1000;\r\n    width: auto;\r\n    min-width: 300px;\r\n    max-width: 400px;\r\n}\r\n\r\n#chatcont {\r\n    position: fixed;\r\n    margin-bottom: 0;\r\n    bottom: 0;\r\n    z-index: 1000;\r\n}\r\n\r\n.panel-primary {\r\n    border-color: #555;\r\n    box-shadow: 0 0 6px rgba(0, 0, 0, .5);\r\n    border-radius: 3px;\r\n    border: 0.3px solid grey;\r\n}\r\n\r\n.chat li {\r\n    margin-bottom: 4px;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px dotted #B3A9A9;\r\n}\r\n\r\n.chat li.left .chat-body {\r\n    margin-left: 60px;\r\n}\r\n\r\n.chat li.right .chat-body {\r\n    margin-right: 20px;\r\n}\r\n\r\n.chat li .chat-body p {\r\n    margin: 0;\r\n    color: #777777;\r\n}\r\n\r\n.panel {\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.panel-heading {\r\n    border-bottom: 0;\r\n    border-radius: 2px;\r\n}\r\n\r\n.panel .slidedown .glyphicon,\r\n.chat .glyphicon {\r\n    margin-right: 5px;\r\n    border: 0;\r\n}\r\n\r\n.panel-body {\r\n    height: auto;\r\n    width: auto;\r\n    max-height: 290px;\r\n    max-width: 400px;\r\n    overflow: auto;\r\n    padding: 5px;\r\n    border-radius: 3px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n#btn-chat {\r\n    line-height: 21px;\r\n    border-radius: 3px;\r\n    margin-left: 3px;\r\n}\r\n\r\n.btn-xs {\r\n    text-transform: none;\r\n    background-color: #325d88;\r\n    font-size: 11px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 12px;\r\n    background-color: #F5F5F5;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\r\n    background-color: #555;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chatcont\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-5\" id=\"chatti\">\r\n                <div class=\"panel panel-primary\" *ngIf=\"joinned; else createtemplate\">\r\n                    <div class=\"panel-heading\" (click)=\"togglehide()\">\r\n                        <span class=\"glyphicon glyphicon-comment\"></span> Livechat\r\n                        <div class=\"btn-group pull-right\">\r\n                            <button type=\"button\" class=\"btn btn-default btn-xs\" (click)=\"logout(); togglehide()\">\r\n                              X\r\n                          </button>\r\n                        </div>\r\n                    </div>\r\n                    <div #scrollMe class=\"panel-body\" [hidden]=\"!Hidden\">\r\n                        <ul class=\"chat\">\r\n                            <li *ngFor=\"let c of chats\">\r\n                                <div class=\"left clearfix\" *ngIf=\"c.nickname===msgData.nickname; else rightchat\">\r\n                                    <div class=\"chat-body clearfix\">\r\n                                        <div class=\"header\">\r\n                                            <strong class=\"primary-font\">{{ c.nickname }}</strong> <small class=\"pull-right text-muted\">\r\n                                          <span class=\"glyphicon glyphicon-time\"></span>{{ c.updated_at | date: 'medium' }}</small>\r\n                                        </div>\r\n                                        <p>{{ c.message }}</p>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-template #rightchat>\r\n                                    <div class=\"right clearfix\">\r\n\r\n                                        <div class=\"chat-body clearfix\">\r\n                                            <div class=\"header\">\r\n                                                <small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>{{ c.updated_at | date: 'medium' }}</small>\r\n                                                <strong class=\"pull-right primary-font\">{{ c.nickname }}</strong>\r\n                                            </div>\r\n                                            <p>{{ c.message }}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"panel-footer\" [hidden]=\"!Hidden\">\r\n                        <form (ngSubmit)=\"sendMessage()\" #msgForm=\"ngForm\">\r\n                            <div class=\"input-group\">\r\n                                <input type=\"hidden\" [(ngModel)]=\"msgData.room\" name=\"room\" />\r\n                                <input type=\"hidden\" [(ngModel)]=\"msgData.nickname\" name=\"nickname\" />\r\n                                <input id=\"btn-input\" type=\"text\" [(ngModel)]=\"msgData.message\" name=\"message\" class=\"form-control input-sm\" placeholder=\"Type your message here...\" required=\"\" />\r\n                                <span class=\"input-group-btn\">\r\n                              <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\" [disabled]=\"!msgForm.form.valid\">\r\n                                  Lähetä</button>\r\n                          </span>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n                <ng-template #createtemplate>\r\n                    <div *ngIf=\"Admin; else joinroom\">\r\n                        <div class=\"panel panel-primary\">\r\n                            <div class=\"panel-body\">\r\n                                <h4 (click)=\"togglehide()\" [hidden]=\"Hidden\">Avaa Keskustelu</h4>\r\n                                <h4 (click)=\"togglehide()\" [hidden]=\"!Hidden\">Sulje Keskustelu</h4>\r\n                                <div class=\"panel-body\" [hidden]=\"!Hidden\">\r\n                                    <h1>Luo Keskustelu</h1>\r\n                                    <form (ngSubmit)=\"admincreateRoom()\" #joinForm=\"ngForm\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newUser.nickname\" name=\"nickname\" required=\"\" />\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!joinForm.form.valid\">Luo</button>\r\n                                        </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <ng-template #joinroom>\r\n                        <div class=\"panel panel-primary\">\r\n                            <div class=\"panel-body\">\r\n                                <h4 (click)=\"togglehide(); createRoom()\" [hidden]=\"Hidden\">Ota yhteys tukeen</h4>\r\n                                <h4 (click)=\"togglehide()\" [hidden]=\"!Hidden\">Sulje Keskustelu</h4>\r\n                                <!--div class=\"panel-body\" [hidden]=\"!Hidden\">\r\n                                    <h1>Luo Keskustelu</h1>\r\n                                    <form (ngSubmit)=\"createRoom()\" #joinForm=\"ngForm\">\r\n                                        <div class=\"form-group\">\r\n                                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newUser.nickname\" name=\"nickname\" required=\"\" />\r\n                                        </div>\r\n                                        <div class=\"form-group\">\r\n                                            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!joinForm.form.valid\">Luo</button>\r\n                                        </div>\r\n                                    </form>\r\n                                </div-->\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </ng-template>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_chat_service__ = __webpack_require__("../../../../../src/app/services/chat.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatComponent = (function () {
    function ChatComponent(chatService, authservice, flashMessage) {
        this.chatService = chatService;
        this.authservice = authservice;
        this.flashMessage = flashMessage;
        this.joinned = false;
        this.newUser = { nickname: '', room: '' };
        this.msgData = { room: '', nickname: '', message: '' };
        this.socket = __WEBPACK_IMPORTED_MODULE_4_socket_io_client__('');
    }
    ChatComponent.prototype.ngOnInit = function () {
        this.user = this.authservice.getUser();
        this.Admin = this.user.admin;
        if (this.Admin) {
            this.newUser.nickname = 'Asiakaspalvelu ' + JSON.parse(localStorage.getItem("user")).name;
        }

        else {
            this.newUser.nickname = JSON.parse(localStorage.getItem("user")).name;
        }
        var user = JSON.parse(localStorage.getItem("userr"));
        if (user !== null) {
            this.msgData = { room: null, nickname: this.newUser.nickname, message: '' };

            this.joinned = true;
            this.scrollToBottom();
        }
        //###### SOCKETS ########
        this.socket.on('new-message', function (data) {
            if (data.message.room === JSON.parse(localStorage.getItem("userr")).room) {
                this.chats.push(data.message);
                this.msgData = { room: this.newUser.room, nickname: user.nickname, message: '' };
                this.scrollToBottom();
            }
        }.bind(this));

        //User leave callback
        this.socket.on('userleavedroom', function (data) {
            this.chats = null;
            this.flashMessage.show('Asiakas on poistunut keskustelusta', { cssClass: 'alert-danger', timeout: 3000 });
        }.bind(this));
        //Admin connect callback
        this.socket.on('adminconn-response', function (data) {
            localStorage.setItem("userr", JSON.stringify(this.newUser));
        }.bind(this));
        //Admin leave callback
        this.socket.on('releasesocket', function (data) {
            if (!this.user.admin) {
                this.socket.emit('userdisconnect', { room: data.room, userleaved: false });
                this.newUser.room = '';
                this.msgData.room = '';
                this.flashMessage.show('Asiakaspalvelussa tapahtui odottamaton virhe, yhteys on katkennut.', { cssClass: 'alert-danger', timeout: 6000 });
                this.Hidden = false;
                this.joinned = false;
                localStorage.setItem("userr", JSON.stringify(this.newUser));
            }
        }.bind(this));
        //User connection callback

        this.socket.on('userconn-response', function (data) {
            if (data.available == true) {
                this.newUser.room = data.room;
                this.msgData.room = data.room;
                this.joinned = true;
                if (this.user.admin) {
                    this.socket.emit('adminjoin', data.room);
                    localStorage.setItem("userr", JSON.stringify(this.newUser));
                    this.getChatByRoom(this.newUser.room);
                }
                else {
                    localStorage.setItem("userr", JSON.stringify(this.newUser));
                    this.getChatByRoom(this.newUser.room);
                    this.flashMessage.show('Yhditetty asiakaspalveluun', { cssClass: 'alert-success', timeout: 3000 });
                }
            }
            else {
                this.flashMessage.show('Henkilökuntaa ei ole tavoitettavissa', { cssClass: 'alert-danger', timeout: 3000 });
                this.Hidden = false;
                this.joinned = false;
            }
        }.bind(this));
        //Ngoninit END
    };
    ChatComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    };
    ChatComponent.prototype.getChatByRoom = function (room) {
        var _this = this;
        this.chatService.getChatByRoom(room).then(function (res) {
            _this.chats = res;
        }, function (err) {
            console.log(err);
        });
    };
    ChatComponent.prototype.admincreateRoom = function () {
        var date = new Date();
        this.msgData = { room: this.newUser.room, nickname: this.newUser.nickname, message: '' };
        this.newUser.room = this.user.username;
        localStorage.setItem("userr", JSON.stringify(this.newUser));
        this.socket.emit('admincreateroom', { room: this.newUser.room, nickname: this.newUser.nickname, message: 'Join this room',
            updated_at: date, user: this.user.username });
        this.joinned = true;
    };
    ChatComponent.prototype.createRoom = function () {
        var date = new Date();
        this.newUser.nickname = this.user.username;
        this.socket.emit('userjoin', { room: this.newUser.room, nickname: this.newUser.nickname, message: 'Join this room',
            updated_at: date, user: this.user.username });
    };
    ChatComponent.prototype.sendMessage = function () {
        var _this = this;
        if (this.msgData.room && this.msgData.message && this.msgData.nickname) {
            this.chatService.saveChat(this.msgData).then(function (result) {
                _this.socket.emit('save-message', result);
                _this.msgData.message = '';
            }, function (err) {
                console.log(err);
            });
        }
    };
    ChatComponent.prototype.logout = function () {
        var date = new Date();
        var user = JSON.parse(localStorage.getItem("userr"));
        if (this.user.admin) {
            this.socket.emit('adminleaveroom', { room: user.room, nickname: user.nickname, message: 'Left this room', updated_at: date });
        }
        else {
            this.socket.emit('userdisconnect', { room: user.room, nickname: user.nickname, message: 'Left this room', updated_at: date });
        }
        this.chats = null;

        this.newUser.room = "";
        this.joinned = false;
        this.Hidden = true;
        localStorage.removeItem("userr");

    };
    ChatComponent.prototype.togglehide = function () {
        if (this.Hidden == true) {
            this.Hidden = false;
        }
        else {
            this.Hidden = true;
        }
    };
    return ChatComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('scrollMe'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], ChatComponent.prototype, "myScrollContainer", void 0);
ChatComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/components/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_chat_service__["a" /* ChatService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ChatComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-form {\r\n    padding-top: 00px;\r\n}\r\n\r\n.btn-primary {\r\n    display: inline-block;\r\n    margin: 10px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    box-shadow: 1px 1.5px 1px #777777;\r\n}\r\n\r\n.calendar-container {\r\n  position: relative;\r\n}\r\n\r\n.calendar-div {\r\n    padding-top: 28px;\r\n    padding-bottom: 10px;\r\n    width: 65%;\r\n    display: inline-block;\r\n    position: relative;\r\n    vertical-align: top;\r\n}\r\n\r\n.form-group {\r\n    padding-top: 2px;\r\n}\r\n\r\n.eventinfo {\r\n    padding: 30px;\r\n    padding-top: 00px;\r\n    display: inline-block;\r\n    position: relative;\r\n    vertical-align: top;\r\n    /*width: 35%;*/\r\n}\r\n\r\n.clearfix {\r\n    clear: both;\r\n}\r\n\r\nfooter {\r\n    padding-top: 40px;\r\n}\r\n\r\n.form-control {\r\n    display: inline-block;\r\n    margin: 0;\r\n    vertical-align: middle;\r\n}\r\n\r\n#colorHelper {\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    background-color: #3a87ad;\r\n    height: 46px;\r\n    width: 20%;\r\n    border: 1px solid #666666;\r\n    border-radius: 4px;\r\n    margin-left: 2.5%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar-container\">\r\n\r\n    <div class=\"calendar-div\">\r\n        <angular2-fullcalendar [options]=\"options\" id=\"myCalendar\"></angular2-fullcalendar>\r\n    </div>\r\n\r\n    <div class=\"eventinfo\">\r\n        <h1>Varaus</h1>\r\n\r\n        <form class=\"login-form\">\r\n\r\n            <div *ngIf=\"admin\" class=\"form-group\">\r\n                <label>Asiakas</label>\r\n\r\n                <p>{{eventUsername}}</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Toimenpide</label>\r\n                <select type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" (ngModelChange)=\"onTitleChange()\" name=\"title\" required>\r\n                    <option value=\"öljynvaihto\" style=\"background-color: #3a87ad; color:#ffffff\">Öljynvaihto</option>\r\n                    <option value=\"renkaidenvaihto\" style=\"background-color: #009933; color:#ffffff\">Renkaidenvaihto</option>\r\n                    <option value=\"huolto\" style=\"background-color: #cc0000; color:#ffffff\">Huolto</option>\r\n                    <option value=\"korjaus\" style=\"background-color: #999922; color:#ffffff\">Korjaus</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Aloitusaika</label>\r\n                <input type=\"datetime-local\" [disabled]=\"!admin\" step=\"1800\" class=\"form-control\" [(ngModel)]=\"start\" name=\"start\" required>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Päättymisaika</label>\r\n                <input type=\"datetime-local\" [disabled]=\"!admin\" step=\"1800\" class=\"form-control\" [(ngModel)]=\"end\" name=\"end\">\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label>Rekisterinumero</label>\r\n              <input class=\"form-control\" [(ngModel)]=\"rekisteriNro\" name=\"rekisteriNro\" />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Lisätietoja</label>\r\n                <textarea class=\"form-control\" rows=\"2\" [(ngModel)]=\"description\" name=\"description\"> </textarea>\r\n            </div>\r\n\r\n            <input type=\"submit\" (click)=\"onEventSubmit()\" class=\"btn btn-primary\" value=\"Tee Varaus\">\r\n            <input type=\"submit\" (click)=\"onConfirmClick()\" *ngIf=\"!confirm && admin\" class=\"btn btn-primary\" value=\"Hyväksy\">\r\n            <input type=\"submit\" (click)=\"onDeleteClick()\" *ngIf=\"admin\" class=\"btn btn-primary\" value=\"Poista\">\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n\r\n    <p>\r\n        <a [routerLink]=\"['/help']\">Ohje ajavarauksen tekemiseen</a>\r\n    </p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fullcalendar__ = __webpack_require__("../../../../fullcalendar/dist/fullcalendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fullcalendar_dist_locale_all_js__ = __webpack_require__("../../../../fullcalendar/dist/locale-all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fullcalendar_dist_locale_all_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_fullcalendar_dist_locale_all_js__);
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
    function DashboardComponent(validateService, authService, flashMessage, router) {
        this.validateService = validateService;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.confirm = true;
        this.admin = false;
        this.calElement = null;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var curuser = this.authService.getUser();
        var userId = curuser.id;
        this.admin = curuser.admin;
        this.calElement = __WEBPACK_IMPORTED_MODULE_7_jquery__('#myCalendar');
        //Event click function
        var clickFunc = function (calEvent, jsEvent, view) {
            if (calEvent.title) {
                var tempcolor = calEvent.backgroundColor;
                calEvent.backgroundColor = "#133313";
                this.calElement.fullCalendar('updateEvent', calEvent);
                calEvent.backgroundColor = tempcolor;
                if (calEvent.user) {
                    this.updatename(calEvent);
                }
                else {
                    this.eventUsername = 'Hallinnon luoma';
                }
                this.confirm = calEvent.confirm;
                this.id = calEvent._id;
                this.rekisteriNro = calEvent.rekisteriNro;
                this.description = calEvent.description;
                this.title = calEvent.title;
                this.end = __WEBPACK_IMPORTED_MODULE_5_moment__(calEvent.end).format('YYYY-MM-DD[T]HH:mm');
                this.start = __WEBPACK_IMPORTED_MODULE_5_moment__(calEvent.start).format('YYYY-MM-DD[T]HH:mm');
                this.calElement.fullCalendar('unselect');
                this.calElement.fullCalendar('renrender');
            }
        };
        var boundClick = clickFunc.bind(this);
        //options
        var options = {
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            events: function (start, end, timezone, callback) {
                end = __WEBPACK_IMPORTED_MODULE_5_moment__(end).add(6, 'hours').format('YYYY-MM-DD[T]HH:mm');
                start = __WEBPACK_IMPORTED_MODULE_5_moment__(start).subtract(6, 'hours').format('YYYY-MM-DD[T]HH:mm');
                __WEBPACK_IMPORTED_MODULE_7_jquery__["ajax"]({
                    url: 'events/getevents/'
                        + start + "/" + end + "/" + userId + "/" + true,
                    dataType: 'json',
                    success: function (response) {
                        if (!curuser.admin) {
                            response.forEach(function (event) {
                                if ((event.user != curuser.id || event.user == null)) {
                                    event.backgroundColor = '#71893f';
                                    event.rendering = 'background';
                                }
                                else if (event.confirm == false) {
                                    event.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                                    event.textColor = '#111';
                                }
                                else if (event.confirm == true) {
                                    event.backgroundColor = 'rgba(0, 170, 0, 0.7)';
                                }
                            });
                        }
                        else {
                            response.forEach(function (event) {
                                if (event.confirm == false) {
                                    event.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                                    event.textColor = '#111';
                                }
                            });
                        }
                        callback(response);
                    }
                });
            },
            businessHours: {
                dow: [1, 2, 3, 4, 5],
                start: '7:00',
                end: '18:00',
            },
            validRange: function (nowDate) {
                return {
                    start: __WEBPACK_IMPORTED_MODULE_5_moment__(),
                    end: nowDate.clone().add(60, 'days')
                };
            },
            hiddenDays: [0, 6],
            locale: 'fi',
            minTime: "07:00:00",
            maxTime: "18:00:00",
            allDaySlot: false,
            height: 'auto',
            selectable: false,
            defaultView: 'agendaWeek',
            timeFormat: 'H:mm',
            slotLabelFormat: 'H:mm',
            aspectRatio: 1,
            fixedWeekCount: false,
            selectHelper: true,
            unselectAuto: false,
            nowIndicator: true,
            selectConstraint: 'businessHours',
            eventConstraint: 'businessHours',
            eventClick: boundClick,
            //Event selection based on selected type of event.
            dayClick: function (date, jsEvent, view) {
                _this.eventUsername = null;
                _this.checkOverlap(date, __WEBPACK_IMPORTED_MODULE_5_moment__(date).add(_this.duration, 'hours')).then(function (res) {
                    if (view.type == 'month') {
                        _this.calElement.fullCalendar('changeView', 'agendaWeek');
                        _this.calElement.fullCalendar('gotoDate', date);
                    }
                    else {
                        _this.calElement.fullCalendar('rerenderEvents');
                        if (_this.title == undefined) {
                            _this.flashMessage.show('Valitse toimenpide', { cssClass: 'alert-danger', timeout: 3000 });
                        }
                        else if (res >= 2) {
                            _this.flashMessage.show('Et voi varata yli 2 päällekkäistä tapahtumaa', { cssClass: 'alert-danger', timeout: 3000 });
                            _this.calElement.fullCalendar('unselect');
                            _this.id = null;
                            _this.start = null;
                            _this.end = null;
                        }
                        else if (res < 2) {
                            if (__WEBPACK_IMPORTED_MODULE_5_moment__(date).add(_this.duration, 'hours').get('hour') >= 18 &&
                                __WEBPACK_IMPORTED_MODULE_5_moment__(date).add(_this.duration, 'hours').get('minute') == 30 ||
                                __WEBPACK_IMPORTED_MODULE_5_moment__(date).add(_this.duration, 'hours').get('hour') > 18 ||
                                __WEBPACK_IMPORTED_MODULE_5_moment__(date).add(_this.duration, 'hours').get('hour') < 7) {
                                _this.flashMessage.show('Aika menee aukiolo ajan yli', { cssClass: 'alert-danger', timeout: 3000 });
                                _this.id = null;
                                _this.start = null;
                                _this.end = null;
                            }
                            else {
                                _this.id = null;
                                _this.start = __WEBPACK_IMPORTED_MODULE_5_moment__(date).format('YYYY-MM-DD[T]HH:mm');
                                _this.end = __WEBPACK_IMPORTED_MODULE_5_moment__(_this.start).add(_this.duration, 'hours').format('YYYY-MM-DD[T]HH:mm');
                                _this.calElement.fullCalendar('select', _this.start, _this.end);
                            }
                            _this.onTitleChange();
                        }
                    }
                });
            }
        };
        //options end and create calendar
        this.calElement.fullCalendar(options);
    };
    //Event delete
    DashboardComponent.prototype.onDeleteClick = function () {
        var _this = this;
        var Id = this.id;
        if (Id) {
            this.authService.delEvent(Id).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.calElement.fullCalendar('removeEvents', Id);
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            this.flashMessage.show('Valitse tapahtuma', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    DashboardComponent.prototype.onConfirmClick = function () {
        var _this = this;
        this.authService.confirmEvent(this.id).subscribe(function (res) {
            _this.calElement.fullCalendar('refetchEvents');
            _this.flashMessage.show('Varaus Hyväksytty', { cssClass: 'alert-success', timeout: 3000 });
        });
    };
    //changes color according to selection
    DashboardComponent.prototype.onTitleChange = function () {
        var _this = this;
        switch (this.title) {
            case 'öljynvaihto': {
                this.color = '#3a87ad';
                this.duration = 1;
                break;
            }
            case 'renkaidenvaihto': {
                this.color = '#009933';
                this.duration = 1;
                break;
            }
            case 'huolto': {
                this.color = '#cc0000';
                this.duration = 6;
                break;
            }
            case 'korjaus': {
                this.color = '#999922';
                this.duration = 8;
                break;
            }
        }
        if ((this.start != undefined || this.id != undefined)) {
            this.end = __WEBPACK_IMPORTED_MODULE_5_moment__(this.start).add(this.duration, 'hours').format('YYYY-MM-DD[T]HH:mm');
            this.calElement.fullCalendar('select', this.start, this.end);
            this.checkOverlap(this.start, __WEBPACK_IMPORTED_MODULE_5_moment__(this.start).add(this.duration, 'hours')).then(function (res) {
                if (res >= 2) {
                    _this.flashMessage.show('Et voi varata yli 2 päällekkäistä tapahtumaa', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.calElement.fullCalendar('unselect');
                    _this.id = null;
                    _this.start = null;
                    _this.end = null;
                }
                if (__WEBPACK_IMPORTED_MODULE_5_moment__(_this.start).add(_this.duration, 'hours').get('hour') >= 18 &&
                    __WEBPACK_IMPORTED_MODULE_5_moment__(_this.start).add(_this.duration, 'hours').get('minute') == 30 ||
                    __WEBPACK_IMPORTED_MODULE_5_moment__(_this.start).add(_this.duration, 'hours').get('hour') > 18 ||
                    __WEBPACK_IMPORTED_MODULE_5_moment__(_this.start).add(_this.duration, 'hours').get('hour') < 7) {
                    _this.flashMessage.show('Aika menee aukiolo ajan yli', { cssClass: 'alert-danger', timeout: 3000 });
                    _this.calElement.fullCalendar('unselect');
                    _this.id = null;
                    _this.start = null;
                    _this.end = null;
                }
            });
        }
    };
    //Event adding func
    DashboardComponent.prototype.onEventSubmit = function () {
        var _this = this;
        var curuser = this.authService.getUser();
        var user;
        var event = {
            _id: this.id,
            title: this.title,
            start: this.start,
            end: this.end,
            backgroundColor: this.color,
            rekisteriNro: this.rekisteriNro,
            description: this.description,
            confirm: false,
            user: curuser['id']
        };
        if (event.title && event.start) {
            this.authService.addEvent(event).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.calElement.fullCalendar('refetchEvents');
                    _this.calElement.fullCalendar('unselect');
                }
                else {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
                }
            });
        }
        else {
            this.flashMessage.show('Anna toimenpide ja ajat', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    //gets name whoever owns event
    DashboardComponent.prototype.updatename = function (event) {
        var _this = this;
        this.authService.getUserById(event).subscribe(function (user) {
            _this.eventUsername = user.username;
        });
    };
    DashboardComponent.prototype.checkOverlap = function (start, end) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var user = null;
            var queryStart = __WEBPACK_IMPORTED_MODULE_5_moment__(start).subtract(12, 'h');
            var queryEnd = __WEBPACK_IMPORTED_MODULE_5_moment__(end).add(12, 'h');
            var admin = true;
            var overlapsCounter = 0;
            var overlapsStart = [];
            var overlapsEnd = [];
            var overlaps;
            var overlaped;
            overlaps = new Array(10).fill(0);
            start = __WEBPACK_IMPORTED_MODULE_5_moment__(start).format('YYYY-MM-DD[T]HH:mm');
            end = __WEBPACK_IMPORTED_MODULE_5_moment__(end).format('YYYY-MM-DD[T]HH:mm');
            _this.authService.getEvents(__WEBPACK_IMPORTED_MODULE_5_moment__(queryStart).format('YYYY-MM-DD[T]HH:mm'), __WEBPACK_IMPORTED_MODULE_5_moment__(queryEnd).format('YYYY-MM-DD[T]HH:mm'), user, admin).subscribe(function (events) {
                events.forEach(function (event) {
                    if (__WEBPACK_IMPORTED_MODULE_5_moment__(start).isBetween(event.start, event.end)) {
                        //tallennetaan ajat.
                        overlapsStart[overlapsCounter] = event.start;
                        overlapsEnd[overlapsCounter] = event.end;
                        overlaped = true;
                        overlapsCounter++;
                    }
                    else if (__WEBPACK_IMPORTED_MODULE_5_moment__(end).isBetween(event.start, event.end)) {
                        //tallennetaan ajat.
                        overlapsStart[overlapsCounter] = event.start;
                        overlapsEnd[overlapsCounter] = event.end;
                        overlaped = true;
                        overlapsCounter++;
                    }
                    else if (__WEBPACK_IMPORTED_MODULE_5_moment__(event.end).isBetween(start, end, null, '[]') &&
                        __WEBPACK_IMPORTED_MODULE_5_moment__(event.start).isBetween(start, end, null, '[)')) {
                        //tallennetaan ajat.
                        overlapsStart[overlapsCounter] = event.start;
                        overlapsEnd[overlapsCounter] = event.end;
                        overlaped = true;
                        overlapsCounter++;
                    }
                });
                var counter1 = 0;
                //jokaiselle eventille jotka ovat valinnan välissä.
                overlapsStart.forEach(function (eventti) {
                    //otetaan ajat talteen silmukkaa varten.
                    var currentStart = overlapsStart[counter1];
                    var currentEnd = overlapsEnd[counter1];
                    overlapsStart.forEach(function (event) {
                        var counter2 = 0;
                        if (counter2 == counter1) {
                            counter2++;
                        }
                        if (__WEBPACK_IMPORTED_MODULE_5_moment__(currentStart).isBetween(event, overlapsEnd[counter2], null, '[)')
                            || __WEBPACK_IMPORTED_MODULE_5_moment__(currentEnd).isBetween(event, overlapsEnd[counter2])) {
                            overlaps[counter1]++;
                        }
                        counter2++;
                    });
                    counter1++;
                });
                if (overlaped && overlaps[0] == 0)
                    overlaps[0] = 1;
                resolve(Math.max.apply(null, overlaps));
            });
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    position: relative;\r\n    bottom: 0px;\r\n    height: auto;\r\n    text-align: center;\r\n    border: 1px groove #000000;\r\n    border-radius: 0px;\r\n    margin: 0;\r\n    margin-top: 1em;\r\n    background-color: #202020;\r\n    color: #eeeeee;\r\n    width: 100%;\r\n    box-shadow: 0px 2px 5px 0px #090909 inset;\r\n}\r\n\r\n.col-md-4 {\r\n  display: inline-block;\r\n  margin:auto;\r\n  max-width: 1140px;\r\n  width: 100%;\r\n  float:none;\r\n  padding: 0;\r\n}\r\n\r\n.text-container {\r\n    position: relative;\r\n    max-width: 100%;\r\n    width: 100%;\r\n    padding-top: 10px;\r\n    background-color: #202020;\r\n    float:left;\r\n}\r\n\r\n.img-container {\r\n    width: auto;\r\n    min-width: auto;\r\n    max-width: 25%;\r\n    height: auto;\r\n    position: relative;\r\n    vertical-align: text-top;\r\n    text-align: center;\r\n    display: inline-block;\r\n    padding-top: 1em;\r\n    padding-bottom: 1em;\r\n    padding-right: 1em;\r\n    margin:auto;\r\n}\r\n\r\n.left {\r\n  float:left;\r\n}\r\n\r\n.right {\r\n  float:right;\r\n}\r\n\r\n.footer-text {\r\n    position: relative;\r\n    font-size: 12px;\r\n}\r\n\r\n.footer-img {\r\n    position: relative;\r\n    max-width: 100%;\r\n    width: 80px;\r\n    height: auto;\r\n    padding-top: 10px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\na:hover {\r\ntext-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"footer navbar\">\r\n\r\n        <div class=\"col-md-4\">\r\n\r\n            <div class=\"text-container\">\r\n\r\n                <div class=\"img-container left\">\r\n                    <h4>Laitilan korjaamo</h4>\r\n                    <p class=\"footer-text\">Meiltä kaikki peltikorjauksista moottoriremontteihin</p>\r\n                </div>\r\n                <div class=\"img-container left\">\r\n                    <h4>Yhteystiedot:</h4>\r\n                    <p class=\"footer-text\">puh: 040 1234567 Sähköposti: tero.laitila@boijat.fi</p>\r\n                </div>\r\n\r\n            <div class=\"img-container right\">\r\n                <a href=\"https://nodejs.org/\">\r\n                    <img src=\"https://nodejs.org/static/images/logo.svg\" class=\"footer-img\" />\r\n                </a>\r\n                <a href=\"https://angular.io/\">\r\n                  <img src=\"https://angular.io/assets/images/logos/angular/angular.svg\" class=\"footer-img\" />\r\n                </a>\r\n\r\n            </div>\r\n\r\n            <div class=\"img-container right\">\r\n              <a href=\"https://jwt.io/\">\r\n                  <img src=\"https://jwt.io/img/pic_logo.svg\" class=\"footer-img\" />\r\n              </a>\r\n                <a href=\"https://www.mongodb.com/\">\r\n                    <img src=\"https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png\" class=\"footer-img\" />\r\n                </a>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/help/accordion/accordion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\r\n  margin: 0;\r\n}\r\n\r\n.accordion-head {\r\n  display: block;\r\n  margin: 0;\r\n  cursor: pointer;\r\n  text-align: left;\r\n  width: auto;\r\n  z-index: 20;\r\n}\r\n\r\n.accordion-head:hover{\r\n  background-color: #ffffff;\r\n}\r\n\r\n.accordion-body {\r\n  max-height: 0;\r\n  padding: 0 15px;\r\n  overflow: hidden;\r\n  transition: all .2s ease;\r\n  -webkit-transition: all .2s padding 0s ease;\r\n}\r\n\r\nng-content {\r\n  max-height: 0;\r\n  overflow: hidden;\r\n  padding-left: 2em;\r\n  transition: max-height .2s ease;\r\n}\r\n\r\n.accordion-body.active {\r\n  max-height: 300px;\r\n  padding: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/help/accordion/accordion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\r\n  <div class=\"panel-heading accordion-head\" (click)=\"onClick($event)\">{{ title }}</div>\r\n  <div class=\"panel-body accordion-body\" [class.active]=\"active\">\r\n  <p>\r\n    <ng-content></ng-content>\r\n  </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/help/accordion/accordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AccordionGroupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionComponent = (function () {
    function AccordionComponent() {
        this.active = false;
        this.toggleAccordion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AccordionComponent.prototype.onClick = function (event) {
        this.toggleAccordion.emit(this.active);
        this.active = !this.active;
    };
    return AccordionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], AccordionComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AccordionComponent.prototype, "active", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], AccordionComponent.prototype, "toggleAccordion", void 0);
AccordionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'accordion',
        template: __webpack_require__("../../../../../src/app/components/help/accordion/accordion.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/help/accordion/accordion.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AccordionComponent);

var AccordionGroupComponent = (function () {
    function AccordionGroupComponent() {
        this.exclusive = false;
        this.subscriptions = [];
        this._accordions = [];
    }
    AccordionGroupComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._accordions = this.accordions.toArray();
        this.removeSubscriptions();
        this.addSubscriptions();
        this.accordions.changes.subscribe(function (changes) {
            _this._accordions = changes;
            _this.removeSubscriptions();
            _this.addSubscriptions();
        });
    };
    AccordionGroupComponent.prototype.addSubscriptions = function () {
        var _this = this;
        this._accordions.forEach(function (a) {
            var subscription = a.toggleAccordion.subscribe(function (e) {
                _this.accordionToggle(a);
            });
            _this.subscriptions.push(subscription);
        });
    };
    AccordionGroupComponent.prototype.removeSubscriptions = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    AccordionGroupComponent.prototype.accordionToggle = function (accordion) {
        if (this.exclusive && !accordion.active) {
            this.accordions.forEach(function (a) { return a.active = false; });
        }
    };
    AccordionGroupComponent.prototype.ngOnDestroy = function () {
        this.removeSubscriptions();
    };
    return AccordionGroupComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], AccordionGroupComponent.prototype, "exclusive", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(AccordionComponent),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === "function" && _b || Object)
], AccordionGroupComponent.prototype, "accordions", void 0);
AccordionGroupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'accordion-group',
        template: "<ng-content>"
    }),
    __metadata("design:paramtypes", [])
], AccordionGroupComponent);

var _a, _b;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/accordion.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/help/help.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".helptext {\r\n  padding: 5px;\r\n}\r\n\r\n.link {\r\n  margin-top: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/help/help.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"helpcontainer\">\r\n  <div class=\"panel panel-info\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">Miten varaat ajan</h3>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n      <ol>\r\n        <li class=\"helptext\">Valitse haluamasi toimenpide \"Toimenpide\"-laatikosta</li>\r\n        <li class=\"helptext\">Valitse kalenterista toimenpiteen alkamisaika\r\n            <ul>\r\n              <li class=\"helptext\">Kalenterissa näkyvät vaaleat laatikot ovat varattuja aikoja. Voit kuitenkin varata ajan niiden päälle.</li>\r\n              <li class=\"helptext\">Kalenterissa näkyvät tummat laatikot ovat ruuhka-aikoja. <strong>Et voi varata näitä aikoja itsellesi.</strong></li>\r\n            </ul>\r\n        </li>\r\n        <li class=\"helptext\">Näet valitsemasi tapahtuman alkamis- ja päättymisajat niille osoitetuista kentistä.</li>\r\n        <li class=\"helptext\">Lisätietoja-kenttään voit antaa lisätietoja tarvitsemastasi palvelusta</li>\r\n        <li class=\"helptext\">Vahvista valitsemasi tapahtuma Tee varaus-painikkeella.</li>\r\n        <li class=\"helptext\">Kun korjaamo vahvistaa ajanvarauksesi, saat sähköpostin ilmoituksena.</li>\r\n        <a class=\"helptext\"[routerLink]=\"['/dashboard']\">Ajanvaraukseen</a>\r\n      </ol>\r\n    </div>\r\n  </div>\r\n  <h3>Usein kysyttyjä kysymyksiä:</h3>\r\n  <section class=\"ac-container\">\r\n    <accordion-group [exclusive]=true>\r\n      <accordion *ngFor=\"let test of tests\" [title]=\"test.category\">\r\n        <accordion *ngFor=\"let faq of test.faq\" [title]=\"faq.header\">{{faq.content}}</accordion>\r\n      </accordion>\r\n    </accordion-group>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/help/help.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpComponent = (function () {
    function HelpComponent(http) {
        this.http = http;
    }
    HelpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('assets/help.json').subscribe(function (res) {
            _this.tests = res.json();
        });
    };
    return HelpComponent;
}());
HelpComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-help',
        template: __webpack_require__("../../../../../src/app/components/help/help.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/help/help.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], HelpComponent);

var _a;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/help.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/bgimage.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bgimage.3deec771fe9dc197247d.png";

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".BG {\r\n    width: 100%;\r\n    background: url(" + __webpack_require__("../../../../../src/app/components/home/bgimage.png") + "), no-repeat 0 -300px;\r\n    background-position: 100%, 10%;\r\n    background-repeat: no-repeat;\r\n    background-size: 400px, 200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"BG\">\r\n    <div class=\"jumborton text-center\">\r\n        <h1>Korjaamo Laitila</h1>\r\n        <p class=\"lead\">Tervetuloa autokorjaamo Laitilan verkkosivuille</p>\r\n        <p *ngIf=\"!authService.loggedIn()\">Voit jatkaa rekisteröitymällä tai kirjautumalla</p>\r\n        <div>\r\n            <a *ngIf=\"!authService.loggedIn()\" class=\"btn btn-primary\" [routerLink]=\"['/register']\"> Register</a>\r\n            <a *ngIf=\"!authService.loggedIn()\" class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <h2>Ammattitaitoa</h2>\r\n        <p>Omaamme erinomaista ammattitaitoa monipuolisesti erilaisiin vaatimuksiin</p>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n        <h2>Ajanvaraus</h2>\r\n        <p>Rekisteröidy sivulle ja varaa aika korjaukseen ilmaiseksi tai ota yhteyttä sähköpostilla</p>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n        <h2>Vaihtoauto</h2>\r\n        <p>Meiltä saat myös vaihtoauton sopimalla, mikäli töissä kestää pitempään</p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
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
    function HomeComponent(authService) {
        this.authService = authService;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-form {\r\n    width: 30%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Kirjautuminen</h2>\r\n<form (submit)=\"onLoginSubmit()\" class=\"login-form\">\r\n    <div class=\"form-group\">\r\n        <label>Käyttäjänimi</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Salasana</label>\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n    </div>\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Kirjaudu\">\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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
    function LoginComponent(authService, router, flashMessage, location) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.location = location;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        if (this.username == undefined || this.password == undefined) {
            this.flashMessage.show('Anna käyttäjänimi ja salasana!', {
                cssClass: 'alert-success',
                timeout: 3000
            });
        }
        else {
            this.authService.authenticateUser(user).subscribe(function (data) {
                if (data.success) {
                    _this.authService.storeUserData(data.token, data.user);
                    _this.flashMessage.show('you are now logged in', {
                        cssClass: 'alert-success',
                        timeout: 3000
                    });
                    _this.router.navigate(['dashboard']);
                }
                else {
                    _this.flashMessage.show(data.msg, {
                        cssClass: 'alert-danger',
                        timeout: 3000
                    });
                    _this.router.navigate(['login']);
                }
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-shadow {\r\n    box-shadow: 0px 2px 5px 0px #090909;\r\n}\r\n\r\n.navbar-brand {\r\n    text-shadow: 1px 1px 3px #111111;\r\n}\r\n\r\n.navbar-right {\r\n    text-shadow: 1px 1px 3px #111111;\r\n}\r\n\r\n.navbar-left {\r\n    text-shadow: 1px 1px 3px #111111;\r\n}\r\n\r\n.navbar {\r\n    border-radius: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-shadow\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Korjaamo Laitila</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-left\">\r\n                <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Etusivu</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li *ngIf=\"authService.getAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/admin']\">Hallinta</a></li>\r\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Varaukset</a></li>\r\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Käyttäjä</a> </li>\r\n                <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Kirjaudu</a> </li>\r\n                <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Rekisteröidy</a></li>\r\n                <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick();\" href=\"#\">Kirjaudu ulos</a></li>\r\n            </ul>\r\n        </div>\r\n        <!--/.nav-collapse -->\r\n    </div>\r\n</nav>"

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
        this.admin = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Olet nyt kirjautunut ulos.', {
            cssClass: 'alert-success',
            timeout: 3000
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
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-block {\r\n  float: left;\r\n}\r\n\r\n.changePw-block {\r\n  float: right;\r\n}\r\n\r\n.profile-block {\r\n  display: inline-block;\r\n  margin: 1em;\r\n  width: 30%;\r\n  vertical-align: middle;\r\n}\r\n\r\n.table-hover {\r\n  margin-top: 5em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container\">\r\n\r\n  <div *ngIf='user' class=\"profile-block user-block\">\r\n      <h2 class=\"page-header\">{{user.name}}</h2>\r\n      <ul class=\"list-group\">\r\n          <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n          <li class=\"list-group-item\">email: {{user.email}}</li>\r\n          <li class=\"list-group-item\" *ngIf=\"user.admin\">Admin</li>\r\n      </ul>\r\n  </div>\r\n\r\n  <div class=\"profile-block changePw-block\">\r\n    <h2 class=\"page-header\">Vaihda salasana</h2>\r\n    <form [formGroup]=\"changePwForm\" (ngSubmit)=\"onPasswordChange() ; changePwForm.reset()\" class=\"login-form\">\r\n        <div class=\"form-group\" [ngClass]=\"{'has-error': changePwForm.get('password').invalid && !changePwForm.get('password').pristine}\">\r\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"newPassword\" placeholder=\"Uusi salasana\" [ngClass]=\"{'form-control-danger': changePwForm.get('password').invalid && !changePwForm.get('password').pristine}\">\r\n        </div>\r\n\r\n        <div class=\"form-group\" [ngClass]=\"{'has-error': changePwForm.get('passwordConfirm').invalid && !changePwForm.get('passwordConfirm').pristine}\">\r\n          <input type=\"password\" class=\"form-control\" formControlName=\"passwordConfirm\" name=\"newPassword2\" placeholder=\"Vahvista uusi salasana\" [ngClass]=\"{'form-control-danger': changePwForm.get('passwordConfirm').invalid}\">\r\n        </div>\r\n        <button [disabled]=\"!changePwForm.valid\" type=\"submit\" class=\"btn btn-primary\">Vaihda</button>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"panel-body\">\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead>\r\n        <h2 class=\"page-header\">Omat varaukset</h2>\r\n        <tr>\r\n          <th>Toimenpide</th>\r\n          <th>Aloitusaika</th>\r\n          <th>Päättymisaika</th>\r\n          <th>Lisätietoja</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let event of events\">\r\n          <td>{{event.title}}</td>\r\n          <td>{{event.start}}</td>\r\n          <td>{{event.end}}</td>\r\n          <td>{{event.description}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
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
    function ProfileComponent(authService, flashmessage, router, fb) {
        this.authService = authService;
        this.flashmessage = flashmessage;
        this.router = router;
        this.fb = fb;
        this.changePwForm = fb.group({
            password: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].minLength(4)])],
            passwordConfirm: ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* Validators */].required]
        }, { validator: this.areEqual });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log('error');
            return false;
        });
        this.authService.getAllEvents(this.authService.getUser().id).subscribe(function (events) {
            _this.events = events;
            _this.events.forEach(function (event) {
                event.start = __WEBPACK_IMPORTED_MODULE_4_moment__(event.start).format('DD.MM.YYYY [klo] HH:mm');
                event.end = __WEBPACK_IMPORTED_MODULE_4_moment__(event.end).format('DD.MM.YYYY [klo] HH:mm');
            });
        });
    };
    ProfileComponent.prototype.areEqual = function (group) {
        return group.get('password').value === group.get('passwordConfirm').value
            ? null : { 'mismatch': true };
    };
    ProfileComponent.prototype.onPasswordChange = function () {
        var _this = this;
        var user = {
            id: this.authService.getUser().id,
            password: this.changePwForm.get('password').value
        };
        if (this.authService.loggedIn()) {
            this.authService.changePassword(user).subscribe(function (res) {
                _this.flashmessage.show(res, { cssClass: 'alert-success', timeout: 3000 });
                ;
            });
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-form {\r\n    width: 30%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Rekisteröityminen</h2>\r\n<div class=\"register-form\">\r\n    <form (submit)=\"onRegisterSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label>Nimi</label>\r\n            <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Käyttäjänimi</label>\r\n            <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Sähköposti</label>\r\n            <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Salasana</label>\r\n            <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n        </div>\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Rekisteröidy\">\r\n    </form>\r\n</div>\r\n"

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
    function RegisterComponent(validateService, flashmessage, authService, router) {
        this.validateService = validateService;
        this.flashmessage = flashmessage;
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
        //check that username is unique (returns true if exists and vice versa)
        this.authService.checkUsername(user).subscribe(function (res) {
            if (res.exists == false) {
                //Validate given information
                if (!_this.validateService.validateRegister(user)) {
                    _this.flashmessage.show('Täytä kaikki kentät', { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
                if (!_this.validateService.validateEmail(user.email)) {
                    _this.flashmessage.show('Anna oikea sähköposti', { cssClass: 'alert-danger', timeout: 3000 });
                    return false;
                }
                //register user
                _this.authService.registerUser(user).subscribe(function (data) {
                    if (data.success) {
                        _this.flashmessage.show('Rekisteröity onnistuneesti', { cssClass: 'alert-success', timeout: 3000 });
                        _this.router.navigate(['/login']);
                    }
                    else {
                        _this.flashmessage.show('Jokin meni vikaan', { cssClass: 'alert-danger', timeout: 3000 });
                        _this.router.navigate(['/register']);
                    }
                });
            }
            else {
                _this.flashmessage.show('Käyttäjänimi on jo käytössä', { cssClass: 'alert-danger', timeout: 3000 });
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
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/admin.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminGuard = (function () {
    function AdminGuard(authService, router, location) {
        this.authService = authService;
        this.router = router;
        this.location = location;
    }
    AdminGuard.prototype.canActivate = function () {
        if (this.authService.getAdmin() != null) {
            if (this.authService.getAdmin() === true) {
                return true;
            }
        }
        this.location.back();
        return false;
    };
    return AdminGuard;
}());
AdminGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _c || Object])
], AdminGuard);

var _a, _b, _c;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/admin.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
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
    function AuthGuard(authService, router, location) {
        this.authService = authService;
        this.router = router;
        this.location = location;
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
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _c || Object])
], AuthGuard);

var _a, _b, _c;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/login.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginGuard = (function () {
    function LoginGuard(authService, router, location) {
        this.authService = authService;
        this.router = router;
        this.location = location;
    }
    LoginGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            this.location.back();
            return false;
        }
        else {
            return true;
        }
    };
    return LoginGuard;
}());
LoginGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _c || Object])
], LoginGuard);

var _a, _b, _c;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/login.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
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
        this.nodeUrl = '';
        if (this.user == null) {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
        this.loadToken();
    }
    //error handler
    AuthService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    };
    //###### User functions #######
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.nodeUrl + 'users/register/', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Checks if given username is unique
    AuthService.prototype.checkUsername = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.nodeUrl + 'users/checkname/', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Compares given data if user login is valid
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.nodeUrl + 'users/authenticate/', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Gets user information
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get(this.nodeUrl + 'users/profile/', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Gets user information
    AuthService.prototype.getUserById = function (event) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.nodeUrl + 'users/getuserbyid/', event, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Password change (id and new password is passed on "user" object)
    AuthService.prototype.changePassword = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        //console.log(user);
        return this.http.post(this.nodeUrl + 'users/password/', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //###### Storage functions ##########
    AuthService.prototype.getUser = function () {
        if (this.user) {
            return this.user;
        }
        else {
            return JSON.parse(localStorage.getItem('user'));
        }
    };
    //Stores token and user info to localstorage
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
    //checks token to see if loggedin
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    //Returns boolean based on if user is admin
    AuthService.prototype.getAdmin = function () {
        if (this.loggedIn())
            return this.getUser().admin;
    };
    //Returns all users
    AuthService.prototype.getAllUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get(this.nodeUrl + 'users/admin', { headers: headers })
            .map(function (res) { return res.json().data; }).catch(this.handleError);
    };
    //pushes user object to DB must contain existing user.id
    AuthService.prototype.update = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.put(this.nodeUrl + 'users/update', user, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    //###### Event functions ##########
    AuthService.prototype.addEvent = function (event) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.nodeUrl + 'events/addevent/', event, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //delete event by id
    AuthService.prototype.delEvent = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.delete(this.nodeUrl + 'events/deleteevent/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Gets events in certain time range based on user, returns all users events if admin is passed and is true.
    AuthService.prototype.getEvents = function (start, end, user, admin) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get(this.nodeUrl + 'events/getevents/'
            + start + "/" + end + "/" + user + "/" + admin + "/", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    //Gets all events based on user
    AuthService.prototype.getAllEvents = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get(this.nodeUrl + 'events/getuserevents/' + user + "/", { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    AuthService.prototype.getConfirmationEvents = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get(this.nodeUrl + 'events/getconfirmevents/', { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    AuthService.prototype.confirmEvent = function (event) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.nodeUrl + 'events/confirm/' + event, { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/chat.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatService = (function () {
    function ChatService(http) {
        this.http = http;
        this.nodeUrl = '';
    }
    ChatService.prototype.getChatByRoom = function (room) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.nodeUrl + 'chat/' + room)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ChatService.prototype.saveChat = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.nodeUrl + 'chat/', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    return ChatService;
}());
ChatService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], ChatService);

var _a;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/chat.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SearchService = (function () {
    function SearchService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    SearchService.prototype.search = function (term) {
        var _this = this;
        return term.debounceTime(300).distinctUntilChanged().switchMap(function (term) { return term ? _this.searchEntries(term) : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]); });
    };
    SearchService.prototype.searchEntries = function (term) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get(this.authService.nodeUrl + 'users/search/' + term, { headers: headers }).map(function (res) { return res.json(); });
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SearchService);

var _a, _b;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/search.service.js.map

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
    //Validates registeration
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

//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/validate.service.js.map

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
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/environment.js.map

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
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map