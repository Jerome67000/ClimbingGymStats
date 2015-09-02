app.controller('sessionsCtrl', function($scope, $state, $ionicPopup) {


  $scope.showNewSessionPopup = function() {

  var myFirebaseRef = new Firebase("https://climbinggymstats.firebaseio.com/");

    myFirebaseRef.createUser({
      nickname : "Admin",
      email    : "jerome.gully0@gmail.com",
      password : "brst12",
      climb_key : "484fefes1"
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });

  //   $scope.session = {};
  //
  // // An elaborate, custom popup
  // var myPopup = $ionicPopup.show({
  //   templateUrl: 'html/partials/modals/new-session.html',
  //   title: 'Nouvelle séance',
  //   scope: $scope,
  //   buttons: [
  //     { text: 'Annuler' },
  //     {
  //       text: '<b>Ok</b>',
  //       type: 'button-positive',
  //     },
  //   ]
  // });
  // myPopup.then(function(res) {
  //   console.log('Tapped!', res);
  //   createNewSession();
  //   $state.go("tab.stats");
  // });
  };

  $scope.createNewSession = function () {


    myFirebaseRef.set({
      title: "Hello World!",
      author: "Firebase",
      location: {
        city: "San Francisco",
        state: "California",
        zip: 94103
      }
    });

  }

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
