/*ccp - App.js - Yadong Zhu 2014*/
(function() {
    'use strict';
    // Declare app level module which depends on filters, and services
    angular.module('ccp', [
        'ngRoute',
        'ngResource',
        'ngAnimate',
        'ngSanitize',
        'ccp.controllers',
        'ccp.services',
        'ccp.filters',
        'ccp.directives',
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
                controller: 'jobsCtrl',
                resolve:{
                    jobs:['$q','$http','ccpService',
                            function($q,$http,jhSvc){
                                var deferred = $q.defer();
                                // jhSvc.getJobsList().$promise.then(function(resp){
                                //     deferred.resolve(resp);
                                // },function(err){
                                //     deferred.resolve(err);
                                //     // deferred.reject(err);
                                // })
                                $http.get("json/jobs.json")
                                .success(function(data,status,header,config){
                                    deferred.resolve(data);
                                })
                                .error(function(data, status, headers, config) {
                                    deferred.reject(err);
                                  });
                                return deferred.promise;
                            }]
                }
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

