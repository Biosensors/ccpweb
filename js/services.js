/*jiahong - services.js - Yadong Zhu 2014*/
(function() {
    'use strict';
    /* Services */
    angular.module('jiahong.services', ['ngResource'])
    .factory('jiahongService', function($resource) {
    	return $resource(
    		'/jiahongweb/:type/:name.json', 
    		{}, 
            {
                getJobsList: {
                    method: 'GET',
                    params: {
                        type: 'json',
                        name:'jobs'
                    }
                },
                cache:true
         	});
    })

    .value('version', '1.0');
 }())