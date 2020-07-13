(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routes.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-routes.module.ts ***!
  \**************************************/
/*! exports provided: AppRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutesModule", function() { return AppRoutesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");
/* harmony import */ var _components_results_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/results/results.component */ "./src/app/components/results/results.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");









//  routes
const appRoutes = [
    { path: "", component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], pathMatch: "full" },
    { path: "results", component: _components_results_results_component__WEBPACK_IMPORTED_MODULE_5__["ResultsComponent"] },
    { path: "details/:type/:id", component: _components_details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
    { path: "not-found", component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_6__["PageNotFoundComponent"] },
    { path: "**", redirectTo: "not-found" }
];
class AppRoutesModule {
}
AppRoutesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutesModule });
AppRoutesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutesModule_Factory(t) { return new (t || AppRoutesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
                useHash: true
            })
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
                        useHash: true
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                declarations: []
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() { }
    ngOnInit() { }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".container[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7Ozs7Ozs7R0FPRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi8qXG5hcHAtc2VhcmNoIHtcbiAgZmxleDogMCAxIDcwMHB4O1xufVxuXG5hcHAtcmVzdWx0cyB7XG4gIGZsZXg6IDAgMSAxMDAwcHg7XG59ICovXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"]
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _pipes_searched_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/searched.pipe */ "./src/app/pipes/searched.pipe.ts");
/* harmony import */ var _pipes_searched_highlight_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/searched-highlight.pipe */ "./src/app/pipes/searched-highlight.pipe.ts");
/* harmony import */ var _pipes_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/no-sanitize.pipe */ "./src/app/pipes/no-sanitize.pipe.ts");
/* harmony import */ var _app_routes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routes.module */ "./src/app/app-routes.module.ts");
/* harmony import */ var _components_details_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/details/details.component */ "./src/app/components/details/details.component.ts");
/* harmony import */ var _components_results_results_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/results/results.component */ "./src/app/components/results/results.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
/* harmony import */ var _pipes_category_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipes/category.pipe */ "./src/app/pipes/category.pipe.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/keys.pipe */ "./src/app/pipes/keys.pipe.ts");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/sort.pipe */ "./src/app/pipes/sort.pipe.ts");
/* harmony import */ var _pipes_name_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/name.pipe */ "./src/app/pipes/name.pipe.ts");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routes_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutesModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_18__["ScullyLibModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
        _pipes_searched_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchedPipe"],
        _pipes_searched_highlight_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchedHighlightPipe"],
        _pipes_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_8__["NoSanitizePipe"],
        _components_details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
        _components_results_results_component__WEBPACK_IMPORTED_MODULE_11__["ResultsComponent"],
        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
        _pipes_category_pipe__WEBPACK_IMPORTED_MODULE_13__["CategoryPipe"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
        _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_15__["KeysPipe"],
        _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_16__["SortPipe"],
        _pipes_name_pipe__WEBPACK_IMPORTED_MODULE_17__["NamePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routes_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutesModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_18__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"],
                    _pipes_searched_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchedPipe"],
                    _pipes_searched_highlight_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchedHighlightPipe"],
                    _pipes_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_8__["NoSanitizePipe"],
                    _components_details_details_component__WEBPACK_IMPORTED_MODULE_10__["DetailsComponent"],
                    _components_results_results_component__WEBPACK_IMPORTED_MODULE_11__["ResultsComponent"],
                    _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                    _pipes_category_pipe__WEBPACK_IMPORTED_MODULE_13__["CategoryPipe"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_14__["NavbarComponent"],
                    _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_15__["KeysPipe"],
                    _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_16__["SortPipe"],
                    _pipes_name_pipe__WEBPACK_IMPORTED_MODULE_17__["NamePipe"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _app_routes_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutesModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_18__["ScullyLibModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/details/details.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/details/details.component.ts ***!
  \*********************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_details_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/details-http.service */ "./src/app/services/details-http.service.ts");
/* harmony import */ var _pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/keys.pipe */ "./src/app/pipes/keys.pipe.ts");
/* harmony import */ var _pipes_name_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/name.pipe */ "./src/app/pipes/name.pipe.ts");








function DetailsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DetailsComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r3.details[detail_r2]));
} }
function DetailsComponent_div_10_div_2_ng_container_4_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const result_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](result_r11);
} }
function DetailsComponent_div_10_div_2_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailsComponent_div_10_div_2_ng_container_4_div_1_ng_container_1_Template, 3, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const results_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.getResult(results_r9));
} }
function DetailsComponent_div_10_div_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailsComponent_div_10_div_2_ng_container_4_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const detail_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r6.details[detail_r2]));
} }
function DetailsComponent_div_10_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const detail_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.isDate(ctx_r7.details[detail_r2]) ? ctx_r7.getDate(ctx_r7.details[detail_r2]).toDateString() : ctx_r7.details[detail_r2], " ");
} }
function DetailsComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DetailsComponent_div_10_div_2_ng_container_4_Template, 3, 3, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DetailsComponent_div_10_div_2_ng_container_5_Template, 3, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, detail_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.checkIfObservable(ctx_r4.details[detail_r2]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.checkIfObservable(ctx_r4.details[detail_r2]));
} }
function DetailsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DetailsComponent_div_10_div_1_Template, 3, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DetailsComponent_div_10_div_2_Template, 6, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const detail_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", detail_r2 == "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", detail_r2 != "name");
} }
const _c0 = function () { return ["/"]; };
class DetailsComponent {
    constructor(_location, _activatedRoute, _detailsHttp, _route) {
        this._location = _location;
        this._activatedRoute = _activatedRoute;
        this._detailsHttp = _detailsHttp;
        this._route = _route;
        this.loaderVisible = true;
        this.getResult = obs => {
            return obs && obs.length ? obs.map(o => o.name).filter(a => a) : '';
        };
        this.getDate = date => new Date(date);
        this.isDate = date => isNaN(date) && !isNaN(Date.parse(date));
    }
    ngOnInit() {
        // get all parameters
        this.request = {
            type: this._activatedRoute.snapshot.params["type"],
            id: +this._activatedRoute.snapshot.params["id"]
        };
        // send parameters to service to get full details
        this._detailsHttp.getDetail(this.request).subscribe((response) => {
            // this.details = response;
            this.details = Object.keys(response).reduce((p, c) => {
                if (c === 'url' || !response[c] || (Array.isArray(response[c]) && (response[c].length == 0 || (response[c].length && !response[c][0])))) {
                    return p;
                }
                if (Array.isArray(response[c]) && response[c][0].includes('https')) {
                    return Object.assign(p, {
                        [c]: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(response[c].map(t => this._detailsHttp.getDetail2(t)))
                    });
                }
                if (`${response[c]}`.includes('https')) {
                    return Object.assign(p, {
                        [c]: Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])([this._detailsHttp.getDetail2(response[c])])
                    });
                }
                return Object.assign(p, { [c]: response[c] });
            }, {});
        }, error => {
            console.log(error);
            // if error navigate to not found page
            this._route.navigate(["/not-found"]);
            this.details = {};
        }, () => {
            //   after data is fetched hide the spinner(loading animation)
            this.loaderVisible = false;
        });
    }
    checkIfObservable(detail) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["isObservable"])(detail);
    }
    goBack() {
        this._location.back();
    }
}
DetailsComponent.ɵfac = function DetailsComponent_Factory(t) { return new (t || DetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_details_http_service__WEBPACK_IMPORTED_MODULE_4__["DetailsHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
DetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DetailsComponent, selectors: [["app-details"]], decls: 12, vars: 6, consts: [[1, "details__container"], [1, "details"], [1, "nav"], [1, "btn", 3, "click"], [1, "icon-back"], [1, "btn", 3, "routerLink"], [1, "icon-search"], ["class", "loader", 4, "ngIf"], ["class", "detail", 4, "ngFor", "ngForOf"], [1, "loader"], [1, "icon-spin6"], [1, "detail"], ["class", "name", 4, "ngIf"], ["class", "other", 4, "ngIf"], [1, "name"], [1, "other"], [1, "key"], [4, "ngIf"], ["class", "value", 4, "ngIf"], [1, "value"], [4, "ngFor", "ngForOf"]], template: function DetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DetailsComponent_Template_button_click_3_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DetailsComponent_div_9_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DetailsComponent_div_10_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "keys");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loaderVisible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 3, ctx.details));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_pipes_keys_pipe__WEBPACK_IMPORTED_MODULE_5__["KeysPipe"], _pipes_name_pipe__WEBPACK_IMPORTED_MODULE_6__["NamePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".details__container[_ngcontent-%COMP%] {\n  min-height: 120vh;\n  display: flex;\n}\n\n.details[_ngcontent-%COMP%] {\n  width: 100vw;\n  min-height: 100vh;\n  background: #fff;\n  padding: 4%;\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background: var(--base);\n  padding: 6px 12px;\n  outline: 0;\n  border: 0;\n  cursor: pointer;\n  font-weight: 400;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]   .icon-back[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.75);\n  transition: color 400ms;\n}\n\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:hover   .icon-back[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:hover   .icon-search[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.detail[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 15%;\n}\n\n.detail[_ngcontent-%COMP%]:nth-child(3) {\n  margin-top: 30%;\n}\n\n.name[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 300;\n  letter-spacing: 2px;\n  word-spacing: 2px;\n  color: rgba(0, 0, 0, 0.9);\n  line-height: 1;\n}\n\n.other[_ngcontent-%COMP%] {\n  line-height: 1.5;\n}\n\n.key[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.75);\n  letter-spacing: 5px;\n}\n\n.value[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(:last-child)::after{\n    content: \", \";\n    margin-right: 5px;\n}\n\n.key[_ngcontent-%COMP%], .value[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n\n.loader[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 10%;\n}\n\n.loader[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  display: inline-block;\n  -webkit-animation: rotation 1s infinite linear;\n}\n\n@media (min-width: 576px) {\n  .details__container[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .details[_ngcontent-%COMP%] {\n    width: 65vw;\n  }\n  .name[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n  .key[_ngcontent-%COMP%], .value[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n\n@media (min-width: 768px) {\n  .details[_ngcontent-%COMP%] {\n    margin: 5% 0;\n  }\n  .nav[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .detail[_ngcontent-%COMP%] {\n    margin-top: 10%;\n  }\n\n  .detail[_ngcontent-%COMP%]:nth-child(3) {\n    margin-top: 5%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7OztFQUdFLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekI7O0FBRUE7OztFQUdFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsOENBQThDO0FBQ2hEOztBQVVBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7O0lBRUUsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGV0YWlsc19fY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTIwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kZXRhaWxzIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNCU7XG59XG5cbi5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhc2UpO1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgb3V0bGluZTogMDtcbiAgYm9yZGVyOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5idG4sXG4uYnRuIC5pY29uLXNlYXJjaCxcbi5idG4gLmljb24tYmFjayB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciA0MDBtcztcbn1cblxuLmJ0bjpob3Zlcixcbi5idG46aG92ZXIgLmljb24tYmFjayxcbi5idG46aG92ZXIgLmljb24tc2VhcmNoIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5kZXRhaWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDE1JTtcbn1cblxuLmRldGFpbDpudGgtY2hpbGQoMykge1xuICBtYXJnaW4tdG9wOiAzMCU7XG59XG5cbi5uYW1lIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB3b3JkLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5vdGhlciB7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbi5rZXkge1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cblxuLnZhbHVlIHNwYW46bm90KDpsYXN0LWNoaWxkKTo6YWZ0ZXJ7XG4gICAgY29udGVudDogXCIsIFwiO1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ua2V5LFxuLnZhbHVlIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5sb2FkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cbi5sb2FkZXIgaSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGlvbiAxcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRpb24ge1xuICBmcm9tIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5kZXRhaWxzX19jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC5kZXRhaWxzIHtcbiAgICB3aWR0aDogNjV2dztcbiAgfVxuICAubmFtZSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbiAgLmtleSxcbiAgLnZhbHVlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5kZXRhaWxzIHtcbiAgICBtYXJnaW46IDUlIDA7XG4gIH1cbiAgLm5hdiB7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG4gIC5kZXRhaWwge1xuICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgfVxuXG4gIC5kZXRhaWw6bnRoLWNoaWxkKDMpIHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-details",
                templateUrl: "./details.component.html",
                styleUrls: ["./details.component.css"]
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_details_http_service__WEBPACK_IMPORTED_MODULE_4__["DetailsHttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = ["searchForm"];
const _c1 = function (a0, a1) { return { "category__selected": a0, "category__not--selected": a1 }; };
function NavbarComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavbarComponent_div_13_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.categorySelected = $event; })("change", function NavbarComponent_div_13_Template_input_change_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.userSelectingCategory(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", category_r3)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, ctx_r2.categorySelected == category_r3, ctx_r2.categorySelected != category_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", category_r3)("ngModel", ctx_r2.categorySelected)("id", category_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", category_r3, " ");
} }
const _c2 = function (a0) { return { "show__sub--nav": a0 }; };
class NavbarComponent {
    constructor() {
        this.toggleSubNav = false;
        this.categories = ["All", "House", "Character", "Book"];
        this.categorySelected = "All";
        this.categorySelecting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.enteringText = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    userEnteringText() {
        // emit the entered text by user
        this.enteringText.emit(this.searchedText);
    }
    userSelectingCategory() {
        // emit the selected category by user
        this.categorySelecting.emit(this.categorySelected);
    }
    onSubmit() { }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], viewQuery: function NavbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchForm = _t.first);
    } }, inputs: { searchedText: "searchedText" }, outputs: { categorySelecting: "categorySelecting", enteringText: "enteringText" }, decls: 14, vars: 5, consts: [[1, "nav"], [1, "search__form", 3, "onSubmit"], ["searchForm", "ngForm"], [1, "search__anything"], ["type", "text", "name", "search", "placeholder", "Search", "required", "", 3, "ngModel", "ngModelChange", "keyup", "change"], [1, "submit"], [1, "icon-search"], [1, "filter", 3, "click"], [1, "icon-filter"], [1, "sub__nav", 3, "ngClass"], ["categoryForm", "ngForm"], ["class", "category__radio", 4, "ngFor", "ngForOf"], [1, "category__radio"], [3, "for", "ngClass"], ["type", "radio", "name", "category", 3, "value", "ngModel", "id", "ngModelChange", "change"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSubmit", function NavbarComponent_Template_form_onSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NavbarComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchedText = $event; })("keyup", function NavbarComponent_Template_input_keyup_4_listener() { return ctx.userEnteringText(); })("change", function NavbarComponent_Template_input_change_4_listener() { return ctx.userEnteringText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_7_listener() { return ctx.toggleSubNav = !ctx.toggleSubNav; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Filter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavbarComponent_div_13_Template, 4, 9, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchedText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c2, ctx.toggleSubNav));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"]], styles: [".nav[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100px;\n  border-bottom: 1px solid #555;\n}\n\n.search__form[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  height: 100px;\n}\n\n.search__anything[_ngcontent-%COMP%] {\n  width: 350px;\n}\n\n.search__anything[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  border: 0;\n  background: transparent;\n  border-bottom: 2px solid #fff;\n  font-weight: 400;\n  outline: 0;\n  width: 60%;\n}\n\n.search__anything[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  width: 80%;\n}\n\n.search__anything[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  outline: 0;\n  transform: translateX(-105%);\n  cursor: pointer;\n}\n\n.icon-search[_ngcontent-%COMP%], .icon-filter[_ngcontent-%COMP%], .filter[_ngcontent-%COMP%], .search__anything[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.1rem;\n  transition: all 400ms;\n}\n\n.filter[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  padding: 4px 8px;\n  cursor: pointer;\n  text-transform: capitalize;\n  margin-top: 7px;\n  outline: 0;\n}\n\n.filter[_ngcontent-%COMP%]:hover, .filter[_ngcontent-%COMP%]:hover    > .icon-filter[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:focus    ~ button[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%] {\n  color: var(--base);\n}\n\n.icon-filter[_ngcontent-%COMP%] {\n  top: -2px;\n  position: relative;\n}\n\n.icon-filter[_ngcontent-%COMP%]:before {\n  margin: 0;\n}\n\n[_ngcontent-%COMP%]::placeholder {\n  \n  color: var(--base);\n  opacity: 1; \n}\n\n.sub__nav[_ngcontent-%COMP%] {\n  height: 0;\n  background: rgba(255, 255, 255, 0.1);\n  margin-bottom: 25px;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  transform: rotateX(90deg);\n  transform-origin: top;\n  transition: all 400ms;\n}\n\n.show__sub--nav[_ngcontent-%COMP%] {\n  transform: rotateX(0);\n  height: 200px;\n}\n\n.sub__nav[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  width: 50%;\n  display: flex;\n  \n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.category__radio[_ngcontent-%COMP%] {\n  margin: 4% 0;\n}\n\n.category__radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 400;\n  cursor: pointer;\n}\n\n.category__radio[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  position: relative;\n  top: -3px;\n  display: none;\n}\n\n.category__selected[_ngcontent-%COMP%] {\n  color: var(--base);\n}\n\n.category__not--selected[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n@media (min-width: 576px) {\n  .sub__nav[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    justify-content: space-around;\n    flex-direction: row;\n  }\n  .show__sub--nav[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n  .category__radio[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsU0FBUztFQUNULFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTs7OztFQUlFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUVBOzs7RUFHRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixVQUFVLEVBQUUsWUFBWTtBQUMxQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxvQ0FBb0M7RUFDcEMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSw2QkFBNkI7SUFDN0IsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTU1O1xufVxuXG4uc2VhcmNoX19mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uc2VhcmNoX19hbnl0aGluZyB7XG4gIHdpZHRoOiAzNTBweDtcbn1cbi5zZWFyY2hfX2FueXRoaW5nIGlucHV0IHtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG91dGxpbmU6IDA7XG4gIHdpZHRoOiA2MCU7XG59XG4uc2VhcmNoX19hbnl0aGluZyBpbnB1dDpmb2N1cyB7XG4gIHdpZHRoOiA4MCU7XG59XG5cbi5zZWFyY2hfX2FueXRoaW5nIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTA1JSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24tc2VhcmNoLFxuLmljb24tZmlsdGVyLFxuLmZpbHRlcixcbi5zZWFyY2hfX2FueXRoaW5nIGlucHV0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgNDAwbXM7XG59XG5cbi5maWx0ZXIge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tdG9wOiA3cHg7XG4gIG91dGxpbmU6IDA7XG59XG5cbi5maWx0ZXI6aG92ZXIsXG4uZmlsdGVyOmhvdmVyID4gLmljb24tZmlsdGVyLFxuaW5wdXQ6Zm9jdXMgfiBidXR0b24gLmljb24tc2VhcmNoIHtcbiAgY29sb3I6IHZhcigtLWJhc2UpO1xufVxuXG4uaWNvbi1maWx0ZXIge1xuICB0b3A6IC0ycHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmljb24tZmlsdGVyOmJlZm9yZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xuICBjb2xvcjogdmFyKC0tYmFzZSk7XG4gIG9wYWNpdHk6IDE7IC8qIEZpcmVmb3ggKi9cbn1cblxuLnN1Yl9fbmF2IHtcbiAgaGVpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVgoOTBkZWcpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XG4gIHRyYW5zaXRpb246IGFsbCA0MDBtcztcbn1cbi5zaG93X19zdWItLW5hdiB7XG4gIHRyYW5zZm9ybTogcm90YXRlWCgwKTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnN1Yl9fbmF2IGZvcm0ge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgKi9cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY2F0ZWdvcnlfX3JhZGlvIHtcbiAgbWFyZ2luOiA0JSAwO1xufVxuLmNhdGVnb3J5X19yYWRpbyBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYXRlZ29yeV9fcmFkaW8gaW5wdXQge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jYXRlZ29yeV9fc2VsZWN0ZWQge1xuICBjb2xvcjogdmFyKC0tYmFzZSk7XG59XG5cbi5jYXRlZ29yeV9fbm90LS1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLnN1Yl9fbmF2IGZvcm0ge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLnNob3dfX3N1Yi0tbmF2IHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICB9XG4gIC5jYXRlZ29yeV9fcmFkaW8ge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-navbar",
                templateUrl: "./navbar.component.html",
                styleUrls: ["./navbar.component.css"]
            }]
    }], function () { return []; }, { searchedText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], categorySelecting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], enteringText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], searchForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["searchForm"]
        }] }); })();


