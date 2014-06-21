define([
	'jterminal',
	'interpreter',
	'config'
	], function (terminal, interpreter, config) {
	var terminal = null,
		jterm = {
			term: null,
			initialize: function (selector) {
				this.term = $(selector).terminal(interpreter.parse, config.jqueryterminal);
			},
			exitCurrentApp: function () {
				this.term.setInterpreter(interpreter);
				this.term.set_prompt(config.jqueryterminal.prompt)
				this.term.clear();
				this.term.greetings();
			}
		};

	return jterm;
});