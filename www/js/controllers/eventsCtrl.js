app.controller('eventsCtrl', function($scope, $state, $firebaseArray, EventsFactory) {

  var firebase = new Firebase(app_url);
  $scope.events = EventsFactory;

});
