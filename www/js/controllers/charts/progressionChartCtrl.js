app.controller('progressionChartCtrl', function($scope, $timeout, $firebaseArray,$firebaseObject,  SessionsFactory) {

  var data = [];
  var labels = [];

  // $scope.progressionLine = {
  //   labels : ["January", "February", "March", "April", "May", "June", "July"],
  //   series : ['Series A', 'Series B'],
  //   data : [
  //     [65, 59, 80, 81, 56, 55, 40],
  //     [28, 48, 40, 19, 86, 27, 90]
  // ]
  // };
  // $scope.progressionLine = {
  //   data: [[100, 200, 300]],
  //   labels: ["test", "eee", "fefeef"],
  //   series: ['Progression']
  // };


  var sessionsRef = new Firebase(window.app_url + "sessions/" + window.userUniqueId);
  $scope.sessions = $firebaseArray(sessionsRef);

  $scope.sessions.$loaded().then(
    function() {
      $scope.sessions.forEach(function(session) {
        console.log("session", session);
        labels.push(session.title);
        data.push(session.created_at);
        $scope.routes = $firebaseArray(sessionsRef.child(session.$id).child("routes"));
      });
      $timeout(function() {
        console.log("labels", labels);
        console.log("data", data);
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
