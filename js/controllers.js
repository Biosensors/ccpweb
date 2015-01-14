/*jiahong - Controllers.js - Yadong Zhu 2014*/
(function() {
    'use strict';
    /* Controllers */
    angular.module('jiahong.controllers', [])
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
    .controller('teamCtrl', ['$scope', function($scope){

    }])
    .controller('productsCtrl', ['$scope', function($scope){

    }])
    .controller('jobsCtrl', ['$scope', function($scope){

    }])
    .controller('aboutusCtrl', ['$scope', function($scope){

    }])
 }())
