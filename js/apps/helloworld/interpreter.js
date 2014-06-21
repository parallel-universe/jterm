define(['apps/helloworld/commands'],function (commander) {
	var terminal = null,
		interpreter = {
		initialize: function (terminal) {
			terminal = terminal;
			commander.initialize(terminal);
		},
		parse: function (cmd, term) {
			var command = parseCommand(cmd);
			commander.runCommand(command);
		}
	};

	function parseCommand (cmd) {
		var splitInput =  cmd.split(' '),
			command = {};
			
		command.name = splitInput.shift();
		command.args = splitInput.splice(0);
		return command;
	}
	
	return interpreter;
})