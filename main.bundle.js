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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div>\r\n  <h1>\r\n    <img width=\"35\" src=\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyNTAgMjUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNTAgMjUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojREQwMDMxO30NCgkuc3Qxe2ZpbGw6I0MzMDAyRjt9DQoJLnN0MntmaWxsOiNGRkZGRkY7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMTI1LDMwIDEyNSwzMCAxMjUsMzAgMzEuOSw2My4yIDQ2LjEsMTg2LjMgMTI1LDIzMCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAJIi8+DQoJPHBvbHlnb24gY2xhc3M9InN0MSIgcG9pbnRzPSIxMjUsMzAgMTI1LDUyLjIgMTI1LDUyLjEgMTI1LDE1My40IDEyNSwxNTMuNCAxMjUsMjMwIDEyNSwyMzAgMjAzLjksMTg2LjMgMjE4LjEsNjMuMiAxMjUsMzAgCSIvPg0KCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xMjUsNTIuMUw2Ni44LDE4Mi42aDBoMjEuN2gwbDExLjctMjkuMmg0OS40bDExLjcsMjkuMmgwaDIxLjdoMEwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMUwxMjUsNTIuMQ0KCQlMMTI1LDUyLjF6IE0xNDIsMTM1LjRIMTA4bDE3LTQwLjlMMTQyLDEzNS40eiIvPg0KPC9nPg0KPC9zdmc+DQo=\"> {{title}}\r\n  </h1>\r\n  <h2>Work in progress</h2>\r\n  <mat-tab-group (selectChange)=\"reloadWowheadScript()\">\r\n    <mat-tab label=\"Legion Consumables\">\r\n      <div class=\"h3-container\">\r\n        <h3>Flasks</h3>\r\n        <div class=\"box-border-container\">\r\n          <div class=\"grid-container-consumable\">\r\n            <div *ngFor=\"let flask of flasks; let index=index\">\r\n              <app-consumable [consumable]=flask [displayMaterial]=\"true\"></app-consumable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"h3-container\">\r\n        <h3>Potions</h3>\r\n        <div class=\"box-border-container\">\r\n          <div class=\"grid-container-consumable\">\r\n            <div *ngFor=\"let potion of potions; let index=index\">\r\n              <app-consumable [consumable]=potion [displayMaterial]=\"true\"></app-consumable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"All content\">\r\n      <div class=\"h3-container\">\r\n        <h3>Specializations</h3>\r\n        <div class=\"box-border-container\">\r\n          <div class=\"grid-container-specialization\">\r\n            <div *ngFor=\"let specialization of specializations\">\r\n              <app-specialization [specialization]=\"specialization\"></app-specialization>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"h3-container\">\r\n        <h3>Plants</h3>\r\n        <div class=\"box-border-container\">\r\n          <div class=\"grid-container-material\">\r\n            <div *ngFor=\"let plant of plants\">\r\n              <app-material [material]=\"plant\"></app-material>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"h3-container\">\r\n        <h3>Flasks</h3>\r\n        <div class=\"box-border-container\">\r\n          <div class=\"grid-container-consumable\">\r\n            <div *ngFor=\"let flask of flasks; let index=index\">\r\n              <app-consumable [consumable]=flask></app-consumable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"h3-container\">\r\n        <h3>Potions</h3>\r\n        <div class=\"box-border-container\">\r\n          <div class=\"grid-container-consumable\">\r\n            <div *ngFor=\"let potion of potions; let index=index\">\r\n              <app-consumable [consumable]=potion></app-consumable>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n<h2>\r\n  <a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a>\r\n</h2>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  color: #369;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%; }\n\nh3 {\n  margin-top: 50px;\n  margin-bottom: 0;\n  background-color: #f6f8fa;\n  border: 1px solid rgba(27, 31, 35, 0.15);\n  border-bottom: 0;\n  border-radius: 3px 3px 0 0; }\n\n.q1 {\n  color: black !important; }\n\n.h3-container {\n  border-radius: 3px; }\n\n.box-border-container {\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.grid-container-specialization {\n  margin: 20px 0;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -ms-grid-column-align: center;\n      justify-items: center;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  grid-row-gap: 0.5rem; }\n\n.grid-container-material {\n  margin: 20px 0;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (100px)[auto-fit];\n      grid-template-columns: repeat(auto-fit, 100px);\n  grid-gap: 3em;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly; }\n\n.grid-container-consumable {\n  margin: 20px 0;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (350px)[auto-fit];\n      grid-template-columns: repeat(auto-fit, 350px);\n  grid-gap: 3em;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_compute_service__ = __webpack_require__("../../../../../src/app/services/compute.service.ts");
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
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.title = 'World of Warcraft - Consumables';
    }
    AppComponent.prototype.getData = function () {
        var _this = this;
        this.dataService.getSpecializations().then(function (specializations) {
            _this.specializations = specializations;
        });
        this.dataService.getPlants().then(function (plants) {
            _this.plants = plants;
        });
        this.dataService.getFlasks().then(function (flasks) {
            _this.flasks = flasks;
        });
        this.dataService.getPotions().then(function (potions) {
            _this.potions = potions;
        });
    };
    AppComponent.prototype.reloadWowheadScript = function () {
        $WowheadPower.init();
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__services_compute_service__["a" /* ComputeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__consumable_consumable_component__ = __webpack_require__("../../../../../src/app/consumable/consumable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_material_component__ = __webpack_require__("../../../../../src/app/material/material.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__specialization_specialization_component__ = __webpack_require__("../../../../../src/app/specialization/specialization.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__consumable_consumable_component__["a" /* ConsumableComponent */],
            __WEBPACK_IMPORTED_MODULE_7__material_material_component__["a" /* MaterialComponent */],
            __WEBPACK_IMPORTED_MODULE_8__specialization_specialization_component__["a" /* SpecializationComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatTabsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/consumable/consumable.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"consumable\">\r\n  <div class=\"grid-container-consumable-info\">\r\n    <div class=\"grid-consumable-header\">\r\n      <app-material [material]=\"consumable\" [wantedNumber]=\"displayMaterial?consumable.wantedNumber:null\"></app-material>\r\n    </div>\r\n    <div class=\"grid-container-consumable-utility\">\r\n      <div *ngFor=\"let util of consumable.utility\" class=\"grid-consumable-utility\">\r\n        <app-specialization [specialization]=\"util\"></app-specialization>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"displayMaterial\">\r\n    <div class=\"grid-container-craft-materials\">\r\n      <div *ngFor=\"let craftMaterial of consumable.craftMaterials\">\r\n        <app-material [material]=\"craftMaterial.component\" [wantedNumber]=\"craftMaterial.amount * consumable.wantedNumber\"></app-material>\r\n      </div>\r\n    </div>\r\n    <form novalidate [formGroup]=\"form\">\r\n      <mat-form-field>\r\n        <input matInput class=\"form-control\" formControlName=\"wantedNumber\" name=\"wantedNumber\" type=\"number\" />\r\n        <mat-hint align=\"end\">Enter the number you want</mat-hint>\r\n      </mat-form-field>\r\n    </form>\r\n  </div>\r\n</div>\r\n<!-- min=\"0\" max=\"{{1000*consumable.craftNumber - 1}}\" step=\"{{consumable.craftNumber}}\" maxlength=\"3\" -->\r\n"

/***/ }),

