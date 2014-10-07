(function() {
	'use strict';
	var root = this;

	root.define([
		'backbone',
		'views/item/passwordResetView'
		],
		function( Backbone, PasswordResetView ) {
			describe('Passwordresetview Itemview', function () {
				var passwordResetView;
				var user;
				describe("正常時", function() {
					beforeEach(function() {
						user = new Backbone.Model();
						spyOn(user, 'fetch');
						passwordResetView = new PasswordResetView({
							model: user
						});
						passwordResetView.render();
						$('body').append(passwordResetView.$el.html());
					});

					afterEach(function() {
						$('body').empty();
					});

					it('はJQMのpageを持ったPasswordResetViewのインスタンスである', function () {
						expect(passwordResetView).toBeInstanceOf(PasswordResetView);
						expect(passwordResetView.attributes()['data-role']).toBe('page');
					});

					it("はパスワードリセット用の入力ボックスが存在する", function() {
						expect($('#passwordResetMail')).toBeMatchedBy('input');
						expect($('#passwordResetMail')).toHaveAttr('type', 'email');
						expect($('#passwordResetMail')).toHaveAttr('placeholder', 'メールアドレスを入力');
					});

					it("は入力ボックスの初期値がブランク", function() {
						expect($('#passwordResetMail')).toHaveValue('');
					});

					it("はパスワードリセットボタンが存在する", function() {
						expect($('#doPasswordReset')).toBeMatchedBy('input');
						expect($('#doPasswordReset')).toHaveAttr('type', 'button');
						expect($('#doPasswordReset')).toHaveValue('パスワードをリセットする');
					});

					it("は戻るボタンが存在する", function() {
						expect($('a[href="#"]')).toBeDefined();
						expect($('a[href="#"]').html()).toEqual('戻る');
					});
				});
			});
		});
}).call( this );