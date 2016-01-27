/**
 * js/main.js
 */

require.config({
	baseUrl : 'js',
	paths : {
		'jquery' : 'lib/jquery',
		'underscore' :'lib/underscore',
		'text' : 'lib/text',
		'bootstrap' :'lib/bootstrap',
		'backbone' : 'lib/backbone',
		'localStorage' : 'lib/backbone.localStorage'
		},
	shim : {
		'backbone' : {
			deps :['jquery','underscore'],
			exports :'Backbone'
		},
		'underscore' :{
			deps : ['jquery'],
			exports : '_'
		},
		'localStorage' : {
			deps : ['backbone']
		}
	}
});

require(['views/masterView'],function(MasterView){
	
	var masterView = new MasterView();
	masterView.render();
});