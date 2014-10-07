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
					 'data-theme': 'a',
					 'id': this.cid
				};
			},

			template: JST['top/credit']
		});
	});
})();