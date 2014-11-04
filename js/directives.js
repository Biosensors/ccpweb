/*yadongLookup - directives.js - Yadong Zhu 2014*/
(function() {
    'use strict';
    /* Directives */
    angular.module('yadongLookup.directives', [])
    .directive('appVersion', ['version', function(version) {
	    return function(scope, elm, attrs) {
	      elm.text(version);
	    };
	  }]);

 }())