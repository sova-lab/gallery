(function() {
	'use strict';

	var root = this;

	root.define([
		'marionette',
		'routers/indexRouter'
		],
		function( Marionette, IndexRouter ) {

			describe('IndexRouter Router', function () {

				it('should be an instance of IndexRouter Router', function () {
					var controller = jasmine.createSpyObj('controller', ['signin', 'passwordReset', 'signup']);
					var indexRouter = new IndexRouter({controller: controller});
				});
			});

		});

}).call( this );