require.config({
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery',
		'jmousewheel': '../bower_components/jquery.terminal/js/jquery.mousewheel-min',
		'jterminal': '../bower_components/jquery.terminal/js/jquery.terminal-src'
	},
	shim: {
		'jmousewheel': {
			deps: ['jquery'],
			exports: 'jmousewheel'
		},
		'jterminal': {
			deps: ['jquery', 'jmousewheel'],
			exports: 'jterminal'
		}
	}
});

define(['controller'], function (controller) {
	// Entry point
});