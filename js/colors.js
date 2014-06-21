define([], function () {
	var colors = {
		color: function (text, colorHex) {
			var enhancedText = '[[;' + colorHex + ';;]' + text + ']';
			return enhancedText;
		},
		setGlobalFontColor: function () {
			//TODO: set font
		},
		setGlobalBackgroundColor: function () {
			//TODO: set background
		}
	};

	return colors;
});