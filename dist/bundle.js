/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(/*! ./ngApp.js */ 1);
	
	__webpack_require__(/*! ./controllers/mainCtrl */ 2);
	
	__webpack_require__(/*! ./services/insuranceService */ 3);

/***/ },
/* 1 */
/*!**********************!*\
  !*** ./src/ngApp.js ***!
  \**********************/
/***/ function(module, exports) {

	'use strict';
	
	window.app = angular.module('insuranceApp', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('/');
	  $stateProvider.state('insurance', {
	    url: '/insurance',
	    templateUrl: '/pages/insurance.html',
	    controller: 'mainController'
	  });
	});

/***/ },
/* 2 */
/*!*************************************!*\
  !*** ./src/controllers/mainCtrl.js ***!
  \*************************************/
/***/ function(module, exports) {

	"use strict";
	
	app.controller('mainController', function ($scope, $http, insuranceService) {
	
	  $scope.rooms = [];
	
	  var selectedRoom;
	  $scope.total;
	
	  $scope.addRoom = function (room) {
	    $scope.rooms.push(room);
	    $scope.room = "";
	  };
	
	  $scope.selectRoom = function (room) {
	    selectedRoom = room;
	    console.log(selectedRoom);
	  };
	
	  $scope.submit = function (items) {
	    selectedRoom.items = items;
	    console.log(selectedRoom);
	    $scope.total += items.cost;
	  };
	});

/***/ },
/* 3 */
/*!******************************************!*\
  !*** ./src/services/insuranceService.js ***!
  \******************************************/
/***/ function(module, exports) {

	"use strict";
	
	app.service("insuranceService", function ($state) {});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map