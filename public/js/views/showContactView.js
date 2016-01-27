/**
 * New node file
 */
define(function(require) {

	var $ = require('jquery');
	var _ = require('underscore');
	var Backbone = require('backbone');

	var contactmodel = require('models/contactModel');
	var contactcoll = require('collections/contactCollection');

	var contactJson = require('json/contacts');
	var contact = contactJson.contact;

	var contactview = require('text!templates/showContactTemplate.html');
	var compileTemp = _.template(contactview);

	return Backbone.View.extend({

		// tagName : 'li',

		className : 'media col-md-3 col-md-4',

		events : {
			'click .deleteContact' : 'onClickcontactDelete'
		},
		
		
		
		
		render : function() {
			this.$el.html(compileTemp({
				contact : this.model.toJSON()
			}));
			return this;
		},
		onClickcontactDelete : function(e) {
			alert('delete');
				this.model.destroy();
				this.remove();
			}
		

	});
});