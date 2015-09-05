app.controller('sessionsCtrl', function($scope, $state, $ionicPopup, $ionicModal) {

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

  var createNewSession = function () {
    var session = firebase.child("/gyms/0/users/0/sessions/");
    session.set(
      {
        id : 0,
        title : "session 1",
        created_at : "2015-08-28",
        location: "Roc en stock",
        note : "Très bonne séance",
      });

    $scope.openModal();
  };

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

  $scope.sessions = [
  {
    "created_at" : "2015-08-28",
    "id" : 0,
    "note" : "Très bonne séance",
    "routes" : [ {
      "climb_style" : "Moulinette",
      "finished" : true,
      "flash" : true,
      "grade" : {
        "is_plus" : true,
        "letter" : "b",
        "num" : 6
      },
      "id" : 0,
      "note" : "Belle voie en dièdre",
      "picture" : "http://fefssef.com/pict.png",
      "route_type" : "Verticale",
      "title" : "6b+ verticale"
    } ],
    "title" : "session 1"
  },
  {
    "created_at" : "2015-08-28",
    "id" : 0,
    "note" : "Très bonne séance",
    "routes" : [ {
      "climb_style" : "Moulinette",
      "flash" : true,
      "grade" : {
        "is_plus" : true,
        "letter" : "b",
        "num" : 6
      },
      "id" : 0,
      "note" : "Belle voie en dièdre",
      "picture" : "http://fefssef.com/pict.png",
      "route_type" : "Verticale",
      "title" : "6b+ verticale",
      "validate" : true
    } ],
    "title" : "session 2"
  },
  {
    "created_at" : "2015-08-28",
    "id" : 0,
    "note" : "Très bonne séance",
    "routes" : [ {
      "climb_style" : "Moulinette",
      "flash" : true,
      "grade" : {
        "is_plus" : true,
        "letter" : "b",
        "num" : 6
      },
      "id" : 0,
      "note" : "Belle voie en dièdre",
      "picture" : "http://fefssef.com/pict.png",
      "route_type" : "Verticale",
      "title" : "6b+ verticale",
      "validate" : true
    } ],
    "title" : "session 2"
  },
  {
    "created_at" : "2015-08-28",
    "id" : 0,
    "note" : "Très bonne séance",
    "routes" : [ {
      "climb_style" : "Moulinette",
      "flash" : true,
      "grade" : {
        "is_plus" : true,
        "letter" : "b",
        "num" : 6
      },
      "id" : 0,
      "note" : "Belle voie en dièdre",
      "picture" : "http://fefssef.com/pict.png",
      "route_type" : "Verticale",
      "title" : "6b+ verticale",
      "validate" : true
    } ],
    "title" : "session 2"
  },
  {
    "created_at" : "2015-08-28",
    "id" : 0,
    "note" : "Très bonne séance",
    "routes" : [ {
      "climb_style" : "Moulinette",
      "flash" : true,
      "grade" : {
        "is_plus" : true,
        "letter" : "b",
        "num" : 6
      },
      "id" : 0,
      "note" : "Belle voie en dièdre",
      "picture" : "http://fefssef.com/pict.png",
      "route_type" : "Verticale",
      "title" : "6b+ verticale",
      "validate" : true
    } ],
    "title" : "session 2"
  },
  {
    "created_at" : "2015-08-28",
    "id" : 0,
    "note" : "Très bonne séance",
    "routes" : [ {
      "climb_style" : "Moulinette",
      "flash" : true,
      "grade" : {
        "is_plus" : true,
        "letter" : "b",
        "num" : 6
      },
      "id" : 0,
      "note" : "Belle voie en dièdre",
      "picture" : "http://fefssef.com/pict.png",
      "route_type" : "Verticale",
      "title" : "6b+ verticale",
      "validate" : true
    } ],
    "title" : "session 2"
  },
  {
    "created_at" : "2015-08-28",
    "id" : 0,
    "note" : "Très bonne séance",
    "routes" : [ {
      "climb_style" : "Moulinette",
      "flash" : true,
      "grade" : {
        "is_plus" : true,
        "letter" : "b",
        "num" : 6
      },
      "id" : 0,
      "note" : "Belle voie en dièdre",
      "picture" : "http://fefssef.com/pict.png",
      "route_type" : "Verticale",
      "title" : "6b+ verticale",
      "validate" : true
    } ],
    "title" : "session 2"
  },
  {
    "created_at" : "2015-08-28",
    "id" : 0,
    "note" : "Très bonne séance",
    "routes" : [ {
      "climb_style" : "Moulinette",
      "flash" : true,
      "grade" : {
        "is_plus" : true,
        "letter" : "b",
        "num" : 6
      },
      "id" : 0,
      "note" : "Belle voie en dièdre",
      "picture" : "http://fefssef.com/pict.png",
      "route_type" : "Verticale",
      "title" : "6b+ verticale",
      "validate" : true
    } ],
    "title" : "session 2"
  },
   {
    "created_at" : "2015-08-28",
    "id" : 0,
    "note" : "Très bonne séance",
    "routes" : [ {
      "climb_style" : "Moulinette",
      "flash" : true,
      "grade" : {
        "is_plus" : true,
        "letter" : "b",
        "num" : 6
      },
      "id" : 0,
      "note" : "Belle voie en dièdre",
      "picture" : "http://fefssef.com/pict.png",
      "route_type" : "Verticale",
      "title" : "6b+ verticale",
      "validate" : true
    } ],
    "title" : "session 3"
  }, {
    "created_at" : "2015-08-28",
    "id" : 0,
    "note" : "Très bonne séance",
    "routes" : [ {
      "climb_style" : "Moulinette",
      "flash" : true,
      "grade" : {
        "is_plus" : true,
        "letter" : "b",
        "num" : 6
      },
      "id" : 0,
      "note" : "Belle voie en dièdre",
      "picture" : "http://fefssef.com/pict.png",
      "route_type" : "Verticale",
      "title" : "6b+ verticale",
      "validate" : true
    } ],
    "title" : "session 4"
  }, {
    "created_at" : "2015-08-28",
    "id" : 0,
    "note" : "Très bonne séance",
    "routes" : [ {
      "climb_style" : "Moulinette",
      "flash" : true,
      "grade" : {
        "is_plus" : true,
        "letter" : "b",
        "num" : 6
      },
      "id" : 0,
      "note" : "Belle voie en dièdre",
      "picture" : "http://fefssef.com/pict.png",
      "route_type" : "Verticale",
      "title" : "6b+ verticale",
      "validate" : true
    } ],
    "title" : "session 5"
  } ];
});
