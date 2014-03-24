/*
 * fdserver
 * https://github.com/xiaoyue3/gruntplugin
 *
 * Copyright (c) 2014 xiaoyue
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/tmp/*.css']
    },

    // Configuration to be run (and then tested).
    csscombine: {
      default_options: {
        options: {
          // baseUrl : 'test/',
          projectName : 'blog7style',      //工程名
          reset : true,   //是否进行增量打包
          minify: true     //是否压缩文件          
        },
        files: {
          'test/tmp': 'test/'
        }
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  // grunt.registerTask('test', ['clean', 'fdserver', 'nodeunit']);

  grunt.registerTask('test', ['clean','csscombine']);

  // By default, lint and run all tests.
  // grunt.registerTask('default', ['jshint', 'test']);

};