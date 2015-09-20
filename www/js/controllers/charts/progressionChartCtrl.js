app.controller('progressionChartCtrl', function($scope, $timeout, $firebaseArray,$firebaseObject,  SessionsFactory) {

  var data = [];
  var labels = [];

  var sessionsRef = new Firebase(window.app_url + "sessions/" + window.userUniqueId);
  $scope.sessions = $firebaseArray(sessionsRef);

  $scope.sessions.$loaded().then(
    function() {
      $scope.sessions.forEach(function(session) {
        var routes = $firebaseArray(sessionsRef.child(session.$id).child("routes"));

        routes.$loaded().then(
          function() {
            var sessionScore = 0;
            routes.forEach(function(route) {
              sessionScore += route.score;
            });
            labels.push(session.title);
            data.push(sessionScore);
          }).catch(
            function(err) {
              console.error(err);
          });
      });
      $timeout(function() {
        $scope.progressionLine = {
          labels: labels,
          data: [data]
        };
      }, 2000);
    })
    .catch(function(err) {
      console.error(err);
  });



});
