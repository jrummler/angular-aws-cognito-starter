// scripts/directives.js
angular.module('awsStarterApp')
    .directive('footer', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: "templates/footer.template.html",
            controller: ['$scope', '$filter', function ($scope, $filter) {
                // Your behaviour goes here :)
            }]
        }
    }).directive('header', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: "templates/header.template.html",
            controller: 'LoginController'
        }
    });