/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/"]; };
class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 12, vars: 2, consts: [[1, "not--found__container"], [1, "not--found"], [1, "nav"], [1, "btn", 3, "routerLink"], [1, "icon-search"], [1, "four--not__four"], [1, "message"], [1, "logo"], ["src", "./assets/404.png", "alt", "404 page not found"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "404 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Page Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".not--found__container[_ngcontent-%COMP%] {\n  min-height: 120vh;\n  display: flex;\n  justify-content: center;\n}\n\n.not--found[_ngcontent-%COMP%] {\n  width: 65vw;\n  min-height: 100vh;\n  background: #fff;\n  padding: 4%;\n  margin: 5% 0;\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background: var(--base);\n  padding: 6px 12px;\n  outline: 0;\n  border: 0;\n  font-size: 1rem;\n  cursor: pointer;\n  font-weight: 400;\n}\n\n.btn[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]   .icon-search[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.75);\n  transition: color 400ms;\n}\n\n.btn[_ngcontent-%COMP%]:hover, .btn[_ngcontent-%COMP%]:hover   .icon-search[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.four--not__four[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 5rem;\n  color: rgba(0, 0, 0, 0.9);\n  margin: 3% 0 -11%;\n  font-weight: 400;\n  letter-spacing: 15px;\n}\n\n.message[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 400;\n  text-transform: lowercase;\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBOztFQUVFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm90LS1mb3VuZF9fY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTIwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubm90LS1mb3VuZCB7XG4gIHdpZHRoOiA2NXZ3O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogNCU7XG4gIG1hcmdpbjogNSUgMDtcbn1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5idG4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYXNlKTtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIG91dGxpbmU6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5idG4sXG4uYnRuIC5pY29uLXNlYXJjaCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICB0cmFuc2l0aW9uOiBjb2xvciA0MDBtcztcbn1cblxuLmJ0bjpob3Zlcixcbi5idG46aG92ZXIgLmljb24tc2VhcmNoIHtcbiAgY29sb3I6ICMwMDA7XG59XG4uZm91ci0tbm90X19mb3VyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDVyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIG1hcmdpbjogMyUgMCAtMTElO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsZXR0ZXItc3BhY2luZzogMTVweDtcbn1cbi5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4ubG9nbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9nbyBpbWcge1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDk1JTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/results/results.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/results/results.component.ts ***!
  \*********************************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/sort.pipe */ "./src/app/pipes/sort.pipe.ts");
/* harmony import */ var _pipes_searched_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/searched.pipe */ "./src/app/pipes/searched.pipe.ts");
/* harmony import */ var _pipes_category_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/category.pipe */ "./src/app/pipes/category.pipe.ts");









