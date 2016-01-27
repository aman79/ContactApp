/**
 * New node file
 */
define(function(require) {

	var Backbone = require('backbone');
	var $ = require('jquery');
	var _ = require('underscore');

	var addnew = require('text!templates/addnewTemplate.html');
	var compiledTemp = _.template(addnew);

	return Backbone.View.extend({

		events : {

			'submit #sumbit' : 'onFormSubmit',
			'click #close' : 'onFormClose'
		},

		render : function() {
			this.$el.html(compiledTemp(_.extend(this.model.toJSON(), {
				isNew : this.model.isNew()
			})));
			return this;
		},

		onFormSubmit : function(e) {
			e.preventDefault();
			var attrs = {
				name : this.$('.contact-name-input').val(),
				phone : this.$('.contact-phone-input').val(),
				email : this.$('.contact-email-input').val()
			};

			if (this.model.isNew()) {
				var error = this.model.validate(attrs);
				if (error) {
					this.cleanFormErrors();
					_.each(error, this.showFormErrors, this);
					return;
				}
			}
			this.trigger('form:submitted', attrs);
		},
		howFormErrors : function(error) {
			this.$('.form-group-' + error.name).addClass('has-error').find(
					'.help-block').html(error.message);
		},

		cleanFormErrors : function() {
			this.$('.form-group').removeClass('has-error');
			this.$('.help-block').html('');
		},

		onFormClose : function(e) {
			e.preventDefault();
			this.trigger('form:close');
		}
	});

});