/**
 * New node file
 */
define(function(require){
	
	var Backbone = require('backbone');
	var $ = require('jquery');
	var _ = require('underscore');
	
	return Backbone.Model.extend({
		/*defaults: {
		    name: null,
		    tel: null,
		    email: null,
		    avatar: null
		  },
		  
		  initialize : function(){
			  this.set('avatar', _.random(1, 15) + '.jpg');
		  }*/
	});
});