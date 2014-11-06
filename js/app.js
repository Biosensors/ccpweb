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
            .when('/shortcuts', {
                templateUrl: 'partials/shortcuts.html',
                controller: 'shortcutsCtrl',
                resolve:{
                    list:['$q','ydlService',
                            function($q,ydlSvc){
                                var deferred = $q.defer();
                                ydlSvc.getShortcutsList().$promise.then(function(resp){
                                    deferred.resolve(resp);
                                },function(err){
                                    deferred.reject(err);
                                })
                                return deferred.promise;
                            }]
                }
            })
            .when('/shortcuts/:name', {
                templateUrl: 'partials/shortcut-module.html',
                controller: 'shortcutModuleCtrl',
                resolve:{
                    module:['$q','$route','ydlService',
                            function($q,$route,ydlSvc){
                                var deferred = $q.defer();
                                ydlSvc.getShortcutsModule({name:$route.current.params.name}).$promise.then(function(resp){
                                    deferred.resolve(resp);
                                },function(err){
                                    deferred.reject(err);
                                })
                                return deferred.promise;
                            }]
                }
            })
            .otherwise({
                redirectTo: '/home'
            });
        }
    ])
 
}());

