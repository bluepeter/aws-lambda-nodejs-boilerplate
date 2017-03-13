var grunt = require('grunt');

require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
  babel: {
    options: {
      stage: 0,
      loose: true,
      ignore: false,
      optional: [
        'spec.undefinedToVoid',
        'es6.spec.templateLiterals',
        'minification.propertyLiterals',
        'utility.inlineEnvironmentVariables',
        'minification.memberExpressionLiterals'
      ],
      blacklist:   [
        'es3.memberExpressionLiterals',
        'es3.propertyLiterals'
      ],
      ast:         true,
      sourceMaps:  false,
      nonStandard: false,
      compact:     "false",
      retainLines: false
    },
    dist: {
      files: {
        'handler.js': 'handler.es6'
      }
    }
  }
});

grunt.registerTask('default', ['babel']);