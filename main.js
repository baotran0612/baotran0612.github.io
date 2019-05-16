(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _contacts_contacts_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contacts/contacts.module */ "./src/app/contacts/contacts.module.ts");
/* harmony import */ var _contacts_detail_contacts_detail_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contacts-detail/contacts-detail.module */ "./src/app/contacts-detail/contacts-detail.module.ts");







var routesConfig = [
    { path: '', redirectTo: '/contacts', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] },
];
var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_contacts_contacts_module__WEBPACK_IMPORTED_MODULE_5__["ContactsModule"], _contacts_detail_contacts_detail_module__WEBPACK_IMPORTED_MODULE_6__["ContactsDetailModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routesConfig), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: [
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"],
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-card>\r\n    <p class=\"card-header\">Bao Tran Training Feader</p>\r\n</app-card>\r\n<app-card>\r\n    <h3 class=\"card-footer\">Bao Tran Training Footer</h3>\r\n</app-card>\r\n -->\r\n\r\n\r\n <a routerLink=\"/contacts\">Contacts</a>\r\n <a routerLink=\"/detail\">Dettail</a>\r\n<router-outlet> </router-outlet> "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'learn-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _word_word_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./word/word.component */ "./src/app/word/word.component.ts");
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book/book.component */ "./src/app/book/book.component.ts");
/* harmony import */ var _input_handle_input_handle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./input-handle/input-handle.component */ "./src/app/input-handle/input-handle.component.ts");
/* harmony import */ var _tamplate_reference_variable_tamplate_reference_variable_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tamplate-reference-variable/tamplate-reference-variable.component */ "./src/app/tamplate-reference-variable/tamplate-reference-variable.component.ts");
/* harmony import */ var _style_class_biding_style_class_biding_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./style-class-biding/style-class-biding.component */ "./src/app/style-class-biding/style-class-biding.component.ts");
/* harmony import */ var _directive_ngstyle_directive_ngstyle_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directive-ngstyle/directive-ngstyle.component */ "./src/app/directive-ngstyle/directive-ngstyle.component.ts");
/* harmony import */ var _ngif_ngif_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ngif/ngif.component */ "./src/app/ngif/ngif.component.ts");
/* harmony import */ var _ng_for_ng_for_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ng-for/ng-for.component */ "./src/app/ng-for/ng-for.component.ts");
/* harmony import */ var _ng_for_arr_ng_for_arr_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ng-for-arr/ng-for-arr.component */ "./src/app/ng-for-arr/ng-for-arr.component.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./person/person.component */ "./src/app/person/person.component.ts");
/* harmony import */ var _list_person_list_person_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./list-person/list-person.component */ "./src/app/list-person/list-person.component.ts");
/* harmony import */ var _parent_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./parent.component */ "./src/app/parent.component.ts");
/* harmony import */ var _child_Component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./child.Component */ "./src/app/child.Component.ts");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./card.component */ "./src/app/card.component.ts");
/* harmony import */ var _learn_pipe_learn_pipe_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./learn-pipe/learn-pipe.component */ "./src/app/learn-pipe/learn-pipe.component.ts");
/* harmony import */ var _custome_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./custome-pipe */ "./src/app/custome-pipe.ts");
/* harmony import */ var _ip_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ip.component */ "./src/app/ip.component.ts");
/* harmony import */ var _weather_service_weather_service_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./weather-service/weather-service.component */ "./src/app/weather-service/weather-service.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _word_word_component__WEBPACK_IMPORTED_MODULE_9__["WordComponent"],
                _book_book_component__WEBPACK_IMPORTED_MODULE_10__["BookComponent"],
                _input_handle_input_handle_component__WEBPACK_IMPORTED_MODULE_11__["InputHandleComponent"],
                _tamplate_reference_variable_tamplate_reference_variable_component__WEBPACK_IMPORTED_MODULE_12__["TamplateReferenceVariableComponent"],
                _style_class_biding_style_class_biding_component__WEBPACK_IMPORTED_MODULE_13__["StyleClassBidingComponent"],
                _directive_ngstyle_directive_ngstyle_component__WEBPACK_IMPORTED_MODULE_14__["DirectiveNgstyleComponent"],
                _ngif_ngif_component__WEBPACK_IMPORTED_MODULE_15__["NgifComponent"],
                _ng_for_ng_for_component__WEBPACK_IMPORTED_MODULE_16__["NgForComponent"],
                _ng_for_arr_ng_for_arr_component__WEBPACK_IMPORTED_MODULE_17__["NgForArrComponent"],
                _person_person_component__WEBPACK_IMPORTED_MODULE_18__["PersonComponent"],
                _list_person_list_person_component__WEBPACK_IMPORTED_MODULE_19__["ListPersonComponent"],
                _parent_component__WEBPACK_IMPORTED_MODULE_20__["ParentComponent"],
                _child_Component__WEBPACK_IMPORTED_MODULE_21__["ChildComponent"],
                _card_component__WEBPACK_IMPORTED_MODULE_22__["CardComponent"],
                _learn_pipe_learn_pipe_component__WEBPACK_IMPORTED_MODULE_23__["LearnPipeComponent"],
                _custome_pipe__WEBPACK_IMPORTED_MODULE_24__["RoundPipe"],
                _ip_component__WEBPACK_IMPORTED_MODULE_25__["IpComponent"],
                _weather_service_weather_service_component__WEBPACK_IMPORTED_MODULE_26__["WeatherServiceComponent"],
                _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_27__["SignInComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/*!*****************************************!*\
  !*** ./src/app/book/book.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2svYm9vay5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/book/book.component.html":
/*!******************************************!*\
  !*** ./src/app/book/book.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  book works!\n</p>\n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/*!****************************************!*\
  !*** ./src/app/book/book.component.ts ***!
  \****************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BookComponent = /** @class */ (function () {
    function BookComponent() {
    }
    BookComponent.prototype.ngOnInit = function () {
    }; // lyfe cycle hook dùng để thực thi một hành động nào đó , khi các sự kiện của các component diễn ra :
    BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book',
            template: __webpack_require__(/*! ./book.component.html */ "./src/app/book/book.component.html"),
            styles: [__webpack_require__(/*! ./book.component.css */ "./src/app/book/book.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/app/card.component.ts":
/*!***********************************!*\
  !*** ./src/app/card.component.ts ***!
  \***********************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-card',
            template: "\n        <div class=\"card\">\n        <div class = \"header\">\n        <ng-content select=\".card-header\"></ng-content>\n        </div>\n        <div class = \"footer\">\n        <ng-content select=\".card-footer\"></ng-content>\n        </div>\n        </div>\n    ",
            styles: ["\n        .card {\n            padding: 5px;\n            margin: 5px;\n            background: #fff;\n            border-radius: 2px;\n            display: inline-block;\n            width: 300px;\n            box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);\n        }\n    "]
        })
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/child.Component.ts":
/*!************************************!*\
  !*** ./src/app/child.Component.ts ***!
  \************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
        // @Output () myclick = new EventEmitter<boolean>();
        // addValue (){
        //     this.myclick.emit(true);
        // }
        // subValue (){
        //     this.myclick.emit(false);
        // }
        this.value = 0;
    }
    ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-child',
            // template : `
            // <button (click) = "addValue();" style = "width:50px" > + </button> 
            // <button (click) = "subValue();" style = "width:50px" > - </button>
            // `
            template: "\n            <h3> {{value}}</h3>\n    "
        })
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/contacts-detail/contacts-detail.component.css":
/*!***************************************************************!*\
  !*** ./src/app/contacts-detail/contacts-detail.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzLWRldGFpbC9jb250YWN0cy1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/contacts-detail/contacts-detail.component.html":
/*!****************************************************************!*\
  !*** ./src/app/contacts-detail/contacts-detail.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Tên : {{name}}</p>\n<p>Name : {{phoneNumber}}</p>"

/***/ }),

/***/ "./src/app/contacts-detail/contacts-detail.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/contacts-detail/contacts-detail.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsDetailComponent", function() { return ContactsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ContactsDetailComponent = /** @class */ (function () {
    function ContactsDetailComponent(route) {
        this.route = route;
        this.name = '';
        this.phoneNumber = '';
    }
    ContactsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var id = params.get('id');
            _this.name = params.get('name');
            _this.phoneNumber = params.get('phoneNumber');
        });
    };
    ContactsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts-detail',
            template: __webpack_require__(/*! ./contacts-detail.component.html */ "./src/app/contacts-detail/contacts-detail.component.html"),
            styles: [__webpack_require__(/*! ./contacts-detail.component.css */ "./src/app/contacts-detail/contacts-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ContactsDetailComponent);
    return ContactsDetailComponent;
}());



/***/ }),

/***/ "./src/app/contacts-detail/contacts-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/contacts-detail/contacts-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: ContactsDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsDetailModule", function() { return ContactsDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contacts_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts-detail.component */ "./src/app/contacts-detail/contacts-detail.component.ts");





var routesConfig = [
    { path: 'detail/:id/:name/:phoneNumber', component: _contacts_detail_component__WEBPACK_IMPORTED_MODULE_4__["ContactsDetailComponent"] },
];
var ContactsDetailModule = /** @class */ (function () {
    function ContactsDetailModule() {
    }
    ContactsDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contacts_detail_component__WEBPACK_IMPORTED_MODULE_4__["ContactsDetailComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routesConfig), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        })
    ], ContactsDetailModule);
    return ContactsDetailModule;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.html":
/*!**************************************************!*\
  !*** ./src/app/contacts/contacts.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor = \"let contact of contacts\">\r\n    <a routerLink=\"/detail/{{contact.id}}/{{contact.name}}/{{contact.phoneNumber}}\">{{contact.name}}</a>\r\n</div>"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
        this.contacts = [
            { id: 1, name: 'Teo', phoneNumber: '0123' },
            { id: 2, name: 'Ti', phoneNumber: '0456' },
            { id: 3, name: 'Tun', phoneNumber: '0789' },
        ];
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contacts.component.html */ "./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.module.ts":
/*!*********************************************!*\
  !*** ./src/app/contacts/contacts.module.ts ***!
  \*********************************************/
/*! exports provided: ContactsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsModule", function() { return ContactsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contacts.component */ "./src/app/contacts/contacts.component.ts");





var routesConfig = [
    { path: 'contacts', component: _contacts_component__WEBPACK_IMPORTED_MODULE_4__["ContactsComponent"] },
];
var ContactsModule = /** @class */ (function () {
    function ContactsModule() {
    }
    ContactsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_4__["ContactsComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routesConfig), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
        })
    ], ContactsModule);
    return ContactsModule;
}());



