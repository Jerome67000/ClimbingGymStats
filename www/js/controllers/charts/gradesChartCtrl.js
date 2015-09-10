app.controller('gradesChartCtrl', function($scope, $timeout, $firebaseArray) {

  var routes = [];
  $scope.data = [];
  $scope.labels = [];

  new Firebase(window.app_url + "sessions/" + window.userUniqueId).on('value', function (sessions) {
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
    console.log("all routes", routes);

    var grades = {};

    routes.forEach(function(route) {
      if (route.grade.title in grades) {
        grades[route.grade.title] = grades[route.grade.title] + 1;
      }
      else {
        grades[route.grade.title] = 1;
      }
    });

  var labels = [];
  var data = [];
  for(var i in grades){
    if(grades.hasOwnProperty(i)){
      labels.push(i);
      data.push(grades[i]);
    }
  }

  $timeout(function() {
    $scope.labels = labels;
    $scope.data = data;
  }, 0);

  });
});
