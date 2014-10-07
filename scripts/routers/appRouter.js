(function() {
	'use strict';

	define([
		'marionette'
	],
	function(Marionette){

		return Marionette.AppRouter.extend({
			appRoutes: {
				'': 'top',
				'main': 'main',
				'credit': 'credit'
			},

			onRoute: function() {
			}
		});
	});
})();