/***/ }),

/***/ "./src/app/custome-pipe.ts":
/*!*********************************!*\
  !*** ./src/app/custome-pipe.ts ***!
  \*********************************/
/*! exports provided: RoundPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RoundPipe = /** @class */ (function () {
    function RoundPipe() {
    }
    RoundPipe.prototype.transform = function (value, isUpper) {
        if (isUpper) {
            return Math.ceil(value);
        }
        return Math.floor(value);
    };
    RoundPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'roundNum' })
    ], RoundPipe);
    return RoundPipe;
}());



/***/ }),

/***/ "./src/app/directive-ngstyle/directive-ngstyle.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/directive-ngstyle/directive-ngstyle.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n    background-color: black;\r\n}\r\n.square{\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: red;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlyZWN0aXZlLW5nc3R5bGUvZGlyZWN0aXZlLW5nc3R5bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixxQkFBcUI7O0FBRXpCIiwiZmlsZSI6InNyYy9hcHAvZGlyZWN0aXZlLW5nc3R5bGUvZGlyZWN0aXZlLW5nc3R5bGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaXJjbGV7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG4uc3F1YXJle1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/directive-ngstyle/directive-ngstyle.component.html":
/*!********************************************************************!*\
  !*** ./src/app/directive-ngstyle/directive-ngstyle.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" placeholder=\"Hãy nhập tên...\" [(ngModel)]=\"name\">\n<h1 [(ngStyle)]= \"name.length % 2 == 0 ? chanStyle : leStyle\">Tên của bạn là :  {{name}}</h1>\n<div [class.circle] = \"!highLight\" [class.square] = \"highLight\"></div>\n<div [ngClass]=\"{circle :!highLight , square : highLight}\" ></div>\n<button (click)=\"click()\">CLICK</button>\n<div> </div>"

/***/ }),

