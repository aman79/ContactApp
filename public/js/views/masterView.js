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

	var showcontact = require('views/showContactView');


	return Backbone.View.extend({
		
		

		el : '.container',
		
		events : {
			'keyup input#searchtext': 'searchContacts',
			'click #addEmp' : 'addEmp'
		},
		
		searchContacts : function(){
			var value = $('#searchtext').val();
			console.log(value);
			$('.main').html('');

			var result = contactcoll.filter(function(contact) {
				if (contact.get('name').toString().toUpperCase().indexOf(
						value.toUpperCase()) >= 0) {
					return true;
				}

			});
			console.log(result);

			result.forEach(function(m) {

				var searchwineView = new showcontact({
					model : m
				});
				$('.main').append(searchwineView.render().el);
			});
			console.log(result);

		},
		
		addEmp : function(){
			
		},

		render : function() {
			this.addColl();

			contactcoll.forEach(function(contact) {

				var contactview = new showcontact({
					model : contact
				});
				$('.main').append(contactview.render().el);
			});

		},

		addColl : function() {
			contactcoll.fetch({
				reset : true
			});

			if (contactcoll.length === 0) {
				_.each(contact, function(e) {
					var w = new contactmodel(e);
					contactcoll.create(w);
				});
			}

		}

	});

});