(function() {
	'use strict';
	var root = this;

	root.define([
		'models/user'
		],
		function( User ) {
			describe('User Model', function () {

				var user;

				beforeEach(function() {
					user = new User({url: '/hoge'});
				});

				afterEach(function() {
					user.destroy();
					user = null;
				});

				describe("オブジェクト生成時", function() {
					it('はデフォルト値が設定されたUser Modelのインスタンスである', function () {
						expect(user).toBeInstanceOf(User);
						expect(user.get('name')).toBe('');
						expect(user.get('email')).toBe('');
						expect(user.get('password')).toBe('');
					});
					it('はurlRootにStecker.BaseUrl + option.urlを持つ', function(){
						expect(user.urlRoot).toEqual(Stecker.baseUrl + '/hoge');
					});

				});

			});
		});
}).call( this );