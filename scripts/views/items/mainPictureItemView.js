(function() {
	'use strict';

	define([
		'marionette',
		'templates'
	],
	function( Marionette, JST ) {

		return Marionette.ItemView.extend({
			tagName: 'div',

			initialize: function() {
			},

			attributes: function() {
			},

			// ui: {
			// 	div: 'div'
			// },

			// events: {
			// 	'click @ui.div': 'hoge'
			// },

			// hoge: function(){console.log(this.model.id);},

			template: JST['gallery/picture']
		});
	});
})();