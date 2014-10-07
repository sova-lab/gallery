(function() {
	'use strict';

	define([
		'marionette',
		'views/items/thumbnailPictureItemView'
	],
	function( Marionette, ThumbnailPictureItemView ) {

		return Marionette.CompositeView.extend({
			initialize: function() {
				window.location.hash = '#thumbnail';
			},

			ui: {
				section: 'section'
			},

			attributes: function() {
				return {
					class: 'thumbnail'
				};
			},
			template: JST['gallery/thumbnail'],
			itemView: ThumbnailPictureItemView,
			itemViewContainer: 'section',

			onRender: function() {
			},
		});
	});
})();