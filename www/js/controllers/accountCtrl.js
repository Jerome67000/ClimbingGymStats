app.controller('accountCtrl', function($scope, $state, $firebaseArray, UsersFactory) {

  var firebase = new Firebase(window.app_url);
  $scope.user = {};
  $scope.users = $firebaseArray(firebase.child("users/"));

  $scope.user.email = null;
  $scope.user.password = null;
  $scope.user.climb_id = null;

  $scope.login = function() {
    firebase.authWithPassword({
        email    : $scope.user.email,
        password : $scope.user.password
    },
    function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        UsersFactory.currentUser = UsersFactory.search(authData.uid);
        $state.go("tab.sessions");
      }
    });
  };

  $scope.createAccount = function() {
    $scope.err = null;
    if (assertValidAccountProps()) {
      firebase.createUser({
        email    : $scope.user.email,
        password : $scope.user.password
      },
      function(error, authData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", authData.uid);
          createUserInData(authData.uid);
          $state.go("tab.sessions");
        }
      });
    }
  };

  function createUserInData(uid) {
    var user = {
      nickname: $scope.user.nickname,
      email: $scope.user.email,
      climb_num: $scope.user.climb_num,
      uid: uid,
      gym_id: 0,
    };
    UsersFactory.create(user);
    UsersFactory.currentUser = user;
  }

  function assertValidAccountProps() {
    if( !$scope.user.nickname ) {
      $scope.err = 'Please enter a pseudo';
    }
    else if( !$scope.user.email ) {
      $scope.err = 'Please enter an email address';
    }
    else if( !$scope.user.climb_num ) {
      $scope.err = 'Please enter an valid climb_id';
    }
    else if( !$scope.user.password ) {
      $scope.err = 'Please enter a password';
    }
    else if(  $scope.user.password !== $scope.user.password_conf ) {
      $scope.err = 'Passwords do not match';
    }
    return !$scope.err;
  }
});
