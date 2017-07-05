/*ccp - App.js - Yadong Zhu 2014*/
(function() {
    'use strict';
    // Declare app level module which depends on filters, and services
    var transload={en:false,cn:false}
    var loadtransPromise=['$q','$interval',function($q,$interval){
                        var deferred = $q.defer();
                        var stop = $interval(function(){
                            if (transload.en&&transload.cn){
                                $interval.cancel(stop);
                                deferred.resolve("true");
                            }
                        },10)
                        return deferred.promise;
                    }];
    angular.module('ccp', [
        'ngRoute',
        'ngResource',
        'ngAnimate',
        'ngSanitize',
        'ccp.controllers',
        'ccp.services',
        'ccp.filters',
        'ccp.directives',
        'pascalprecht.translate',
        'smart-table',
        'ui.bootstrap'
    ])
    .config(['$translateProvider',function ($translateProvider) {
                //load language json
                  var $http = angular.injector(['ng']).get('$http');
                  $http({method: 'GET', url: 'json/en_US.json'})
                  .success(function(data){
                    $translateProvider.translations('en_US', data); 
                    transload.en=true;      
                  })
                  .error(function(err){
                    console.error("loading en_US fails:"+err)
                  })
                  $http({method: 'GET', url: 'json/zh_CN.json'})
                  .success(function(data){
                    $translateProvider.translations('zh_CN', data);  
                    transload.cn=true;       
                  })
                  .error(function(err){
                    console.error("loading zh_CN fails:"+err)
                  })
                  $translateProvider.preferredLanguage('zh_CN');
            }])
    .config(['$routeProvider',
        function($routeProvider) {
            $routeProvider
            .when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl',
                resolve:{
                    loadtranslation:loadtransPromise
                }
            })
            .when('/ourCompany', {
                templateUrl: 'partials/ourCompany.html',
                controller: 'ourCompanyCtrl',
                resolve:{
                    loadtranslation:loadtransPromise
                }
            })
            .when('/products', {
                templateUrl: 'partials/products.html',
                controller: 'productsCtrl',
                resolve:{
                    loadtranslation:loadtransPromise
                }
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
                            }],
                    loadtranslation:loadtransPromise
                }
            })
            .when('/aboutus', {
                templateUrl: 'partials/aboutus.html',
                controller: 'aboutusCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            })
        }
    ])
    //set global 
    .run(["$rootScope","$translate","$locale","dynamicLocale",
            function($rootScope,$translate,$locale,dynamicLocale) {
        $rootScope.lang=$translate.use();
        // $locale.id="en-us";
        $locale.id="zh-cn";
        dynamicLocale.setLocale($locale);
         $rootScope.sendError = function sendError(err) {
            var cardString = JSON.stringify($rootScope.card);
            window.open('mailto:yadong.zhu@gmail.com?subject=Err&body=Error Report ' + escape("\n\n\n\n\n\n") + '-----Debug info-----' + escape("\n\n") + encodeURIComponent("xxx"));
        };     
        $rootScope.setLang=function(lang){
            $rootScope.lang=lang;
             $translate.use(lang);
             if (lang==='en_US'){
                $locale.id="en-us";
                dynamicLocale.setLocale($locale);
             } else {
              $locale.id="zh-cn";
              dynamicLocale.setLocale($locale);
             }
        }

    }])        
    ;
 
}());