/***/ "../../../../../src/app/consumable/consumable.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-container-consumable-info {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 140px;\n      grid-template-columns: 1fr 140px;\n  grid-column-gap: 1rem; }\n\n.grid-container-consumable-utility {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  grid-row-gap: 0.5rem; }\n\n.grid-container-craft-materials {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (100px)[auto-fit];\n      grid-template-columns: repeat(auto-fit, 100px);\n  grid-column-gap: 1em;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  margin-top: 20px; }\n\n.q1 {\n  color: black !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/consumable/consumable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_consumable__ = __webpack_require__("../../../../../src/app/model/consumable.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rxjs__ = __webpack_require__("../../../../../src/app/shared/rxjs.imports.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsumableComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsumableComponent = (function () {
    function ConsumableComponent(fb, cd) {
        this.fb = fb;
        this.cd = cd;
        this.displayMaterial = false;
    }
    ConsumableComponent.prototype.ngOnInit = function () {
        var _this = this;
        // init form
        this.form = this.fb.group({
            wantedNumber: [this.consumable.wantedNumber, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].min(0)]]
        });
        // subscribe to input value and update with a debounce time of 500ms
        var wantedNumberControl = this.form.get('wantedNumber');
        wantedNumberControl.valueChanges
            .debounceTime(500)
            .subscribe(function (n) {
            return _this.computeWantedNumber(n, wantedNumberControl);
        });
    };
    /**
     * Either update data or create a message
     * @param n input value
     * @param c input control
     */
    ConsumableComponent.prototype.computeWantedNumber = function (n, c) {
        if (c.touched || c.dirty) {
            if (c.errors) {
                // show error on input (see doc on material.angular.io)
            }
            else {
                this.consumable.wantedNumber = n;
                this.cd.markForCheck();
            }
        }
    };
    return ConsumableComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_consumable__["a" /* Consumable */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_consumable__["a" /* Consumable */]) === "function" && _a || Object)
], ConsumableComponent.prototype, "consumable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", Object)
], ConsumableComponent.prototype, "displayMaterial", void 0);
ConsumableComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'app-consumable',
        template: __webpack_require__("../../../../../src/app/consumable/consumable.component.html"),
        styles: [__webpack_require__("../../../../../src/app/consumable/consumable.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ChangeDetectorRef */]) === "function" && _c || Object])
], ConsumableComponent);

