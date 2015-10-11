module.exports = function(grunt) {
	//Auto load grunt-modules using matchdep
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	// Time grunt tasks
    require('time-grunt')(grunt);

    var path = require('path');
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		notify: {
		    task_name: {
		      options: {
		        title: 'Check notifications',  // optional
		        message: 'Growl notification successful', //required
		      }
		    },
		    watch:{
		    	options:{
		    		title: 'Grunt Task',
		    		message: "Express server started. Watching files..."
		    	}
		    }
  		},
  		express: {
  			dev: {
  				options:{
  					bases: [path.resolve(__dirname + "/app/")],
  					files: ["**/*.html","**/*.js","!**/node_modules/**"],
  					livereload: true
  				}
  			}
  		}
	});
	// Default task(s).
	grunt.registerTask('default', ['express']);
};

