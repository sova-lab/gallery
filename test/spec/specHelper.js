beforeEach(function() {
	// 自作のカスタムマッチャー
	this.addMatchers({
		toBeInstanceOf: function(expectedInstance) {
			var actual = this.actual;
			var notText = this.isNot ? " not" : "";
			this.message = function() {
				return "Expected " + actual.constructor.name + notText + " is instance of " + expectedInstance.name;
			};
			return actual instanceof expectedInstance;
		},

		// 以下、jQuery系
		toBeMatchedBy: function(expectedTagName) {
			var tagName = $(this.actual)[0].tagName.toLowerCase();
			this.message = function() {
				return "Expected '" + tagName + "' equals '" + expectedTagName + "'";
			};
			return tagName === expectedTagName;
		},
		toHaveAttr: function(attributeName, expectedAttributeValue) {
			var attrVal = $(this.actual).attr(attributeName);
			this.message = function() {
				return "Expected 'attributeName:" + attrVal + "' equals '" + expectedAttributeValue + "'";
			};
			return attrVal === expectedAttributeValue;
		}
	});
});