const _c0 = function (a0) { return { boxShadow: a0 }; };
const _c1 = function (a0) { return { borderTopColor: a0 }; };
const _c2 = function (a1, a2) { return ["/details", a1, a2]; };
function ResultsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "More Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r0.getBoxShadow(card_r1.type)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx_r0.getBorderColor(card_r1.type)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 5, card_r1.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, card_r1.name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](13, _c2, card_r1.type, card_r1.id));
} }
class ResultsComponent {
    constructor(_dataService, activateRoute) {
        this._dataService = _dataService;
        this.activateRoute = activateRoute;
        this.searchedText = "";
        this.categorySelected = "All";
    }
    ngOnInit() {
        // get all data from  data service
        this.dataFetched = this._dataService.dataStore;
        // get query parameter q and
        // pass this to navbar component using property binding
        this.searchedText = this.activateRoute.snapshot.queryParams["q"];
        // get query parameter q if changed afterwards
        this.activateRoute.queryParams.subscribe((params) => {
            this.searchedText = params["q"];
        });
        // if nothing is searched return all data
        if (this.searchedText == undefined)
            this.searchedText = "";
    }
    getBorderColor(type) {
        return `var(--${type})`;
    }
    getBoxShadow(type) {
        return `0 2px 2px 0 var(--${type}), 0 0 0 1px var(--${type})`;
    }
    userEnteringText(searchedText) {
        // get searched text from navbar component using component event binding
        this.searchedText = searchedText;
    }
    userSelectingCategory(categorySelected) {
        // get selected category from navbar component using component event binding
        this.categorySelected = categorySelected;
    }
}
ResultsComponent.ɵfac = function ResultsComponent_Factory(t) { return new (t || ResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultsComponent, selectors: [["app-results"]], decls: 6, vars: 11, consts: [[3, "searchedText", "enteringText", "categorySelecting"], [1, "results-container"], ["class", "card", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "card", 3, "ngStyle"], [1, "card-header", 3, "ngStyle"], [1, "card-body"], [1, "card-footer"], [1, "more__details", 3, "routerLink"]], template: function ResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-navbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("enteringText", function ResultsComponent_Template_app_navbar_enteringText_0_listener($event) { return ctx.userEnteringText($event); })("categorySelecting", function ResultsComponent_Template_app_navbar_categorySelecting_0_listener($event) { return ctx.userSelectingCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResultsComponent_div_2_Template, 10, 16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "sort");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "searched");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("searchedText", ctx.searchedText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](4, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 8, ctx.dataFetched, ctx.categorySelected), ctx.searchedText, "results")));
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_pipes_sort_pipe__WEBPACK_IMPORTED_MODULE_5__["SortPipe"], _pipes_searched_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchedPipe"], _pipes_category_pipe__WEBPACK_IMPORTED_MODULE_7__["CategoryPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"]], styles: [".results-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  height: 100vh;\n}\n\n.card[_ngcontent-%COMP%] {\n  height: 300px;\n  flex: 0 0 250px;\n  margin: 2%;\n  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transform: translateY(6px);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  border-top: 5px solid transparent;\n  height: 20%;\n  letter-spacing: 2px;\n  font-weight: 400;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  height: 60%;\n  font-size: 1.4rem;\n  line-height: 1.1;\n  padding: 0 5%;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  height: 20%;\n}\n\n.card-body[_ngcontent-%COMP%], .card-header[_ngcontent-%COMP%], .card-footer[_ngcontent-%COMP%] {\n  background: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  background: #efefef;\n}\n\n.more__details[_ngcontent-%COMP%] {\n  border: 0;\n  padding: 5px 10px;\n  background: var(--base);\n  cursor: pointer;\n  outline: 0;\n}\n\n.more__details[_ngcontent-%COMP%]:hover {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRzL3Jlc3VsdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsVUFBVTtFQUNWLGtEQUFrRDtBQUNwRDs7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNhcmQge1xuICBoZWlnaHQ6IDMwMHB4O1xuICBmbGV4OiAwIDAgMjUwcHg7XG4gIG1hcmdpbjogMiU7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xufVxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNnB4KTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgYm9yZGVyLXRvcDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBoZWlnaHQ6IDIwJTtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmNhcmQtYm9keSB7XG4gIGhlaWdodDogNjAlO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgcGFkZGluZzogMCA1JTtcbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5jYXJkLWJvZHksXG4uY2FyZC1oZWFkZXIsXG4uY2FyZC1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNhcmQtYm9keSB7XG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG5cbi5tb3JlX19kZXRhaWxzIHtcbiAgYm9yZGVyOiAwO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFzZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogMDtcbn1cblxuLm1vcmVfX2RldGFpbHM6aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-results",
                templateUrl: "./results.component.html",
                styleUrls: ["./results.component.css"]
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_searched_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/searched.pipe */ "./src/app/pipes/searched.pipe.ts");
/* harmony import */ var _pipes_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/no-sanitize.pipe */ "./src/app/pipes/no-sanitize.pipe.ts");
/* harmony import */ var _pipes_searched_highlight_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/searched-highlight.pipe */ "./src/app/pipes/searched-highlight.pipe.ts");









