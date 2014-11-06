/*yadongLookup - services.js - Yadong Zhu 2014*/
(function() {
    'use strict';
    /* Services */
    angular.module('yadongLookup.services', ['ngResource'])
    .factory('ydlService', function($resource) {
    	return $resource(
    		'/yadong-lookup/:type/:module/:name.json', 
    		{ 
    			type: '@type',
    			module: '@module',
    			name:'@name'
    		}, 
            {
                getShortcutsList: {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    },
                    params: {
                        type: 'json',
                        module: 'shortcuts',
                        name:'list'
                    }
                },
                getShortcutsModule: {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json'
                    },
                    params: {
                        type: 'json',
                        module: 'shortcuts'
                    }
                }
         	});
    })
    .value('symbols', {
    	CMD:"&#8984;",
    	OPT:"&#8997;",
    	CTRL:'&#8963;',
    	CAPS:'&#8682;',
    	SHIFT:"&#8679;",
    	ESC:"&#9099;",
    	RETURN:"&#9166;",
    	DEL:"&#9003;",
    	RARROW:"&rarr;",
    	LARROW:"&larr;",
    	UARROW:"&uarr;",
    	DARROW:"&darr;",
    	APPLE:"&#63743;"
    })
    .value('version', '0.1');
 }())