var _a, _b, _c;
//# sourceMappingURL=consumable.component.js.map

/***/ }),

/***/ "../../../../../src/app/material/material.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container-material\">\r\n    <div class=\"icon-number\">\r\n        <a href=\"https://www.wowhead.com/item={{material.idMaterial}}\" class=\"itemRef\"></a>\r\n        <div *ngIf=\"wantedNumber\" class=\"number\">{{wantedNumber}}</div>\r\n    </div>\r\n    <div class=\"name\">{{material.name}}</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/material/material.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-container-material {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr; }\n\n.icon-number {\n  height: 68px;\n  width: 68px;\n  margin: auto;\n  text-align: center;\n  position: relative; }\n\n.number {\n  font-size: 2em;\n  color: white;\n  z-index: 30;\n  position: absolute;\n  vertical-align: middle;\n  top: 16px;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  text-shadow: 2px 0 0 #000000, -2px 0 0 #000000, 0 2px 0 #000000,\r 0 -2px 0 #000000, 1px 1px #000000, -1px -1px 0 #000000, 1px -1px 0 #000000,\r -1px 1px 0 #000000; }\n\n.name {\n  font-family: Verdana, 'Open Sans', Arial, 'Helvetica Neue', Helvetica,\r sans-serif;\n  font-size: 0.8em; }\n\n.q1 {\n  color: black !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/material/material.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_material__ = __webpack_require__("../../../../../src/app/model/material.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaterialComponent = (function () {
    function MaterialComponent() {
    }
    MaterialComponent.prototype.ngOnInit = function () { };
    return MaterialComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_material__["a" /* Material */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_material__["a" /* Material */]) === "function" && _a || Object)
], MaterialComponent.prototype, "material", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", Number)
], MaterialComponent.prototype, "wantedNumber", void 0);
MaterialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'app-material',
        template: __webpack_require__("../../../../../src/app/material/material.component.html"),
        styles: [__webpack_require__("../../../../../src/app/material/material.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MaterialComponent);

var _a;
//# sourceMappingURL=material.component.js.map

/***/ }),

/***/ "../../../../../src/app/model/consumable.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material__ = __webpack_require__("../../../../../src/app/model/material.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consumable; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Consumable = (function (_super) {
    __extends(Consumable, _super);
    function Consumable(content, init) {
        var _this = _super.call(this, content, init) || this;
        _this.craftNumber = 1; // number
        _this.wantedNumber = 0; // number
        Object.assign(_this, init);
        return _this;
    }
    return Consumable;
}(__WEBPACK_IMPORTED_MODULE_0__material__["a" /* Material */]));

//# sourceMappingURL=consumable.js.map

/***/ }),

/***/ "../../../../../src/app/model/content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Content; });
var Content = (function () {
    function Content(init) {
        Object.assign(this, init);
    }
    return Content;
}());

//# sourceMappingURL=content.js.map

/***/ }),

/***/ "../../../../../src/app/model/currency.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material__ = __webpack_require__("../../../../../src/app/model/material.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Currency; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Currency = (function (_super) {
    __extends(Currency, _super);
    function Currency() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Currency;
}(__WEBPACK_IMPORTED_MODULE_0__material__["a" /* Material */]));

//# sourceMappingURL=currency.js.map

/***/ }),

/***/ "../../../../../src/app/model/flask.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__consumable__ = __webpack_require__("../../../../../src/app/model/consumable.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flask; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Flask = (function (_super) {
    __extends(Flask, _super);
    function Flask() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Flask;
}(__WEBPACK_IMPORTED_MODULE_0__consumable__["a" /* Consumable */]));

