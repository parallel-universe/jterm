### Javascript terminal interface

An AMD module which provides an abstraction layer on https://github.com/jcubic/jquery.terminal

Enables the quick creation of custom terminal applications which plugin with no code changes

#### Adding an app

Apps are loaded by using their name, it's name should be whatever you want a user to type in the terminal to run it. The minimum should have:

 - appname
   - appname.js
   - interpreter.js
  
your appname.js file will be the entry point into the application, here you should use the objects passed to your initialize function to assign your own interpreter to the terminal. Any arguments provided will also be passed in here.

######appname.js example
```javascript
app = {
	initialize: function (args, term) {
		interpreter.initialize(terminal);
		terminal.setInterpreter(interpreter.parse);
		hellow.begin();
	},
	begin: function () {
		// Clear the terminal, show some text, whatever...
	}
};

return app;
```

As you can see above, we have specified a method on the interpreter to the terminal, this method name can be anything but one must be provided, as you will see it is from here we begin to work with the commands.

######interpreter.js example
```javascript
var interpreter = {
	parse: function (cmd, term) {
		var command = parseCommand(cmd);
		commander.runCommand(command);
	}
};

return interpreter;
```
