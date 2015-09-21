module.exports = function(grunt) {
	//Auto load grunt-modules using matchdep
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
	// Time grunt tasks
    require('time-grunt')(grunt);
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		notify: {
		    task_name: {
		      options: {
		        title: 'Check notifications',  // optional
		        message: 'Growl notification successful', //required
		      }
		    }
  		}
	});
	// Default task(s).
	grunt.registerTask('default', ['notify:task_name']);
};

