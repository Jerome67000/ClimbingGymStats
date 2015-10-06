app.controller('sessionDetailCtrl', function($scope, $state, $stateParams, $ionicPopup, $firebaseObject, $firebaseArray, GradesFactory, RouteTypesFactory, ClimbStylesFactory) {

  $scope.stats = {};
  $scope.grade_id = 10;
  var firebase = new Firebase(app_url);

  $scope.routes = $firebaseArray(firebase.child('sessions/').child(                 window.userUniqueId).child($stateParams.session_id).child("routes"));

  $scope.routes.$loaded().then(
    function(routes) {
      $scope.stats.routes_count = $scope.routes.length;
      setStats();
      console.log("routes_count", $scope.stats.routes_count);
    })
    .catch(function(error) {
      console.log("Error:", error);
  });

  $scope.route = {
    grade: GradesFactory.getGradeFromId($scope.grade_id),
    route_type: "dévers",
    finished: true,
    flash: true,
    toprope: false,
    test: "red"
  };

  $scope.nextGrade = function () {
      $scope.grade_id++;
      $scope.route.grade = GradesFactory.getGradeFromId($scope.grade_id);
  };

  $scope.nextGrade = function () {
    var nextGrade = $scope.grade_id;
    nextGrade++;
    if (nextGrade < GradesFactory.all.length) {
      $scope.grade_id++;
      $scope.route.grade = GradesFactory.getGradeFromId($scope.grade_id);
    }
  };

  $scope.previousGrade = function () {
    var previousGrade = $scope.grade_id;
    previousGrade--;
    if (previousGrade > -1) {
      $scope.grade_id--;
      $scope.route.grade = GradesFactory.getGradeFromId($scope.grade_id);
    }
  };

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
      else {
        resetRouteData();
      }
    });
  };

  function setScore() {
    var score = $scope.route.grade.id;
    if ($scope.route.finished) {
      if ($scope.route.flash) {
        score = score * 4;
      }
      else {
        score = score * 2;
      }
    }
    return score;
  }

  function createNewRoute() {
    var newRoute = {
      title : $scope.route.grade.title,
      climb_style : "Verticale",
      // route_type : $scope.route.route_type,
      finished : $scope.route.finished,
      flash : $scope.route.flash,
      grade : $scope.route.grade,
      score: setScore(),
      css_color: "grad" + $scope.route.grade.title,
      note : $scope.route.note === undefined ? "" : $scope.route.note,
      picture : $scope.route.picture === undefined ? "" : $scope.route.picture,
    };
    $scope.routes.$add(newRoute).then(function(ref) {
      setStats();
    });
    setStats();
  }

  function resetRouteData() {
    $scope.route = {
      route_type: "dévers",
      grade: $scope.route.grade,
      finished: true,
      flash: true,
      toprope: false,
      note : ""
    };
  }

  function validateCount() {
    $scope.stats.validate_count = 0;
    $scope.routes.forEach(function(route) {
      if (route.finished) {
        $scope.stats.validate_count++;
      }
    });
  }

  function setBestRoute() {
    var best_score = 0;
    $scope.routes.forEach(function(route) {
      route.title = GradesFactory.getGradeFromId(route.grade_id);
      if (best_score < route.grade.id) {
        console.log("route");
        $scope.stats.best_route = route.grade.title;
      }
    });
  }

  function setAverageGrade() {
    var totalScore = 0;
    $scope.routes.forEach(function(route) {
      totalScore += route.grade.id;
    });
    var average_grade_id = Math.round(totalScore/$scope.routes.length);
    if (!isNaN(average_grade_id)) {
      $scope.stats.average_grad = GradesFactory.getGradeFromId(average_grade_id).title;
    }
  }

  function setStats() {
    validateCount();
    setBestRoute();
    setAverageGrade();
    $scope.stats.routes_count = $scope.routes.length;
  }
});
