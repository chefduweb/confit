define([
	'text!../../templates/views/home.handlebars',

	'base-classes/ConfitView',
	'elements/DateView'

], function( TemplateFile, BaseView, DateView ){


	var HomeView = BaseView.extend({

		template: TemplateFile,

		initialize: function(){

			var self = this;
			var _date = new DateView().make();

			self.data = {
				title: "Hartelijk welkom!",
				date: _date
			}

		}


	});

	return HomeView

});