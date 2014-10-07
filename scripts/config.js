(function() {
	'use strict';

	define(['jquery', 'progressJs'], function ($, progressJs) {
		// グローバルオブジェクトの定義
		window.Gallery = {
			baseUrl: 'http://localhost:3000/v1',
			startId: 1,
			isExit: false
		};

		// スライドショーのページめくり時間(ms)
		window.Gallery.slideshow_timer = 3000;

		// jQueryMobileの初期設定
		$(document).on('mobileinit', function() {
			// ページ表示のアニメーションを無効化
			$.mobile.defaultPageTransition = 'none';
			// アンカーコントロールを無効化
			$.mobile.linkBindingEnabled = false;
			// ハッシュに基づくルーティングを無効化
			$.mobile.hashListeningEnabled = false;
			// JQMのajaxは使わないようにする
			$.mobile.ajaxEnabled = false;
			// JQMのローディング表示は使わない
			$.mobile.loadingMessage = false;
			// mobileinit後に初期ページの読み込みをしない
			$.mobile.autoInitializePage = false;
			// DOMのキャッシュと消去を手動で行う
			$.mobile.page.prototype.options.domCache = false;
			// PhoneGapでも戻るボタンの問題の対応????本に書いてある
			$.mobile.phonegapNavigationEnabled = true;
			// ネイティブの日付ピッカーを使う
			$.mobile.page.prototype.options.degradeInputs.date = true;
		});
	});
})();