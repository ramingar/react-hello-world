module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['web/assets/src/js/*.js'],
                tasks: ['copy', 'shell:rollup']
            }
        },
        shell: {
            rollup: {
                command: 'node rollup.js'
            },
            removeBuild: {
                command: 'rm -rf web/assets/build'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: 'node_modules/material-design-icons/iconfont/',
                        src: ['**'],
                        dest: 'web/assets/build/fonts/material-design-icons/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'node_modules/materialize-css/dist/css/materialize.min.css',
                            'web/assets/src/css/site.css'
                        ],
                        dest: 'web/assets/build/css/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'node_modules/jquery/dist/jquery.min.js',
                            'node_modules/materialize-css/dist/js/materialize.min.js'
                        ],
                        dest: 'web/assets/build/js/',
                        filter: 'isFile'
                    }
                ]
            },
            prod: {
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'node_modules/react/dist/react.min.js',
                            'node_modules/react-dom/dist/react-dom.min.js'
                        ],
                        dest: 'web/assets/build/js/',
                        filter: 'isFile'
                    }
                ]
            },
            dev: {
                files: [
                    {
                        expand: false,
                        flatten: true,
                        src: [
                            'node_modules/react/dist/react.js'
                        ],
                        dest: 'web/assets/build/js/react.min.js',
                        filter: 'isFile'
                    },
                    {
                        expand: false,
                        flatten: true,
                        src: [
                            'node_modules/react-dom/dist/react-dom.js'
                        ],
                        dest: 'web/assets/build/js/react-dom.min.js',
                        filter: 'isFile'
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['shell:removeBuild', 'copy:main', 'copy:prod', 'shell:rollup']);
    grunt.registerTask('dev', ['shell:removeBuild', 'copy:main', 'copy:dev', 'shell:rollup', 'watch']);
};