const _c0 = ["searchForm"];
function SearchComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please type two more characters.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SearchComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please type one more character.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a1, a2) { return ["/details", a1, a2]; };
function SearchComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "noSanitize");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "searchedHighlight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "lowercase");
} if (rf & 2) {
    const suggestion_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 7, suggestion_r5.name), ctx_r4.searchedText)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"])("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c1, suggestion_r5.type, suggestion_r5.id));
} }
class SearchComponent {
    constructor(_dataService, router) {
        this._dataService = _dataService;
        this.router = router;
        this.searchedText = "";
    }
    ngOnInit() {
        // change placeholder text
        this.incrementer = 1;
        this.placeholderArray = [
            "Type-in a Character",
            "Type-in a House",
            "Type-in a Book"
        ];
        this.placeholderText = this.placeholderArray[0];
        // after every 2.5 seconds
        setInterval(() => {
            this.placeholderText = this.placeholderArray[this.incrementer];
            ++this.incrementer;
            if (this.incrementer === 3)
                this.incrementer = 0;
        }, 2500);
        // get data from datastore for showing suggestions
        // when user enters some text
        this.dataFetched = this._dataService.dataStore;
    }
    onSubmit() {
        // navigate to results page only if user entered more than 1 character
        if (this.searchedText.length < 2)
            return;
        // navigate and pass  query parameter
        this.router.navigate(["/results"], {
            queryParams: { q: this.searchedText }
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchForm = _t.first);
    } }, decls: 14, vars: 14, consts: [[1, "search__container"], ["id", "search__form", 3, "ngSubmit"], ["searchForm", "ngForm"], ["type", "text", "name", "search", "required", "", 1, "search", 3, "placeholder", "ngModel", "ngModelChange"], ["search", "ngModel"], ["type", "submit", 3, "disabled"], [1, "icon-right"], ["class", "message", 4, "ngIf"], [1, "suggestions"], ["class", "searched__suggestion", 3, "innerHtml", "routerLink", 4, "ngFor", "ngForOf"], [1, "message"], [1, "searched__suggestion", 3, "innerHtml", "routerLink"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SearchComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_4_listener($event) { return ctx.searchedText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SearchComponent_p_8_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SearchComponent_p_9_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SearchComponent_span_11_Template, 4, 12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "searched");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.placeholderText)("ngModel", ctx.searchedText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.searchedText.length < 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.dirty && _r1.value == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.dirty && _r1.value && _r1.value.length == 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](12, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](13, 10, ctx.dataFetched, ctx.searchedText, "search"), 0, 10));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], _pipes_searched_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchedPipe"], _pipes_no_sanitize_pipe__WEBPACK_IMPORTED_MODULE_6__["NoSanitizePipe"], _pipes_searched_highlight_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchedHighlightPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LowerCasePipe"]], styles: [".search__container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n#search__form {\n  margin-top: 35vh;\n}\n.search,\n[type=\"submit\"] {\n  background-color: transparent;\n  font-weight: 400;\n  border: 0;\n  outline: none;\n  color: #fff;\n  padding-bottom: 2%;\n  border-bottom: 2px solid;\n}\n[type=\"submit\"] {\n  transform: translateX(-100%);\n  border-bottom: 0;\n  cursor: pointer;\n  z-index: 99;\n  width: 10%;\n}\n[type=\"submit\"] i {\n  /* font-size: 2.5rem; */\n  color: #fff;\n}\n.search {\n  width: 90%;\n}\n.search:focus ~ p {\n  display: block;\n}\n.search:not(:focus) ~ p {\n  display: none;\n}\n::placeholder {\n  /* Chrome, Firefox, Opera, Safari 10.1+ */\n  color: var(--base);\n  opacity: 1; /* Firefox */\n}\n.message {\n  color: rgba(225, 225, 225, 1);\n  margin-top: 2%;\n  font-size: 0.9rem;\n}\n.suggestions {\n  width: 90%;\n  text-align: center;\n  margin-top: 3%;\n}\n.searched__suggestion {\n  display: inline-block;\n  padding: 1%;\n  background: #fff;\n  margin: 2% 3%;\n  margin-left: 0;\n  cursor: pointer;\n  transition: all 0.1s;\n  transition-timing-function: ease-in-out;\n}\n.searched__suggestion:hover {\n  transform: translateY(-4px);\n}\n.searched__highlight {\n  background: var(--base);\n}\n.searched__suggestion,\n.searched__highlight {\n  font-size: 0.8rem;\n  color: rgba(0, 0, 0, 0.9);\n  font-weight: 400;\n}\n@media (min-width: 576px) {\n  .search {\n    font-size: 2rem;\n  }\n\n  [type=\"submit\"] i {\n    font-size: 1.5rem;\n  }\n}\n@media (min-width: 768px) {\n  .search {\n    font-size: 3rem;\n  }\n\n  [type=\"submit\"] i {\n    font-size: 2.5rem;\n  }\n\n  .searched__suggestion,\n  .searched__highlight {\n    font-size: 1rem;\n  }\n\n  .searched__suggestion {\n    margin: 1%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCO0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtBQUNaO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixVQUFVLEVBQUUsWUFBWTtBQUMxQjtBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTs7RUFFRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2hfX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jc2VhcmNoX19mb3JtIHtcbiAgbWFyZ2luLXRvcDogMzV2aDtcbn1cbi5zZWFyY2gsXG5bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogNDAwO1xuICBib3JkZXI6IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMiU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbn1cblxuW3R5cGU9XCJzdWJtaXRcIl0ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICBib3JkZXItYm90dG9tOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDk5O1xuICB3aWR0aDogMTAlO1xufVxuW3R5cGU9XCJzdWJtaXRcIl0gaSB7XG4gIC8qIGZvbnQtc2l6ZTogMi41cmVtOyAqL1xuICBjb2xvcjogI2ZmZjtcbn1cbi5zZWFyY2gge1xuICB3aWR0aDogOTAlO1xufVxuLnNlYXJjaDpmb2N1cyB+IHAge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zZWFyY2g6bm90KDpmb2N1cykgfiBwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjo6cGxhY2Vob2xkZXIge1xuICAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cbiAgY29sb3I6IHZhcigtLWJhc2UpO1xuICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXG59XG5cbi5tZXNzYWdlIHtcbiAgY29sb3I6IHJnYmEoMjI1LCAyMjUsIDIyNSwgMSk7XG4gIG1hcmdpbi10b3A6IDIlO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLnN1Z2dlc3Rpb25zIHtcbiAgd2lkdGg6IDkwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAzJTtcbn1cbi5zZWFyY2hlZF9fc3VnZ2VzdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMSU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbjogMiUgMyU7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG4uc2VhcmNoZWRfX3N1Z2dlc3Rpb246aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XG59XG4uc2VhcmNoZWRfX2hpZ2hsaWdodCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhc2UpO1xufVxuLnNlYXJjaGVkX19zdWdnZXN0aW9uLFxuLnNlYXJjaGVkX19oaWdobGlnaHQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5zZWFyY2gge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIFt0eXBlPVwic3VibWl0XCJdIGkge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuc2VhcmNoIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gIH1cblxuICBbdHlwZT1cInN1Ym1pdFwiXSBpIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxuXG4gIC5zZWFyY2hlZF9fc3VnZ2VzdGlvbixcbiAgLnNlYXJjaGVkX19oaWdobGlnaHQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxuXG4gIC5zZWFyY2hlZF9fc3VnZ2VzdGlvbiB7XG4gICAgbWFyZ2luOiAxJTtcbiAgfVxufVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-search",
                templateUrl: "./search.component.html",
                styleUrls: ["./search.component.css"],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { searchForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["searchForm"]
        }] }); })();


