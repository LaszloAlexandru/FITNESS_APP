(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/web-editor-server/src/app/app.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/web-editor-server/src/app/app.controller.ts ***!
  \**********************************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./apps/web-editor-server/src/app/app.service.ts");
var _a;



let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], AppController.prototype, "getData", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]) === "function" ? _a : Object])
], AppController);



/***/ }),

/***/ "./apps/web-editor-server/src/app/app.module.ts":
/*!******************************************************!*\
  !*** ./apps/web-editor-server/src/app/app.module.ts ***!
  \******************************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.controller */ "./apps/web-editor-server/src/app/app.controller.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.service */ "./apps/web-editor-server/src/app/app.service.ts");
/* harmony import */ var _web_editor_server_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web-editor/server-auth */ "./libs/server-auth/src/index.ts");
/* harmony import */ var _web_editor_fclass_crud__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web-editor/fclass-crud */ "./libs/fclass-crud/src/index.ts");







let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [
            _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["MongooseModule"].forRoot('mongodb+srv://TestUser:NSLKDrhDjOmtEKeY@web-editor-mp3gm.mongodb.net/Web-Editor?retryWrites=true&w=majority'),
            _web_editor_server_auth__WEBPACK_IMPORTED_MODULE_5__["ServerAuthModule"],
            _web_editor_fclass_crud__WEBPACK_IMPORTED_MODULE_6__["FclassCrudModule"]
        ],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_3__["AppController"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]]
    })
], AppModule);



/***/ }),

/***/ "./apps/web-editor-server/src/app/app.service.ts":
/*!*******************************************************!*\
  !*** ./apps/web-editor-server/src/app/app.service.ts ***!
  \*******************************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getData() {
        return { message: 'Welcome to web-editor-server!' };
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



/***/ }),

/***/ "./apps/web-editor-server/src/main.ts":
/*!********************************************!*\
  !*** ./apps/web-editor-server/src/main.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./apps/web-editor-server/src/app/app.module.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

// @ts-ignore


function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_1__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], { cors: true });
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.port || 3333;
        yield app.listen(port, () => {
            console.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ "./libs/fclass-crud/src/index.ts":
/*!***************************************!*\
  !*** ./libs/fclass-crud/src/index.ts ***!
  \***************************************/
/*! exports provided: FclassCrudModule, FclassCrudService, FclassCrudController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_fclass_crud_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/fclass-crud.module */ "./libs/fclass-crud/src/lib/fclass-crud.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FclassCrudModule", function() { return _lib_fclass_crud_module__WEBPACK_IMPORTED_MODULE_0__["FclassCrudModule"]; });

/* harmony import */ var _lib_fclass_crud_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/fclass-crud.service */ "./libs/fclass-crud/src/lib/fclass-crud.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FclassCrudService", function() { return _lib_fclass_crud_service__WEBPACK_IMPORTED_MODULE_1__["FclassCrudService"]; });

/* harmony import */ var _lib_fclass_crud_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/fclass-crud.controller */ "./libs/fclass-crud/src/lib/fclass-crud.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FclassCrudController", function() { return _lib_fclass_crud_controller__WEBPACK_IMPORTED_MODULE_2__["FclassCrudController"]; });






/***/ }),

/***/ "./libs/fclass-crud/src/lib/fclass-crud.controller.ts":
/*!************************************************************!*\
  !*** ./libs/fclass-crud/src/lib/fclass-crud.controller.ts ***!
  \************************************************************/
/*! exports provided: FclassCrudController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FclassCrudController", function() { return FclassCrudController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fclass_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fclass-crud.service */ "./libs/fclass-crud/src/lib/fclass-crud.service.ts");
var _a;



let FclassCrudController = class FclassCrudController {
    constructor(fclassCrudService) {
        this.fclassCrudService = fclassCrudService;
    }
    getClasses() {
        return this.fclassCrudService.getClasses();
    }
    postClasses(name, shortDescription, description, rating, numberOfReviews) {
        return this.fclassCrudService.createClass(name, shortDescription, description, rating, numberOfReviews);
    }
    updateClass(name, rating) {
        return this.fclassCrudService.updateClass(name, rating);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], FclassCrudController.prototype, "getClasses", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('name')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('shortDescription')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('description')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('rating')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('numberOfReviews')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, String, String, Number, Number]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], FclassCrudController.prototype, "postClasses", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Put"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('name')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('rating')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, Number]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], FclassCrudController.prototype, "updateClass", null);
FclassCrudController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('fclass-crud'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _fclass_crud_service__WEBPACK_IMPORTED_MODULE_2__["FclassCrudService"] !== "undefined" && _fclass_crud_service__WEBPACK_IMPORTED_MODULE_2__["FclassCrudService"]) === "function" ? _a : Object])
], FclassCrudController);



/***/ }),

/***/ "./libs/fclass-crud/src/lib/fclass-crud.model.ts":
/*!*******************************************************!*\
  !*** ./libs/fclass-crud/src/lib/fclass-crud.model.ts ***!
  \*******************************************************/
