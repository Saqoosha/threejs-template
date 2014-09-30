module.exports = (grunt) ->

  grunt.initConfig

    browserify:
      'dist/bundle.js': ['src/main.coffee']
      options:
        debug: true

    watch:
      html:
        files: ['dist/*']
        options:
          livereload: true
      scripts:
        files: ['src/*.coffee']
        tasks: ['browserify']

    connect:
      server:
        options:
          base: 'dist'

  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.registerTask('default', ['connect', 'browserify', 'watch'])
