(function() {
	'use strict';

	var root = this;

	root.define([
		'controllers/indexController'
		],
		function( Indexcontroller ) {

			describe('Indexcontroller Controller', function () {

				it('should be an instance of Indexcontroller Controller', function () {
					var indexController = new Indexcontroller();
				});

				it('should have more test written', function(){
				});
			});

		});

}).call( this );