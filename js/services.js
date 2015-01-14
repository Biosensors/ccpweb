/*jiahong - services.js - Yadong Zhu 2014*/
(function() {
    'use strict';
    /* Services */
    angular.module('jiahong.services', ['ngResource'])
    .factory('ydlService', function($resource) {
    	return $resource(
    		'/jiahong/:type/:module/:name.json', 
    		{ 
    			type: '@type',
    			module: '@module',
    			name:'@name'
    		}, 
            {
                getteamList: {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    },
                    params: {
                        type: 'json',
                        module: 'team',
                        name:'list'
                    }
                },
                getteamModule: {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    },
                    params: {
                        type: 'json',
                        module: 'team'
                    }
                }
         	});
    })

    .value('version', '1.0');
 }())