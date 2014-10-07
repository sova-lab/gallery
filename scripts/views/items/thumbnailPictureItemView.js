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
				return {
					class: 'ui-block-' + this.model.get('grid')
				};
			},

			ui: {
				picture: '#picture'
			},

			events: {
				'click @ui.picture': 'showGallery'
			},

			template: JST['gallery/thumbnail_picture'],

			onRender: function() {
				var screenWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
				var size = (screenWidth / 2) - (screenWidth * 0.04);
				var margin = (screenWidth * 0.02);
				this.ui.picture.css('width', size);
				this.ui.picture.css('height', size);
				this.ui.picture.css('margin', margin);
			},

			showGallery: function() {
				window.Gallery.startId = this.model.id;
				window.location.hash = '#main';
			}
		});
	});
})();