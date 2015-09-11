app.controller('tabsCtrl', function($scope, $ionicPopup) {
  $scope.user_id = window.userUniqueId;
  $scope.gym_id = window.gymUniqueId;

  $scope.openConfigPopup = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Déconnexion',
     template: 'Etes-vous sûr de vouloir vous déconnecter ?'
   });
   confirmPopup.then(function(res) {
     if(res) {
       logout();
     }
   });
  };

  function logout() {

  }
});
