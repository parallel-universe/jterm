define(function (toolkitLoader) {
	var interpreter = {
		parse: function (command, term) {
			var commandName = getCommandName(command);
			term.echo('command name is: ' + commandName);
		}
	};

	function getCommandName (command) {
		var commandParts = command.split(' ');
		return commandParts.shift();
	}

	function failed (error) {
		// todo: fire event to handle this
	}
	
	return interpreter;
});