angular.module('awsStarterApp')
    .controller('MainController', ['$scope', function($scope) {

    }])
    .controller('LoginController', ['$scope','$facebook', '$log', 'AuthService', 'ConfigFileLoaderService', function($scope, $facebook, $log, AuthService, ConfigFileLoaderService) {
        $scope.isLoggedIn = false;
        $scope.loginWithFacebook = function() {
            $facebook.login().then(function() {
                refreshFacebookLogin();
            });
        };
        function refreshFacebookLogin() {
            $facebook.api("/me").then(
                function(response) {
                    $scope.isLoggedIn = true;
                    $scope.userName = response.name;
                    AuthService.loginWithFacebook($facebook.getAuthResponse()).then(function(success) {
                        $scope.awsIdentity = success;
                    }, function(error) {
                        $scope.isLoggedIn = false;
                        $log.error('Failed to login to facebook with error: ' + error);
                    });
                },
                function(err) {
                   $log.error('Failed to login to facebook with error: ' + err);
                });
        };
    }]);