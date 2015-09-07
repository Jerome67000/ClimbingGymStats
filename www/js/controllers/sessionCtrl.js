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
      title : $scope.route.title,
      location: $scope.route.gym,
      note : $scope.route.note === undefined ? "" : $scope.route.note,
    };
    $scope.routes.$add(route);
    // resetRouteData();
  }

  function resetRouteData() {
    var gym = new Firebase(window.app_url + "gyms/" + window.gymUniqueId);
    gym.on("value", function(snapshot) {
      $scope.session.gym = snapshot.val().title;
    });
    $scope.session.note = "";
  }
  //
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



    // $scope.sessions = [
    // {
    //   "created_at" : "2015-08-28",
    //   "id" : 0,
    //   "note" : "Très bonne séance",
    //   "routes" : [ {
    //     "climb_style" : "Moulinette",
    //     "finished" : true,
    //     "flash" : true,
    //     "grade" : {
    //       "is_plus" : true,
    //       "letter" : "b",
    //       "num" : 6
    //     },
    //     "id" : 0,
    //     "note" : "Belle voie en dièdre",
    //     "picture" : "http://fefssef.com/pict.png",
    //     "route_type" : "Verticale",
    //     "title" : "6b+ verticale"
    //   } ],
    // }];
});
