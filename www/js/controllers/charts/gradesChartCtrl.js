app.controller('gradesChartCtrl', function($scope, $firebaseArray) {

  var routes = [];
  new Firebase(window.app_url + "sessions/" + window.userUniqueId).on('value', function (sessions) {
    sessions.forEach(function(session) {
      if (session.val() instanceof Object) {
        console.log("session : ", session.val());
        session.forEach(function(route) {
          if (route.val() instanceof Object) {
            console.log("route : ", route.val());
            route.forEach(function(grade) {
              if (grade.val() instanceof Object) {
                console.log("grade : ", grade.val());
                routes.push(grade.val());
              }
            });
          }
        });
      }
    });
    console.log("all routes", routes);
  });

  // var sessions_url = new Firebase(window.app_url + "sessions/" + window.userUniqueId);
  // var sessions = $firebaseArray(sessions_url);
  // sessions.$loaded()
  //   .then(function(sessions_array) {
  //   console.log("array", sessions_array);
  //   })
  //   .catch(function(error) {
  //     console.log("Error:", error);
  //   });

  $scope.gradesStats = {
    labels: {},
    data: {}
  };

  $scope.gradesStats.labels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
  $scope.gradesStats.data = [300, 500, 100];
});