//# sourceMappingURL=flask.js.map

/***/ }),

/***/ "../../../../../src/app/model/material.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__content__ = __webpack_require__("../../../../../src/app/model/content.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Material; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// Abstract class for wow materials
var Material = (function (_super) {
    __extends(Material, _super);
    function Material(content, init) {
        var _this = _super.call(this, content) || this;
        Object.assign(_this, init);
        return _this;
    }
    return Material;
}(__WEBPACK_IMPORTED_MODULE_0__content__["a" /* Content */]));

//# sourceMappingURL=material.js.map

/***/ }),

/***/ "../../../../../src/app/model/plant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tradable_material__ = __webpack_require__("../../../../../src/app/model/tradable-material.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plant; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Plant = (function (_super) {
    __extends(Plant, _super);
    function Plant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Plant;
}(__WEBPACK_IMPORTED_MODULE_0__tradable_material__["a" /* TradableMaterial */]));

//# sourceMappingURL=plant.js.map

/***/ }),

/***/ "../../../../../src/app/model/potion.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__consumable__ = __webpack_require__("../../../../../src/app/model/consumable.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Potion; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Potion = (function (_super) {
    __extends(Potion, _super);
    function Potion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Potion;
}(__WEBPACK_IMPORTED_MODULE_0__consumable__["a" /* Consumable */]));

//# sourceMappingURL=potion.js.map

/***/ }),

/***/ "../../../../../src/app/model/specialization.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Specialization; });
var Specialization = (function () {
    function Specialization(init) {
        Object.assign(this, init);
    }
    return Specialization;
}());

//# sourceMappingURL=specialization.js.map

/***/ }),

/***/ "../../../../../src/app/model/tradable-material.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__material__ = __webpack_require__("../../../../../src/app/model/material.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TradableMaterial; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// Abstract for tradable wow materials with a currency (which is another Material)
var TradableMaterial = (function (_super) {
    __extends(TradableMaterial, _super);
    function TradableMaterial(content, init) {
        var _this = _super.call(this, content, init) || this;
        Object.assign(_this, init);
        return _this;
    }
    return TradableMaterial;
}(__WEBPACK_IMPORTED_MODULE_0__material__["a" /* Material */]));

//# sourceMappingURL=tradable-material.js.map

/***/ }),

/***/ "../../../../../src/app/services/compute.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComputeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComputeService = (function () {
    function ComputeService() {
    }
    return ComputeService;
}());
ComputeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ComputeService);

