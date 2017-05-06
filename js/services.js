/*ccp - services.js - Yadong Zhu 2014*/
(function() {
    'use strict';
    /* Services */
    angular.module('ccp.services', ['ngResource'])
    .factory('ccpService', function($resource) {
    	return $resource(
    		'/ccpweb/:type/:name.json', 
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