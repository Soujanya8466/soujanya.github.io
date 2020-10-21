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

/***/ "./src/app/adddata/adddata.component.css":
/*!***********************************************!*\
  !*** ./src/app/adddata/adddata.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add{\r\n    background: #2196f394;\r\n    color: white;\r\n}\r\n.mat-elevation-z8{\r\n    width:100% !important;\r\n}\r\n.iteamtable{\r\n    border: 2px solid #00000029;\r\n    margin-top: 19px;\r\n}\r\ntr,th,td{\r\n    border: 1px solid #00000038  !important;\r\n}\r\nth{\r\n    background: #0000ff42;\r\n    color: white;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/adddata/adddata.component.html":
/*!************************************************!*\
  !*** ./src/app/adddata/adddata.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button class=\"add\" routerLink=\"/additeam\">Add Inventory</button>\r\n\r\n<!-- <div *ngFor=\"let userdata of userdata\">\r\n  <span>{{userdata.id}}</span>\r\n</div> -->\r\n\r\n<!--  -->\r\n<table class=\"iteamtable\"  >\r\n  <tr>\r\n    <th>S.No</th>\r\n    <th>Name</th>\r\n    <th>Description</th>\r\n    <th>Price</th>\r\n    <th>Delete</th>\r\n  </tr>\r\n  <tr *ngFor=\"let userdata of userdata;let i=index\">\r\n    <td>{{i+1}}</td>\r\n    <td>{{userdata.name}}</td>\r\n    <td>{{userdata.description}}</td>\r\n    <td>{{userdata.price}}</td>\r\n    <td (click)=\"deletiteam(userdata)\"><mat-icon >delete</mat-icon>\r\n    </td>\r\n\r\n\r\n\r\n  </tr>\r\n    <!-- <ng-container matColumnDef=\"id\">\r\n      <th mat-header-cell *matHeaderCellDef> S.No </th>\r\n      <td mat-cell *matCellDef=\"let userdata\"> {{userdata.id}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef> Name </th>\r\n      <td mat-cell *matCellDef=\"let userdata\"> {{userdata.name}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"description\">\r\n      <th mat-header-cell *matHeaderCellDef> Description </th>\r\n      <td mat-cell *matCellDef=\"let userdata\"> {{userdata.description}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"price\">\r\n      <th mat-header-cell *matHeaderCellDef> Price </th>\r\n      <td mat-cell *matCellDef=\"let userdata\"> {{userdata.price}} </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"delete\">\r\n      <th mat-header-cell *matHeaderCellDef> Delete </th>\r\n      <td mat-cell *matCellDef=\"let userdata\"> hi </td>\r\n    </ng-container>\r\n    \r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr> -->\r\n     </table>"

/***/ }),

/***/ "./src/app/adddata/adddata.component.ts":
/*!**********************************************!*\
  !*** ./src/app/adddata/adddata.component.ts ***!
  \**********************************************/
/*! exports provided: AdddataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdddataComponent", function() { return AdddataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/filter';
var AdddataComponent = /** @class */ (function () {
    function AdddataComponent(httpclient) {
        this.httpclient = httpclient;
        this.displayedColumns = ['id', 'name', 'description', 'price', 'delete'];
        this.userdata = [];
        this.dataSource = this.userdata;
    }
    AdddataComponent.prototype.deletiteam = function (userdataa) {
        debugger;
        alert(" you  deleted the iteam");
        var userurl = 'http://localhost:3000/posts/' + userdataa.id;
        this.httpclient.delete(userurl).subscribe((function (response) { }));
        window.location.reload();
    };
    AdddataComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userurl = 'http://localhost:3000/posts';
        this.httpclient.get(userurl).subscribe((function (response) {
            _this.userdata = response;
            console.log(_this.userdata);
        }));
    };
    AdddataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adddata',
            template: __webpack_require__(/*! ./adddata.component.html */ "./src/app/adddata/adddata.component.html"),
            styles: [__webpack_require__(/*! ./adddata.component.css */ "./src/app/adddata/adddata.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AdddataComponent);
    return AdddataComponent;
}());



/***/ }),

/***/ "./src/app/additeam/additeam.component.css":
/*!*************************************************!*\
  !*** ./src/app/additeam/additeam.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    margin-top:100px !important;\r\n}\r\n.headerapp{\r\n  color:  #118a0a !important;\r\n}\r\n.form-group{\r\n    margin:5px !important;\r\n}"

/***/ }),

