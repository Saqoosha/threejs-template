module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      html: {
        files: ['*.html'],
        tasks: 'reload'
      },
      scripts: {
        files: ['*.coffee'],
        tasks: 'coffee reload'
      }
    },
    coffee: {
      dist: {
        files: {
          "*.js": ["*.coffee"]
        }
      }
    },
    server: {
      port: 3457
    },
    reload: {
      port: 3456,
      proxy: {
        host: 'localhost',
        port: 3457
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-reload');

  grunt.registerTask('default', 'coffee server reload watch');
};
