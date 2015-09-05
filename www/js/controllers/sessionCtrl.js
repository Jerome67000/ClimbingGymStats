app.controller('sessionCtrl', function($scope, $state, $ionicPopup, GradesFactory) {

  $scope.session = {};

  $scope.routes = [
    {
      id : 0,
      route_type : "Verticale",
      climb_style : "Moulinette",
      grade_id : 0,
      grade_title: "5a",
      validate : true,
      flash : true,
      note : "Belle voie en dièdre",
      picture : "http://fefssef.com/pict.png",
    },
    {
      id : 0,
      route_type : "Verticale",
      climb_style : "Moulinette",
      grade: "grad6b",
      grade_title: "5b",
      grade_id : 2,
      validate : true,
      flash : true,
      note : "Belle voie en dièdre",
      picture : "http://fefssef.com/pict.png",
    },
    {
      id : 0,
      route_type : "Verticale",
      climb_style : "Moulinette",
      grade_id : 3,
      grade_title: "5b+",
      validate : true,
      flash : true,
      note : "Belle voie en dièdre",
      picture : "http://fefssef.com/pict.png",
    },
    {
      id : 0,
      route_type : "Verticale",
      climb_style : "Moulinette",
      grade_id : 4,
      grade_title: "5c",
      validate : false,
      flash : true,
      note : "Belle voie en dièdre",
      picture : "http://fefssef.com/pict.png",
    },
    {
      id : 0,
      route_type : "Verticale",
      climb_style : "Moulinette",
      grade_id : 5,
      grade_title: "5c+",
      validate : false,
      flash : true,
      note : "Belle voie en dièdre",
      picture : "http://fefssef.com/pict.png",
    },
  ];

  $scope.session.routes_count = $scope.routes.length;

  $scope.validateCount = function() {
    $scope.session.validate_count = 0;
    $scope.routes.forEach(function(route) {
      if (route.validate) {
        $scope.session.validate_count++;
      }
    });
  }

  $scope.calculScore = function() {
    var best_score = 0;
    $scope.routes.forEach(function(route) {
      route.title = GradesFactory.getGrade(route.grade_id).title;
      if (best_score < route.grade_id) {
        $scope.session.best_route = route;
      }
    });
  }

  $scope.setAverageGrade = function() {
    var totalScore = 0;
    $scope.routes.forEach(function(route) {
      totalScore += route.grade_id;
    });
    var average_grade_id = Math.round(totalScore/$scope.routes.length);
    $scope.session.average_grad = GradesFactory.getGrade(average_grade_id).title
  }

  $scope.validateCount();
  $scope.calculScore();
  $scope.setAverageGrade();
});