/***/ "./src/app/directive-ngstyle/directive-ngstyle.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/directive-ngstyle/directive-ngstyle.component.ts ***!
  \******************************************************************/
/*! exports provided: DirectiveNgstyleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveNgstyleComponent", function() { return DirectiveNgstyleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DirectiveNgstyleComponent = /** @class */ (function () {
    function DirectiveNgstyleComponent() {
        this.name = '';
        this.chanStyle = { color: 'red', fontSize: '50px', };
        this.leStyle = { color: 'Black', fontSize: '20px', };
        this.highLight = true;
    }
    DirectiveNgstyleComponent.prototype.ngOnInit = function () {
    };
    DirectiveNgstyleComponent.prototype.click = function () {
        this.highLight = !this.highLight;
    };
    DirectiveNgstyleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-directive-ngstyle',
            template: __webpack_require__(/*! ./directive-ngstyle.component.html */ "./src/app/directive-ngstyle/directive-ngstyle.component.html"),
            styles: [__webpack_require__(/*! ./directive-ngstyle.component.css */ "./src/app/directive-ngstyle/directive-ngstyle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DirectiveNgstyleComponent);
    return DirectiveNgstyleComponent;
}());



/***/ }),

/***/ "./src/app/input-handle/input-handle.component.css":
/*!*********************************************************!*\
  !*** ./src/app/input-handle/input-handle.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lucHV0LWhhbmRsZS9pbnB1dC1oYW5kbGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/input-handle/input-handle.component.html":
/*!**********************************************************!*\
  !*** ./src/app/input-handle/input-handle.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <input type=\"text\" placeholder=\"Hãy nhập tên...\" (keyup)=\"showName($event);\">\n<h1>Tên của bạn là :  {{name}}</h1> -->\n<input type=\"text\" placeholder=\"Hãy nhập tên...\" [(ngModel)]=\"name\">\n<h1>Tên của bạn là :  {{name}}</h1>\n"

/***/ }),

/***/ "./src/app/input-handle/input-handle.component.ts":
/*!********************************************************!*\
  !*** ./src/app/input-handle/input-handle.component.ts ***!
  \********************************************************/
/*! exports provided: InputHandleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputHandleComponent", function() { return InputHandleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputHandleComponent = /** @class */ (function () {
    function InputHandleComponent() {
        this.name = '';
    }
    InputHandleComponent.prototype.ngOnInit = function () {
    };
    InputHandleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input-handle',
            template: __webpack_require__(/*! ./input-handle.component.html */ "./src/app/input-handle/input-handle.component.html"),
            styles: [__webpack_require__(/*! ./input-handle.component.css */ "./src/app/input-handle/input-handle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputHandleComponent);
    return InputHandleComponent;
}());



/***/ }),

/***/ "./src/app/ip.component.ts":
/*!*********************************!*\
  !*** ./src/app/ip.component.ts ***!
  \*********************************/
