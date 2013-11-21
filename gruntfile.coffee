fs = require 'fs'
path = require 'path'

module.exports = (grunt) ->
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks)

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    clean: [
      'public/js/'
    ]

    transpile:
      main:
        type: 'amd'
        files: [
          expand: true
          cwd: 'app/'
          src: ['**/*.js']
          dest: 'public/js'
        ]
          
    watch:
      default:
        files: [
          'app/**/*'
        ]
        tasks: ['concurrent:target1']

    concurrent:
      target1: [
        'transpile'
        'emberTemplates:compile'
      ]

    emberTemplates:
      compile:
        options:
          precompile: true
          templateBasePath: 'app/templates/'
        files: 
          'public/js/templates.js': [
            'app/templates/*.hbs',
            'app/templates/{,*/}*.hbs'
          ]

  # grunt.event.on 'watch', (action,filepath) ->
  #   grunt.config ['coffee','all','src'], filepath

  grunt.registerTask 'default', [
    # 'clean'
    'concurrent:target1'
    'watch'
  ]
