app.controller('sessionCtrl', function($scope, $state, $stateParams, $ionicPopup, $firebaseArray, GradesFactory) {

  console.log("session_id", $stateParams.session_id);

  var firebase = new Firebase(app_url);
  $scope.routes = $firebaseArray(firebase.child('sessions/').child( window.userUniqueId).child($stateParams.session_id).child("routes"));
  $scope.route = {};

  console.log($scope.routes);

  // $scope.session.routes_count = $scope.routes.length;

  $scope.showNewRoutePopup = function() {
    $ionicPopup.show({
      templateUrl: 'html/popups/new-route.html',
      title: 'Nouvelle voie',
      scope: $scope,
      buttons: [
        { text: 'Annuler' },
        {
          text: '<b>Créer</b>',
          type: 'button-positive',
          onTap: function() {
              return true;
          }
        }
      ]
    }).then(function(newRoute) {
      if (newRoute) {
        createNewRoute();
      }
    });
  };

  function createNewRoute() {
    var route = {
      title : $scope.route.grade.title + " " + $scope.route.route_type,
      created_at: Firebase.ServerValue.TIMESTAMP,
      climb_style : $scope.route.climb_style,
      route_type : $scope.route.route_type,
      finished : $scope.route.finished,
      flash : $scope.route.flash,
      grade : GradesFactory.get(5),
      note : $scope.route.note === undefined ? "" : $scope.route.note,
      picture : $scope.route.picture === undefined ? "" : $scope.route.picture,
    };
    $scope.routes.$add(route);
    // resetRouteData();
  }

  // function resetRouteData() {
  //   var gym = new Firebase(window.app_url + "gyms/" + window.gymUniqueId);
  //   gym.on("value", function(snapshot) {
  //     $scope.session.gym = snapshot.val().title;
  //   });
  //   $scope.session.note = "";
  // }

  // $scope.validateCount = function() {
  //   $scope.session.validate_count = 0;
  //   $scope.routes.forEach(function(route) {
  //     if (route.validate) {
  //       $scope.session.validate_count++;
  //     }
  //   });
  // };
  //
  // $scope.calculScore = function() {
  //   var best_score = 0;
  //   $scope.routes.forEach(function(route) {
  //     route.title = GradesFactory.getGrade(route.grade_id).title;
  //     if (best_score < route.grade_id) {
  //       $scope.session.best_route = route;
  //     }
  //   });
  // };
  //
  // $scope.setAverageGrade = function() {
  //   var totalScore = 0;
  //   $scope.routes.forEach(function(route) {
  //     totalScore += route.grade_id;
  //   });
  //   var average_grade_id = Math.round(totalScore/$scope.routes.length);
  //   $scope.session.average_grad = GradesFactory.getGrade(average_grade_id).title;
  // };
  //
  // $scope.validateCount();
  // $scope.calculScore();
  // $scope.setAverageGrade();


});