/***/ "./src/app/additeam/additeam.component.html":
/*!**************************************************!*\
  !*** ./src/app/additeam/additeam.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-6 offset-md-3\">\n\n      <h3 class=\"headerapp\">Please Provide iteam Details</h3>\n      </div></div>\n      <div class=\"row\">\n          <div class=\"col-md-6 offset-md-3\">\n\n              <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n                  <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\">\n                      <label>Iteam Name :</label></div>\n                      <div class=\"col-md-3\">\n                      <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" /></div>\n                     </div>\n                     <div class=\"row\">\n                         <div class=\"col-md-3\"></div>\n                         <div class=\"col-md-6\">\n                          <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.name.errors.required\" style=\"color:red;\"> Name is required</div>\n                          </div>\n                      </div>\n</div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3\"> \n                      <label>Description :</label></div>\n                      <div class=\"col-md-3\">\n                      <input type=\"text\" formControlName=\"description\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" /></div>\n                     </div>\n                     <div class=\"row\">\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"col-md-6\">\n                      <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.description.errors.required\" style=\"color:red;\">Please write description</div>\n                      </div>\n                      </div>\n                      </div>\n                  </div>\n                  <div class=\"form-group\">\n                      <div class=\"row\">\n                             <div class=\"col-md-3\"> <label>Price :</label></div>\n                     <div class=\"col-md-3\">  <input type=\"text\" formControlName=\"price\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.price.errors }\" /></div>\n                      </div>\n                      <div class=\"row\">\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"col-md-6\">\n                      <div *ngIf=\"submitted && f.price.errors\" class=\"invalid-feedback\">\n                          <div *ngIf=\"f.price.errors.required\" style=\"color:red;\">please enter iteam price</div>\n                     </div>\n                     </div>\n                      </div>\n                  </div>\n\n                  <div class=\"form-group\" >\n                      <button class=\"btn btn-primary\"  style=\"background-color: black;color:white\">Submit</button>\n                  </div>\n              </form>\n          </div>\n      </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/additeam/additeam.component.ts":
/*!************************************************!*\
  !*** ./src/app/additeam/additeam.component.ts ***!
  \************************************************/
/*! exports provided: AdditeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditeamComponent", function() { return AdditeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



 // CLI imports router
var AdditeamComponent = /** @class */ (function () {
    function AdditeamComponent(formBuilder, httpclient, Routes) {
        this.formBuilder = formBuilder;
        this.httpclient = httpclient;
        this.Routes = Routes;
        this.submitted = false;
        this.userdata = [];
        this.adddata = [];
    }
    AdditeamComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    };
    Object.defineProperty(AdditeamComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    AdditeamComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        if (this.registerForm.valid) {
            var dataurl = 'http://localhost:3000/posts';
            var formData = new FormData();
            this.httpclient.post(dataurl, this.registerForm.value).subscribe((function (response) { _this.userdata = response; }));
            this.Routes.navigate(['iteamdata']);
        }
    };
    AdditeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-additeam',
            template: __webpack_require__(/*! ./additeam.component.html */ "./src/app/additeam/additeam.component.html"),
            styles: [__webpack_require__(/*! ./additeam.component.css */ "./src/app/additeam/additeam.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdditeamComponent);
    return AdditeamComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'inventory';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _adddata_adddata_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adddata/adddata.component */ "./src/app/adddata/adddata.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _additeam_additeam_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./additeam/additeam.component */ "./src/app/additeam/additeam.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { DataTablesModule } from 'angular-datatables';
var routes = [
    { path: '', redirectTo: 'iteamdata', pathMatch: 'full' },
    { path: 'iteamdata', component: _adddata_adddata_component__WEBPACK_IMPORTED_MODULE_3__["AdddataComponent"] },
    { path: 'additeam', component: _additeam_additeam_component__WEBPACK_IMPORTED_MODULE_6__["AdditeamComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _adddata_adddata_component__WEBPACK_IMPORTED_MODULE_3__["AdddataComponent"],
                _additeam_additeam_component__WEBPACK_IMPORTED_MODULE_6__["AdditeamComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
                // DataTablesModule
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
        })
    ], AppModule);
    return AppModule;
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Swadeep\inventory\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map