//# sourceMappingURL=compute.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_data__ = __webpack_require__("../../../../../src/app/services/mock-data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataService = (function () {
    function DataService() {
    }
    DataService.prototype.getSpecializations = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_data__["a" /* EXPORTDATA */].SPECIALIZATIONS);
    };
    DataService.prototype.getPlants = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_data__["a" /* EXPORTDATA */].PLANTS);
    };
    DataService.prototype.getFlasks = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_data__["a" /* EXPORTDATA */].FLASKS);
    };
    DataService.prototype.getPotions = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_data__["a" /* EXPORTDATA */].POTIONS);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])()
], DataService);

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_content__ = __webpack_require__("../../../../../src/app/model/content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_currency__ = __webpack_require__("../../../../../src/app/model/currency.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_plant__ = __webpack_require__("../../../../../src/app/model/plant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_flask__ = __webpack_require__("../../../../../src/app/model/flask.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_potion__ = __webpack_require__("../../../../../src/app/model/potion.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_specialization__ = __webpack_require__("../../../../../src/app/model/specialization.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EXPORTDATA; });






// Init data
var specDd = new __WEBPACK_IMPORTED_MODULE_5__model_specialization__["a" /* Specialization */]({
    idSpec: 0,
    name: 'Damage Dealer',
    icon: 'http://wow.zamimg.com/images/icons/ej-dps.png'
});
var specTank = new __WEBPACK_IMPORTED_MODULE_5__model_specialization__["a" /* Specialization */]({
    idSpec: 1,
    name: 'Tank',
    icon: 'https://wow.zamimg.com/images/icons/ej-tank.png'
});
var specHealer = new __WEBPACK_IMPORTED_MODULE_5__model_specialization__["a" /* Specialization */]({
    idSpec: 2,
    name: 'Healer',
    icon: 'http://wow.zamimg.com/images/icons/ej-healer.png'
});
var specHybrid = new __WEBPACK_IMPORTED_MODULE_5__model_specialization__["a" /* Specialization */]({
    idSpec: 3,
    name: 'Hybrid',
    icon: 'assets/images/hybrid_wow.png'
});
var currentContent = new __WEBPACK_IMPORTED_MODULE_0__model_content__["a" /* Content */]({
    idContent: 1,
    expansionName: 'Legion',
    patch: '7.3.0',
    releaseDate: new Date()
});
var bloodOfSargeras = new __WEBPACK_IMPORTED_MODULE_1__model_currency__["a" /* Currency */](currentContent, {
    idMaterial: 124124,
    name: 'Blood of Sargeras',
    stackSize: 1000
});
var aethril = new __WEBPACK_IMPORTED_MODULE_2__model_plant__["a" /* Plant */](currentContent, {
    idMaterial: 124101,
    name: 'Aethril',
    stackSize: 200,
    currency: bloodOfSargeras,
    ratio: 10
});
var dreamleaf = new __WEBPACK_IMPORTED_MODULE_2__model_plant__["a" /* Plant */](currentContent, {
    idMaterial: 124102,
    name: 'Dreamleaf',
    stackSize: 200,
    currency: bloodOfSargeras,
    ratio: 10
});
var foxFlower = new __WEBPACK_IMPORTED_MODULE_2__model_plant__["a" /* Plant */](currentContent, {
    idMaterial: 124103,
    name: 'FoxFlower',
    stackSize: 200,
    currency: bloodOfSargeras,
    ratio: 10
});
var fjarnskaggl = new __WEBPACK_IMPORTED_MODULE_2__model_plant__["a" /* Plant */](currentContent, {
    idMaterial: 124104,
    name: 'Fjarnskaggl',
    stackSize: 200,
    currency: bloodOfSargeras,
    ratio: 10
});
var starlightRose = new __WEBPACK_IMPORTED_MODULE_2__model_plant__["a" /* Plant */](currentContent, {
    idMaterial: 124105,
    name: 'Starlight Rose',
    stackSize: 200,
    currency: bloodOfSargeras,
    ratio: 3
});
var yserallineSeed = new __WEBPACK_IMPORTED_MODULE_2__model_plant__["a" /* Plant */](currentContent, {
    idMaterial: 128304,
    name: 'Yseralline Seed',
    stackSize: 200
});
var flaskIntellect = new __WEBPACK_IMPORTED_MODULE_3__model_flask__["a" /* Flask */](currentContent, {
    idMaterial: 127847,
    name: 'Flask of the Whispered Pact',
    stackSize: 20,
    utility: [specDd, specHealer],
    craftMaterials: [
        {
            component: starlightRose,
            amount: 7
        },
        {
            component: fjarnskaggl,
            amount: 10
        },
        {
            component: dreamleaf,
            amount: 10
        }
    ]
});
var flaskAgility = new __WEBPACK_IMPORTED_MODULE_3__model_flask__["a" /* Flask */](currentContent, {
    idMaterial: 127848,
    name: 'Flask of the Seventh Demon',
    stackSize: 20,
    utility: [specDd, specTank],
    craftMaterials: [
        {
            component: starlightRose,
            amount: 7
        },
        {
            component: fjarnskaggl,
            amount: 10
        },
        {
            component: foxFlower,
            amount: 10
        }
    ]
});
var flaskStrengh = new __WEBPACK_IMPORTED_MODULE_3__model_flask__["a" /* Flask */](currentContent, {
    idMaterial: 127849,
    name: 'Flask of the Countless Armies',
    stackSize: 20,
    utility: [specDd, specTank],
    craftMaterials: [
        {
            component: starlightRose,
            amount: 7
        },
        {
            component: aethril,
            amount: 10
        },
        {
            component: foxFlower,
            amount: 10
        }
    ]
});
var flaskStamina = new __WEBPACK_IMPORTED_MODULE_3__model_flask__["a" /* Flask */](currentContent, {
    idMaterial: 127850,
    name: 'Flask of Ten Thousand Scars',
    stackSize: 20,
    utility: [specTank],
    craftMaterials: [
        {
            component: starlightRose,
            amount: 7
        },
        {
            component: aethril,
            amount: 10
        },
        {
            component: dreamleaf,
            amount: 10
        }
    ]
});
var ancientHealingPotion = new __WEBPACK_IMPORTED_MODULE_4__model_potion__["a" /* Potion */](currentContent, {
    idMaterial: 127834,
    name: 'Ancient Healing Potion',
    stackSize: 20,
    utility: [specHybrid],
    craftMaterials: [
        {
            component: yserallineSeed,
            amount: 4
        }
    ]
});
var ancientManaPotion = new __WEBPACK_IMPORTED_MODULE_4__model_potion__["a" /* Potion */](currentContent, {
    idMaterial: 127835,
    name: 'Ancient Mana Potion',
    stackSize: 20,
    utility: [specHybrid],
    craftMaterials: [
        {
            component: yserallineSeed,
            amount: 4
        }
    ]
});
var ancientRejuvenationPotion = new __WEBPACK_IMPORTED_MODULE_4__model_potion__["a" /* Potion */](currentContent, {
    idMaterial: 127836,
    name: 'Ancient Rejuvenation Potion',
    stackSize: 20,
    utility: [specHybrid],
    craftMaterials: [
        {
            component: ancientHealingPotion,
            amount: 1
        },
        {
            component: ancientManaPotion,
            amount: 1
        }
    ]
});
var draughtRawMagic = new __WEBPACK_IMPORTED_MODULE_4__model_potion__["a" /* Potion */](currentContent, {
    idMaterial: 127837,
    name: 'Draught of Raw Magic',
    stackSize: 20,
    utility: [specHybrid],
    craftMaterials: [
        {
            component: ancientHealingPotion,
            amount: 1
        },
        {
            component: aethril,
            amount: 20
        }
    ]
});
var sylvanElixir = new __WEBPACK_IMPORTED_MODULE_4__model_potion__["a" /* Potion */](currentContent, {
    idMaterial: 127838,
    name: 'Sylvan Elixir',
    stackSize: 20,
    utility: [specHybrid],
    craftMaterials: [
        {
            component: ancientHealingPotion,
            amount: 1
        },
        {
            component: dreamleaf,
            amount: 5
        }
    ]
});
var avalancheElixir = new __WEBPACK_IMPORTED_MODULE_4__model_potion__["a" /* Potion */](currentContent, {
    idMaterial: 127839,
    name: 'Avalanche Elixir',
    stackSize: 20,
    utility: [specHybrid],
    craftMaterials: [
        {
            component: ancientManaPotion,
            amount: 1
        },
        {
            component: foxFlower,
            amount: 5
        }
    ]
});
var skaggldrynk = new __WEBPACK_IMPORTED_MODULE_4__model_potion__["a" /* Potion */](currentContent, {
    idMaterial: 127840,
    name: 'Skaggldrynk',
    stackSize: 20,
    utility: [specHybrid],
    craftMaterials: [
        {
            component: ancientManaPotion,
            amount: 1
        },
        {
            component: fjarnskaggl,
            amount: 5
        }
    ]
});
var skystepPotion = new __WEBPACK_IMPORTED_MODULE_4__model_potion__["a" /* Potion */](currentContent, {
    idMaterial: 127840,
    name: 'Skystep Potion',
    stackSize: 20,
    utility: [specHybrid],
    craftMaterials: [
        {
            component: ancientRejuvenationPotion,
            amount: 1
        },
        {
            component: starlightRose,
            amount: 4
        }
    ]
});
var leytorrentPotion = new __WEBPACK_IMPORTED_MODULE_4__model_potion__["a" /* Potion */](currentContent, {
    idMaterial: 127846,
    name: 'Leytorrent Potion',
    stackSize: 20,
    utility: [specDd, specHealer],
    craftMaterials: [
        {
            component: starlightRose,
            amount: 1
        },
        {
            component: aethril,
            amount: 2
        },
        {
            component: dreamleaf,
            amount: 2
        }
    ]
});
var potionDeadlyGrace = new __WEBPACK_IMPORTED_MODULE_4__model_potion__["a" /* Potion */](currentContent, {
    idMaterial: 127843,
    name: 'Potion of Deadly Grace',
    stackSize: 20,
    utility: [specDd],
    craftMaterials: [
        {
            component: starlightRose,
            amount: 1
        },
        {
            component: fjarnskaggl,
            amount: 2
        },
        {
            component: dreamleaf,
            amount: 2
        }
    ]
});
var potionOldWar = new __WEBPACK_IMPORTED_MODULE_4__model_potion__["a" /* Potion */](currentContent, {
    idMaterial: 127844,
    name: 'Potion of the Old War',
    stackSize: 20,
    utility: [specDd],
    craftMaterials: [
        {
            component: starlightRose,
            amount: 1
        },
        {
            component: fjarnskaggl,
            amount: 2
        },
        {
            component: foxFlower,
            amount: 2
        }
    ]
});
var unbendingPotion = new __WEBPACK_IMPORTED_MODULE_4__model_potion__["a" /* Potion */](currentContent, {
    idMaterial: 127845,
    name: 'Unbending Potion',
    stackSize: 20,
    utility: [specTank],
    craftMaterials: [
        {
            component: starlightRose,
            amount: 1
        },
        {
            component: aethril,
            amount: 2
        },
        {
            component: foxFlower,
            amount: 2
        }
    ]
});
var potionProlongedPower = new __WEBPACK_IMPORTED_MODULE_4__model_potion__["a" /* Potion */](currentContent, {
    idMaterial: 142117,
    name: 'Potion of Prolonged Power',
    stackSize: 100,
    utility: [specHybrid],
    craftNumber: 10,
    craftMaterials: [
        {
            component: bloodOfSargeras,
            amount: 1
        }
    ]
});
var SPECIALIZATIONS = [
    specDd,
    specTank,
    specHealer,
    specHybrid
];
var PLANTS = [
    aethril,
    dreamleaf,
    foxFlower,
    fjarnskaggl,
    starlightRose,
    yserallineSeed
];
var FLASKS = [
    flaskIntellect,
    flaskAgility,
    flaskStrengh,
    flaskStamina
];
var POTIONS = [
    ancientHealingPotion,
    ancientManaPotion,
    ancientRejuvenationPotion,
    draughtRawMagic,
    sylvanElixir,
    avalancheElixir,
    skaggldrynk,
    skystepPotion,
    leytorrentPotion,
    potionDeadlyGrace,
    potionOldWar,
    unbendingPotion,
    potionProlongedPower
];
var EXPORTDATA = {
    SPECIALIZATIONS: SPECIALIZATIONS,
    PLANTS: PLANTS,
    FLASKS: FLASKS,
    POTIONS: POTIONS
};
//# sourceMappingURL=mock-data.js.map

/***/ }),

