(function() {
	'use strict';

	define([
		'marionette',
		'templates',
		'views/composites/mainCompositeView',
		'views/composites/thumbnailCompositeView'
	],
	function( Marionette, JST, MainCompositeView, ThumbnailCompositeView ) {

		return Marionette.Layout.extend({
			initialize: function() {
				this.pictureCollection = new Backbone.Collection([
					{id:1, imgSrc: 'css/pictures/sample1.jpg', grid: 'a'},
					{id:2, imgSrc: 'css/pictures/sample2.jpg', grid: 'b'},
					{id:3, imgSrc: 'css/pictures/sova.jpg', grid: 'a'},
					{id:4, imgSrc: 'css/pictures/sova.jpg', grid: 'b'},
					{id:5, imgSrc: 'css/pictures/sample1.jpg', grid: 'a'},
					{id:6, imgSrc: 'css/pictures/sample2.jpg', grid: 'b'},
					{id:7, imgSrc: 'css/pictures/sova.jpg', grid: 'a'},
					{id:8, imgSrc: 'css/pictures/sova.jpg', grid: 'b'}
				]);
				this.thumbnailCollection = this.pictureCollection.clone();
				this.model = new Backbone.Model({
					page: 'gallery'
				});

				// listen
				this.listenTo(this, 'gallery:show', this.showGallery);
			},

			ui: {
				home: '#home',
				footer: '#footer',
				thumbnail: '#thumbnail',
				slideshow: '#slideshow'
			},

			events: {
				'click @ui.home': 'showHome',
				'click @ui.thumbnail': 'showThumbnail',
				'click @ui.slideshow': 'toggleShow'
			},

			attributes: function() {
				return {
					 'data-role': 'page',
					 'data-theme': 'b',
					 'id': this.cid
				};
			},

			template: JST['gallery/main'],

			regions: {
				'contents': '#contents'
			},

			showHome: function() {
				document.location.href = '#';
			},

			// ギャラリーを表示する
			showGallery: function() {
				var pictures = this.pictureCollection.clone();
				window.Gallery.startId !== 1 && this.pictureCollection.each(function(model) {
					if(model.id < window.Gallery.startId) {
						pictures.remove(model);
						pictures.push(model);
					}
				});
				var mainCompositeView = new MainCompositeView({
					collection: pictures
				});
				this.model.set('page', 'gallery');
				this.contents.show(mainCompositeView);
			},

			// サムネイルを表示する
			showThumbnail: function() {
				$.mobile.resetActivePageHeight();
				var thumbnailCompositeView = new ThumbnailCompositeView({
					collection: this.thumbnailCollection
				});
				this.model.set('page', 'thumbnail');
				this.contents.show(thumbnailCompositeView);
			},

			// スライドショーをon/offする
			toggleShow: function() {
				if(this.model.get('page') === 'thumbnail') {
					this.showGallery();
				}
				this.contents.currentView.triggerMethod('gallery:slideshow');
			}
		});
	});
})();