/*! exports provided: IpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpComponent", function() { return IpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IpComponent = /** @class */ (function () {
    function IpComponent() {
    }
    IpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ip',
            template: '<h3> hello </h3>'
        })
    ], IpComponent);
    return IpComponent;
}());



/***/ }),

/***/ "./src/app/learn-pipe/learn-pipe.component.css":
/*!*****************************************************!*\
  !*** ./src/app/learn-pipe/learn-pipe.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYXJuLXBpcGUvbGVhcm4tcGlwZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/learn-pipe/learn-pipe.component.html":
/*!******************************************************!*\
  !*** ./src/app/learn-pipe/learn-pipe.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  {{ 1.7 | roundNum : true }}\n  <br>\n  {{3.4 | roundNum : flase }}\n</p>\n"

/***/ }),

/***/ "./src/app/learn-pipe/learn-pipe.component.ts":
/*!****************************************************!*\
  !*** ./src/app/learn-pipe/learn-pipe.component.ts ***!
  \****************************************************/
/*! exports provided: LearnPipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnPipeComponent", function() { return LearnPipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LearnPipeComponent = /** @class */ (function () {
    function LearnPipeComponent() {
        this.person = { name: 'Bảo Trần', age: '23' };
        this.address = Promise.resolve('Đông Bắc - Quận 12'); // xử lý bất đồng bộ để hiểu hơn vào Khoa Phạm -> Nodejs để hiểu rõ hơn.
    }
    LearnPipeComponent.prototype.ngOnInit = function () {
    };
    LearnPipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-learn-pipe',
            template: __webpack_require__(/*! ./learn-pipe.component.html */ "./src/app/learn-pipe/learn-pipe.component.html"),
            styles: [__webpack_require__(/*! ./learn-pipe.component.css */ "./src/app/learn-pipe/learn-pipe.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LearnPipeComponent);
    return LearnPipeComponent;
}());



/***/ }),

/***/ "./src/app/list-person/list-person.component.css":
/*!*******************************************************!*\
  !*** ./src/app/list-person/list-person.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtcGVyc29uL2xpc3QtcGVyc29uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/list-person/list-person.component.html":
/*!********************************************************!*\
  !*** ./src/app/list-person/list-person.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngFor=\"let person of arrPeople\">\n  <app-person \n  [name]= \"person.name\"\n   [age] = \"person.age\"\n   (removePersonByName) = \"removePerson($event)\">\n  </app-person>\n</ng-container>"

/***/ }),

/***/ "./src/app/list-person/list-person.component.ts":
/*!******************************************************!*\
  !*** ./src/app/list-person/list-person.component.ts ***!
  \******************************************************/
/*! exports provided: ListPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPersonComponent", function() { return ListPersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListPersonComponent = /** @class */ (function () {
    function ListPersonComponent() {
        this.arrPeople = [
            { name: 'tí', age: '10' },
            { name: 'tèo', age: '11' },
            { name: 'tủn', age: '6' },
            { name: 'tin', age: '8' },
        ];
    }
    ListPersonComponent.prototype.ngOnInit = function () {
    };
    ListPersonComponent.prototype.removePerson = function (name) {
        var index = this.arrPeople.findIndex(function (e) { return e.name === name; });
        this.arrPeople.splice(index, 1);
    };
    ListPersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list-person',
            template: __webpack_require__(/*! ./list-person.component.html */ "./src/app/list-person/list-person.component.html"),
            styles: [__webpack_require__(/*! ./list-person.component.css */ "./src/app/list-person/list-person.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListPersonComponent);
    return ListPersonComponent;
}());



/***/ }),

/***/ "./src/app/ng-for-arr/ng-for-arr.component.css":
/*!*****************************************************!*\
  !*** ./src/app/ng-for-arr/ng-for-arr.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".word {\r\nbackground-color:  silver;\r\nwidth: 150px;\r\nmargin-bottom: 20px;\r\ntext-align: center;\r\npadding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctZm9yLWFyci9uZy1mb3ItYXJyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSx5QkFBeUI7QUFDekIsWUFBWTtBQUNaLG1CQUFtQjtBQUNuQixrQkFBa0I7QUFDbEIsYUFBYTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvbmctZm9yLWFyci9uZy1mb3ItYXJyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29yZCB7XHJcbmJhY2tncm91bmQtY29sb3I6ICBzaWx2ZXI7XHJcbndpZHRoOiAxNTBweDtcclxubWFyZ2luLWJvdHRvbTogMjBweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5wYWRkaW5nOiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/ng-for-arr/ng-for-arr.component.html":
/*!******************************************************!*\
  !*** ./src/app/ng-for-arr/ng-for-arr.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf = \"showForm\" >\n  <input type=\"text\" placeholder=\"English\" [(ngModel)] = \"addEN\"> <br>\n  <input type=\"text\" placeholder=\"VietNamese\" [(ngModel)] = \"addVN\"> <br> <br>\n  <input type=\"button\" value=\"Thêm từ mới\" (click)= \"addWords()\"> \n</div>\n<input type=\"button\" value=\"Thêm từ mới\" (click)= \"showForm = true\" *ngIf= \"!showForm\"> \n<div> <br>\n  <select [(ngModel)] = \"filter\">\n    <option value=\"xem-tat-ca\">Xem tất cả</option>\n    <option value=\"tu-da-nho\">Từ đã nhớ</option>\n    <option value=\"tu-chua-nho\">Từ chưa nhớ</option>\n  </select>\n</div> <br>\n<div *ngFor = \"let word of arrWords\">\n  <div  class=\"word\" *ngIf = \"getShowStatus(word.memorized)\" >\n      <h4 [ngStyle]=\"{color: word.memorized ? 'green' : 'red'}\">{{word.en}}</h4>\n      <p>{{word.vn}}</p>\n      <input type=\"button\" value=\"Xóa\" (click)=\"deleteWord(word.id)\">\n      <button (click)=\"word.memorized = !word.memorized\" > {{word.memorized ? 'Đã nhớ' : 'Chưa nhớ'}}</button>\n\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/ng-for-arr/ng-for-arr.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ng-for-arr/ng-for-arr.component.ts ***!
  \****************************************************/
