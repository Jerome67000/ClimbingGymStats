app.controller('sessionsCtrl', function($scope, $ionicPopup) {

  $scope.showNewSessionPopup = function() {
    $scope.session = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="text" placeholder="Séance #23" ng-model="session.title"><input type="text" placeholder="Salle d escalade" ng-model="session.gym"><input type="text" placeholder="note" ng-model="session.note">',
    title: 'Nouvelle séance',
    scope: $scope,
    buttons: [
      { text: 'Annuler' },
      {
        text: '<b>Ok</b>',
        type: 'button-positive',
      },
    ]
  });
  myPopup.then(function(res) {
    console.log('Tapped!', res);
    $state.go("tab.stats");
  });
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
