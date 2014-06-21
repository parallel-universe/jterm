define(['apploader'],function (appLoader) {
	var terminal = null,
		interpreter = {
			parse: function (command, term) {
				var appName = getappName(command);
				terminal = term;
				term.echo('command name is: ' + appName);
				appLoader.load(appName, runApp, failed);
			}
		};

	function getappName (command) {
		var commandParts = command.split(' ');
		return commandParts.shift();
	}

	function runApp (cliApp) {
		cliApp.initialize([], terminal);
	}

	function failed (error) {
		// todo: fire event to handle this
	}
	
	return interpreter;
});