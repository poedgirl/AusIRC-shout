module.exports = function(grunt) {
	var libs = "client/js/libs/**/*.js";
	grunt.initConfig({
		watch: {
			files: libs,
			tasks: ["uglify"]
		},
		uglify: {
			options: {
				compress: false,
			},
			js: {
				files: {
					"client/js/libs.min.js": libs
				}
			}
		},
		'build-atom-shell': {
			tag: 'v0.21.2',
			buildDir: './build',
			projectName: 'shout',
			productName: 'Shout'
		}
	});
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks('grunt-build-atom-shell');
	grunt.registerTask(
		"build",
		function() {
			grunt.util.spawn({
				cmd: "node",
				args: [
					"node_modules/handlebars/bin/handlebars",
					"client/views/",
					"-e", "tpl",
					"-f", "client/js/shout.templates.js"
				]
			}, function(err) {
				if (err) console.log(err);
			});
		}
	);
	grunt.registerTask(
		"default",
		["uglify", "build"]
	);
	grunt.registerTask(
		"buildexe", 
		[
			"build-atom-shell",
			"setexeicon",
			"deletedebug"
		]
	);
	grunt.registerTask("setexeicon", function() { //set EXE icon
		done = this.async();
		
		shellAppDir = "./atom-shell";
		executableName = grunt.config.get("build-atom-shell.projectName") + ".exe";
		shellExePath = path.join(shellAppDir, executableName);
		iconPath = path.resolve('resources', 'win', 'app.ico');
		
		rcedit = require('rcedit');
		rcedit(shellExePath, {'icon': iconPath}, done);
	});
	grunt.registerTask("deletedebug", function() { //delete debugging files for Atom
				
	});
	
};