/***/ }),

/***/ "./src/app/config.ts":
/*!***************************!*\
  !*** ./src/app/config.ts ***!
  \***************************/
/*! exports provided: proxy, domain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxy", function() { return proxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domain", function() { return domain; });
const proxy = "";
//https://cors-anywhere.herokuapp.com/
const domain = "https://anapioficeandfire.com";


/***/ }),

/***/ "./src/app/pipes/category.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/category.pipe.ts ***!
  \****************************************/
/*! exports provided: CategoryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPipe", function() { return CategoryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CategoryPipe {
    transform(value, type) {
        if (type === "House")
            return value.filter(v => v.type === "house");
        if (type === "Character")
            return value.filter(v => v.type === "character");
        if (type === "Book")
            return value.filter(v => v.type === "book");
        return value;
    }
}
CategoryPipe.ɵfac = function CategoryPipe_Factory(t) { return new (t || CategoryPipe)(); };
CategoryPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "category", type: CategoryPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "category"
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/keys.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/keys.pipe.ts ***!
  \************************************/
/*! exports provided: KeysPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class KeysPipe {
    transform(value) {
        if (!value) {
            return null;
        }
        // get keys
        return Object.keys(value);
    }
}
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keys", type: KeysPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: "keys" }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/name.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/name.pipe.ts ***!
  \************************************/
