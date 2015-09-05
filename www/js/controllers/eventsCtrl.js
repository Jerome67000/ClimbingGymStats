app.controller('eventsCtrl', function($scope, $state, $firebaseArray, GymsFactory) {


  $scope.gyms = GymsFactory.get(0);

  // $scope.post = {url: 'http://', 'title': ''};
  //
  // $scope.submitPost = function () {
  //   Post.create($scope.post).then(function () {
  //     $scope.post = {url: 'http://', 'title': ''};
  //   });
  // };
  //
  // $scope.deletePost = function (post) {
  //   Post.delete(post);
  // };

  //
  // firebase.child("gyms/0/events").on("value", function(snapshot) {
  //   $scope.events = snapshot.val();
  // });
  //
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