/***/ "../../../../../src/app/shared/rxjs.imports.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__ = __webpack_require__("../../../../rxjs/add/observable/fromPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty__ = __webpack_require__("../../../../rxjs/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_delay___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_delay__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_toArray__ = __webpack_require__("../../../../rxjs/add/operator/toArray.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_toArray__);
// to import include :
// import '@myrxjs';
// because of tsconfig.json added definition
// "compilerOptions": {
//     "paths": {
//       "@myrxjs": [
//         "./app/shared/rxjs.imports"
//       ]
//     }
// }













//# sourceMappingURL=rxjs.imports.js.map

/***/ }),

/***/ "../../../../../src/app/specialization/specialization.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"grid-container-specialization\">\r\n    <img src=\"{{specialization.icon}}\" class=\"icon\" />\r\n    <div class=\"name\">{{specialization.name}}</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/specialization/specialization.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".grid-container-specialization {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 20px 1fr;\n      grid-template-columns: 20px 1fr;\n  margin: 0 auto; }\n\n.name {\n  display: inline-block;\n  vertical-align: middle;\n  text-align: left;\n  height: 22px;\n  width: 118px;\n  font-variant: small-caps;\n  font-family: Verdana, 'Open Sans', Arial, 'Helvetica Neue', Helvetica,\r sans-serif;\n  letter-spacing: -1px; }\n\n.icon {\n  vertical-align: middle; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/specialization/specialization.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_specialization__ = __webpack_require__("../../../../../src/app/model/specialization.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecializationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpecializationComponent = (function () {
    function SpecializationComponent() {
    }
    SpecializationComponent.prototype.ngOnInit = function () { };
    return SpecializationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__model_specialization__["a" /* Specialization */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__model_specialization__["a" /* Specialization */]) === "function" && _a || Object)
], SpecializationComponent.prototype, "specialization", void 0);
SpecializationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Component */])({
        selector: 'app-specialization',
        template: __webpack_require__("../../../../../src/app/specialization/specialization.component.html"),
        styles: [__webpack_require__("../../../../../src/app/specialization/specialization.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SpecializationComponent);

var _a;
//# sourceMappingURL=specialization.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map