/*! exports provided: NamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NamePipe", function() { return NamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NamePipe {
    transform(value) {
        // if empty return N/a
        if (!value)
            return "N / A";
        // if house string is found replace with none
        if (new RegExp("house ", "gi").test(value))
            return value.replace(new RegExp("house ", "gi"), "");
        return value;
    }
}
NamePipe.ɵfac = function NamePipe_Factory(t) { return new (t || NamePipe)(); };
NamePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "name", type: NamePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NamePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "name"
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/no-sanitize.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/no-sanitize.pipe.ts ***!
  \*******************************************/
/*! exports provided: NoSanitizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoSanitizePipe", function() { return NoSanitizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class NoSanitizePipe {
    constructor(domSanitizer) {
        this.domSanitizer = domSanitizer;
    }
    transform(html) {
        //   to insert html from typescript
        return this.domSanitizer.bypassSecurityTrustHtml(html);
    }
}
NoSanitizePipe.ɵfac = function NoSanitizePipe_Factory(t) { return new (t || NoSanitizePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
NoSanitizePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "noSanitize", type: NoSanitizePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoSanitizePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "noSanitize"
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pipes/searched-highlight.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/pipes/searched-highlight.pipe.ts ***!
  \**************************************************/
/*! exports provided: SearchedHighlightPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchedHighlightPipe", function() { return SearchedHighlightPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SearchedHighlightPipe {
    transform(value, enteredText) {
        //   hightlight searched text from user by replacing it with span with a css class
        return value.replace(new RegExp(enteredText, "gi"), `<span class="searched__highlight">${enteredText}</span>`);
    }
}
SearchedHighlightPipe.ɵfac = function SearchedHighlightPipe_Factory(t) { return new (t || SearchedHighlightPipe)(); };
SearchedHighlightPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchedHighlight", type: SearchedHighlightPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchedHighlightPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "searchedHighlight"
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/searched.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/pipes/searched.pipe.ts ***!
  \****************************************/