/*! exports provided: FclassSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FclassSchema", function() { return FclassSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const FclassSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    name: { type: String, required: true },
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    numberOfReviews: { type: Number, required: true },
});


/***/ }),

/***/ "./libs/fclass-crud/src/lib/fclass-crud.module.ts":
/*!********************************************************!*\
  !*** ./libs/fclass-crud/src/lib/fclass-crud.module.ts ***!
  \********************************************************/
/*! exports provided: FclassCrudModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FclassCrudModule", function() { return FclassCrudModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fclass_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fclass-crud.service */ "./libs/fclass-crud/src/lib/fclass-crud.service.ts");
/* harmony import */ var _fclass_crud_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fclass-crud.controller */ "./libs/fclass-crud/src/lib/fclass-crud.controller.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fclass_crud_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fclass-crud.model */ "./libs/fclass-crud/src/lib/fclass-crud.model.ts");






let FclassCrudModule = class FclassCrudModule {
};
FclassCrudModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([{ name: 'fclass', schema: _fclass_crud_model__WEBPACK_IMPORTED_MODULE_5__["FclassSchema"] }])],
        controllers: [_fclass_crud_controller__WEBPACK_IMPORTED_MODULE_3__["FclassCrudController"]],
        providers: [_fclass_crud_service__WEBPACK_IMPORTED_MODULE_2__["FclassCrudService"]],
        exports: [_fclass_crud_service__WEBPACK_IMPORTED_MODULE_2__["FclassCrudService"]]
    })
], FclassCrudModule);



/***/ }),

/***/ "./libs/fclass-crud/src/lib/fclass-crud.service.ts":
/*!*********************************************************!*\
  !*** ./libs/fclass-crud/src/lib/fclass-crud.service.ts ***!
  \*********************************************************/
/*! exports provided: FclassCrudService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FclassCrudService", function() { return FclassCrudService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
var _a;




let FclassCrudService = class FclassCrudService {
    constructor(fclass) {
        this.fclass = fclass;
    }
    getClasses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.fclass.find();
        });
    }
    createClass(name, shortDescription, description, rating, numberOfReviews) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newClass = new this.fclass({
                name,
                shortDescription,
                description,
                rating,
                numberOfReviews
            });
            return yield newClass.save();
        });
    }
    updateClass(name, rating) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.fclass.update({ name: name }, { rating: rating });
            return this.fclass.find();
        });
    }
};
FclassCrudService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])('fclass')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object])
], FclassCrudService);



/***/ }),

/***/ "./libs/server-auth/src/index.ts":
/*!***************************************!*\
  !*** ./libs/server-auth/src/index.ts ***!
  \***************************************/
/*! exports provided: ServerAuthModule, ServerAuthController, ServerAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_server_auth_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/server-auth.module */ "./libs/server-auth/src/lib/server-auth.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerAuthModule", function() { return _lib_server_auth_module__WEBPACK_IMPORTED_MODULE_0__["ServerAuthModule"]; });

/* harmony import */ var _lib_server_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/server-auth.service */ "./libs/server-auth/src/lib/server-auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerAuthService", function() { return _lib_server_auth_service__WEBPACK_IMPORTED_MODULE_1__["ServerAuthService"]; });

/* harmony import */ var _lib_server_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/server-auth.controller */ "./libs/server-auth/src/lib/server-auth.controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerAuthController", function() { return _lib_server_auth_controller__WEBPACK_IMPORTED_MODULE_2__["ServerAuthController"]; });






/***/ }),

/***/ "./libs/server-auth/src/lib/server-auth.controller.ts":
/*!************************************************************!*\
  !*** ./libs/server-auth/src/lib/server-auth.controller.ts ***!
  \************************************************************/
/*! exports provided: ServerAuthController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerAuthController", function() { return ServerAuthController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-auth.service */ "./libs/server-auth/src/lib/server-auth.service.ts");
var _a;



let ServerAuthController = class ServerAuthController {
    constructor(serverAuthService) {
        this.serverAuthService = serverAuthService;
    }
    getData() {
        this.serverAuthService.getData();
    }
    getUser(id, password) {
        return this.serverAuthService.getUserById(id);
    }
    verifyToken(bearerToken) {
        return this.serverAuthService.verifyToken(bearerToken);
    }
    login(email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.serverAuthService.getUserById(email);
            const userValidity = yield this.serverAuthService.checkUserValidity(password, user);
            if (userValidity) {
                return this.serverAuthService.login(user);
            }
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]("User does not exist", _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].NOT_FOUND);
        });
    }
    postData(name, email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const user = yield this.serverAuthService.getUserById(email);
            if (user === null) {
                return this.serverAuthService.insertUser(name, email, password);
            }
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]("Email already exists", _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].CONFLICT);
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('/total'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ServerAuthController.prototype, "getData", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('email')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('password')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ServerAuthController.prototype, "getUser", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('/verify'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('bearerToken')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ServerAuthController.prototype, "verifyToken", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('/login'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('email')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('password')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ServerAuthController.prototype, "login", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('name')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('email')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])('password')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, String, String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Promise)
], ServerAuthController.prototype, "postData", null);
ServerAuthController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])('auth'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _server_auth_service__WEBPACK_IMPORTED_MODULE_2__["ServerAuthService"] !== "undefined" && _server_auth_service__WEBPACK_IMPORTED_MODULE_2__["ServerAuthService"]) === "function" ? _a : Object])
], ServerAuthController);



