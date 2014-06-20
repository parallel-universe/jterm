define([
	'jterminal',
	'interpreter',
	'config'
	], function (terminal, interpreter, config) {
	var terminal = null,
		jterm = {
		initialize: function (selector) {
			terminal = $(selector).terminal(interpreter.parse, config);
		}
	};

	return jterm;
});