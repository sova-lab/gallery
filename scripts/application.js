(function() {
	'use strict';

	define([
		'marionette',
		'routers/appRouter',
		'controllers/appController'
	],
	function( Marionette, AppRouter, AppController ) {
		var App = new Marionette.Application();

		App.addRegions({
			body: 'body'
		});

		// 初期化
		App.addInitializer(function() {
			// route設定
			var router = new AppRouter({
				controller: new AppController({mainRegion: this.body})
			});
			Backbone.history.start({pushState: false});
			// JQMの初期化
			$.mobile.initializePage();
		});

		return App;
	});
})();