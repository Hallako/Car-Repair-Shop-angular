webpackJsonp([1,4],{

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__ = __webpack_require__(280);
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

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(352);
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

/***/ 324:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 324;


/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(335);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/main.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(517),
        styles: [__webpack_require__(505)]
    })
], AppComponent);

//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/app.component.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_fullcalendar_src_calendar_calendar__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_validate_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_search_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__guards_login_guard__ = __webpack_require__(346);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_12__components_register_register_component__["a" /* RegisterComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_login_guard__["a" /* LoginGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_23__guards_login_guard__["a" /* LoginGuard */]] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_13__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */]] }
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
            __WEBPACK_IMPORTED_MODULE_15_angular2_fullcalendar_src_calendar_calendar__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_admin_admin_component__["a" /* AdminComponent */],
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
        providers: [__WEBPACK_IMPORTED_MODULE_18__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_21__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_22__guards_admin_guard__["a" /* AdminGuard */], __WEBPACK_IMPORTED_MODULE_20__services_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_23__guards_login_guard__["a" /* LoginGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/app.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_search_service__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(11);
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
                    _this.user = user;
                    event.user = _this.user.username;
                });
            });
        });
    };
    AdminComponent.prototype.deleteEvent = function (eventId) {
        var _this = this;
        this.authService.delEvent(eventId).subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Tapahtuma poistettu onnistuneesti', { cssClass: 'alert-success', timeout: 3000 });
                _this.confirms.splice(_this.confirms.indexOf(eventId), 1);
            }
            else {
                _this.flashMessage.show('Jokin meni vikaan', { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    AdminComponent.prototype.getConfirms = function () {
        var _this = this;
        this.authService.getConfirmationEvents().subscribe(function (confirms) {
            _this.confirms = confirms;
            _this.confirms.forEach(function (confirm) {
                confirm.start = __WEBPACK_IMPORTED_MODULE_2_moment__(confirm.start).format('DD.MM.YYYY [klo] HH:mm');
                confirm.end = __WEBPACK_IMPORTED_MODULE_2_moment__(confirm.end).format('DD.MM.YYYY [klo] HH:mm');
                _this.authService.getUserById(confirm).subscribe(function (user) {
                    _this.user = user;
                    confirm.user = _this.user.username;
                });
            });
        });
        return this.confirms;
    };
    AdminComponent.prototype.confirmEvent = function (event) {
        this.authService.confirmEvent(event._id).subscribe();
        this.confirms.splice(this.confirms.indexOf(event), 1);
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
                    _this.user = user;
                    event.user = _this.user.username;
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
        template: __webpack_require__(518),
        styles: [__webpack_require__(506)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_search_service__["a" /* SearchService */]) === "function" && _c || Object])
], AdminComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/admin.component.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fullcalendar__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fullcalendar_dist_locale_all_js__ = __webpack_require__(514);
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
                this.id = calEvent._id,
                    this.description = calEvent.description;
                this.title = calEvent.title;
                this.end = __WEBPACK_IMPORTED_MODULE_5_moment__(calEvent.end).format('YYYY-MM-DD[T]HH:mm');
                this.start = __WEBPACK_IMPORTED_MODULE_5_moment__(calEvent.start).format('YYYY-MM-DD[T]HH:mm');
                this.onTitleChange();
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
                end = __WEBPACK_IMPORTED_MODULE_5_moment__(end).format('YYYY-MM-DD[T]HH:mm');
                start = __WEBPACK_IMPORTED_MODULE_5_moment__(start).format('YYYY-MM-DD[T]HH:mm');
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
                _this.checkOverlap(date, __WEBPACK_IMPORTED_MODULE_5_moment__(date).add(_this.duration, 'hours')).then(function (res) {
                    if (view.type == 'month') {
                        _this.calElement.fullCalendar('changeView', 'agendaWeek');
                        _this.calElement.fullCalendar('gotoDate', date);
                    }
                    else {
                        _this.calElement.fullCalendar('rerenderEvents');
                        if (res >= 2) {
                            _this.flashMessage.show('Et voi varata yli 2 päällekkäistä tapahtumaa', { cssClass: 'alert-danger', timeout: 3000 });
                            _this.calElement.fullCalendar('unselect');
                            _this.id = null;
                            _this.description = null;
                            _this.start = null;
                            _this.end = null;
                        }
                        else if (_this.title == undefined) {
                            _this.flashMessage.show('Valitse toimenpide', { cssClass: 'alert-danger', timeout: 3000 });
                        }
                        else if (res < 2) {
                            if (__WEBPACK_IMPORTED_MODULE_5_moment__(date).add(_this.duration, 'hours').get('hour') >= 18 &&
                                __WEBPACK_IMPORTED_MODULE_5_moment__(date).add(_this.duration, 'hours').get('minute') == 30 ||
                                __WEBPACK_IMPORTED_MODULE_5_moment__(date).add(_this.duration, 'hours').get('hour') > 18 ||
                                __WEBPACK_IMPORTED_MODULE_5_moment__(date).add(_this.duration, 'hours').get('hour') < 7) {
                                _this.flashMessage.show('Aika menee aukiolo ajan yli', { cssClass: 'alert-danger', timeout: 3000 });
                                _this.id = null;
                                _this.description = null;
                                _this.start = null;
                                _this.end = null;
                            }
                            else {
                                _this.id = null;
                                _this.description = null;
                                _this.start = __WEBPACK_IMPORTED_MODULE_5_moment__(date).format('YYYY-MM-DD[T]HH:mm');
                                _this.end = __WEBPACK_IMPORTED_MODULE_5_moment__(_this.start).add(_this.duration, 'hours').format('YYYY-MM-DD[T]HH:mm');
                                _this.calElement.fullCalendar('select', _this.start, _this.end);
                            }
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
        if (this.start != undefined || this.id != undefined) {
            this.end = __WEBPACK_IMPORTED_MODULE_5_moment__(this.start).add(this.duration, 'hours').format('YYYY-MM-DD[T]HH:mm');
            this.calElement.fullCalendar('select', this.start, this.end);
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
        template: __webpack_require__(519),
        styles: [__webpack_require__(507)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
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
        template: __webpack_require__(520),
        styles: [__webpack_require__(508)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/footer.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(24);
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
        template: __webpack_require__(521),
        styles: [__webpack_require__(509)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/home.component.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(31);
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
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(522),
        styles: [__webpack_require__(510)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/login.component.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
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
        template: __webpack_require__(523),
        styles: [__webpack_require__(511)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(125);
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
            //console.log(this.events);
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
                //location.reload();
            });
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(524),
        styles: [__webpack_require__(512)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormBuilder */]) === "function" && _d || Object])
], ProfileComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/profile.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(32);
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
        template: __webpack_require__(525),
        styles: [__webpack_require__(513)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/register.component.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(31);
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

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(31);
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

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(31);
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

/***/ 347:
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

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, ".router-outlet {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n    padding-bottom: 120px;\r\n    position: relative;\r\n}\r\n\r\n.container {\r\n    min-height: 82%;\r\n    position: relative;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, ".checkbox {\r\n    width: 1.5em;\r\n    height: auto;\r\n}\r\n\r\n.form {\r\n  float: right;\r\n  margin-right: 16px;\r\n}\r\n\r\n#input {\r\n  padding-right: 16px;\r\n}\r\n#searchDiv {\r\n  float: right;\r\n  padding: 0px;\r\n}\r\n#formSearch {\r\n  width: 70%;\r\n  float: right;\r\n}\r\n\r\n.form-group {\r\n  width:auto;\r\n}\r\n\r\n.search-box {\r\n\r\n  position: relative;\r\n}\r\n\r\n.hover {\r\n    border-radius: 0px;\r\n    border-top: 0px;\r\n}\r\n\r\n.hover:hover {\r\n    background-color: #f8f5f0\r\n}\r\n\r\n.desc {\r\n    width: auto;\r\n}\r\n\r\n.table-text {\r\n  width: 15em;\r\n}\r\n\r\n.table-name {\r\n  width: 6%;\r\n}\r\n\r\n.table-last {\r\n  width: 160px;\r\n}\r\n.form-control {\r\n    width: 50%;\r\n}\r\n\r\n.search-box {\r\n    position: absolute;\r\n    width: 100%;\r\n    z-index: 99999;\r\n}\r\n\r\n.col-md-4 {\r\n    position: relative;\r\n    width: 50%;\r\n    margin-top: 2em;\r\n}\r\n\r\n.panel-primary {\r\n    width: 40%;\r\n    height: 5%;\r\n    float: left;\r\n}\r\n\r\n.panel-success {\r\n    float: right;\r\n    width: 100%;\r\n    height: 5%;\r\n}\r\n\r\n.btn-group-vertical {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    border-radius: 0px;\r\n    display: block;\r\n    width: 40%;\r\n}\r\n\r\n.btn {\r\n    border-radius: 0px;\r\n    float: right;\r\n}\r\n\r\n.btn-primary {\r\n    display: inline-block;\r\n    border-radius: 6px;\r\n    margin-bottom: 10px;\r\n    float: right;\r\n\r\n}\r\n\r\n.btn-sm {\r\n    margin-bottom: 5px;\r\n    border-radius: 3px;\r\n    float: right;\r\n    margin-right: 0.5em;\r\n}\r\n\r\n.btn-xs {\r\n    margin-left: 0.6em;\r\n    min-width: 4.5em;\r\n    float: right;\r\n    border-radius: 3px;\r\n}\r\n\r\n.btn-ok {\r\n    float: right;\r\n}\r\n\r\n.btn-default {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.btn-group-vertical>.btn:not(:first-child):not(:last-child) {\r\n    border-radius: 6px;\r\n}\r\n\r\n.btn-group-vertical>.btn:first-child:not(:last-child) {\r\n    border-radius: 6px;\r\n}\r\n\r\n.btn-group-vertical>.btn:last-child:not(:first-child) {\r\n    border-radius: 6px;\r\n}\r\n\r\n.form-horizontal {\r\n    padding-top: 0em;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.table-container {\r\n    width: 100%;\r\n    display: inline-block;\r\n    position: relative;\r\n    margin-top: 2em;\r\n}\r\n\r\n.table-hover {\r\n    position: relative;\r\n    margin-top: 10em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, ".login-form {\r\n    padding-top: 00px;\r\n}\r\n\r\n.btn-primary {\r\n    display: inline-block;\r\n    margin: 10px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    box-shadow: 1px 1.5px 1px #777777;\r\n}\r\n\r\n.calendar-container {\r\n  position: relative;\r\n}\r\n\r\n.calendar-div {\r\n    padding-top: 28px;\r\n    width: 65%;\r\n    float: left;\r\n}\r\n\r\n.form-group {\r\n    padding-top: 2px;\r\n}\r\n\r\n.eventinfo {\r\n    padding: 20px;\r\n    padding: 30px;\r\n    padding-top: 00px;\r\n    float: left;\r\n    width: 35%;\r\n}\r\n\r\n.clearfix {\r\n    clear: both;\r\n}\r\n\r\nfooter {\r\n    padding-top: 40px;\r\n}\r\n\r\n.form-control {\r\n    display: inline-block;\r\n    margin: 0;\r\n    vertical-align: middle;\r\n}\r\n\r\n#colorHelper {\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    background-color: #3a87ad;\r\n    height: 46px;\r\n    width: 20%;\r\n    border: 1px solid #666666;\r\n    border-radius: 4px;\r\n    margin-left: 2.5%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    position: relative;\r\n    bottom: 0px;\r\n    height: auto;\r\n    text-align: center;\r\n    /*max-height: 10em;*/\r\n    border: 1px groove #000000;\r\n    border-radius: 0px;\r\n    margin: 0;\r\n    background-color: #202020;\r\n    /*opacity: 0.6;*/\r\n    color: #eeeeee;\r\n    width: 100%;\r\n    box-shadow: 0px 2px 5px 0px #090909 inset;\r\n}\r\n\r\n.footer-padding {\r\n    width: 100%;\r\n}\r\n\r\n.text-container {\r\n    position: relative;\r\n    width: 60%;\r\n    padding-top: 10px;\r\n    background-color: #202020;\r\n}\r\n\r\n.img-container {\r\n    width: auto;\r\n    height: inherit;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n.footer-text {\r\n    font-size: 12px;\r\n}\r\n\r\n.footer-item {\r\n    padding-top: 1em;\r\n    padding-bottom: 1em;\r\n    display: inline-block;\r\n}\r\n\r\n.footer-cont {\r\n    width: 60%;\r\n    height: inherit;\r\n    position: relative;\r\n    background-color: #202020;\r\n    /*width: 60%;*/\r\n    left: 20%;\r\n    right: 20%;\r\n    margin-top: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.footer-img {\r\n    position: relative;\r\n    max-width: 100%;\r\n    width: 80px;\r\n    height: auto;\r\n    padding-top: 10px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, ".BG {\r\n    width: 100%;\r\n    background: url(" + __webpack_require__(781) + "), no-repeat 0 -300px;\r\n    background-position: 100%, 10%;\r\n    background-repeat: no-repeat;\r\n    background-size: 400px, 200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, ".login-form {\r\n    width: 30%;\r\n}\r\n\r\n.btn-primary {\r\n    margin-top: 20px;\r\n    font-size: 12px;\r\n}\r\n\r\nlabel {\r\n    margin-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, ".navbar-shadow {\r\n    box-shadow: 0px 2px 5px 0px #090909;\r\n}\r\n\r\n.navbar-brand {\r\n    text-shadow: 1px 1px 3px #111111;\r\n}\r\n\r\n.navbar-right {\r\n    text-shadow: 1px 1px 3px #111111;\r\n}\r\n\r\n.navbar-left {\r\n    text-shadow: 1px 1px 3px #111111;\r\n}\r\n\r\n.navbar {\r\n    border-radius: 0px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, ".user-block {\r\n  float: left;\r\n}\r\n\r\n.changePw-block {\r\n  float: right;\r\n}\r\n\r\n.profile-block {\r\n  display: inline-block;\r\n  margin: 1em;\r\n  width: 30%;\r\n  vertical-align: middle;\r\n}\r\n\r\n.table-hover {\r\n  margin-top: 5em;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, ".register-form {\r\n    width: 30%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 164,
	"./af.js": 164,
	"./ar": 171,
	"./ar-dz": 165,
	"./ar-dz.js": 165,
	"./ar-kw": 166,
	"./ar-kw.js": 166,
	"./ar-ly": 167,
	"./ar-ly.js": 167,
	"./ar-ma": 168,
	"./ar-ma.js": 168,
	"./ar-sa": 169,
	"./ar-sa.js": 169,
	"./ar-tn": 170,
	"./ar-tn.js": 170,
	"./ar.js": 171,
	"./az": 172,
	"./az.js": 172,
	"./be": 173,
	"./be.js": 173,
	"./bg": 174,
	"./bg.js": 174,
	"./bn": 175,
	"./bn.js": 175,
	"./bo": 176,
	"./bo.js": 176,
	"./br": 177,
	"./br.js": 177,
	"./bs": 178,
	"./bs.js": 178,
	"./ca": 179,
	"./ca.js": 179,
	"./cs": 180,
	"./cs.js": 180,
	"./cv": 181,
	"./cv.js": 181,
	"./cy": 182,
	"./cy.js": 182,
	"./da": 183,
	"./da.js": 183,
	"./de": 186,
	"./de-at": 184,
	"./de-at.js": 184,
	"./de-ch": 185,
	"./de-ch.js": 185,
	"./de.js": 186,
	"./dv": 187,
	"./dv.js": 187,
	"./el": 188,
	"./el.js": 188,
	"./en-au": 189,
	"./en-au.js": 189,
	"./en-ca": 190,
	"./en-ca.js": 190,
	"./en-gb": 191,
	"./en-gb.js": 191,
	"./en-ie": 192,
	"./en-ie.js": 192,
	"./en-nz": 193,
	"./en-nz.js": 193,
	"./eo": 194,
	"./eo.js": 194,
	"./es": 196,
	"./es-do": 195,
	"./es-do.js": 195,
	"./es.js": 196,
	"./et": 197,
	"./et.js": 197,
	"./eu": 198,
	"./eu.js": 198,
	"./fa": 199,
	"./fa.js": 199,
	"./fi": 200,
	"./fi.js": 200,
	"./fo": 201,
	"./fo.js": 201,
	"./fr": 204,
	"./fr-ca": 202,
	"./fr-ca.js": 202,
	"./fr-ch": 203,
	"./fr-ch.js": 203,
	"./fr.js": 204,
	"./fy": 205,
	"./fy.js": 205,
	"./gd": 206,
	"./gd.js": 206,
	"./gl": 207,
	"./gl.js": 207,
	"./gom-latn": 208,
	"./gom-latn.js": 208,
	"./he": 209,
	"./he.js": 209,
	"./hi": 210,
	"./hi.js": 210,
	"./hr": 211,
	"./hr.js": 211,
	"./hu": 212,
	"./hu.js": 212,
	"./hy-am": 213,
	"./hy-am.js": 213,
	"./id": 214,
	"./id.js": 214,
	"./is": 215,
	"./is.js": 215,
	"./it": 216,
	"./it.js": 216,
	"./ja": 217,
	"./ja.js": 217,
	"./jv": 218,
	"./jv.js": 218,
	"./ka": 219,
	"./ka.js": 219,
	"./kk": 220,
	"./kk.js": 220,
	"./km": 221,
	"./km.js": 221,
	"./kn": 222,
	"./kn.js": 222,
	"./ko": 223,
	"./ko.js": 223,
	"./ky": 224,
	"./ky.js": 224,
	"./lb": 225,
	"./lb.js": 225,
	"./lo": 226,
	"./lo.js": 226,
	"./lt": 227,
	"./lt.js": 227,
	"./lv": 228,
	"./lv.js": 228,
	"./me": 229,
	"./me.js": 229,
	"./mi": 230,
	"./mi.js": 230,
	"./mk": 231,
	"./mk.js": 231,
	"./ml": 232,
	"./ml.js": 232,
	"./mr": 233,
	"./mr.js": 233,
	"./ms": 235,
	"./ms-my": 234,
	"./ms-my.js": 234,
	"./ms.js": 235,
	"./my": 236,
	"./my.js": 236,
	"./nb": 237,
	"./nb.js": 237,
	"./ne": 238,
	"./ne.js": 238,
	"./nl": 240,
	"./nl-be": 239,
	"./nl-be.js": 239,
	"./nl.js": 240,
	"./nn": 241,
	"./nn.js": 241,
	"./pa-in": 242,
	"./pa-in.js": 242,
	"./pl": 243,
	"./pl.js": 243,
	"./pt": 245,
	"./pt-br": 244,
	"./pt-br.js": 244,
	"./pt.js": 245,
	"./ro": 246,
	"./ro.js": 246,
	"./ru": 247,
	"./ru.js": 247,
	"./sd": 248,
	"./sd.js": 248,
	"./se": 249,
	"./se.js": 249,
	"./si": 250,
	"./si.js": 250,
	"./sk": 251,
	"./sk.js": 251,
	"./sl": 252,
	"./sl.js": 252,
	"./sq": 253,
	"./sq.js": 253,
	"./sr": 255,
	"./sr-cyrl": 254,
	"./sr-cyrl.js": 254,
	"./sr.js": 255,
	"./ss": 256,
	"./ss.js": 256,
	"./sv": 257,
	"./sv.js": 257,
	"./sw": 258,
	"./sw.js": 258,
	"./ta": 259,
	"./ta.js": 259,
	"./te": 260,
	"./te.js": 260,
	"./tet": 261,
	"./tet.js": 261,
	"./th": 262,
	"./th.js": 262,
	"./tl-ph": 263,
	"./tl-ph.js": 263,
	"./tlh": 264,
	"./tlh.js": 264,
	"./tr": 265,
	"./tr.js": 265,
	"./tzl": 266,
	"./tzl.js": 266,
	"./tzm": 268,
	"./tzm-latn": 267,
	"./tzm-latn.js": 267,
	"./tzm.js": 268,
	"./uk": 269,
	"./uk.js": 269,
	"./ur": 270,
	"./ur.js": 270,
	"./uz": 272,
	"./uz-latn": 271,
	"./uz-latn.js": 271,
	"./uz.js": 272,
	"./vi": 273,
	"./vi.js": 273,
	"./x-pseudo": 274,
	"./x-pseudo.js": 274,
	"./yo": 275,
	"./yo.js": 275,
	"./zh-cn": 276,
	"./zh-cn.js": 276,
	"./zh-hk": 277,
	"./zh-hk.js": 277,
	"./zh-tw": 278,
	"./zh-tw.js": 278
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 515;


/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ 518:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\r\n  <div class=\"search-box\" id=\"search-component\">\r\n    <h4>Hae käyttäjiä</h4>\r\n    <input #searchBox id=\"search-box\" (keyup)=\"searchTerm$.next($event.target.value)\" class=\"form-control\" />\r\n    <div *ngIf=\"users\">\r\n      <option class=\"form-control hover\" *ngFor=\"let user of users\" (click)=\"onSelect(user); users=null; search = false\">{{ user.name }}</option>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"col-md-4\" *ngIf=\"!selectedUser\" id=\"serchDiv\">\r\n  <form class=\"form-horizontal\" id=\"formSearch\" method=\"post\">\r\n    <h4>Hae tapahtumia ajalla</h4>\r\n    <div class=\"form-group\">\r\n      <label class=\"col-lg-2 control-label\">Alkamisaika</label>\r\n      <input type=\"datetime-local\" step=\"1800\" class=\"form-control form\" id=\"input\" [(ngModel)]=\"start\" name=\"start\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"col-lg-2 control-label \">Päättymisaika</label>\r\n      <input type=\"datetime-local\" step=\"1800\" class=\"form-control form\" id=\"input\" [(ngModel)]=\"end\" name=\"end\">\r\n    </div>\r\n    <input type=\"submit\" (click)=\"eventSearch(start,end)\" class=\"btn btn-primary\" value=\"Päivitä\">\r\n  </form>\r\n</div>\r\n\r\n\r\n<div class=\"col-md-4\" *ngIf=\"selectedUser\">\r\n  <form class=\"form-horizontal\">\r\n    <div class=\"panel panel-success\">\r\n      <div class=\"panel-heading\">\r\n        <legend class=\"panel-title\">{{selectedUser.name}}</legend>\r\n      </div>\r\n      <div class=\"panel-body\">\r\n        <div class=\"form-group\">\r\n          <label for=\"inputName\" class=\"col-lg-2 control-label\">Nimi:</label>\r\n          <div class=\"col-lg-10\">\r\n            <input type=\"text\" [(ngModel)]=\"selectedUser.name\" id=\"inputName\" name=\"name\" placeholder=\"{{selectedUser.name}}\" text=\"\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputUsername\" class=\"col-lg-2 control-label\">Käyttäjänimi:</label>\r\n          <div class=\"col-lg-10\">\r\n            <input type=\"text\" [(ngModel)]=\"selectedUser.username\" name=\"username\" id=\"inputUsername\" placeholder=\"{{selectedUser.username}}\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Email:</label>\r\n          <div class=\"col-lg-10\">\r\n            <input type=\"email\" [(ngModel)]=\"selectedUser.email\" name=\"email\" id=\"inputEmail\" placeholder=\"{{selectedUser.email}\" class=\"form-control\" />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"inputAdmin\" class=\"col-lg-2 control-label\">Admin:</label>\r\n          <div class=\"col-lg-10\">\r\n            <input type=\"checkbox\" [(ngModel)]=\"selectedUser.admin\" name=\"admin\" id=\"inputAdmin\" placeholder=\"{{selectedUser.admin}}\" class=\"checkbox\" />\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"reset\" (click)=\"selectedUser = null\" class=\"btn btn-default btn-xs\">Peruuta</button>\r\n    <button type=\"submit\" class=\"btn btn-primary btn-xs\" (click)=\"updateUser()\">Tallenna</button>\r\n  </form>\r\n</div>\r\n\r\n<div *ngIf=\"confirms?.length && !selectedUser && !search\" class=\"form-horizontal\">\r\n  <table class=\"table table-hover\">\r\n    <thead>\r\n      <legend>\r\n        Hyväksymättömät varaukset\r\n      </legend>\r\n      <tr>\r\n        <th>Asiakas</th>\r\n        <th>Toimenpide</th>\r\n        <th>Aloitusaika</th>\r\n        <th>Päättymisaika</th>\r\n        <th>Lisätietoja</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let confirm of confirms;\">\r\n        <td class=\"table-name\">{{confirm.user}}</td>\r\n        <td class=\"desc\">{{confirm.title}}</td>\r\n        <td class=\"desc\">{{confirm.start}}</td>\r\n        <td class=\"desc\">{{confirm.end}}</td>\r\n        <td class=\"table-text\">{{confirm.description}}</td>\r\n        <td class=\"table-last\"><button (click)=\"deleteEvent(confirm._id)\" class=\"btn btn-danger btn-sm\">Poista</button>\r\n          <button (click)=\"confirmEvent(confirm)\" class=\"btn btn-success btn-sm\" *ngIf=\"!confirm.confirm\">Hyväksy</button></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<div class=\"table-container\" *ngIf=\"selectedUser\">\r\n  <table class=\"table table-hover \">\r\n    <thead>\r\n      <tr>\r\n        <th>Toimenpide</th>\r\n        <th>Aloitusaika</th>\r\n        <th>Päättymisaika</th>\r\n        <th>Lisätietoja</th>\r\n        <th></th>\r\n\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let event of events\">\r\n        <td class=\"table-name\">{{event.user}}</td>\r\n        <td class=\"desc\">{{event.title}}</td>\r\n        <td class=\"desc\">{{event.start}}</td>\r\n        <td class=\"desc\">{{event.end}}</td>\r\n        <td class=\"table-text\">{{event.description}}</td>\r\n        <td class=\"table-last\"><button (click)=\"(deleteEvent(event._id))\" class=\"btn btn-danger btn-sm\">Poista</button></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<div class=\"table-container\" *ngIf=\"search\">\r\n  <table class=\"table table-hover \">\r\n    <thead>\r\n      <tr>\r\n        <th>Toimenpide</th>\r\n        <th>Aloitusaika</th>\r\n        <th>Päättymisaika</th>\r\n        <th>Lisätietoja</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let event of events\">\r\n        <td class=\"table-name\">{{event.user}}</td>\r\n        <td class=\"desc\">{{event.title}}</td>\r\n        <td class=\"desc\">{{event.start}}</td>\r\n        <td class=\"desc\">{{event.end}}</td>\r\n        <td class=\"table-text\">{{event.description}}</td>\r\n        <td class=\"table-last\"><button (click)=\"(deleteEvent(event._id))\" class=\"btn btn-danger btn-sm\">Poista</button>\r\n          <button (click)=\"confirmEvent(event)\" class=\"btn btn-success btn-sm\" *ngIf=\"!event.confirm\">Hyväksy</button></td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar-container\">\r\n\r\n    <div class=\"calendar-div\">\r\n        <angular2-fullcalendar [options]=\"options\" id=\"myCalendar\"></angular2-fullcalendar>\r\n    </div>\r\n\r\n    <div class=\"eventinfo\">\r\n        <h1>Varaus</h1>\r\n\r\n        <form class=\"login-form\">\r\n\r\n            <div *ngIf=\"admin\" class=\"form-group\">\r\n                <label>Asiakas</label>\r\n\r\n                <p>{{eventUsername}}</p>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Toimenpide</label>\r\n                <select type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" (ngModelChange)=\"onTitleChange()\" name=\"title\" required>\r\n                    <option value=\"öljynvaihto\" style=\"background-color: #3a87ad; color:#ffffff\">Öljynvaihto</option>\r\n                    <option value=\"renkaidenvaihto\" style=\"background-color: #009933; color:#ffffff\">Renkaidenvaihto</option>\r\n                    <option value=\"huolto\" style=\"background-color: #cc0000; color:#ffffff\">Huolto</option>\r\n                    <option value=\"korjaus\" style=\"background-color: #999922; color:#ffffff\">Korjaus</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Aloitusaika</label>\r\n                <input type=\"datetime-local\" [disabled]=\"!admin\" step=\"1800\" class=\"form-control\" [(ngModel)]=\"start\" name=\"start\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Päättymisaika</label>\r\n                <input type=\"datetime-local\" [disabled]=\"!admin\" step=\"1800\" class=\"form-control\" [(ngModel)]=\"end\" name=\"end\">\r\n\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>Lisätietoja</label>\r\n                <textarea class=\"form-control\" rows=\"2\" [(ngModel)]=\"description\" name=\"description\"> </textarea>\r\n            </div>\r\n\r\n            <input type=\"submit\" (click)=\"onEventSubmit()\" class=\"btn btn-primary\" value=\"Päivitä\">\r\n            <input type=\"submit\" (click)=\"onConfirmClick()\" *ngIf=\"!confirm\" class=\"btn btn-primary\" value=\"Hyväksy\">\r\n            <input type=\"submit\" (click)=\"onDeleteClick()\" *ngIf=\"admin\" class=\"btn btn-primary\" value=\"Poista\">\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "    <div class=\"footer navbar\">\r\n\r\n        <div class=\"footer-cont\">\r\n\r\n            <div class=\"text-container\">\r\n\r\n                <div class=\"col-md-4 footer-item\">\r\n                    <h4>Laitilan korjaamo</h4>\r\n                    <p class=\"footer-text\">Meiltä kaikki peltikorjauksista moottoriremontteihin</p>\r\n                </div>\r\n                <div class=\"col-md-4 footer-item\">\r\n                    <h4>Yhteystiedot:</h4>\r\n                    <p class=\"footer-text\">puh: 040 1234567 Sähköposti: tero.laitila@boijat.fi</p>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"img-container footer-item\">\r\n                <a href=\"https://nodejs.org/\">\r\n                    <img src=\"https://nodejs.org/static/images/logo.svg\" class=\"footer-img\" />\r\n                </a>\r\n            </div>\r\n\r\n            <div class=\"img-container footer-item\">\r\n                <a href=\"https://www.mongodb.com/\">\r\n                    <img src=\"https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png\" class=\"footer-img\" />\r\n                </a>\r\n            </div>\r\n\r\n            <div class=\"img-container footer-item\">\r\n                <a href=\"https://angular.io/\">\r\n                  <img src=\"https://angular.io/resources/images/logos/angular/angular.svg\" class=\"footer-img\" />\r\n                </a>\r\n            </div>\r\n\r\n            <div class=\"img-container footer-item\">\r\n                <a href=\"https://jwt.io/\">\r\n                    <img src=\"https://jwt.io/img/pic_logo.svg\" class=\"footer-img\" />\r\n                </a>\r\n            </div>\r\n\r\n\r\n        </div>\r\n"

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "<section class=\"BG\">\r\n    <div class=\"jumborton text-center\">\r\n        <h1>Korjaamo Laitila</h1>\r\n        <p class=\"lead\">Tervetuloa autokorjaamo Laitilan verkkosivuille</p>\r\n        <p *ngIf=\"!authService.loggedIn()\">Voit jatkaa rekisteröitymällä tai kirjautumalla</p>\r\n        <div>\r\n            <a *ngIf=\"!authService.loggedIn()\" class=\"btn btn-primary\" [routerLink]=\"['/register']\"> Register</a>\r\n            <a *ngIf=\"!authService.loggedIn()\" class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n        <h2>Ammattitaitoa</h2>\r\n        <p>Omaamme erinomaista ammattitaitoa monipuolisesti erilaisiin vaatimuksiin</p>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n        <h2>Ajanvaraus</h2>\r\n        <p>Rekisteröidy sivulle ja varaa aika korjaukseen ilmaiseksi tai ota yhteyttä sähköpostilla</p>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n        <h2>Vaihtoauto</h2>\r\n        <p>Meiltä saat myös vaihtoauton sopimalla, mikäli töissä kestää pitempään</p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Kirjautuminen</h2>\r\n<form (submit)=\"onLoginSubmit()\" class=\"login-form\">\r\n    <div class=\"form-group\">\r\n        <label>Käyttäjänimi</label>\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\r\n    </div>\r\n\r\n    <div class=\"from-group\">\r\n        <label>Salasana</label>\r\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\r\n    </div>\r\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Kirjaudu\">\r\n</form>"

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-shadow\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Korjaamo Laitila</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-left\">\r\n                <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Etusivu</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li *ngIf=\"authService.getAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/admin']\">Hallinta</a></li>\r\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Varaukset</a></li>\r\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Käyttäjä</a> </li>\r\n                <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Kirjaudu</a> </li>\r\n                <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Rekisteröidy</a></li>\r\n                <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick();\" href=\"#\">Kirjaudu ulos</a></li>\r\n            </ul>\r\n        </div>\r\n        <!--/.nav-collapse -->\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 524:
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container\">\r\n\r\n  <div *ngIf='user' class=\"profile-block user-block\">\r\n      <h2 class=\"page-header\">{{user.name}}</h2>\r\n      <ul class=\"list-group\">\r\n          <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n          <li class=\"list-group-item\">email: {{user.email}}</li>\r\n          <li class=\"list-group-item\" *ngIf=\"user.admin\">Admin</li>\r\n      </ul>\r\n  </div>\r\n\r\n  <div class=\"profile-block changePw-block\">\r\n    <h2 class=\"page-header\">Vaihda salasana</h2>\r\n    <form [formGroup]=\"changePwForm\" (ngSubmit)=\"onPasswordChange() ; changePwForm.reset()\" class=\"login-form\">\r\n        <div class=\"form-group\" [ngClass]=\"{'has-error': changePwForm.get('password').invalid && !changePwForm.get('password').pristine}\">\r\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" name=\"newPassword\" placeholder=\"Uusi salasana\" [ngClass]=\"{'form-control-danger': changePwForm.get('password').invalid && !changePwForm.get('password').pristine}\">\r\n        </div>\r\n\r\n        <div class=\"form-group\" [ngClass]=\"{'has-error': changePwForm.get('passwordConfirm').invalid && !changePwForm.get('passwordConfirm').pristine}\">\r\n          <input type=\"password\" class=\"form-control\" formControlName=\"passwordConfirm\" name=\"newPassword2\" placeholder=\"Vahvista uusi salasana\" [ngClass]=\"{'form-control-danger': changePwForm.get('passwordConfirm').invalid}\">\r\n        </div>\r\n        <button [disabled]=\"!changePwForm.valid\" type=\"submit\" class=\"btn btn-primary\">Vaihda</button>\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"panel-body\">\r\n    <table class=\"table table-striped table-hover\">\r\n      <thead>\r\n        <h2 class=\"page-header\">Omat varaukset</h2>\r\n        <tr>\r\n          <th>Toimenpide</th>\r\n          <th>Aloitusaika</th>\r\n          <th>Päättymisaika</th>\r\n          <th>Lisätietoja</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let event of events\">\r\n          <td>{{event.title}}</td>\r\n          <td>{{event.start}}</td>\r\n          <td>{{event.end}}</td>\r\n          <td>{{event.description}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Rekisteröityminen</h2>\r\n<div class=\"register-form\">\r\n    <form (submit)=\"onRegisterSubmit()\">\r\n        <div class=\"form-group\">\r\n            <label>Nimi</label>\r\n            <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Käyttäjänimi</label>\r\n            <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Sähköposti</label>\r\n            <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Salasana</label>\r\n            <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n        </div>\r\n        <input type=\"submit\" class=\"btn btn-primapy\" value=\"Rekisteröidy\">\r\n    </form>\r\n</div>"

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bgimage.3deec771fe9dc197247d.png";

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(325);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
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

/***/ })

},[784]);
//# sourceMappingURL=main.bundle.js.map