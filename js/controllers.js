/*yadongLookup - Controllers.js - Yadong Zhu 2014*/
(function() {
    'use strict';
    /* Controllers */
    angular.module('yadongLookup.controllers', [])
    .controller('navCtrl', ['$scope', '$rootScope', function($scope,$rootScope){
    	$scope.toggleDebug=function(){
    		$rootScope.debug=!$rootScope.debug;
    	}
    }])
    .controller('footerCtrl', ['$scope', function($scope){
    	$scope.currentDate = new Date();
    }])
    .controller('homeCtrl', ['$scope', function($scope){
    	
    }])
    .controller('shortcutsCtrl', ['$scope','list', function($scope,list){
    	$scope.shortcuts = list.items;
    	$scope.module = list.module;
    }])
    .controller('shortcutModuleCtrl', ['$scope','module', function($scope,module){
    	$scope.module = module;
    	$scope.rowCollection = module.shortcuts[0].items;
    	
    	//copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
    	$scope.displayedCollection = [].concat($scope.rowCollection);

    }])
 }())