/*! exports provided: SearchedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchedPipe", function() { return SearchedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SearchedPipe {
    transform(value, enteredText, source) {
        //   if pipe is used in results component and user has not entered anything return all data
        if (enteredText === "" && source === "results")
            return value;
        // else  from different component if entered nothing return nothing
        if (!enteredText)
            return;
        // if length is less than 2 return none
        if (enteredText.length < 2)
            return null;
        // filter searched
        return value.filter(fetched => fetched.name.match(new RegExp(enteredText, "gi")));
    }
}
SearchedPipe.ɵfac = function SearchedPipe_Factory(t) { return new (t || SearchedPipe)(); };
SearchedPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searched", type: SearchedPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchedPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "searched",
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/sort.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/sort.pipe.ts ***!
  \************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SortPipe {
    transform(value) {
        if (!value)
            return;
        // sort in ascending order
        return value.sort((a, b) => a.name.localeCompare(b.name));
    }
}
SortPipe.ɵfac = function SortPipe_Factory(t) { return new (t || SortPipe)(); };
SortPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sort", type: SortPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SortPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "sort"
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/books-http.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/books-http.service.ts ***!
  \************************************************/
/*! exports provided: BooksHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksHttpService", function() { return BooksHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class BooksHttpService {
    constructor(_http) {
        this._http = _http;
    }
    getAllBookInfo() {
        return this._http.get(`${_config__WEBPACK_IMPORTED_MODULE_1__["proxy"]}${_config__WEBPACK_IMPORTED_MODULE_1__["domain"]}/api/books?page=1&pageSize=50`);
    }
}
BooksHttpService.ɵfac = function BooksHttpService_Factory(t) { return new (t || BooksHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
BooksHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BooksHttpService, factory: BooksHttpService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BooksHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/characters-http.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/characters-http.service.ts ***!
  \*****************************************************/
