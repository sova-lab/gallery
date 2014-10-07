(function() {
  "use strict";

  require.config({
    // 読み込みのベースUrlを設定する。
    baseUrl: "scripts",

    // JavaScriptライブラリーのパス設定
    paths: {
      "cordova": "../cordova",
      "cordova_plugins": "../cordova_plugins",
      "jquery": "lib/jquery.min",
      "jquery.mobile": "lib/jquery.mobile-1.4.2.min",
      "underscore": "lib/lodash.min",
      "handlebars": "lib/handlebars.min",
      "backbone": "lib/backbone.min",
      "backbone.stickit": "lib/backbone.stickit.min",
      "backbone.wreqr" : "lib/backbone.wreqr.min",
      "backbone.babysitter" : "lib/backbone.babysitter.min",
      "marionette": "lib/backbone.marionette",
      "progressJs": "lib/progress.min",
      "jquery.easing": "lib/jquery.easing.1.3",
      "jquery.flip": "lib/jquery.mobile.flip",
      "config": "config",
      "pnotify": "lib/pnotify.custom.min"
    },

    // shimオプションの設定。モジュール間の依存関係を定義。
    shim: {
      "cordova": ["cordova_plugins"],
      "underscore": {
        exports: "_"
      },
      "handlebars": {
        exports: 'Handlebars'
      },
      "backbone": {
        deps: ["jquery", "underscore"],
        exports: 'Backbone'
      },
      "marionette": ['backbone.stickit'],
      "config": ["jquery"],
      "jquery.mobile": ["jquery", "config"],
      "jquery.flip": ["jquery.mobile"],
      "pnotify": {
        deps: ["jquery"],
        exports: "PNotify"
      }
    }
  });

  require(['application', 'config', 'jquery.mobile', 'cordova'], function(App) {

    // androidのバックボタンを押した場合の挙動
    document.addEventListener('backbutton', function() {
      if(window.Gallery.isExit) {
        navigator.app.exitApp();
      } else {
        history.back();
      }
    }, false);

    App.start();
  });

})();