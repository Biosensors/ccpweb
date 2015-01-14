/*jiahong - App.js - Yadong Zhu 2014*/
(function() {
    'use strict';
    // Declare app level module which depends on filters, and services
    angular.module('jiahong', [
        'ngRoute',
        'ngResource',
        'ngAnimate',
        'ngSanitize',
        'jiahong.controllers',
        'jiahong.services',
        'jiahong.filters',
        'jiahong.directives',
        'smart-table',
        'ui.bootstrap'
    ]).
    config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl'
            })
            .when('/team', {
                templateUrl: 'partials/team.html',
                controller: 'teamCtrl'
            })
            .when('/products', {
                templateUrl: 'partials/products.html',
                controller: 'productsCtrl'
            })
            .when('/jobs', {
                templateUrl: 'partials/jobs.html',
                controller: 'jobsCtrl'
            })
            .when('/aboutus', {
                templateUrl: 'partials/aboutus.html',
                controller: 'aboutusCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
        }
    ])
 
}());

