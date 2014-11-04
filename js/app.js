/*yadongLookup - App.js - Yadong Zhu 2014*/
(function() {
    'use strict';
    // Declare app level module which depends on filters, and services
    angular.module('yadongLookup', [
        'ngRoute',
        'ngResource',
        'ngAnimate',
        'ngSanitize',
        'yadongLookup.controllers',
        'yadongLookup.services',
        'yadongLookup.filters',
        'yadongLookup.directives',
        'ui.bootstrap'
    ]).
    config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: 'partials/admin.html',
                controller: 'introController'
            });
            
            $routeProvider.otherwise({
                redirectTo: '/'
            });
        }
    ])
 
}());