/*! exports provided: NgForArrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForArrComponent", function() { return NgForArrComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgForArrComponent = /** @class */ (function () {
    function NgForArrComponent() {
        this.addEN = '';
        this.addVN = '';
        this.filter = 'xem-tat-ca';
        this.showForm = false;
        this.arrWords = [
            { id: 1, en: 'action', vn: 'hành động', memorized: true },
            { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
            { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
            { id: 4, en: 'active', vn: 'chủ động', memorized: true },
            { id: 5, en: 'bath', vn: 'tắm', memorized: false },
            { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
        ];
    }
    NgForArrComponent.prototype.ngOnInit = function () {
    };
    NgForArrComponent.prototype.addWords = function () {
        this.arrWords.unshift({
            id: this.arrWords.length + 1,
            en: this.addEN,
            vn: this.addVN,
            memorized: false
        });
        this.addEN = '';
        this.addVN = '';
        this.showForm = false;
    };
    NgForArrComponent.prototype.deleteWord = function (id) {
        var index = this.arrWords.findIndex(function (word) { return word.id === id; });
        this.arrWords.splice(index, 1);
    };
    NgForArrComponent.prototype.getShowStatus = function (memorized) {
        //logic : nếu là xem-tat-ca thì show hết giá trị trả về true thì đằng sau không thực hiện nữa,
        //nếu không phải là xem-tat-ca thì nó chạy tiếp cái tu-da-nho && memorized = true 
        // nếu không phải tu-da-nho thì chạy tiếp tu-chua-nho && !memorized  = flale
        var dkXemTatCa = this.filter === 'xem-tat-ca';
        var dkTuDaNho = this.filter === 'tu-da-nho' && memorized;
        var dkTuChuaNho = this.filter === 'tu-chua-nho' && memorized;
        return dkXemTatCa || dkTuDaNho || dkTuChuaNho;
    };
    NgForArrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ng-for-arr',
            template: __webpack_require__(/*! ./ng-for-arr.component.html */ "./src/app/ng-for-arr/ng-for-arr.component.html"),
            styles: [__webpack_require__(/*! ./ng-for-arr.component.css */ "./src/app/ng-for-arr/ng-for-arr.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgForArrComponent);
    return NgForArrComponent;
}());



/***/ }),

/***/ "./src/app/ng-for/ng-for.component.css":
/*!*********************************************!*\
  !*** ./src/app/ng-for/ng-for.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25nLWZvci9uZy1mb3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ng-for/ng-for.component.html":
/*!**********************************************!*\
  !*** ./src/app/ng-for/ng-for.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ul>\n  <li *ngFor = \"let subject of arrSubject\">\n        {{'subject : ' + subject}} có thể nối chuỗi\n  </li>\n</ul> -->\n<!--Thêm phần từ vào mảng kết hợp ngFor-->\n<div *ngIf = \"showForm\">\n    <input type=\"text\" placeholder=\"English\" [(ngModel)]=\"addEN\"><br>\n    <input type=\"text\" placeholder=\"Vietnamese\"  [(ngModel)]=\"addVN\"><br><br>\n    <input type=\"button\" value=\"Thêm từ mới\" (click)=\"addVocabulary()\" >\n</div>\n<input type=\"button\" value=\"Thêm từ mới\" (click)=\"showForm = true\" *ngIf=\"!showForm\" >\n<div *ngFor=\"let Vocabulary of arrVocabulary\">\n      <h4 [ngStyle] = \"{color : Vocabulary.memorized ? 'green' : 'red'}\">\n        {{Vocabulary.en}}\n      </h4> <br>\n      <p>{{Vocabulary.vn}}</p><br>\n</div>\n"

/***/ }),

/***/ "./src/app/ng-for/ng-for.component.ts":
/*!********************************************!*\
  !*** ./src/app/ng-for/ng-for.component.ts ***!
  \********************************************/
/*! exports provided: NgForComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgForComponent", function() { return NgForComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgForComponent = /** @class */ (function () {
    function NgForComponent() {
        // arrSubject = ['Angular', 'NodeJS', 'React', 'JavaScript'];
        this.addEN = '';
        this.addVN = '';
        this.arrVocabulary = [
            { id: 1, en: 'action', vn: 'hành động', memorized: true },
            { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
            { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },
            { id: 4, en: 'active', vn: 'chủ động', memorized: true },
            { id: 5, en: 'bath', vn: 'tắm', memorized: false },
            { id: 6, en: 'bedroom', vn: 'phòng ngủ', memorized: true }
        ];
        this.showForm = false;
    }
    NgForComponent.prototype.ngOnInit = function () {
    };
    NgForComponent.prototype.addVocabulary = function () {
        this.arrVocabulary.unshift({
            id: this.addVocabulary.length + 1,
            en: this.addEN,
            vn: this.addVN,
            memorized: false
        });
        this.addEN = '';
        this.addVN = '';
    };
    NgForComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ng-for',
            template: __webpack_require__(/*! ./ng-for.component.html */ "./src/app/ng-for/ng-for.component.html"),
            styles: [__webpack_require__(/*! ./ng-for.component.css */ "./src/app/ng-for/ng-for.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgForComponent);
    return NgForComponent;
}());



/***/ }),

/***/ "./src/app/ngif/ngif.component.css":
/*!*****************************************!*\
  !*** ./src/app/ngif/ngif.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25naWYvbmdpZi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/ngif/ngif.component.html":
/*!******************************************!*\
  !*** ./src/app/ngif/ngif.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf = \"isShow\">\n  ngif works!\n</p>\n<ul>\n  <li *ngFor=\"let subject of arrSubject\">\n      <p>{{'subject :' + subject}}</p> <!--có thể nối chuỗi-->\n  </li>\n</ul>\n<input type=\"button\" (click)=\"click()\" value=\"Touch me!\">\n"

/***/ }),