/*! exports provided: CharactersHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharactersHttpService", function() { return CharactersHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CharactersHttpService {
    constructor(_http) {
        this._http = _http;
    }
    getAllCharactersInfo() {
        return this._http.get(`${_config__WEBPACK_IMPORTED_MODULE_1__["proxy"]}${_config__WEBPACK_IMPORTED_MODULE_1__["domain"]}/api/characters?page=1&pageSize=50`);
    }
}
CharactersHttpService.ɵfac = function CharactersHttpService_Factory(t) { return new (t || CharactersHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CharactersHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CharactersHttpService, factory: CharactersHttpService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CharactersHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/services/http.service.ts");



class DataService {
    constructor(httpService) {
        this.httpService = httpService;
        this._dataStore = [];
        // store data
        this._dataStore = this.httpService.getAllDataFromApi();
    }
    get dataStore() {
        return this._dataStore;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/details-http.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/details-http.service.ts ***!
  \**************************************************/
/*! exports provided: DetailsHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsHttpService", function() { return DetailsHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class DetailsHttpService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    getDetail(request) {
        // get details
        return this._httpClient.get(`${_config__WEBPACK_IMPORTED_MODULE_1__["proxy"]}${_config__WEBPACK_IMPORTED_MODULE_1__["domain"]}/api/${request.type}s/${request.id}`);
    }
    getDetail2(url) {
        // get details
        return this._httpClient.get(url);
    }
}
DetailsHttpService.ɵfac = function DetailsHttpService_Factory(t) { return new (t || DetailsHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DetailsHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DetailsHttpService, factory: DetailsHttpService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/houses-http.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/houses-http.service.ts ***!
  \*************************************************/
/*! exports provided: HousesHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousesHttpService", function() { return HousesHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/app/config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class HousesHttpService {
    constructor(_http) {
        this._http = _http;
    }
    getAllHouseData() {
        return this._http.get(`${_config__WEBPACK_IMPORTED_MODULE_1__["proxy"]}${_config__WEBPACK_IMPORTED_MODULE_1__["domain"]}/api/houses?page=1&pageSize=50`);
    }
}
HousesHttpService.ɵfac = function HousesHttpService_Factory(t) { return new (t || HousesHttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
HousesHttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HousesHttpService, factory: HousesHttpService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HousesHttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared */ "./src/app/shared.ts");
/* harmony import */ var _books_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./books-http.service */ "./src/app/services/books-http.service.ts");
/* harmony import */ var _houses_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./houses-http.service */ "./src/app/services/houses-http.service.ts");
/* harmony import */ var _characters_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters-http.service */ "./src/app/services/characters-http.service.ts");






class HttpService {
    constructor(booksHttp, housesHttp, charactersHttp) {
        this.booksHttp = booksHttp;
        this.housesHttp = housesHttp;
        this.charactersHttp = charactersHttp;
        this.data = [];
    }
    getAllDataFromApi() {
        // get  data from services and process them
        // to assign type and id
        this.booksHttp.getAllBookInfo().subscribe((response) => {
            // loop through response
            response.forEach(d => {
                // assign n/a if its empty
                if (d["name"] === "")
                    d["name"] = "N / A";
                // assign type
                d["type"] = "book";
                //   get id from url and assign
                d["id"] = Object(_shared__WEBPACK_IMPORTED_MODULE_1__["getId"])(d["url"]);
            });
            this.data.push(...response);
        }, error => {
            console.log(error);
        });
        this.housesHttp.getAllHouseData().subscribe((response) => {
            response.forEach(d => {
                if (d["name"] === "")
                    d["name"] = "N / A";
                d["type"] = "house";
                d["id"] = Object(_shared__WEBPACK_IMPORTED_MODULE_1__["getId"])(d["url"]);
            });
            response = response.map(d => {
                d["name"] = d["name"].replace(new RegExp("House ", "gi"), "");
                return d;
            });
            this.data.push(...response);
        }, error => {
            console.log(error);
        });
        this.charactersHttp.getAllCharactersInfo().subscribe((response) => {
            response.forEach(d => {
                if (d["name"] === "")
                    d["name"] = "N / A";
                d["type"] = "character";
                d["id"] = Object(_shared__WEBPACK_IMPORTED_MODULE_1__["getId"])(d["url"]);
            });
            this.data.push(...response);
        }, error => {
            console.log(error);
        });
        return this.data;
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_books_http_service__WEBPACK_IMPORTED_MODULE_2__["BooksHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_houses_http_service__WEBPACK_IMPORTED_MODULE_3__["HousesHttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_characters_http_service__WEBPACK_IMPORTED_MODULE_4__["CharactersHttpService"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root"
            }]
    }], function () { return [{ type: _books_http_service__WEBPACK_IMPORTED_MODULE_2__["BooksHttpService"] }, { type: _houses_http_service__WEBPACK_IMPORTED_MODULE_3__["HousesHttpService"] }, { type: _characters_http_service__WEBPACK_IMPORTED_MODULE_4__["CharactersHttpService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared.ts":
/*!***************************!*\
  !*** ./src/app/shared.ts ***!
  \***************************/
/*! exports provided: getId, getType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return getId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getType", function() { return getType; });
const getId = url => url.split("/")[url.split("/").length - 1];
const getType = url => url.split("/")[url.split("/").length - 2];


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/got/got/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map