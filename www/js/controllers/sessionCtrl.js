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
  }
});
