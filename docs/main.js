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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

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
        this.title = 'FrontProject';
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
/* harmony import */ var angular2_materialize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-materialize */ "./node_modules/angular2-materialize/dist/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_art_art_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/art/art.component */ "./src/app/pages/art/art.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_articles_articles_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/articles/articles.component */ "./src/app/pages/articles/articles.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _pages_art_art_component__WEBPACK_IMPORTED_MODULE_11__["ArtComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _pages_articles_articles_component__WEBPACK_IMPORTED_MODULE_13__["ArticlesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                angular2_materialize__WEBPACK_IMPORTED_MODULE_3__["MaterializeModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_art_art_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/art/art.component */ "./src/app/pages/art/art.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_articles_articles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/articles/articles.component */ "./src/app/pages/articles/articles.component.ts");








var appRoutes = [
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'about', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'art_gallery', component: _pages_art_art_component__WEBPACK_IMPORTED_MODULE_5__["ArtComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] },
    { path: 'articles', component: _pages_articles_articles_component__WEBPACK_IMPORTED_MODULE_7__["ArticlesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\r\nfont-family: 'Abhaya Libre', serif;\r\nbackground-color: rgba(0,0,0,0.5);\r\nposition: static;\r\nbottom: 100%;\r\nright:0;\r\n}\r\n\r\nfooter p{\r\n  font-size: 1em;\r\n}\r\n\r\n.Author{\r\n  text-align: right;\r\n}\r\n\r\n.footer-copyright{\r\n  background-color: rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLE9BQU87QUFDUDs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxvQ0FBb0M7O0FBRXRDIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVye1xyXG5mb250LWZhbWlseTogJ0FiaGF5YSBMaWJyZScsIHNlcmlmO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcbnBvc2l0aW9uOiBzdGF0aWM7XHJcbmJvdHRvbTogMTAwJTtcclxucmlnaHQ6MDtcclxufVxyXG5cclxuZm9vdGVyIHB7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbn1cclxuXHJcbi5BdXRob3J7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcblxyXG4uZm9vdGVyLWNvcHlyaWdodHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"default_bg page-footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col l4 m4 s12\">\r\n        <h5 class=\"white-text\">Links</h5>\r\n        <ul>\r\n          <li><a class=\"grey-text text-lighten-3\" href=\"/art_gallery\">Art Gallery</a></li>\r\n          <li><a class=\"grey-text text-lighten-3\" href=\"/articles\">Articles</a></li>\r\n          <li><a class=\"grey-text text-lighten-3\" href=\"/about\">About us</a></li>\r\n          <li><a class=\"grey-text text-lighten-3\" href=\"/contact\">Contact us!</a></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col l8 m8 s12\">\r\n        <h5 class=\"white-text\">Geisha Online Museum</h5>\r\n        <p class=\"grey-text text-lighten-4\">We are a japanese traditional art museum founded in 2019 for the sake of all the enthusiasts of japanese culture in the world.</p>\r\n        <p class=\"grey-text text-lighten-4\">Our mission is to maecenas sed arcu quis lacus luctus sodales. Etiam finibus rutrum velit, et vehicula quam accumsan id. Curabitur id justo orci. Sed dictum varius felis et consectetur. Aliquam blandit purus ut vulputate tempus. Curabitur commodo mi vitae nisi cursus rutrum vestibulum.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"footer-copyright\">\r\n    <div class=\"container\">\r\n      © 2019 Geisha\r\n      <span class=\"Author right\">Made by <a href=\"http://facebook.com/gabriel.conde.16\">Gabriel Conde</a></span>\r\n    </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* font-family: 'Nanum Brush Script', cursive; */\r\n\r\n\r\n\r\nnav{\r\n  height: 15vh;\r\n  z-index: 1;\r\n}\r\n\r\n\r\n\r\nnav .sidenav-trigger i{\r\n  padding-top: 4vh;\r\n  padding-left: 4vw;\r\n  border-top: 0vh;\r\n  margin-top: 3vh;\r\n  font-size: 6vw;\r\n}\r\n\r\n\r\n\r\nnav ul a{\r\n  /* font-family: 'embers', cursive; */\r\n  /* font-family: 'Nanum Brush Script', cursive; */\r\n  /* font-family: 'Caveat Brush', cursive; */\r\n  font-family: 'MuseumFoundryBook', serif;\r\n  color: #FAFAFA;\r\n  font-size: 4em;\r\n  padding: 1vh 4vw;\r\n  margin-left: 0vw;\r\n  text-shadow: 0px 0px 10px black;\r\n}\r\n\r\n\r\n\r\nnav li{\r\n  height: 4vh;\r\n}\r\n\r\n\r\n\r\nnav .row{\r\n  width: 40vw;\r\n}\r\n\r\n\r\n\r\n.logo_size{\r\n  top: 0vh;\r\n  left: 0vw;\r\n  height: 12vh;\r\n  margin: 1vh 0vw;\r\n  border: 0px;\r\n  padding: 0px;\r\n  filter: drop-shadow(0px 0px 1px black);\r\n}\r\n\r\n\r\n\r\n.nav_ul{\r\n  margin-top: 3.5vh;\r\n  margin-left: 0vh;\r\n  top: 0vh;\r\n}\r\n\r\n\r\n\r\n.side-nav{\r\n  background-image: url('Sessho.jpeg');\r\n  background-size: cover;\r\n}\r\n\r\n\r\n\r\n.side-nav a{\r\n  font-size: 1.5em;\r\n}\r\n\r\n\r\n\r\n.side_header{\r\n  height: 15vh;\r\n}\r\n\r\n\r\n\r\n.padraozinho{\r\n  background-color: rgba(0,0,0,0.3);\r\n}\r\n\r\n\r\n\r\nnav .sidenav-trigger i{\r\n  margin-top: 0;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 994px) and (max-width: 1400px){\r\n  nav ul a{\r\n    font-size: 3em;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdEQUFnRDs7OztBQUloRDtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7Ozs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0FBQ2hCOzs7O0FBR0E7RUFDRSxvQ0FBb0M7RUFDcEMsZ0RBQWdEO0VBQ2hELDBDQUEwQztFQUMxQyx1Q0FBdUM7RUFDdkMsY0FBYztFQUNkLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtBQUNqQzs7OztBQUdBO0VBQ0UsV0FBVztBQUNiOzs7O0FBR0E7RUFDRSxXQUFXO0FBQ2I7Ozs7QUFHQTtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUVaLHNDQUFzQztBQUN4Qzs7OztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixRQUFRO0FBQ1Y7Ozs7QUFHQTtFQUNFLG9DQUFxRDtFQUNyRCxzQkFBc0I7QUFDeEI7Ozs7QUFHQTtFQUNFLGdCQUFnQjtBQUNsQjs7OztBQUdBO0VBQ0UsWUFBWTtBQUNkOzs7O0FBR0E7RUFDRSxpQ0FBaUM7QUFDbkM7Ozs7QUFHQTtFQUNFLGFBQWE7QUFDZjs7OztBQUdBO0VBQ0U7SUFDRSxjQUFjO0VBQ2hCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBmb250LWZhbWlseTogJ05hbnVtIEJydXNoIFNjcmlwdCcsIGN1cnNpdmU7ICovXHJcblxyXG5cclxuXHJcbm5hdntcclxuICBoZWlnaHQ6IDE1dmg7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbm5hdiAuc2lkZW5hdi10cmlnZ2VyIGl7XHJcbiAgcGFkZGluZy10b3A6IDR2aDtcclxuICBwYWRkaW5nLWxlZnQ6IDR2dztcclxuICBib3JkZXItdG9wOiAwdmg7XHJcbiAgbWFyZ2luLXRvcDogM3ZoO1xyXG4gIGZvbnQtc2l6ZTogNnZ3O1xyXG59XHJcblxyXG5cclxubmF2IHVsIGF7XHJcbiAgLyogZm9udC1mYW1pbHk6ICdlbWJlcnMnLCBjdXJzaXZlOyAqL1xyXG4gIC8qIGZvbnQtZmFtaWx5OiAnTmFudW0gQnJ1c2ggU2NyaXB0JywgY3Vyc2l2ZTsgKi9cclxuICAvKiBmb250LWZhbWlseTogJ0NhdmVhdCBCcnVzaCcsIGN1cnNpdmU7ICovXHJcbiAgZm9udC1mYW1pbHk6ICdNdXNldW1Gb3VuZHJ5Qm9vaycsIHNlcmlmO1xyXG4gIGNvbG9yOiAjRkFGQUZBO1xyXG4gIGZvbnQtc2l6ZTogNGVtO1xyXG4gIHBhZGRpbmc6IDF2aCA0dnc7XHJcbiAgbWFyZ2luLWxlZnQ6IDB2dztcclxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IGJsYWNrO1xyXG59XHJcblxyXG5cclxubmF2IGxpe1xyXG4gIGhlaWdodDogNHZoO1xyXG59XHJcblxyXG5cclxubmF2IC5yb3d7XHJcbiAgd2lkdGg6IDQwdnc7XHJcbn1cclxuXHJcblxyXG4ubG9nb19zaXple1xyXG4gIHRvcDogMHZoO1xyXG4gIGxlZnQ6IDB2dztcclxuICBoZWlnaHQ6IDEydmg7XHJcbiAgbWFyZ2luOiAxdmggMHZ3O1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxcHggYmxhY2spO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxcHggYmxhY2spO1xyXG59XHJcblxyXG5cclxuLm5hdl91bHtcclxuICBtYXJnaW4tdG9wOiAzLjV2aDtcclxuICBtYXJnaW4tbGVmdDogMHZoO1xyXG4gIHRvcDogMHZoO1xyXG59XHJcblxyXG5cclxuLnNpZGUtbmF2e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvU2Vzc2hvLmpwZWdcIik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuXHJcbi5zaWRlLW5hdiBhe1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbn1cclxuXHJcblxyXG4uc2lkZV9oZWFkZXJ7XHJcbiAgaGVpZ2h0OiAxNXZoO1xyXG59XHJcblxyXG5cclxuLnBhZHJhb3ppbmhve1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxufVxyXG5cclxuXHJcbm5hdiAuc2lkZW5hdi10cmlnZ2VyIGl7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTRweCkgYW5kIChtYXgtd2lkdGg6IDE0MDBweCl7XHJcbiAgbmF2IHVsIGF7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"default_bg \">\r\n      <div class=\"nav-wrapper\">\r\n        <a href=\"/home\" class=\"brand-logo center logo_size\"><img src=\"../../assets/img/geisha.svg\" class=\"logo_size\" alt=\"Logo\"></a>\r\n        <a materialize=\"sideNav\" [materializeParams]=\"[{edge:'left'}]\"  href=\"#\" data-activates=\"mobile-demo\" class=\"hide-on-large-only sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\r\n        <ul id=\"nav-mobile\" class=\"left hide-on-med-and-down nav_ul\">\r\n          <li routerLinkActive=\"active\"><a href=\"/art_gallery\" class=\"nav_li\"  id=\"art\">Art Gallery</a></li>\r\n          <li routerLinkActive=\"active\"><a href=\"/articles\" class=\" nav_li\">Articles</a></li>\r\n        </ul>\r\n        <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down nav_ul\">\r\n          <li routerLinkActive=\"active\"><a href=\"/about\" class=\"nav_li\">About us</a></li>\r\n          <li routerLinkActive=\"active\"><a href=\"/contact\" class=\"nav_li\">Contact us!</a></li>\r\n        </ul>\r\n      </div>\r\n    </nav>\r\n\r\n    <ul class=\"side-nav\" id=\"mobile-demo\">\r\n      <div class=\"default_bg side_header\">\r\n        <a href=\"home.html\" class=\"brand-logo right\"><img src=\"../../assets/img/geisha.svg\" class=\"logo_size\" alt=\"Logo\"></a>\r\n      </div>\r\n      <li routerLinkActive=\"active\"><a href=\"/art_gallery\">Art Gallery</a></li>\r\n      <li routerLinkActive=\"active\"><a href=\"/articles\">Articles</a></li>\r\n      <li routerLinkActive=\"active\"><a href=\"/about\">About Us</a></li>\r\n      <li routerLinkActive=\"active\"><a href=\"/contact\">Contact Us!</a></li>\r\n    </ul>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n  margin-top: 1vh;\r\n  font-family: 'MuseumBibleRegular', serif;\r\n}\r\n\r\n\r\n.container{\r\n  padding: 1vh 2vw;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZix3Q0FBd0M7QUFDMUM7OztBQUdBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gIG1hcmdpbi10b3A6IDF2aDtcclxuICBmb250LWZhbWlseTogJ011c2V1bUJpYmxlUmVndWxhcicsIHNlcmlmO1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lcntcclxuICBwYWRkaW5nOiAxdmggMnZ3O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mid_row container\">\r\n  <div class=\"\">\r\n    <h2>About us:</h2>\r\n    <p>We are an online Museum focused on antique japanese traditional art.</p>\r\n    <p>\r\n      Nulla id ante eget ex efficitur egestas egestas id libero. Nulla sit amet augue felis. Nulla dapibus eros a vehicula luctus. In euismod quis diam ac interdum. Vivamus eget bibendum erat. Nulla pellentesque mi felis, ac sollicitudin massa luctus ut. Nullam vitae sodales quam. In posuere leo eget eleifend efficitur. In sit amet nunc commodo, tincidunt sem in, auctor mi. Donec suscipit nec massa eget luctus.\r\n    </p>\r\n    <p>\r\n      Nullam auctor ligula non ipsum dignissim suscipit. Vestibulum ac ligula turpis. Ut efficitur in nunc in aliquam. Sed viverra arcu sit amet mauris interdum, a lacinia est tempus. Nam aliquam semper fermentum. Pellentesque ac pellentesque enim, vitae lacinia felis. Vivamus augue elit, consequat nec tempor nec, pharetra quis sapien. Curabitur sagittis lorem id justo cursus, ut laoreet mauris semper. Donec mauris ipsum, aliquet vitae laoreet vel, dictum sed dui. Ut at diam efficitur, aliquet tortor id, venenatis mi. Aliquam tempor venenatis nibh vel ultrices. Duis sollicitudin, arcu eu mollis egestas, orci tortor venenatis nisi, vitae euismod massa neque vel urna. Proin nunc leo, vestibulum sed libero at, lacinia consectetur risus. Cras auctor vitae metus a lobortis. Nulla eu elit non turpis venenatis posuere. Mauris consectetur imperdiet luctus.\r\n    </p>\r\n    <p>\r\n      Vivamus tincidunt nibh purus, non semper velit suscipit et. Sed vehicula accumsan sapien, eget convallis tellus suscipit eu. Maecenas efficitur velit quis ipsum accumsan, non sagittis orci gravida. Aliquam erat volutpat. Donec auctor fermentum cursus. Nam at nisl a quam dapibus luctus in in magna. Duis mollis nibh tincidunt massa posuere, et tincidunt risus ornare. Sed in dictum turpis.\r\n    </p>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div class=\"espaco\">\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/art/art.component.css":
/*!*********************************************!*\
  !*** ./src/app/pages/art/art.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mid_row h2{\r\n  padding-top: 2vh;\r\n  font-size: 10vw;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  text-shadow: 0px 0px 10px black;\r\n}\r\n\r\n\r\n.container{\r\n  width: 90vw;\r\n  max-width: 100vw;\r\n  /* o materialize tava limitando a width do meu contaniner, tive que por a max-width pra conseguir aumentar ele */\r\n}\r\n\r\n\r\n.gallery{\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n\r\n.gallery img{\r\n  max-width: 20vh;\r\n  /* max-width com vh fica responnsivo :D */\r\n  min-height: 3vh;\r\n  /* aqui eu seto um tamanho mínimo e um máximo para as \"thumbnails\" das artes, não pus min e max para heigth e width pq elas ficavam distorcidas */\r\n  padding: 0;\r\n}\r\n\r\n\r\n.gallery img {\r\n    margin: 1vh 2vw;\r\n    box-shadow: 0px 0px 10px black;\r\n}\r\n\r\n\r\n.gallery img:hover {\r\n    transition: all 1s ease;\r\n    transform: scale(1.2,1.2);\r\n}\r\n\r\n\r\nimg.materialboxed.initialized.active{\r\n  max-width: 100vw;\r\n  /* aqui eu estou desativando o tamanho máximo das figuras para quando elas abrirem não ficarem pequenas e/ou distorcidas */\r\n}\r\n\r\n\r\nimg.materialboxed.initialized.active:hover{\r\n  transform: scale(1,1);\r\n  /* desativando o aumento de scale com hover sempre que elas forem abertas */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXJ0L2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLCtCQUErQjtBQUNqQzs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdIQUFnSDtBQUNsSDs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOzs7QUFHQTtFQUNFLGVBQWU7RUFDZix5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLGlKQUFpSjtFQUNqSixVQUFVO0FBQ1o7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7O0FBR0E7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0FBQzdCOzs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQiwwSEFBMEg7QUFDNUg7OztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDJFQUEyRTtBQUM3RSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FydC9hcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWlkX3JvdyBoMntcclxuICBwYWRkaW5nLXRvcDogMnZoO1xyXG4gIGZvbnQtc2l6ZTogMTB2dztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggYmxhY2s7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVye1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbiAgLyogbyBtYXRlcmlhbGl6ZSB0YXZhIGxpbWl0YW5kbyBhIHdpZHRoIGRvIG1ldSBjb250YW5pbmVyLCB0aXZlIHF1ZSBwb3IgYSBtYXgtd2lkdGggcHJhIGNvbnNlZ3VpciBhdW1lbnRhciBlbGUgKi9cclxufVxyXG5cclxuXHJcbi5nYWxsZXJ5e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcblxyXG4uZ2FsbGVyeSBpbWd7XHJcbiAgbWF4LXdpZHRoOiAyMHZoO1xyXG4gIC8qIG1heC13aWR0aCBjb20gdmggZmljYSByZXNwb25uc2l2byA6RCAqL1xyXG4gIG1pbi1oZWlnaHQ6IDN2aDtcclxuICAvKiBhcXVpIGV1IHNldG8gdW0gdGFtYW5obyBtw61uaW1vIGUgdW0gbcOheGltbyBwYXJhIGFzIFwidGh1bWJuYWlsc1wiIGRhcyBhcnRlcywgbsOjbyBwdXMgbWluIGUgbWF4IHBhcmEgaGVpZ3RoIGUgd2lkdGggcHEgZWxhcyBmaWNhdmFtIGRpc3RvcmNpZGFzICovXHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuXHJcbi5nYWxsZXJ5IGltZyB7XHJcbiAgICBtYXJnaW46IDF2aCAydnc7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggYmxhY2s7XHJcbn1cclxuXHJcblxyXG4uZ2FsbGVyeSBpbWc6aG92ZXIge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwxLjIpO1xyXG59XHJcblxyXG5cclxuaW1nLm1hdGVyaWFsYm94ZWQuaW5pdGlhbGl6ZWQuYWN0aXZle1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbiAgLyogYXF1aSBldSBlc3RvdSBkZXNhdGl2YW5kbyBvIHRhbWFuaG8gbcOheGltbyBkYXMgZmlndXJhcyBwYXJhIHF1YW5kbyBlbGFzIGFicmlyZW0gbsOjbyBmaWNhcmVtIHBlcXVlbmFzIGUvb3UgZGlzdG9yY2lkYXMgKi9cclxufVxyXG5cclxuaW1nLm1hdGVyaWFsYm94ZWQuaW5pdGlhbGl6ZWQuYWN0aXZlOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSwxKTtcclxuICAvKiBkZXNhdGl2YW5kbyBvIGF1bWVudG8gZGUgc2NhbGUgY29tIGhvdmVyIHNlbXByZSBxdWUgZWxhcyBmb3JlbSBhYmVydGFzICovXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/art/art.component.html":
/*!**********************************************!*\
  !*** ./src/app/pages/art/art.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"default_bg mid_row container\">\r\n  <h2 class=\"center\">Arts</h2>\r\n  <div class=\"gallery\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img9.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img8.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img3.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img1.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img2.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img4.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img5.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img6.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img7.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img10.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img11.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img12.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img13.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img14.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img15.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img16.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img17.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img18.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img19.jpg\" alt=\"\">\r\n    <img class=\"materialboxed\"src=\"../../../assets/img/Gallery/img20.jpg\" alt=\"\">\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/art/art.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/art/art.component.ts ***!
  \********************************************/
/*! exports provided: ArtComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtComponent", function() { return ArtComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArtComponent = /** @class */ (function () {
    function ArtComponent() {
    }
    ArtComponent.prototype.ngOnInit = function () {
    };
    ArtComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-art',
            template: __webpack_require__(/*! ./art.component.html */ "./src/app/pages/art/art.component.html"),
            styles: [__webpack_require__(/*! ./art.component.css */ "./src/app/pages/art/art.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArtComponent);
    return ArtComponent;
}());



/***/ }),

/***/ "./src/app/pages/articles/articles.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/articles/articles.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\r\n  text-align: center;\r\n}\r\n\r\n\r\n.mid_row{\r\n  margin-top: 2vh;\r\n  margin-bottom: 2vh;\r\n  padding: 1vh 1vw;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXJ0aWNsZXMvYXJ0aWNsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FydGljbGVzL2FydGljbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMntcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubWlkX3Jvd3tcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnZoO1xyXG4gIHBhZGRpbmc6IDF2aCAxdnc7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/articles/articles.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/articles/articles.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mid_row container\">\r\n  <h2>Articles</h2>\r\n</div>\r\n<div class=\"mid_row container\">\r\n  <h3>Lorem Ipsum</h3>\r\n    <p>\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur nec ante vitae finibus. Ut sodales vehicula erat eget eleifend. Maecenas at mi sed orci sodales pharetra. Vivamus dui quam, malesuada eu diam in, ultricies blandit quam. Curabitur sit amet orci bibendum ante volutpat ultricies nec quis dolor. Quisque tristique maximus nulla. In tellus dolor, mattis at arcu id, porta dignissim massa. Ut dictum blandit orci, vitae varius arcu ullamcorper eget. Aenean iaculis tempor est porttitor dignissim. Morbi consectetur blandit purus, eu elementum urna maximus vel. Ut pharetra finibus quam sed commodo. Suspendisse luctus suscipit cursus.\r\n  </p>\r\n  <p>\r\n    Nunc non ligula magna. Nulla neque leo, feugiat ut aliquam ac, egestas nec neque. Nulla facilisi. Duis sodales arcu sit amet tortor bibendum, non elementum mi cursus. Quisque in tellus ligula. Nam placerat justo sapien, ut pharetra magna iaculis non. Sed ultrices consequat efficitur. Aenean sed orci eleifend, eleifend neque in, malesuada lorem. Curabitur nec eros sollicitudin dui aliquam semper sed quis ligula. Donec non mi arcu. Phasellus id placerat nibh. Nam gravida vel justo ut ullamcorper. Nullam suscipit faucibus tristique. Vivamus posuere nulla dolor, non mollis velit porta sollicitudin. Donec nibh lectus, maximus eu elementum sed, elementum vitae magna.\r\n  </p>\r\n</div>\r\n\r\n<div class=\"mid_row container\">\r\n  <h3>Lorem Ipsum</h3>\r\n    <p>\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur nec ante vitae finibus. Ut sodales vehicula erat eget eleifend. Maecenas at mi sed orci sodales pharetra. Vivamus dui quam, malesuada eu diam in, ultricies blandit quam. Curabitur sit amet orci bibendum ante volutpat ultricies nec quis dolor. Quisque tristique maximus nulla. In tellus dolor, mattis at arcu id, porta dignissim massa. Ut dictum blandit orci, vitae varius arcu ullamcorper eget. Aenean iaculis tempor est porttitor dignissim. Morbi consectetur blandit purus, eu elementum urna maximus vel. Ut pharetra finibus quam sed commodo. Suspendisse luctus suscipit cursus.\r\n  </p>\r\n  <p>\r\n    Nunc non ligula magna. Nulla neque leo, feugiat ut aliquam ac, egestas nec neque. Nulla facilisi. Duis sodales arcu sit amet tortor bibendum, non elementum mi cursus. Quisque in tellus ligula. Nam placerat justo sapien, ut pharetra magna iaculis non. Sed ultrices consequat efficitur. Aenean sed orci eleifend, eleifend neque in, malesuada lorem. Curabitur nec eros sollicitudin dui aliquam semper sed quis ligula. Donec non mi arcu. Phasellus id placerat nibh. Nam gravida vel justo ut ullamcorper. Nullam suscipit faucibus tristique. Vivamus posuere nulla dolor, non mollis velit porta sollicitudin. Donec nibh lectus, maximus eu elementum sed, elementum vitae magna.\r\n  </p>\r\n</div>\r\n\r\n<div class=\"mid_row container\">\r\n  <h3>Lorem Ipsum</h3>\r\n    <p>\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur nec ante vitae finibus. Ut sodales vehicula erat eget eleifend. Maecenas at mi sed orci sodales pharetra. Vivamus dui quam, malesuada eu diam in, ultricies blandit quam. Curabitur sit amet orci bibendum ante volutpat ultricies nec quis dolor. Quisque tristique maximus nulla. In tellus dolor, mattis at arcu id, porta dignissim massa. Ut dictum blandit orci, vitae varius arcu ullamcorper eget. Aenean iaculis tempor est porttitor dignissim. Morbi consectetur blandit purus, eu elementum urna maximus vel. Ut pharetra finibus quam sed commodo. Suspendisse luctus suscipit cursus.\r\n  </p>\r\n  <p>\r\n    Nunc non ligula magna. Nulla neque leo, feugiat ut aliquam ac, egestas nec neque. Nulla facilisi. Duis sodales arcu sit amet tortor bibendum, non elementum mi cursus. Quisque in tellus ligula. Nam placerat justo sapien, ut pharetra magna iaculis non. Sed ultrices consequat efficitur. Aenean sed orci eleifend, eleifend neque in, malesuada lorem. Curabitur nec eros sollicitudin dui aliquam semper sed quis ligula. Donec non mi arcu. Phasellus id placerat nibh. Nam gravida vel justo ut ullamcorper. Nullam suscipit faucibus tristique. Vivamus posuere nulla dolor, non mollis velit porta sollicitudin. Donec nibh lectus, maximus eu elementum sed, elementum vitae magna.\r\n  </p>\r\n</div>\r\n\r\n<div class=\"mid_row container\">\r\n  <h3>Lorem Ipsum</h3>\r\n    <p>\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur nec ante vitae finibus. Ut sodales vehicula erat eget eleifend. Maecenas at mi sed orci sodales pharetra. Vivamus dui quam, malesuada eu diam in, ultricies blandit quam. Curabitur sit amet orci bibendum ante volutpat ultricies nec quis dolor. Quisque tristique maximus nulla. In tellus dolor, mattis at arcu id, porta dignissim massa. Ut dictum blandit orci, vitae varius arcu ullamcorper eget. Aenean iaculis tempor est porttitor dignissim. Morbi consectetur blandit purus, eu elementum urna maximus vel. Ut pharetra finibus quam sed commodo. Suspendisse luctus suscipit cursus.\r\n  </p>\r\n  <p>\r\n    Nunc non ligula magna. Nulla neque leo, feugiat ut aliquam ac, egestas nec neque. Nulla facilisi. Duis sodales arcu sit amet tortor bibendum, non elementum mi cursus. Quisque in tellus ligula. Nam placerat justo sapien, ut pharetra magna iaculis non. Sed ultrices consequat efficitur. Aenean sed orci eleifend, eleifend neque in, malesuada lorem. Curabitur nec eros sollicitudin dui aliquam semper sed quis ligula. Donec non mi arcu. Phasellus id placerat nibh. Nam gravida vel justo ut ullamcorper. Nullam suscipit faucibus tristique. Vivamus posuere nulla dolor, non mollis velit porta sollicitudin. Donec nibh lectus, maximus eu elementum sed, elementum vitae magna.\r\n  </p>\r\n</div>\r\n\r\n<div class=\"mid_row container\">\r\n  <h3>Lorem Ipsum</h3>\r\n    <p>\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur nec ante vitae finibus. Ut sodales vehicula erat eget eleifend. Maecenas at mi sed orci sodales pharetra. Vivamus dui quam, malesuada eu diam in, ultricies blandit quam. Curabitur sit amet orci bibendum ante volutpat ultricies nec quis dolor. Quisque tristique maximus nulla. In tellus dolor, mattis at arcu id, porta dignissim massa. Ut dictum blandit orci, vitae varius arcu ullamcorper eget. Aenean iaculis tempor est porttitor dignissim. Morbi consectetur blandit purus, eu elementum urna maximus vel. Ut pharetra finibus quam sed commodo. Suspendisse luctus suscipit cursus.\r\n  </p>\r\n  <p>\r\n    Nunc non ligula magna. Nulla neque leo, feugiat ut aliquam ac, egestas nec neque. Nulla facilisi. Duis sodales arcu sit amet tortor bibendum, non elementum mi cursus. Quisque in tellus ligula. Nam placerat justo sapien, ut pharetra magna iaculis non. Sed ultrices consequat efficitur. Aenean sed orci eleifend, eleifend neque in, malesuada lorem. Curabitur nec eros sollicitudin dui aliquam semper sed quis ligula. Donec non mi arcu. Phasellus id placerat nibh. Nam gravida vel justo ut ullamcorper. Nullam suscipit faucibus tristique. Vivamus posuere nulla dolor, non mollis velit porta sollicitudin. Donec nibh lectus, maximus eu elementum sed, elementum vitae magna.\r\n  </p>\r\n</div>\r\n\r\n<div class=\"mid_row container\">\r\n  <h3>Lorem Ipsum</h3>\r\n    <p>\r\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur nec ante vitae finibus. Ut sodales vehicula erat eget eleifend. Maecenas at mi sed orci sodales pharetra. Vivamus dui quam, malesuada eu diam in, ultricies blandit quam. Curabitur sit amet orci bibendum ante volutpat ultricies nec quis dolor. Quisque tristique maximus nulla. In tellus dolor, mattis at arcu id, porta dignissim massa. Ut dictum blandit orci, vitae varius arcu ullamcorper eget. Aenean iaculis tempor est porttitor dignissim. Morbi consectetur blandit purus, eu elementum urna maximus vel. Ut pharetra finibus quam sed commodo. Suspendisse luctus suscipit cursus.\r\n  </p>\r\n  <p>\r\n    Nunc non ligula magna. Nulla neque leo, feugiat ut aliquam ac, egestas nec neque. Nulla facilisi. Duis sodales arcu sit amet tortor bibendum, non elementum mi cursus. Quisque in tellus ligula. Nam placerat justo sapien, ut pharetra magna iaculis non. Sed ultrices consequat efficitur. Aenean sed orci eleifend, eleifend neque in, malesuada lorem. Curabitur nec eros sollicitudin dui aliquam semper sed quis ligula. Donec non mi arcu. Phasellus id placerat nibh. Nam gravida vel justo ut ullamcorper. Nullam suscipit faucibus tristique. Vivamus posuere nulla dolor, non mollis velit porta sollicitudin. Donec nibh lectus, maximus eu elementum sed, elementum vitae magna.\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/articles/articles.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/articles/articles.component.ts ***!
  \******************************************************/
/*! exports provided: ArticlesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesComponent", function() { return ArticlesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticlesComponent = /** @class */ (function () {
    function ArticlesComponent() {
    }
    ArticlesComponent.prototype.ngOnInit = function () {
    };
    ArticlesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articles',
            template: __webpack_require__(/*! ./articles.component.html */ "./src/app/pages/articles/articles.component.html"),
            styles: [__webpack_require__(/*! ./articles.component.css */ "./src/app/pages/articles/articles.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticlesComponent);
    return ArticlesComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\r\n  font-size: 2em;\r\n  color: #fff;\r\n}\r\n\r\n\r\nbutton{\r\n  background-color: rgba(0,0,0,0.3);\r\n  border-style: none;\r\n  box-shadow: 0px 0px 10px black;\r\n  margin-right: 4vw;\r\n  color: white;\r\n}\r\n\r\n\r\ninput[type=\"text\"], textarea{\r\n  font-size: 1.5em;\r\n  color: black;\r\n}\r\n\r\n\r\n.mid_row{\r\n  padding: 2vh 1vw;\r\n  padding-bottom: 4vh;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.input_menor{\r\n  width: 50%;\r\n}\r\n\r\n\r\n.input-field input:focus + label, .input-field textarea:focus + label{\r\n  color: #fff;\r\n}\r\n\r\n\r\n.input-field input:focus, .input-field textarea:focus{\r\n  border-bottom: 1px solid #fff;\r\n  box-shadow: 0px 1px 0 0 #fff;\r\n}\r\n\r\n\r\n.row{\r\n  color: #000000;\r\n  font-size:1.5rem;\r\n  text-align: left;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOzs7QUFHQTtFQUNFLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7O0FBR0E7RUFDRSxVQUFVO0FBQ1o7OztBQUdBO0VBQ0UsV0FBVztBQUNiOzs7QUFHQTtFQUNFLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFDOUI7OztBQUdBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse1xyXG4gIGZvbnQtc2l6ZTogMmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxuICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGJsYWNrO1xyXG4gIG1hcmdpbi1yaWdodDogNHZ3O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLCB0ZXh0YXJlYXtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbi5taWRfcm93e1xyXG4gIHBhZGRpbmc6IDJ2aCAxdnc7XHJcbiAgcGFkZGluZy1ib3R0b206IDR2aDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcblxyXG4uaW5wdXRfbWVub3J7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuXHJcbi5pbnB1dC1maWVsZCBpbnB1dDpmb2N1cyArIGxhYmVsLCAuaW5wdXQtZmllbGQgdGV4dGFyZWE6Zm9jdXMgKyBsYWJlbHtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi5pbnB1dC1maWVsZCBpbnB1dDpmb2N1cywgLmlucHV0LWZpZWxkIHRleHRhcmVhOmZvY3Vze1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxcHggMCAwICNmZmY7XHJcbn1cclxuXHJcblxyXG4ucm93e1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGZvbnQtc2l6ZToxLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mid_row\">\r\n  <h2>Give us your opinion!</h2>\r\n  <form #contact=\"ngForm\" (ngSubmit)=\"onSubmit(contact)\">\r\n\r\n    <div class=\"input-field input_menor\">\r\n      <input name=\"name\" type=\"text\" id=\"name\" ngModel required #name=\"ngModel\">\r\n      <label for=\"name\">Name:</label>\r\n    </div>\r\n\r\n    <div class=\"input-field input_menor\">\r\n      <input name=\"email\" type=\"text\" id=\"email\" ngModel required #email=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}\\.{0,1}[a-z]{2}$\">\r\n      <!-- a pattern na linha de cima é o código em regex pra validação de email pra seguir o padrão [nome]@[provedor].[co/com(não exatamente)].[sigla do pais] -->\r\n      <label for=\"email\">E-mail:</label>\r\n    </div>\r\n\r\n    <div class=\"input-field\">\r\n      <textarea name=\"message\"  class=\"materialize-textarea\" id=\"message\" ngModel required #message=\"ngModel\"></textarea>\r\n      <label for=\"message\">Give us your feedback!</label>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col s10 m10 l10\" *ngIf=\" name.touched && name.invalid || email.touched && email.invalid || message.touched && message.invalid\">\r\n        Please fill all fields.\r\n        <div *ngIf=\"email.invalid && email.touched\">\r\n          <strong><em>E-mail is invalid!</em></strong>\r\n        </div>\r\n      </div>\r\n\r\n      <button class=\"waves-effect waves-light right col s2 m2 l2 btn\" type=\"submit\" [disabled]=\"name.invalid || email.invalid || message.invalid\">Send!</button>\r\n    </div>\r\n\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onSubmit = function (contact) {
        console.log(contact);
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n.clip{\r\n  background: url('saigaiha_new2.png');\r\n  background-attachment: fixed;\r\n  -webkit-text-fill-color: transparent;\r\n  -webkit-background-clip: text;\r\n  background-repeat: repeat;\r\n}\r\n\r\n\r\n.espaco{\r\n  height: 10vh;\r\n}\r\n\r\n\r\n#geisha_text, #geisha_over{\r\n  margin-top: 0vh;\r\n  height: 70vh;\r\n  padding-top: 5vh;\r\n  font-family: 'brushido', cursive;\r\n  text-align: center;\r\n}\r\n\r\n\r\n#geisha_over{\r\n  position: relative;\r\n  top: -70vh;\r\n  margin-top: 0vh;\r\n  height: 0vh;\r\n  padding-top: 5vh;\r\n  font-family: 'brushido', cursive;\r\n  text-align: center;\r\n}\r\n\r\n\r\n#geisha_text h1{\r\n  font-size: 32vw;\r\n  font-weight: bold;\r\n  text-shadow: 0px 0px 10px black;\r\n}\r\n\r\n\r\n#geisha_over h1{\r\n  font-size: 32vw;\r\n  font-weight: bold;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLG9DQUFpRTtFQUNqRSw0QkFBNEI7RUFDNUIsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7OztBQUdBO0VBQ0UsWUFBWTtBQUNkOzs7QUFHQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxrQkFBa0I7QUFDcEI7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsK0JBQStCO0FBQ2pDOzs7QUFHQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmNsaXB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9wYXR0ZXJucy9zYWlnYWloYV9uZXcyLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG59XHJcblxyXG5cclxuLmVzcGFjb3tcclxuICBoZWlnaHQ6IDEwdmg7XHJcbn1cclxuXHJcblxyXG4jZ2Vpc2hhX3RleHQsICNnZWlzaGFfb3ZlcntcclxuICBtYXJnaW4tdG9wOiAwdmg7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIHBhZGRpbmctdG9wOiA1dmg7XHJcbiAgZm9udC1mYW1pbHk6ICdicnVzaGlkbycsIGN1cnNpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuI2dlaXNoYV9vdmVye1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC03MHZoO1xyXG4gIG1hcmdpbi10b3A6IDB2aDtcclxuICBoZWlnaHQ6IDB2aDtcclxuICBwYWRkaW5nLXRvcDogNXZoO1xyXG4gIGZvbnQtZmFtaWx5OiAnYnJ1c2hpZG8nLCBjdXJzaXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiNnZWlzaGFfdGV4dCBoMXtcclxuICBmb250LXNpemU6IDMydnc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCBibGFjaztcclxufVxyXG5cclxuXHJcbiNnZWlzaGFfb3ZlciBoMXtcclxuICBmb250LXNpemU6IDMydnc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main>\r\n\r\n<!--sobre esse código com Geisha escrito duas vezes:\r\no que aconteceu foi que o o \"GEISHA\" não tava legal sem o sombreado\r\nque destaca as coisas no meu site, vulgo box-shadow: 0px 0px 25px black;\r\no problema é que o text-shadow de fato casta uma sombra embaixo do texto\r\nque nunca vemos (eu acho) pq o texto é sempre de  cor sólida\r\naí quando eu punha isso no GEISHA ele ficava preto pq o transparente\r\ndeixava ver a sombra embaixo, o que eu fiz foi sobrepor\r\no geisha com sombra com um geisha sem sombra que aí a sombra em volta\r\napareceria mas a embaixo não-->\r\n  <div id=\"geisha_text\" class=\"\">\r\n    <h1 class=\"clip\">GEISHA</h1>\r\n  </div>\r\n  <div id=\"geisha_over\" class=\"\">\r\n    <h1 class=\"clip\">GEISHA</h1>\r\n  </div>\r\n\r\n\r\n  <div class=\"espaco\">\r\n  </div>\r\n\r\n  \r\n</main>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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

module.exports = __webpack_require__(/*! F:\sites\EJCM_Front_Individual\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map