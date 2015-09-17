module.exports = (grunt) ->

  grunt.initConfig

    browserify:
      'dist/bundle.js': ['src/main.coffee']
      options:
        watch: true
        browserifyOptions:
          debug: true

    # watch:
    #   html:
    #     files: ['dist/*']
    #   scripts:
    #     files: 'dist/bundle.js'

    browserSync:
      dev:
        bsFiles:
          src: ['dist/**/*']
        options:
          # watchTask: true
          server: 'dist'
          open: false

  grunt.loadNpmTasks('grunt-browserify')
  # grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-browser-sync')
  grunt.registerTask('default', ['browserify', 'browserSync'])
