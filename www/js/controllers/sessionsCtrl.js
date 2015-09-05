app.controller('sessionsCtrl', function($scope, $state, $ionicPopup, $ionicModal, SessionsFactory) {

  var firebase = new Firebase(window.app_url);

  $scope.showNewSessionPopup = function() {
    $scope.session = {};
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
      note : $scope.session.note,
    };

    SessionsFactory.create(session);

    $scope.openModal();
  }

  // Load the modal from the given template URL
  $ionicModal.fromTemplateUrl('html/modals/session.html',
    function($ionicModal) {
      $scope.modal = $ionicModal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.openModal = function(index) {
    $scope.modal.show();
  };

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.sessions = SessionsFactory.all;

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
