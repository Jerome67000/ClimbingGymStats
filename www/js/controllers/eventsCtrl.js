app.controller('eventsCtrl', function($scope, $state, $firebaseArray) {

  var firebase = new Firebase(window.app_url);

  firebase.child("gyms/0/events").on("value", function(snapshot) {
    $scope.events = snapshot.val();  // Alerts "San Francisco"
  });

  //
  //
  // $scope.events = [
  //   {
  //     title : "Apéro roc",
  //     description : "Un petit apéro comme on les aime. Ramener de quoi boire et grignotter",
  //     date : "Jeudi 17 septembre 21h"
  //   },
  //   {
  //     title : "Apéro roc",
  //     description : "Un petit apéro comme on les aime. Ramener de quoi boire et grignotter",
  //     date : "Jeudi 17 septembre 21h"
  //   },
  //   {
  //     title : "Apéro roc",
  //     description : "Un petit apéro comme on les aime. Ramener de quoi boire et grignotter",
  //     date : "Jeudi 17 septembre 21h"
  //   }
  // ];
  //
  // firebase.child("gyms/0/events").set($scope.events);

});
