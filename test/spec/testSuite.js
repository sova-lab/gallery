define(function() {
	'use strict';

	/* return an array of specs to be run */
	return {
		specs: ['spec/controllers/indexController.js',
		'spec/models/user.js',
		'spec/routers/indexRouter.js',
		'spec/stecker/indexSpec.js',
		'spec/views/item/indexFooterView.js',
		'spec/views/item/indexHeaderView.js',
		'spec/views/item/passwordResetView.js',
		'spec/views/item/signinView.js',
		'spec/views/item/signupView.js',
		'spec/views/layout/indexLayout.js'
		]
	};
});
