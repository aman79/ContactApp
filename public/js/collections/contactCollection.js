/**
 * New node file
 */
define(function(require){
	var Backbone = require('backbone');
	var _ = require('underscore');
	var $ = require('jquery');
	var contactmodel = require('models/contactModel');
	var localstorage = require('localStorage');
	
	var Collection = Backbone.Collection.extend({
		model : contactmodel,
		localStorage : new localstorage('contact-details')
	});
	return new Collection();
});