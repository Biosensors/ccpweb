/*ccp - filters.js - Yadong Zhu 2014*/
(function() {
    'use strict';
    /* Filters */
    angular.module('ccp.filters', [])
    .filter('interpolate', ['version', function(version) {
	    return function(text) {
	      return String(text).replace(/\%VERSION\%/mg, version);
	    };
	  }])
 }())