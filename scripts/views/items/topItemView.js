(function() {
	'use strict';

	define([
		'marionette',
		'templates'
	],
	function( Marionette, JST ) {

		return Marionette.ItemView.extend({
			tagName: 'section',

			initialize: function() {
			},

			attributes: function() {
				return {
					 'data-role': 'page',
					 'data-theme': 'b',
					 'id': this.cid,
					 'class': 'top-page'
				};
			},

			template: JST['top/main']
		});
	});
})();