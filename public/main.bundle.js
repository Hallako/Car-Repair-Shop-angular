webpackJsonp([1,4],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__(365);
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
    //###### User functions ##########
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.nodeUrl + 'users/register/', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.nodeUrl + 'users/authenticate/', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get(this.nodeUrl + 'users/profile/', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.changePassword = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        //console.log(user);
        return this.http.post(this.nodeUrl + 'users/password/', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.handleError = function (error) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
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
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.getAdmin = function () {
        if (this.loggedIn())
            return this.getUser().admin;
    };
    AuthService.prototype.getAllUser = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get(this.nodeUrl + 'users/admin', { headers: headers })
            .map(function (res) { return res.json(); }).catch(this.handleError);
    };
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
    AuthService.prototype.delEvent = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.delete(this.nodeUrl + 'events/deleteevent/' + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getEvents = function (start, end, user, admin) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get(this.nodeUrl + 'events/getevents/'
            + start + "/" + end + "/" + user + "/" + admin + "/", { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getAllEvents = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.get(this.nodeUrl + 'events/getuserevents/' + user + "/", { headers: headers })
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

/***/ 334:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 334;


/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(349);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/main.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(531),
        styles: [__webpack_require__(518)]
    })
], AppComponent);

//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/app.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular2_fullcalendar_src_calendar_calendar__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_validate_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__guards_admin_guard__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_footer_footer_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_admin_admin_component__ = __webpack_require__(350);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_22__components_admin_admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_20__guards_admin_guard__["a" /* AdminGuard */]] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_16_angular2_fullcalendar_src_calendar_calendar__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_21__components_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_22__components_admin_admin_component__["a" /* AdminComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["b" /* NgbTimepickerModule */],
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_17__services_validate_service__["a" /* ValidateService */], __WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_19__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_20__guards_admin_guard__["a" /* AdminGuard */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/app.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
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
    function AdminComponent(authService) {
        this.authService = authService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getAllUser().subscribe(function (users) {
            return _this.users = users;
        });
    };
    AdminComponent.prototype.onSelect = function (user) {
        this.selectedUser = user;
        this.onEvents();
        this.editUser = null;
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
        this.authService.getAllEvents(this.selectedUser._id).subscribe(function (events) { return _this.events = events; });
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(532),
        styles: [__webpack_require__(519)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/admin.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fullcalendar__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fullcalendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fullcalendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_fullcalendar_dist_locale_all_js__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_fullcalendar_dist_locale_all_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_fullcalendar_dist_locale_all_js__);
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
        this.admin = false;
        this.eventClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.monthChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectionChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.calElement = null;
    }
    DashboardComponent.prototype.addEvents = function (events) {
        this.calElement = __WEBPACK_IMPORTED_MODULE_8_jquery__('#myCalendar');
        if (!__WEBPACK_IMPORTED_MODULE_7_lodash___default.a.isNil(events)) {
            __WEBPACK_IMPORTED_MODULE_8_jquery__('#myCalendar').fullCalendar('addEventSource', events);
        }
    };
    DashboardComponent.prototype.getCurrentMonth = function () {
        var currentdate = __WEBPACK_IMPORTED_MODULE_8_jquery__("#myCalendar").fullCalendar('getDate');
        return currentdate.month();
    };
    DashboardComponent.prototype.ngOnInit = function () {
        var curuser = this.authService.getUser();
        var userId = curuser.id;
        this.admin = curuser.admin;
        this.calElement = __WEBPACK_IMPORTED_MODULE_8_jquery__('#myCalendar');
        //Events
        var clickFunc = function (calEvent, jsEvent, view) {
            this.eventClick.emit(calEvent);
            this.calElement.fullCalendar('unselect');
            calEvent.backgroundColor = "#235323";
            this.calElement.fullCalendar('updateEvent', calEvent);
            calEvent.backgroundColor = "#3a87ad";
            this.id = calEvent._id,
                this.description = calEvent.description;
            this.url = calEvent.url;
            this.title = calEvent.title;
            this.end = __WEBPACK_IMPORTED_MODULE_5_moment__(calEvent.end).format('YYYY-MM-DD[T]HH:mm');
            this.start = __WEBPACK_IMPORTED_MODULE_5_moment__(calEvent.start).format('YYYY-MM-DD[T]HH:mm');
        };
        var eventRender = function (event, element) {
            var args = { event: event, view: element };
            this.dateChange.emit(args);
        };
        var viewRender = function (view, element) {
            this.monthChanged.emit(view.intervalStart.month());
        };
        var selectCall = function (start, end, jsEvent, view) {
            this.selectionChanged.emit(start, end, jsEvent, view);
            this.calElement.fullCalendar('rerenderEvents');
            if (view.type == 'month') {
                this.calElement.fullCalendar('changeView', 'agendaWeek');
                this.calElement.fullCalendar('gotoDate', start);
            }
            else {
                this.end = __WEBPACK_IMPORTED_MODULE_5_moment__(end).format('YYYY-MM-DD[T]HH:mm');
                this.start = __WEBPACK_IMPORTED_MODULE_5_moment__(start).format('YYYY-MM-DD[T]HH:mm');
            }
            this.id = null;
            this.description = null;
            this.color = null;
            this.title = null;
        };
        //binds
        var boundRender = eventRender.bind(this);
        var boundClick = clickFunc.bind(this);
        var boundView = viewRender.bind(this);
        var boundSelect = selectCall.bind(this);
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
                __WEBPACK_IMPORTED_MODULE_8_jquery__["ajax"]({
                    url: 'events/getevents/'
                        + start + "/" + end + "/" + userId + "/" + curuser.admin,
                    dataType: 'json',
                    success: function (response) {
                        callback(response);
                        console.log(response);
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
                    start: __WEBPACK_IMPORTED_MODULE_5_moment__(nowDate).subtract(1, 'days'),
                    end: nowDate.clone().add(60, 'days')
                };
            },
            hiddenDays: [0, 6],
            locale: 'fi',
            minTime: "07:00:00",
            maxTime: "18:00:00",
            allDaySlot: false,
            height: 560,
            selectable: true,
            defaultView: 'agendaWeek',
            timeFormat: 'H:mm',
            longPressDelay: 275,
            slotLabelFormat: 'H:mm',
            aspectRatio: 1,
            fixedWeekCount: false,
            selectHelper: true,
            unselectAuto: true,
            unselectCancel: ".eventinfo",
            eventRender: boundRender,
            eventClick: boundClick,
            viewRender: boundView,
            select: boundSelect,
        };
        this.calElement.fullCalendar(options);
    };
    //event delete
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
            this.flashMessage.show('Select an event', { cssClass: 'alert-danger', timeout: 3000 });
        }
    };
    //event add form
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
            user: curuser['id']
        };
        if (event.title && event.start && event.user) {
            this.authService.addEvent(event).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
                    _this.calElement.fullCalendar('refetchEvents');
                    _this.calElement.fullcalendar('unselect');
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
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('height'),
    __metadata("design:type", Number)
], DashboardComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('event-click'),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "eventClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('month-changed'),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "monthChanged", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('date-change'),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "dateChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('select-changed'),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "selectionChanged", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(533),
        styles: [__webpack_require__(520)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], DashboardComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        template: __webpack_require__(534),
        styles: [__webpack_require__(521)]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/footer.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
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
        template: __webpack_require__(535),
        styles: [__webpack_require__(522)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/home.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(10);
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
        template: __webpack_require__(536),
        styles: [__webpack_require__(523)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/login.component.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(31);
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
        this.flashMessage.show('You are now logged out', {
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
        template: __webpack_require__(537),
        styles: [__webpack_require__(524)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/navbar.component.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(31);
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
    function ProfileComponent(authService, flashmessage, router) {
        this.authService = authService;
        this.flashmessage = flashmessage;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log('error');
            return false;
        });
    };
    ProfileComponent.prototype.onPasswordChange = function () {
        var _this = this;
        this.newPassword;
        this.newPassword2;
        var user = {
            id: this.authService.getUser().id,
            password: this.newPassword
        };
        if (this.authService.loggedIn()) {
            if (this.newPassword == this.newPassword2) {
                this.authService.changePassword(user).subscribe(function (res) {
                    _this.flashmessage.show(res, { cssClass: 'alert-success', timeout: 3000 });
                    ;
                    location.reload();
                });
            }
            else {
                this.flashmessage.show('Vahvista salasana', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
            }
        }
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__(538),
        styles: [__webpack_require__(525)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/profile.component.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(31);
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
        //check form
        if (!this.validateService.validateRegister(user)) {
            this.flashmessage.show('Fill in all Fields', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashmessage.show('Enter a valid email', { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        //register user
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.flashmessage.show('Registered succesfully', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashmessage.show('Something went wrong', { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(539),
        styles: [__webpack_require__(526)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/register.component.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(10);
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
        if (this.authService.getUser().admin === true) {
            return true;
        }
        else {
            this.location.back();
            return false;
        }
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

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(10);
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
    AuthGuard.prototype.ifAdmin = function () {
        if (this.authService.getUser().admin === true) {
            return true;
        }
        else {
            this.location.back();
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

/***/ 360:
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

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".router-outlet {\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n    padding-bottom: 120px;\r\n    position: relative;\r\n}\r\n\r\n.container {\r\n    min-height: 82%;\r\n    position: relative;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".col-md-4{\r\n  width: 50%;\r\n}\r\n.panel-primary {\r\n  width: 40%;\r\n  height: 5%;\r\n  float: left;\r\n\r\n}\r\n.panel-success {\r\n  float: right;\r\n  width: 100%;\r\n  height: 5%;\r\n}\r\n\r\n.btn-group-vertical {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  border-radius: 0px;\r\n  display: block;\r\n  width: 40%;\r\n}\r\n.btn {\r\n  border-radius: 0px;\r\n}\r\n\r\n.btn-primary {\r\n  border-radius: 6px;\r\n  margin-bottom: 10px;\r\n}\r\n.btn-sm {\r\n  margin-bottom: 5px;\r\n  border-radius: 0px;\r\n}\r\n\r\n.btn-xs {\r\n  margin-left: 0.6em;\r\n}\r\n\r\n.btn-ok {\r\n  float: right;\r\n}\r\n\r\n.btn-default {\r\n  border-radius: 6px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\r\n  border-radius: 6px;\r\n}\r\n\r\n.btn-group-vertical > .btn:first-child:not(:last-child) {\r\n  border-radius: 6px;\r\n}\r\n.btn-group-vertical > .btn:last-child:not(:first-child) {\r\n  border-radius: 6px;\r\n}\r\n\r\n.form-horizontal {\r\n  padding-top: 5em;\r\n  width: 50%;\r\n  float: left;\r\n}\r\n\r\n.table-hover {\r\n  position: relative;\r\n  margin-top: 5em;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".login-form {\r\n    padding-top: 00px;\r\n}\r\n\r\n.btn-primary {\r\n    display: inline-block;\r\n    margin: 10px;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n    box-shadow: 1px 1.5px 1px #777777;\r\n}\r\n\r\n.calendar-div {\r\n    padding-top: 28px;\r\n    width: 65%;\r\n    float: left;\r\n}\r\n\r\n.form-group {\r\n    padding-top: 2px;\r\n}\r\n\r\n.eventinfo {\r\n    padding: 20px;\r\n    padding: 30px;\r\n    padding-top: 00px;\r\n    float: left;\r\n    width: 35%;\r\n}\r\n\r\n.clearfix {\r\n    clear: both;\r\n}\r\n\r\nfooter {\r\n    padding-top: 40px;\r\n}\r\n\r\n.form-control {\r\n    display: inline-block;\r\n    margin: 0;\r\n    vertical-align: middle;\r\n}\r\n\r\n#colorHelper {\r\n    vertical-align: middle;\r\n    display: inline-block;\r\n    background-color: #3a87ad;\r\n    height: 46px;\r\n    width: 20%;\r\n    border: 1px solid #666666;\r\n    border-radius: 4px;\r\n    margin-left: 2.5%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".footer {\r\n    position: absolute;\r\n    margin-bottom: 0px;\r\n    height: auto;\r\n    text-align: center;\r\n    border: 1px groove #000000;\r\n    background-color: #202020;\r\n    /*opacity: 0.6;*/\r\n    color: #eeeeee;\r\n    width: 100%;\r\n    box-shadow: 0px 2px 5px 0px #090909 inset;\r\n}\r\n\r\n.footer-padding {\r\n    width: 100%;\r\n}\r\n\r\n.text-container {\r\n    position: relative;\r\n    width: 60%;\r\n    padding-top: 10px;\r\n    background-color: #202020;\r\n}\r\n\r\n@media all and (max-width: 1250px) {\r\n    .img-container {\r\n        position: relative;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n.footer-text {\r\n    font-size: 12px;\r\n}\r\n\r\n.footer-cont {\r\n    position: relative;\r\n    background-color: #202020;\r\n    width: 60%;\r\n    left: 20%;\r\n    right: 20%;\r\n    margin-top: 5px;\r\n}\r\n\r\n.footer-img {\r\n    position: relative;\r\n    float: left;\r\n    max-height: 75px;\r\n    max-width: 150px;\r\n    width: inherit;\r\n    height: inherit;\r\n    padding-top: 10px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".login-form {\r\n    width: 30%;\r\n}\r\n\r\n.btn-primary {\r\n    margin-top: 20px;\r\n    font-size: 12px;\r\n}\r\n\r\nlabel {\r\n    margin-top: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".navbar-shadow {\r\n    box-shadow: 0px 2px 5px 0px #090909;\r\n}\r\n\r\n.navbar-brand {\r\n    text-shadow: 1px 1px 3px #111111;\r\n}\r\n\r\n.navbar-right {\r\n    text-shadow: 1px 1px 3px #111111;\r\n}\r\n\r\n.navbar-left {\r\n    text-shadow: 1px 1px 3px #111111;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".user-class {\r\n  float: left;\r\n  width: 30%\r\n}\r\n\r\n.changePw-class {\r\n  float: right;\r\n  width: 30%\r\n}\r\n\r\n.clearfix {\r\n    clear: both;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 526:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".register-form {\r\n    width: 30%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 208,
	"./af.js": 208,
	"./ar": 215,
	"./ar-dz": 209,
	"./ar-dz.js": 209,
	"./ar-kw": 210,
	"./ar-kw.js": 210,
	"./ar-ly": 211,
	"./ar-ly.js": 211,
	"./ar-ma": 212,
	"./ar-ma.js": 212,
	"./ar-sa": 213,
	"./ar-sa.js": 213,
	"./ar-tn": 214,
	"./ar-tn.js": 214,
	"./ar.js": 215,
	"./az": 216,
	"./az.js": 216,
	"./be": 217,
	"./be.js": 217,
	"./bg": 218,
	"./bg.js": 218,
	"./bn": 219,
	"./bn.js": 219,
	"./bo": 220,
	"./bo.js": 220,
	"./br": 221,
	"./br.js": 221,
	"./bs": 222,
	"./bs.js": 222,
	"./ca": 223,
	"./ca.js": 223,
	"./cs": 224,
	"./cs.js": 224,
	"./cv": 225,
	"./cv.js": 225,
	"./cy": 226,
	"./cy.js": 226,
	"./da": 227,
	"./da.js": 227,
	"./de": 230,
	"./de-at": 228,
	"./de-at.js": 228,
	"./de-ch": 229,
	"./de-ch.js": 229,
	"./de.js": 230,
	"./dv": 231,
	"./dv.js": 231,
	"./el": 232,
	"./el.js": 232,
	"./en-au": 233,
	"./en-au.js": 233,
	"./en-ca": 234,
	"./en-ca.js": 234,
	"./en-gb": 235,
	"./en-gb.js": 235,
	"./en-ie": 236,
	"./en-ie.js": 236,
	"./en-nz": 237,
	"./en-nz.js": 237,
	"./eo": 238,
	"./eo.js": 238,
	"./es": 240,
	"./es-do": 239,
	"./es-do.js": 239,
	"./es.js": 240,
	"./et": 241,
	"./et.js": 241,
	"./eu": 242,
	"./eu.js": 242,
	"./fa": 243,
	"./fa.js": 243,
	"./fi": 244,
	"./fi.js": 244,
	"./fo": 245,
	"./fo.js": 245,
	"./fr": 248,
	"./fr-ca": 246,
	"./fr-ca.js": 246,
	"./fr-ch": 247,
	"./fr-ch.js": 247,
	"./fr.js": 248,
	"./fy": 249,
	"./fy.js": 249,
	"./gd": 250,
	"./gd.js": 250,
	"./gl": 251,
	"./gl.js": 251,
	"./gom-latn": 252,
	"./gom-latn.js": 252,
	"./he": 253,
	"./he.js": 253,
	"./hi": 254,
	"./hi.js": 254,
	"./hr": 255,
	"./hr.js": 255,
	"./hu": 256,
	"./hu.js": 256,
	"./hy-am": 257,
	"./hy-am.js": 257,
	"./id": 258,
	"./id.js": 258,
	"./is": 259,
	"./is.js": 259,
	"./it": 260,
	"./it.js": 260,
	"./ja": 261,
	"./ja.js": 261,
	"./jv": 262,
	"./jv.js": 262,
	"./ka": 263,
	"./ka.js": 263,
	"./kk": 264,
	"./kk.js": 264,
	"./km": 265,
	"./km.js": 265,
	"./kn": 266,
	"./kn.js": 266,
	"./ko": 267,
	"./ko.js": 267,
	"./ky": 268,
	"./ky.js": 268,
	"./lb": 269,
	"./lb.js": 269,
	"./lo": 270,
	"./lo.js": 270,
	"./lt": 271,
	"./lt.js": 271,
	"./lv": 272,
	"./lv.js": 272,
	"./me": 273,
	"./me.js": 273,
	"./mi": 274,
	"./mi.js": 274,
	"./mk": 275,
	"./mk.js": 275,
	"./ml": 276,
	"./ml.js": 276,
	"./mr": 277,
	"./mr.js": 277,
	"./ms": 279,
	"./ms-my": 278,
	"./ms-my.js": 278,
	"./ms.js": 279,
	"./my": 280,
	"./my.js": 280,
	"./nb": 281,
	"./nb.js": 281,
	"./ne": 282,
	"./ne.js": 282,
	"./nl": 284,
	"./nl-be": 283,
	"./nl-be.js": 283,
	"./nl.js": 284,
	"./nn": 285,
	"./nn.js": 285,
	"./pa-in": 286,
	"./pa-in.js": 286,
	"./pl": 287,
	"./pl.js": 287,
	"./pt": 289,
	"./pt-br": 288,
	"./pt-br.js": 288,
	"./pt.js": 289,
	"./ro": 290,
	"./ro.js": 290,
	"./ru": 291,
	"./ru.js": 291,
	"./sd": 292,
	"./sd.js": 292,
	"./se": 293,
	"./se.js": 293,
	"./si": 294,
	"./si.js": 294,
	"./sk": 295,
	"./sk.js": 295,
	"./sl": 296,
	"./sl.js": 296,
	"./sq": 297,
	"./sq.js": 297,
	"./sr": 299,
	"./sr-cyrl": 298,
	"./sr-cyrl.js": 298,
	"./sr.js": 299,
	"./ss": 300,
	"./ss.js": 300,
	"./sv": 301,
	"./sv.js": 301,
	"./sw": 302,
	"./sw.js": 302,
	"./ta": 303,
	"./ta.js": 303,
	"./te": 304,
	"./te.js": 304,
	"./tet": 305,
	"./tet.js": 305,
	"./th": 306,
	"./th.js": 306,
	"./tl-ph": 307,
	"./tl-ph.js": 307,
	"./tlh": 308,
	"./tlh.js": 308,
	"./tr": 309,
	"./tr.js": 309,
	"./tzl": 310,
	"./tzl.js": 310,
	"./tzm": 312,
	"./tzm-latn": 311,
	"./tzm-latn.js": 311,
	"./tzm.js": 312,
	"./uk": 313,
	"./uk.js": 313,
	"./ur": 314,
	"./ur.js": 314,
	"./uz": 316,
	"./uz-latn": 315,
	"./uz-latn.js": 315,
	"./uz.js": 316,
	"./vi": 317,
	"./vi.js": 317,
	"./x-pseudo": 318,
	"./x-pseudo.js": 318,
	"./yo": 319,
	"./yo.js": 319,
	"./zh-cn": 320,
	"./zh-cn.js": 320,
	"./zh-hk": 321,
	"./zh-hk.js": 321,
	"./zh-tw": 322,
	"./zh-tw.js": 322
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
webpackContext.id = 529;


/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col-md-4\">\r\n  <div class=\"btn-group-vertical\" >\r\n    <li *ngFor=\"let user of users\" class=\"btn btn-primary\" (click)=\"onSelect(user)\">{{user.name}}</li>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"col-md-4\" *ngIf=\"selectedUser\">\r\n  <div *ngIf=\"selectedUser\" class=\"panel panel-success\">\r\n    <div class=\"panel-heading\">\r\n      <h3 class=\"panel-title\">\r\n      {{selectedUser.name}}\r\n    </h3>\r\n    </div>\r\n\r\n  <div class=\"panel-body\">\r\n    <li>\r\n      {{selectedUser.username}}\r\n    </li>\r\n    <li>\r\n      {{selectedUser.email}}\r\n    </li>\r\n\r\n  </div>\r\n\r\n</div>\r\n<button class=\"btn btn-primary btn-xs\" (click)=\"editSelected()\" >Muokkaa</button>\r\n</div>\r\n\r\n<form *ngIf=\"editUser\" method=\"post\" class=\"form-horizontal\" name=\"edit\">\r\n  <fieldset>\r\n      <legend>{{selectedUser.name}}</legend>\r\n      <div class=\"form-group\">\r\n        <label for=\"inputName\" class=\"col-lg-2 control-label\">Nimi</label>\r\n        <div class=\"col-lg-10\">\r\n          <input type=\"text\" [(ngModel)]=\"selectedUser.name\" class=\"form-control\" id=\"inputName\" name=\"name\" placeholder=\"{{selectedUser.name}}\" text=\"\"/>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"inputEmail\" class=\"col-lg-2 control-label\">Email</label>\r\n        <div class=\"col-lg-10\">\r\n          <input type=\"email\" [(ngModel)]=\"selectedUser.email\" class=\"form-control\" id=\"inputEmail\" name=\"email\" placeholder=\"{{selectedUser.email}}\" text=\"\"/>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"inputUsername\" class=\"col-lg-2 control-label\">Käyttäjänimi</label>\r\n        <div class=\"col-lg-10\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"selectedUser.username\" name=\"username\" id=\"inputUsername\" placeholder=\"{{selectedUser.username}}\" />\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n      <div class=\"col-lg-10 col-lg-offset-2\">\r\n        <button type=\"reset\"  (click)=\"editUser = null\" class=\"btn btn-default\">Cancel</button>\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"updateUser()\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n</form>\r\n<div *ngIf=\"selectedUser\">\r\n<table class=\"table table-hover \" >\r\n  <thead>\r\n    <tr>\r\n      <th>Toimenpide</th>\r\n      <th>Aloitusaika</th>\r\n      <th>Päättymisaika</th>\r\n      <th>Lisätietoja</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let event of events\">\r\n      <td>{{event.title}}</td>\r\n      <td>{{event.start}}</td>\r\n      <td>{{event.end}}</td>\r\n      <td>{{event.description}}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n</div>\r\n"

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = "<div class=\"calendar-container\">\r\n\r\n    <div class=\"calendar-div\">\r\n        <angular2-fullcalendar [options]=\"options\" id=\"myCalendar\"></angular2-fullcalendar>\r\n    </div>\r\n\r\n    <div class=\"eventinfo\">\r\n        <h1>Varaus</h1>\r\n\r\n        <form class=\"login-form\">\r\n\r\n\r\n            <div class=\"form-group\">\r\n                <label>Toimenpide</label>\r\n                <select type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" name=\"title\" required>\r\n                    <option value=\"öljynvaihto\">Öljynvaihto</option>\r\n                    <option value=\"renkaidenvaihto\">Renkaidenvaihto</option>\r\n                    <option value=\"huolto\">Huolto</option>\r\n                    <option value=\"korjaus\">Korjaus</option>\r\n                    <option value=\"muu\">Muu</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Aloitusaika</label>\r\n                <input type=\"datetime-local\" disabled class=\"form-control\" [(ngModel)]=\"start\" name=\"start\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Päättymisaika</label>\r\n                <input type=\"datetime-local\" disabled class=\"form-control\" [(ngModel)]=\"end\" name=\"end\">\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n\r\n                <label style=\"width:100%\">Väri</label>\r\n\r\n                <div>\r\n                    <select type=\"text\" class=\"form-control\" style=\"width:75%\" [(ngModel)]=\"color\" name=\"color\">\r\n                    <option value=\"#3a87ad\">Oletus</option>\r\n                    <option value=\"#cc0000\">Punainen</option>\r\n                    <option value=\"#009933\">Vihreä</option>\r\n                    <option value=\"#005ce6\">Sininen</option>\r\n                    <option value=\"#8600b3\">Violetti</option>\r\n                    <option value=\"#33cccc\">Syaani</option>\r\n                </select>\r\n                    <div id=\"colorHelper\" [style.backgroundColor]=\"color\"></div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label>Lisätietoja</label>\r\n                <textarea class=\"form-control\" rows=\"2\" [(ngModel)]=\"description\" name=\"description\"> </textarea>\r\n            </div>\r\n\r\n\r\n            <input type=\"submit\" (click)=\"onEventSubmit()\" class=\"btn btn-primary\" value=\"Update/add\">\r\n\r\n            <input type=\"submit\" (click)=\"onDeleteClick()\" *ngIf=\"admin\" class=\"btn btn-primary\" value=\"Delete\">\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ 534:
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-padding\">\r\n\r\n    <div class=\"footer\">\r\n\r\n        <div class=\"footer-cont\">\r\n\r\n            <div class=\"text-container\">\r\n                <div class=\"col-md-4\">\r\n                    <h4>Laitilan korjaamo</h4>\r\n                    <p class=\"footer-text\">Meiltä kaikki peltikorjauksista moottoriremontteihin</p>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <h4>Yhteystiedot:</h4>\r\n                    <p class=\"footer-text\">puh: 040 1234567</p>\r\n                    <p class=\"footer-text\">Sähköposti: tero.laitila@boijat.fi</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"img-container\">\r\n                <!-- Kuvat tähän -->\r\n                <div class=\"img-container\">\r\n                    <img src=\"https://nodejs.org/static/images/logo.svg\" class=\"footer-img\" />\r\n                </div>\r\n                <div class=\"img-container\">\r\n                    <img src=\"https://upload.wikimedia.org/wikipedia/en/thumb/4/45/MongoDB-Logo.svg/1280px-MongoDB-Logo.svg.png\" class=\"footer-img\" />\r\n                </div>\r\n                <div class=\"img-container\">\r\n                    <img src=\"https://angular.io/resources/images/logos/angular/angular.svg\" class=\"footer-img\" />\r\n                </div>\r\n                <div class=\"img-container\">\r\n                    <img src=\"https://jwt.io/img/pic_logo.svg\" class=\"footer-img\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ 535:
/***/ (function(module, exports) {

module.exports = "<div class=\"jumborton text-center\">\r\n    <h1>Mean app</h1>\r\n    <p class=\"lead\">Tervetuloa autokorjaamon verkkosivulle </p>\r\n    <p *ngIf=\"!authService.loggedIn()\"> voit jatkaa rekisteröitymällä tai kirjautumalla</p>\r\n    <div>\r\n        <a *ngIf=\"!authService.loggedIn()\" class=\"btn btn-primary\" [routerLink]=\"['/register']\"> Register</a>\r\n        <a *ngIf=\"!authService.loggedIn()\" class=\"btn btn-default\" [routerLink]=\"['/login']\">Login</a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n\r\n    <div class=\"col-md-4\">\r\n        <h3>Express </h3>\r\n        <p>Kivi kova nodejs express serveri, mongoose välikätenä mongoon</p>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n        <h3>Angular 2</h3>\r\n        <p>Angular 2 frontend</p>\r\n    </div>\r\n\r\n    <div class=\"col-md-4\">\r\n        <h3>JWT Tokens</h3>\r\n        <p>JSON web tokens</p>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\" class=\"login-form\">\n    <div class=\"form-group\">\n        <label>Username</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n    </div>\n\n    <div class=\"from-group\">\n        <label>password</label>\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n    </div>\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"login\">\n</form>"

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-shadow\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n          </button>\r\n            <a class=\"navbar-brand\" href=\"#\">Korjaamo Laitila</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav navbar-left\">\r\n                <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/']\">Etusivu</a></li>\r\n            </ul>\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li *ngIf=\"authService.getAdmin()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/admin']\">Hallinta</a></li>\r\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/dashboard']\">Varaukset</a></li>\r\n                <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/profile']\">Käyttäjä</a> </li>\r\n                <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/login']\">Kirjaudu</a> </li>\r\n                <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\"><a [routerLink]=\"['/register']\">Rekisteröidy</a></li>\r\n                <li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick();\" href=\"#\">Logout</a></li>\r\n            </ul>\r\n        </div>\r\n        <!--/.nav-collapse -->\r\n    </div>\r\n</nav>"

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-container\">\r\n\r\n  <div *ngIf='user' class=\"user-class\">\r\n      <h2 class=\"page-header\">{{user.name}}</h2>\r\n      <ul class=\"list-group\">\r\n          <li class=\"list-group-item\">Username: {{user.username}}</li>\r\n          <li class=\"list-group-item\">email: {{user.email}}</li>\r\n          <li class=\"list-group-item\" *ngIf=\"user.admin\">Admin</li>\r\n      </ul>\r\n  </div>\r\n\r\n  <div class=\"changePw-class\">\r\n    <form (submit)=\"onPasswordChange()\" class=\"login-form\">\r\n        <h2 class=\"page-header\">Vaihda salasana</h2>\r\n\r\n        <div class=\"form-group\">\r\n            <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newPassword\" name=\"newPassword\" placeholder=\"Uusi salasana\">\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"newPassword2\" name=\"newPassword2\" placeholder=\"Vahvista uusi salasana\">\r\n        </div>\r\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"changePw\">\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"clearfix\"></div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\n<div class=\"register-form\">\n    <form (submit)=\"onRegisterSubmit()\">\n        <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n            <label>Username</label>\n            <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n            <label>Email</label>\n            <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n        </div>\n        <div class=\"form-group\">\n            <label>Password</label>\n            <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n        </div>\n        <input type=\"submit\" class=\"btn btn-primapy\" value=\"Submit\">\n    </form>\n</div>"

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(335);


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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

//# sourceMappingURL=C:/dev/Nodet/MeanAppi/angular-src/src/validate.service.js.map

/***/ })

},[579]);
//# sourceMappingURL=main.bundle.js.map