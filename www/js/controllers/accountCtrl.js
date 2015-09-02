app.controller('accountCtrl', function($scope, $state, Auth) {

  var firebase = new Firebase(window.app_url);
  $scope.user = {};

  $scope.login = function() {
    firebase.authWithPassword({
        email    : $scope.user.email,
        password : $scope.user.password
    },
    function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
        console.log("email", $scope.email);
        console.log("password", $scope.password);
      } else {
        console.log("Authenticated successfully with payload:", authData);
      }
    });
  };

  $scope.createAccount = function() {
    firebase.createUser({
      email    : $scope.user.email,
      password : $scope.user.password
    },
    function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
  };
});
