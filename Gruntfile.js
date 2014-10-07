(function(){
  'use strict';

  module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev(['grunt-*', '!grunt-template-jasmine-requirejs']).forEach(grunt.loadNpmTasks);
    // show elapsed time at the end
    require('time-grunt')(grunt);

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // Compass
      compass: {
        dist: {
          options: {
            config: 'config.rb'
          }
        }
      },

      // ファイル結合の設定
      concat: {
        dist: {
          src: [ 'hoge.js', 'fuga.js', ],
          dest: 'scripts/dest/<%= pkg.name %>.js'
        }
      },

      // ファイル圧縮の設定
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build_backbone: {
          src: 'bower_components/backbone/backbone.js',
          dest: 'scripts/lib/backbone.min.js'
        },
        build_requirejs: {
          src: 'bower_components/requirejs/require.js',
          dest: 'scripts/lib/require.min.js'
        },
        build_backbone_stickit: {
          src: 'bower_components/backbone.stickit/backbone.stickit.js',
          dest: 'scripts/lib/backbone.stickit.min.js'
        }
      },

      copy: {
        // bowerでインストールしたファイルのコピー
        bower: {
          files: [
            {
              expand: true,
              cwd: 'bower_components/backbone.wreqr/lib/amd/',
              src:[ 'backbone.wreqr.min.js' ],
              dest: 'scripts/lib/'
            },
            {
              expand: true,
              cwd: 'bower_components/backbone.babysitter/lib/amd/',
              src:[ 'backbone.babysitter.min.js' ],
              dest: 'scripts/lib/'
            },
            {
              expand: true,
              cwd: 'bower_components/marionette/lib/core/amd/',
              src:[ 'backbone.marionette.js' ],
              dest: 'scripts/lib/'
            },
            {
              expand: true,
              cwd: 'bower_components/jquery/dist/',
              src:[ 'jquery.min.js', 'jquery.min.map' ],
              dest: 'scripts/lib/'
            },
            {
              expand: true,
              cwd: 'bower_components/lodash/dist/',
              src:[ 'lodash.min.js' ],
              dest: 'scripts/lib/'
            },
            {
              expand: true,
              cwd: 'bower_components/handlebars/',
              src:[ 'handlebars.amd.min.js' ],
              dest: 'scripts/lib/'
            },
            {
              expand: true,
              cwd: 'bower_components/progress.js/minified/',
              src:[ 'progress.min.js' ],
              dest: 'scripts/lib/'
            },
            {
              expand: true,
              cwd: 'bower_components/progress.js/minified/',
              src:[ 'progressjs.min.css' ],
              dest: 'css/lib/'
            }
          ]
        },
        // phonegapのディレクトリにコピー
        phonegap: {
          files: [
            {
              expand: true,
              cwd: 'scripts',
              src:[ '**' ],
              dest: '../gallery1/www/scripts/'
            },
            {
              expand: true,
              cwd: 'css',
              src:[ '**' ],
              dest: '../gallery1/www/css/'
            },
            {
              expand: true,
              cwd: 'html',
              src:[ '**' ],
              dest: '../gallery1/www/html/'
            },
            {
              expand: true,
              cwd: './',
              src:[ 'index.html' ],
              dest: '../gallery1/www/'
            }
          ]
        }
      },

      // handlebars
      handlebars: {
        compile: {
          options: {
            amd: true,
            processName: function(filepath) {
              return filepath.replace('templates/' , '').replace(/_tmpl.hbs$/ , '');
            },
            processPartialName: function(filepath) {
              var pieces = filepath.split('/');
              return pieces[pieces.length - 1].replace(/_tmpl.hbs$/ , '');
            }
          },
          files: {
            'scripts/templates.js': ['templates/**/*.hbs']
          }
        }
      },

      // jsHint
      jshint: {
        all: [
          'Gruntfile.js',
          'scripts/**/*.js',
          'test/spec/**/*.js',
          '!scripts/templates/**',
          '!scripts/lib/**',
          '!test/spec/jasmineJqueryHelper.js'
        ]
      },

      // jasmine
      jasmine: {
        index: {
          src: ['scripts/**/*.js', '!scripts/lib/**/*.js', '!scripts/stecker/**/*.js'],
          options: {
            specs: 'test/spec/**/*.js',
            helpers: 'test/spec/**/*Helper.js',
            template: require('grunt-template-jasmine-requirejs'),
            templateOptions: {
              requireConfigFile: 'scripts/index.js'
            },
            vendor: [
              "node_modules/jasmine-jquery/lib/jasmine-jquery.js"
            ]
          }
        }
      },

      // Watch
      watch: {
        // options
        options: {
          livereload: true,
          nospawn: true
        },
        // html
        html: {
          files: ['html/.*/*.html', 'index.html'],
          tasks: []
        },
        // scss
        sass: {
          files: 'scss/*.scss',
          tasks: ['compass', 'cmq', 'csscomb']
        },
        // JavaScript
        jslib: {
          files: ['scripts/**/*.js', 'test/spec/**/*.js', 'Gruntfile.js'],
          tasks: ['jshint', 'jasmine']
        },
        // Template
        templates: {
          files: ['templates/**/*.hbs'],
          tasks: ['handlebars', 'jasmine']
        }
      },
      // Live Reload
      connect: {
        livereload: {
          options: {
            port: 9001
          }
        }
      },
      // gruntコマンド実行時にページをブラウザで開く
      open: {
        server: {
          path: 'http://localhost:<%= connect.livereload.options.port %>'
        }
      },
      // バラバラに記述されたメディアクエリをまとめることができます。
      cmq:{
        options: {
          log: false
        },
        dev: {
          files: {
            'css/': ['css/*.css']
          }
        }
      },
      // csscombでCSSプロパティを揃えます。
      csscomb:{
        dev:{
          expand: true,
          cwd: 'css/',
          src: ['*.css'],
          dest: 'css/'
        }
      }
    });

    // ベンダーjs用タスク
    grunt.registerTask('build_vendor', [ 'uglify:build_backbone', 'uglify:build_backbone_stickit', 'uglify:build_requirejs' ]);

    // 初期設定タスク
    grunt.registerTask('init', ['build_vendor', 'copy:bower']);

    // phonegap用にファイルをセットする
    grunt.registerTask('phonegap', ['copy:phonegap']);

    // gruntコマンドで実行するタスクの設定
    grunt.registerTask('default', ['connect','open:server','compass','watch']);
  };
})();
