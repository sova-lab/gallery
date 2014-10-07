(function() {
	'use strict';

	define([
		'marionette',
		'views/items/topItemView',
		'views/items/creditItemView',
		'views/layouts/galleryLayout'
	],
	function( Marionette, TopItemView, CreditItemView, GalleryLayout ) {

		return Marionette.Controller.extend({

			initialize: function( options ) {
				this.mainRegion = options.mainRegion;
				this.topItemView = new TopItemView();
				this.creditItemView = new CreditItemView();
			},

			top: function() {
				window.Gallery.startId = 1;
				window.Gallery.isExit = true;
				this.mainRegion.show(this.topItemView);
				this._changePage(this.topItemView.cid);
			},

			main: function() {
				window.Gallery.isExit = false;
				var layout = new GalleryLayout();
				this.mainRegion.show(layout);
				layout.triggerMethod('gallery:show');
				this._changePage(layout.cid);
			},

			credit: function() {
				window.Gallery.isExit = false;
				this.mainRegion.show(this.creditItemView);
				this._changePage(this.creditItemView.cid);
			},

			// JQMのページ描画を行う
			_changePage: function(pageId) {
				$('#' + pageId).page();
				$.mobile.changePage('#' + pageId, {
					reverse: false,
					changeHash: false
				});
			}
		});
	});
})();