/***/ "./src/app/ngif/ngif.component.ts":
/*!****************************************!*\
  !*** ./src/app/ngif/ngif.component.ts ***!
  \****************************************/
/*! exports provided: NgifComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgifComponent", function() { return NgifComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NgifComponent = /** @class */ (function () {
    function NgifComponent() {
        this.isShow = true;
        this.arrSubject = ['Angular', 'NodeJS', 'JavaScript', 'Python'];
    }
    NgifComponent.prototype.ngOnInit = function () {
    };
    NgifComponent.prototype.click = function () {
        this.isShow = !this.isShow;
    };
    NgifComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngif',
            template: __webpack_require__(/*! ./ngif.component.html */ "./src/app/ngif/ngif.component.html"),
            styles: [__webpack_require__(/*! ./ngif.component.css */ "./src/app/ngif/ngif.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgifComponent);
    return NgifComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/parent.component.ts":
/*!*************************************!*\
  !*** ./src/app/parent.component.ts ***!
  \*************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _child_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child.Component */ "./src/app/child.Component.ts");



var ParentComponent = /** @class */ (function () {
    function ParentComponent() {
    }
    ParentComponent.prototype.addForChild = function () {
        this.myChild.value++;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_child_Component__WEBPACK_IMPORTED_MODULE_2__["ChildComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _child_Component__WEBPACK_IMPORTED_MODULE_2__["ChildComponent"])
    ], ParentComponent.prototype, "myChild", void 0);
    ParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-parent',
            // template : `          nút nhấn ở child
            // <h3>{{value}}</h3>
            // <app-child (myclick) ="changeValue($event)"><app-child>
            // `
            //  template : `        c1 nút nhấn ở parent : đơn giản
            //     <app-child #child></app-child>
            //     <button (click)="child.value = child.value + 1 "> Add for child </button>
            // `
            //c2: sử dụng view child
            template: "    \n    <app-child></app-child>\n    <button (click) = \"addForChild();\"> Add for child </button>\n    "
        })
    ], ParentComponent);
    return ParentComponent;
}());



/***/ }),

/***/ "./src/app/person/person.component.css":
/*!*********************************************!*\
  !*** ./src/app/person/person.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbi9wZXJzb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/person/person.component.html":
/*!**********************************************!*\
  !*** ./src/app/person/person.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Tên : {{name}}</h3>\n<p>{{age}}</p>\n<button (click) = \"removeByClick();\">Xóa</button>"

/***/ }),

