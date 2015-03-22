
module.exports = function(config){
    config.set({

        basePath : '../app',

        files : [
            'bower_components/angular/angular.js',
            'bower_components/angular-route/angular-route.js',
            'bower_components/angular-resource/angular-resource.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-mocks/angular-mocks.js',
            'bower_components/ng-facebook/ngFacebook.js',
            'bower_components/aws-sdk/dist/aws-sdk.js',
            'js/**/*.js',
            'templates/*.html',
            '../test/unit/**/*.js'
        ],
        preprocessors: {
            'templates/*.html': ['ng-html2js']
        },

        autoWatch : true,

        frameworks: ['jasmine'],

        browsers : ['PhantomJS'],

        plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ],

        junitReporter : {
            outputFile: '../test_out/unit.xml',
            suite: 'unit'
        }

    });
};