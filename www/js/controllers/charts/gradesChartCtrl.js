app.controller('gradesChartCtrl', function($scope, $timeout, $firebaseArray) {

  $scope.gradesDoughnut = {
    data: [],
    labels: []
  };

  function extractAllRoutes(sessions) {
    var routes = [];
    sessions.forEach(function(session) {
      if (session.val() instanceof Object) {
        session.forEach(function(route) {
          if (route.val() instanceof Object) {
            route.forEach(function(grade) {
              if (grade.val() instanceof Object) {
                routes.push(grade.val());
              }
            });
          }
        });
      }
    });
    return routes;
  }

  function countGrades(routes) {
    var grades = {};
    routes.forEach(function(route) {
      if (route.grade.title in grades) {
        grades[route.grade.title] = grades[route.grade.title] + 1;
      }
      else {
        grades[route.grade.title] = 1;
      }
    });
    return grades;
  }

  function setDataToChart(grades) {
    var data = [];
    var labels = [];
    for(var grade in grades){
      if(grades.hasOwnProperty(grade)){
        labels.push(grade);
        data.push(grades[grade]);
      }
    }
    $timeout(function() {
      $scope.gradesDoughnut.labels = labels;
      $scope.gradesDoughnut.data = data;
    }, 0);
  }

  new Firebase(window.app_url + "sessions/" + window.userUniqueId).on('value', function (sessions) {
    var routes = extractAllRoutes(sessions);
    var counted_grades = countGrades(routes);
    setDataToChart(counted_grades);
  });
});
