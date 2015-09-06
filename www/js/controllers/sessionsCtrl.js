app.controller('sessionsCtrl', function($scope, $state, $ionicPopup, $ionicModal, SessionsFactory, GymFactory) {

  $scope.sessions = SessionsFactory.all;
  $scope.session = {};

  var sessions = new Firebase(window.app_url + "sessions/" + window.userUniqueId);
  sessions.on("value", function(snapshot) {
    $scope.session.title = "Séance #" + (snapshot.numChildren() + 1);
  });

  $scope.showNewSessionPopup = function() {
    $ionicPopup.show({
      templateUrl: 'html/partials/new-session.html',
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
    SessionsFactory.create(session);
    resetSessionData();
    $scope.openSessionModal();
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
  $ionicModal.fromTemplateUrl('html/modals/session.html',
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

  // $scope.sessions = [
  // {
  //   "created_at" : "2015-08-28",
  //   "id" : 0,
  //   "note" : "Très bonne séance",
  //   "routes" : [ {
  //     "climb_style" : "Moulinette",
  //     "finished" : true,
  //     "flash" : true,
  //     "grade" : {
  //       "is_plus" : true,
  //       "letter" : "b",
  //       "num" : 6
  //     },
  //     "id" : 0,
  //     "note" : "Belle voie en dièdre",
  //     "picture" : "http://fefssef.com/pict.png",
  //     "route_type" : "Verticale",
  //     "title" : "6b+ verticale"
  //   } ],
  // }];
});