/***/ "./src/app/person/person.component.ts":
/*!********************************************!*\
  !*** ./src/app/person/person.component.ts ***!
  \********************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PersonComponent = /** @class */ (function () {
    function PersonComponent() {
        this.removePersonByName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    PersonComponent.prototype.ngOnInit = function () {
    };
    PersonComponent.prototype.removeByClick = function () {
        this.removePersonByName.emit(this.name);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PersonComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], PersonComponent.prototype, "age", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PersonComponent.prototype, "removePersonByName", void 0);
    PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! ./person.component.html */ "./src/app/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.css */ "./src/app/person/person.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PersonComponent);
    return PersonComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit) = \"onSubmit(formSingIn);\" #formSingIn = \"ngForm\">\n  <input type=\"email\" placeholder=\"Email\" ngModel #txtEmail= \"ngModel\" name = \"email\" required >\n<br>\n<p *ngIf = \"txtEmail.touched && txtEmail.errors?.required\" style=\"color: red\">Email is required... </p>\n\n<input type=\"password\" placeholder=\"Password\" ngModel #txtPass = \"ngModel\" name = \"password\" minlength=\"5\" >\n<p *ngIf = \"txtPass.touched && txtPass.errors?.required\" style=\"color: red\">Pass is required... </p>\n<p *ngIf = \"txtPass.touched && txtPass.errors?.minlength\" style=\"color: red\">Pass is required... </p>\n<br><br>\n<label ngModelGroup = \"subjects\">\n  <input type=\"checkbox\" [ngModel] =\"false\" name=\"Angular\">Angular\n  <input type=\"checkbox\" [ngModel] =\"false\" name=\"Nodejs\">Nodejs\n  <input type=\"checkbox\" [ngModel] =\"false\" name=\"Java\">Java\n</label>\n<button [disabled]=\"formSingIn.invalid\">Submit</button>  \n</form>\n<p>{{txtEmail.errors | json}}</p>\n<p>{{txtPass.errors | json}}</p>\n<p>{{formSingIn.value | json}}</p>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sign_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.service */ "./src/app/sign-in/sign-in.service.ts");



var SignInComponent = /** @class */ (function () {
    function SignInComponent(signinservice) {
        this.signinservice = signinservice;
    }
    SignInComponent.prototype.ngOnInit = function () {
    };
    SignInComponent.prototype.onSubmit = function (formSingIn) {
        this.signinservice.sendPost(formSingIn.value)
            .then(function (result) { return console.log(result); })
            .catch(function (err) { return console.log(err); });
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            providers: [_sign_in_service__WEBPACK_IMPORTED_MODULE_2__["SignInService"]],
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sign_in_service__WEBPACK_IMPORTED_MODULE_2__["SignInService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.service.ts":
/*!********************************************!*\
  !*** ./src/app/sign-in/sign-in.service.ts ***!
  \********************************************/
/*! exports provided: SignInService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInService", function() { return SignInService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var SignInService = /** @class */ (function () {
    function SignInService(http) {
        this.http = http;
    }
    SignInService.prototype.sendPost = function (value) {
        var url = 'http://localhost:3000/signin';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
            'Content-type': 'application/json'
        });
        var body = JSON.stringify(value);
        return this.http.post(url, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json(); });
    };
    SignInService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], SignInService);
    return SignInService;
}());



/***/ }),

/***/ "./src/app/style-class-biding/style-class-biding.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/style-class-biding/style-class-biding.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".circle{\r\n    width: 50px;\r\n    height: 50px;\r\n    border-radius: 25px;\r\n    background-color: black;\r\n}\r\n.square{\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: red;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3R5bGUtY2xhc3MtYmlkaW5nL3N0eWxlLWNsYXNzLWJpZGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjs7QUFFekIiLCJmaWxlIjoic3JjL2FwcC9zdHlsZS1jbGFzcy1iaWRpbmcvc3R5bGUtY2xhc3MtYmlkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lyY2xle1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuLnNxdWFyZXtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/style-class-biding/style-class-biding.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/style-class-biding/style-class-biding.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" placeholder=\"Hãy nhập tên...\" [(ngModel)]=\"name\">\n<h1 [style.color]=\"name.length % 2 == 0 ?'aqua' : 'black'\">Tên của bạn là :  {{name}}</h1>\n<div [class]=\"name.length % 2 == 0 ?'circle' : 'square'\"></div>\n<div> </div>"

/***/ }),

/***/ "./src/app/style-class-biding/style-class-biding.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/style-class-biding/style-class-biding.component.ts ***!
  \********************************************************************/
/*! exports provided: StyleClassBidingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleClassBidingComponent", function() { return StyleClassBidingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StyleClassBidingComponent = /** @class */ (function () {
    function StyleClassBidingComponent() {
        this.name = '';
    }
    StyleClassBidingComponent.prototype.ngOnInit = function () {
    };
    StyleClassBidingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-style-class-biding',
            template: __webpack_require__(/*! ./style-class-biding.component.html */ "./src/app/style-class-biding/style-class-biding.component.html"),
            styles: [__webpack_require__(/*! ./style-class-biding.component.css */ "./src/app/style-class-biding/style-class-biding.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StyleClassBidingComponent);
    return StyleClassBidingComponent;
}());



/***/ }),

/***/ "./src/app/tamplate-reference-variable/tamplate-reference-variable.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/tamplate-reference-variable/tamplate-reference-variable.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhbXBsYXRlLXJlZmVyZW5jZS12YXJpYWJsZS90YW1wbGF0ZS1yZWZlcmVuY2UtdmFyaWFibGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/tamplate-reference-variable/tamplate-reference-variable.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/tamplate-reference-variable/tamplate-reference-variable.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" placeholder=\"Hãy nhập tên...\" [(ngModel)]=\"name\" #textUserName>\n<h1>Tên của bạn là :  {{name}}</h1>\n<code>{{ textUserName.value  | json}}</code>\n"

/***/ }),

