define(['config'], function (config) {
	var appLoader = {
		load: function (name, callback, fail) {
			var requirePath = config.jterm.appsPath + name + '/' + name,
				tool = null,
				that = this;

			require([requirePath], callback, fail);
		}
	};
	
	return appLoader;
});