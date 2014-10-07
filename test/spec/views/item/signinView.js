(function() {
	'use strict';

	var root = this;

	root.define([
		'backbone',
		'views/item/signinView'
		],
		function( Backbone, SigninView ) {
			describe('SigninView ItemView', function () {
				var signinView;
				var user;
				describe("正常時", function() {
					beforeEach(function() {
						user = new Backbone.Model();
						spyOn(user, 'fetch');
						signinView = new SigninView({
							model: user
						});
						signinView.render();
						$('body').append(signinView.$el.html());
					});

					afterEach(function() {
						$('body').empty();
					});

					it('はJQMのpageを持ったSigninViewのインスタンスである', function () {
						expect(signinView).toBeInstanceOf(SigninView);
						expect(signinView.attributes()['data-role']).toBe('page');
					});

					it('はメールアドレスとパスワードの入力ボックスが存在する', function(){
						expect($('#signinMail')).toBeMatchedBy('input');
						expect($('#signinPassword')).toBeMatchedBy('input');
						expect($('#signinMail')).toHaveAttr('type', 'email');
						expect($('#signinPassword')).toHaveAttr('type', 'password');
						expect($('#signinMail')).toHaveAttr('placeholder', 'メールアドレスを入力');
						expect($('#signinPassword')).toHaveAttr('placeholder', 'パスワードを入力');
					});

					it("は入力ボックスの初期値がブランク", function() {
						expect($('#signinMail')).toHaveValue('');
						expect($('#signinPassword')).toHaveValue('');
					});

					it("はサインインボタンを押したらサーバにリクエストが飛ぶ", function() {
						expect($('#doSingin')).toBeMatchedBy('input');
						expect($('#doSingin')).toHaveAttr('type', 'button');
						expect($('#doSingin')).toHaveValue('サインイン');
						signinView.ui.signinBtn.click();
						expect(user.fetch).toHaveBeenCalled();
					});

					it("はFacebookボタンが存在する", function() {
						expect($('#doFacebook')).toBeMatchedBy('i');
					});

					it("はTwitterボタンが存在する", function() {
						expect($('#doTwitter')).toBeMatchedBy('i');
					});

					it("は新規登録ボタンが存在する", function() {
						expect($('a[href = "#signup"]')).toBeDefined();
						expect($('a[href = "#signup"]').html()).toEqual('新しくsteckerを始めます');
					});

					it("はパスワードリセットボタンが存在する", function() {
						expect($('a[href = "#password_reset"]')).toBeDefined();
						expect($('a[href = "#password_reset"]').html()).toEqual('パスワードを忘れた方はこちら');
					});
				});
			});

		});

}).call( this );