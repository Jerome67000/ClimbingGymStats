app.controller('sessionsCtrl', function($scope, $state, $ionicPopup, $ionicModal, SessionsFactory, GymFactory) {

  $scope.sessions = SessionsFactory.all;
  $scope.session = {};

  var sessions = new Firebase(window.app_url + "sessions/" + window.userUniqueId);
  sessions.on("value", function(snapshot) {
    $scope.session.title = "Séance #" + (snapshot.numChildren() + 1);
  });

  $scope.showNewSessionPopup = function() {
    $ionicPopup.show({
      templateUrl: 'html/popups/new-session.html',
      title: 'Nouvelle séance',
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
    }).then(function(newSession) {
      if (newSession) {
        createNewSession();
      }
    });
  };

  function createNewSession() {
    var session = {
      title : $scope.session.title,
      created_at : Firebase.ServerValue.TIMESTAMP,
      location: $scope.session.gym,
      note : $scope.session.note === undefined ? "" : $scope.session.note,
    };
    var a = SessionsFactory.create(session);
    resetSessionData();
    // $scope.openSessionModal();
    $state.go('tab.session');
  }

  function resetSessionData() {
    var gym = new Firebase(window.app_url + "gyms/" + window.gymUniqueId);
    gym.on("value", function(snapshot) {
      $scope.session.gym = snapshot.val().title;
    });
    $scope.session.note = "";
  }

  resetSessionData();

  // Load the modal from the given template URL
  $ionicModal.fromTemplateUrl('html/popups/new-session.html',
    function($ionicModal) {
      $scope.modal = $ionicModal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.openSessionModal = function(index) {
    $scope.modal.show();
  };

  $scope.closeSessionModal = function() {
    $scope.modal.hide();
  };
});
