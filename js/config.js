define([], function () {
	var config = {
		jqueryterminal: {
			greetings: 'jQuery terminal x forked from: github.com/jcubic/jquery.terminal\n',
			prompt: 'jTerm> ',
			name: 'jterm',
			history: true,
			processArguments: false,
			outputLimit: -1,
			linksNoReferer: false,
			exit: false,
			clear: true
		},
		jterm: {
			appsPath: 'apps/'
		}
	};

	return config;
});