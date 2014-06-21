define(['jterm'], function (jterm) {
	var terminal = null,
		appCommands = {
			initialize: function (term) {
				terminal = term;
			},
			runCommand: function (command) {
				matchCommand(command);
			}
		};

	function matchCommand (command) {
		if (!command) {
			return false;
		}
		switch (command.name) {
			case 'exit':
				exitTerminalApp();
				break;
			case 'say':
				say(command.args);
				break;
			default:
				console.log('not a command');
				break;
		}
	}

	function exitTerminalApp () {
		jterm.exitCurrentApp();
	}

	function say (words) {
		if (words) {
			words = words.join(' ');
			terminal.echo(words);
		}
	}

	return appCommands;
});