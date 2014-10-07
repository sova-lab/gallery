define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["gallery/gallery"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"picture-area\"></section>";
  });

this["JST"]["gallery/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section id=\"contents\" class=\"contents\"></section>\n<section id=\"footer\" class=\"footer\" data-role=\"footer\" data-fullscreen=\"true\" data-tap-toggle=\"false\" data-position=\"fixed\">\n	<nav data-role=\"navbar\" data-iconpos=\"top\">\n		<ul>\n			<li><button data-icon=\"home\" data-iconpos=\"top\" id=\"home\"></button></li>\n			<li><button data-icon=\"picture-o\" data-iconpos=\"top\" id=\"thumbnail\"></button></li>\n			<li>\n				<button data-icon=\"list\" data-iconpos=\"top\" id=\"slideshow\"></button>\n			</li>\n		</ul>\n	</nav>\n</section>";
  });

this["JST"]["gallery/picture"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"picture\" style=\"background-image: url("
    + escapeExpression(((stack1 = (depth0 && depth0.imgSrc)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\"></div>";
  return buffer;
  });

this["JST"]["gallery/thumbnail_picture"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"picture\" class=\"picture\" style=\"background-image: url("
    + escapeExpression(((stack1 = (depth0 && depth0.imgSrc)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\"></div>";
  return buffer;
  });

this["JST"]["gallery/thumbnail"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section class=\"ui-grid-a\"></section>";
  });

this["JST"]["top/credit"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section data-role=\"content\" data-theme=\"b\" class=\"credit\">\n	<h1>フォトグラファー</h1>\n	<h3>長谷川 圭祐</h3>\n	<h1>アプリ制作</h1>\n	<h3>Sova Lab</h3>\n	<h1>連絡先</h1>\n	<h3>写真について：</h3><h4>(写真家さんの連絡先) (@hasegawa_keisxx)</h4>\n	<h3>アプリについて：</h3><h4>support@sova-lab.com (@sovaLab)</h4>\n	<h1>著作権</h1>\n	<h3>このアプリの写真は全て(写真家さんの名前)に著作権があります。ここで掲載している写真はアプリのみでご参照下さい。いかなる場合でも無断での転載は禁止します。もし別の用途でお使いになりたい場合は(写真家さんの連絡先)までご連絡下さい。</h3>\n	<a href=\"#\" data-role=\"button\" data-icon=\"home\">トップへ戻る</a>\n</section>";
  });

this["JST"]["top/main"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<section data-role=\"content\" data-theme=\"b\">\n	<h1 class=\"center\">写真集（タイトル）</h1>\n	<form class=\"form-inline\" id=\"signinForm\">\n	  <a href=\"#main\" type=\"button\" data-role=\"button\" data-icon=\"camera-retro\" data-theme=\"b\">写真を見る</a>\n	  <a href=\"#credit\" data-role=\"button\" data-icon=\"video-camera\" data-theme=\"a\">クレジット</a>\n	</form>\n</section>";
  });

return this["JST"];

});