/***/ }),

/***/ "./libs/server-auth/src/lib/server-auth.model.ts":
/*!*******************************************************!*\
  !*** ./libs/server-auth/src/lib/server-auth.model.ts ***!
  \*******************************************************/
/*! exports provided: jwtConstants, UserSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtConstants", function() { return jwtConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSchema", function() { return UserSchema; });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const jwtConstants = {
    secret: 'secretKey',
};
const UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__["Schema"]({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});


/***/ }),

/***/ "./libs/server-auth/src/lib/server-auth.module.ts":
/*!********************************************************!*\
  !*** ./libs/server-auth/src/lib/server-auth.module.ts ***!
  \********************************************************/
/*! exports provided: ServerAuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerAuthModule", function() { return ServerAuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _server_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./server-auth.service */ "./libs/server-auth/src/lib/server-auth.service.ts");
/* harmony import */ var _server_auth_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-auth.controller */ "./libs/server-auth/src/lib/server-auth.controller.ts");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _server_auth_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./server-auth.model */ "./libs/server-auth/src/lib/server-auth.model.ts");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_6__);








let ServerAuthModule = class ServerAuthModule {
};
ServerAuthModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_4__["MongooseModule"].forFeature([{ name: 'user', schema: _server_auth_model__WEBPACK_IMPORTED_MODULE_5__["UserSchema"] }]), _nestjs_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtModule"].register({
                secret: _server_auth_model__WEBPACK_IMPORTED_MODULE_5__["jwtConstants"].secret,
                signOptions: { expiresIn: '1d' },
            }),],
        controllers: [_server_auth_controller__WEBPACK_IMPORTED_MODULE_3__["ServerAuthController"]],
        providers: [_server_auth_service__WEBPACK_IMPORTED_MODULE_2__["ServerAuthService"]],
        exports: [_server_auth_service__WEBPACK_IMPORTED_MODULE_2__["ServerAuthService"]]
    })
], ServerAuthModule);



/***/ }),

/***/ "./libs/server-auth/src/lib/server-auth.service.ts":
/*!*********************************************************!*\
  !*** ./libs/server-auth/src/lib/server-auth.service.ts ***!
  \*********************************************************/
/*! exports provided: ServerAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerAuthService", function() { return ServerAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
/* harmony import */ var _nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bcrypt */ "bcrypt");
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
/* harmony import */ var _nestjs_jwt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_nestjs_jwt__WEBPACK_IMPORTED_MODULE_5__);
var _a, _b;






const HASH_VALUE = 10;
let ServerAuthService = class ServerAuthService {
    constructor(user, jwtService) {
        this.user = user;
        this.jwtService = jwtService;
    }
    getData() {
        return { message: 'Welcome to app-server!' };
    }
    getUserById(email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.user.findOne({ email: email });
        });
    }
    checkUserValidity(password, user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = bcrypt__WEBPACK_IMPORTED_MODULE_4__["compare"](password, user.password).then((res) => {
                return res;
            });
            return result;
        });
    }
    verifyToken(token) {
        return this.jwtService.verify(token);
    }
    login(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (user !== null) {
                const deconstructUser = {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    password: user.password
                };
                return {
                    bearerToken: this.jwtService.sign(deconstructUser)
                };
            }
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]("User does not exist", _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].NOT_FOUND);
        });
    }
    insertUser(name, email, password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const encryptedPassword = yield bcrypt__WEBPACK_IMPORTED_MODULE_4__["hash"](password, HASH_VALUE);
            const newUser = new this.user({
                name,
                email,
                password: encryptedPassword
            });
            const result = yield newUser.save();
            return result.id;
        });
    }
};
ServerAuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_mongoose__WEBPACK_IMPORTED_MODULE_2__["InjectModel"])('user')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"] !== "undefined" && mongoose__WEBPACK_IMPORTED_MODULE_3__["Model"]) === "function" ? _a : Object, typeof (_b = typeof _nestjs_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtService"] !== "undefined" && _nestjs_jwt__WEBPACK_IMPORTED_MODULE_5__["JwtService"]) === "function" ? _b : Object])
], ServerAuthService);



/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./apps/web-editor-server/src/main.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/laszlo/work/WEB_EDITOR/apps/web-editor-server/src/main.ts */"./apps/web-editor-server/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map