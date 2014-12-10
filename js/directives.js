/*yadongLookup - directives.js - Yadong Zhu 2014*/
(function() {
    'use strict';
    /* Directives */
    angular.module('yadongLookup.directives', [])
    .directive('appVersion', ['version', function(version) {
	    return function(scope, elm, attrs) {
	      elm.text(version);
	    };
	 }])
    .directive('activeLink', ['$location', function(location) {
        return {
          restrict: 'A',
          link: function(scope, element, attrs, controller) {
            var clazz = attrs.activeLink;
            var path = attrs.href;
            path = path.substring(1); //hack because path does not return including hashbang
            // console.log("path="+path);
            scope.location = location;
            scope.$watch('location.path()', function(newPath) {
              if (newPath.indexOf(path)===0) {//newPath starts with path
                element.addClass(clazz);
              } else {
                element.removeClass(clazz);
              }
            });
          }
        };
    }])
    .directive('selectOnClick', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.bind('click', function () {
                    element[0].select();
                });
            }
        };
    });

 }())