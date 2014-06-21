define([
	'apps/helloworld/interpreter',
	'interpreter',
	'colors'
	],function (interpreter, appInterpreter, termColors) {
	var terminal,
		hellow = {
		initialize: function (args, term) {
			terminal = term;
			interpreter.initialize(terminal);
			terminal.setInterpreter(interpreter.parse);
			hellow.begin();
		},
		begin: function () {
			prepareTerminal();
		}
	};

	function prepareTerminal () {
		terminal.clear();
		terminal.echo(termColors.color('hello world v1.0\n', '#f11'));
		terminal.echo('use the "say" command to say stuff...\n')
		terminal.set_prompt('hellow>');
	}

	return hellow;
});