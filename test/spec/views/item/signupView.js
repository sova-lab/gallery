(function() {
	'use strict';

	var root = this;

	root.define([
		'backbone',
		'views/item/signupView'
		],
		function( Backbone, SignupView ) {

			describe('SignupView Itemview', function () {
				var signupView;
				var user;
				describe("正常時", function() {
					beforeEach(function() {
						user = new Backbone.Model();
						spyOn(user, 'fetch');
						signupView = new SignupView({
							model: user
						});
						signupView.render();
						$('body').append(signupView.$el.html());
					});

					afterEach(function() {
						$('body').empty();
					});

					it('はJQMのpageを持ったSignupViewのインスタンスである', function () {
						expect(signupView).toBeInstanceOf(SignupView);
						expect(signupView.attributes()['data-role']).toBe('page');
					});

					it("は名前とメールアドレスとパスワードの入力ボックスが存在する", function() {
						expect($('#signupName')).toBeMatchedBy('input');
						expect($('#signupMail')).toBeMatchedBy('input');
						expect($('#signupPassword')).toBeMatchedBy('input');
						expect($('#signupName')).toHaveAttr('type', 'text');
						expect($('#signupMail')).toHaveAttr('type', 'email');
						expect($('#signupPassword')).toHaveAttr('type', 'password');
						expect($('#signupName')).toHaveAttr('placeholder', 'あなたの名前を入力');
						expect($('#signupMail')).toHaveAttr('placeholder', 'メールアドレスを入力');
						expect($('#signupPassword')).toHaveAttr('placeholder', 'パスワードを入力');
					});

					it("は入力ボックスの初期値がブランク", function() {
						expect($('#signupName')).toHaveValue('');
						expect($('#signupMail')).toHaveValue('');
						expect($('#signupPassword')).toHaveValue('');
					});

					it("はサインアップボタンが存在する", function() {
						expect($('#doSignup')).toBeMatchedBy('input');
						expect($('#doSignup')).toHaveAttr('type', 'button');
						expect($('#doSignup')).toHaveValue('サインアップ');
					});

					it("は戻るボタンが存在する", function() {
						expect($('a[href="#"]')).toBeDefined();
						expect($('a[href="#"]').html()).toEqual('戻る');
					});
				});
			});
		});
}).call( this );