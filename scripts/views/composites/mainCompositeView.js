(function() {
	'use strict';

	define([
		'marionette',
		'views/items/mainPictureItemView',
		'jquery.flip',
		'pnotify'
	],
	function( Marionette, MainPictureItemView ) {

		return Marionette.CompositeView.extend({
			initialize: function() {
				this.model = new Backbone.Model({
					timer: window.Gallery.slideshow_timer,
					slideshowObj: null,
					isSlideShow: false
				});
				this.listenTo(this, 'gallery:slideshow', this._toggleSlideShow);
			},

			ui: {
				section: 'section'
			},

			attributes: function() {
				return {
					class: 'gallery'
				};
			},
			template: JST['gallery/gallery'],
			itemView: MainPictureItemView,
			itemViewContainer: 'section',

			onRender: function() {
				this.ui.section.flip({
					forwardDir: 'rtol',
					showpager: true,
					loop: true
				});
			},

			_toggleSlideShow: function() {
				this.model.set('isSlideShow', !this.model.get('isSlideShow'));
				if(this.model.get('isSlideShow')) {	// スライドショー開始
					setTimeout(this._slideshow(), this.model.get('timer'));
					this._notify('スライドショーを開始しました', 'success');
				} else {	// スライドショー終了
					this._notify('スライドショーを終了しました', 'warning');
				}
			},

			_slideshow: function() {
				var model = this.model;
				var timer = this.model.get('timer');
				var flipObj = $.data(this.ui.section[0], 'plugin_flip');
				var flip = function() {
					if(!model.get('isSlideShow')) return false;
					flipObj.flipNext();
					setTimeout(flip, timer);
				};
				return flip;
			},

			_notify: function(text, type) {
				new PNotify({
					text: text,
					type: type,
					delay: 1000
				});
			}
		});
	});
})();