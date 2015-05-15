module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify: {
            dev: {
                files: {
                    'bundle.js': 'js/**/*.js*'
                },
                options: {
                    transform: ['babelify', 'reactify'],
                    browserifyOptions: {
                        extensions: ['.jsx'],
                        debug: true
                    },
                    watch: true,
                    keepAlive: true
                }
            },
            prod: {
                files: {
                    'bundle.js': 'js/**/*.js*'
                },
                options: {
                    transform: ['babelify', 'reactify'],
                    browserifyOptions: {
                        extensions: ['.jsx']
                    }
                }
            }
        }
    });

    grunt.registerTask('default', ['browserify:prod']);
    grunt.registerTask('dev', ['browserify:dev']);
    grunt.registerTask('prod', ['browserify:prod']);
};
