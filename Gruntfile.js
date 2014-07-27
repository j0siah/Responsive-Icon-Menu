module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		watch: {
			stylus: {
				files: [
				'stylus/*.styl'
				],
				tasks: ['stylus']
			},
			slim: {
				files: [
				'*.slim'
				],
				tasks: ['slim']
			}
		},
	slim: {                              // Task
    	dist: {                            // Target
      	files: {                         // Dictionary of files
        'index.html': 'index.slim',     // 'destination': 'source'
      		}
   		 }
  		},

	stylus: {
  compile: {
    options: {
      paths: ['/stylus',],
      import: [      //  @import 'foo', 'bar/moo', etc. into every .styl file
        'nib/*',       //  that is compiled. These might be findable based on values you gave
            //  to `paths`, or a plugin you added under `use`
      ]
    },
    files: {
      'css/style.css': 'stylus/style.styl' // 1:1 compile
			 // compile and concat into single file
    }
  }
}

	});

	// Load grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-slim');
	grunt.registerTask('default', ['jshint', 'slim']);

};