/***/ "./src/app/tamplate-reference-variable/tamplate-reference-variable.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/tamplate-reference-variable/tamplate-reference-variable.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TamplateReferenceVariableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TamplateReferenceVariableComponent", function() { return TamplateReferenceVariableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TamplateReferenceVariableComponent = /** @class */ (function () {
    function TamplateReferenceVariableComponent() {
        this.name = '';
    }
    TamplateReferenceVariableComponent.prototype.ngOnInit = function () {
    };
    TamplateReferenceVariableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tamplate-reference-variable',
            template: __webpack_require__(/*! ./tamplate-reference-variable.component.html */ "./src/app/tamplate-reference-variable/tamplate-reference-variable.component.html"),
            styles: [__webpack_require__(/*! ./tamplate-reference-variable.component.css */ "./src/app/tamplate-reference-variable/tamplate-reference-variable.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TamplateReferenceVariableComponent);
    return TamplateReferenceVariableComponent;
}());



/***/ }),

/***/ "./src/app/weather-service/weather-service.component.css":
/*!***************************************************************!*\
  !*** ./src/app/weather-service/weather-service.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlYXRoZXItc2VydmljZS93ZWF0aGVyLXNlcnZpY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/weather-service/weather-service.component.html":
/*!****************************************************************!*\
  !*** ./src/app/weather-service/weather-service.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>{{ getMessage() }}</h3>\n<input type=\"text\" placeholder=\"Enter your city name\" [(ngModel)] = \"txtcityName\">\n<br>\n<button (click)= \"getWeather();\">Get Weather</button>"

/***/ }),

/***/ "./src/app/weather-service/weather-service.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/weather-service/weather-service.component.ts ***!
  \**************************************************************/
/*! exports provided: WeatherServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherServiceComponent", function() { return WeatherServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.service */ "./src/app/weather-service/weather.service.ts");



var WeatherServiceComponent = /** @class */ (function () {
    function WeatherServiceComponent(weatherService) {
        this.weatherService = weatherService;
        this.txtcityName = '';
        this.cityName = '';
        this.temp = null;
        this.isLoading = false;
    }
    WeatherServiceComponent.prototype.ngOnInit = function () { };
    WeatherServiceComponent.prototype.getWeather = function () {
        var _this = this;
        this.isLoading = true;
        this.weatherService.getTemp(this.txtcityName)
            .then(function (temp) {
            _this.cityName = _this.txtcityName;
            _this.temp = temp;
            _this.isLoading = false;
            _this.txtcityName = '';
        })
            .catch(function (err) {
            alert('Can not find your city...');
            _this.isLoading = false;
            _this.cityName = '';
            _this.txtcityName = '';
        });
    };
    WeatherServiceComponent.prototype.getMessage = function () {
        if (this.isLoading) {
            return 'Loading ...';
        }
        return this.cityName === '' ? 'Enter your city name' : (this.cityName + ' is now ' + this.temp);
    };
    WeatherServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weather-service',
            template: __webpack_require__(/*! ./weather-service.component.html */ "./src/app/weather-service/weather-service.component.html"),
            providers: [_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]],
            styles: [__webpack_require__(/*! ./weather-service.component.css */ "./src/app/weather-service/weather-service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"]])
    ], WeatherServiceComponent);
    return WeatherServiceComponent;
}());



/***/ }),

/***/ "./src/app/weather-service/weather.service.ts":
/*!****************************************************!*\
  !*** ./src/app/weather-service/weather.service.ts ***!
  \****************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getTemp = function (cityName) {
        var Url = 'https://api.openweathermap.org/data/2.5/weather?appid=3d6a7b8d4df1127877d4de83d5a8d02b&units=metric&q=' + cityName;
        return this.http.get(Url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .then(function (resJson) { return resJson.main.temp; });
    };
    WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/word/word.component.css":
/*!*****************************************!*\
  !*** ./src/app/word/word.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color : red;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}   \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yZC93b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsNENBQTRDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvd29yZC93b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgICBjb2xvciA6IHJlZDtcclxuICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59ICAgIl19 */"

/***/ }),

/***/ "./src/app/word/word.component.html":
/*!******************************************!*\
  !*** ./src/app/word/word.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 [hidden]=\"forgot\">{{ en }}</h1>\r\n<p>{{ vn }}</p>\r\n <img [src]=\"imageUrl\" alt=\"\"> <!-- cách truyền [property] = 'value' ràng buộc từ component -> DOM  -->\r\n <button (click)=\"toggleForgot()\">Toggle Forgot </button> <!-- cách truyền (event) = 'handler' ràng buộc từ DOM -> component  -->"

/***/ }),

/***/ "./src/app/word/word.component.ts":
/*!****************************************!*\
  !*** ./src/app/word/word.component.ts ***!
  \****************************************/
/*! exports provided: WordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordComponent", function() { return WordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WordComponent = /** @class */ (function () {
    function WordComponent() {
        this.en = 'hello';
        this.vn = 'xin chào';
        this.imageUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
        this.forgot = false;
    }
    WordComponent.prototype.toggleForgot = function () {
        this.forgot = !this.forgot;
    };
    WordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ../word/word.component.html */ "./src/app/word/word.component.html"),
            selector: 'app-word',
            styles: [__webpack_require__(/*! ../word/word.component.css */ "./src/app/word/word.component.css")]
        })
    ], WordComponent);
    return WordComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\BAO-PC\Desktop\learn-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map