var app_url = "https://climbinggymstats.firebaseio.com/";
window.app_url = app_url;
window.gymUniqueId = "0_roc_en_stock";
window.userUniqueId = 0;

//// USERS
app.factory('UsersFactory', function ($firebaseArray, $firebaseObject) {
  var firebase = new Firebase(app_url);
  var users = $firebaseArray(firebase.child('users'));

  var Users = {
    currentUser: {},
    all: users,
    create: function (user) {
      email = user.email.toLowerCase().replace(/\./g, '_');
      var newUserPath = firebase.child('users').child(email);
      return newUserPath.set(user);
    },
    get: function (userID) {
      return $firebaseObject(firebase.child('users').child(userID));
    },
    search: function (userUID) {
      var findedUser;
      users.forEach(function(user) {
        if (user.uid == userUID) {
          findedUser = user;
        }
      });
      return findedUser;
    },
    update: function (user) {
      return users.$update(user);
    },
    delete: function (user) {
      return users.$remove(user);
    }
  };
  return Users;
});
//// SESSIONS
app.factory('SessionsFactory', function ($firebaseArray, $firebaseObject, $state, UsersFactory) {
  var firebase = new Firebase(app_url);
  var sessions = $firebaseArray(firebase.child('sessions/' + window.userUniqueId));

  var Sessions = {
    all: sessions,
    create: function (session) {
      return sessions.$add(session).then(function(ref) {
        $state.go('tab.session-detail', {session_id: ref.key()});
      });
    },
    get: function (sessionID) {
      return $firebaseObject(firebase.child('sessions/' + UsersFactory.currentUser.$id).child(sessionID));
    },
    update: function (session) {
      return sessions.$update(session);
    },
    delete: function (session) {
      return sessions.$remove(session);
    }
  };
  return Sessions;
});

//// ROUTES
app.factory('RoutesFactory', function ($firebaseArray, $firebaseObject, UsersFactory) {
  var firebase = new Firebase(app_url);
  var routes = $firebaseArray(firebase.child('sessions/' + window.userUniqueId + "/routes/0"));

  var Routes = {
    all: routes,
    create: function (route) {
      return routes.$add(route);
    },
    get: function (routeUID) {
      return $firebaseObject(firebase.child('sessions/' + UsersFactory.currentUser.$id).child(routeUID));
    },
    update: function (route) {
      return routes.$update(route);
    },
    delete: function (route) {
      return routes.$remove(route);
    }
  };
  return Routes;
});

// GYM
app.factory('GymFactory', function ($firebaseObject) {
  var firebase = new Firebase(app_url);
  var gym = $firebaseObject(firebase.child('gyms').child(window.gymUniqueId));
  var Gym = {
    currentGym: gym,
    pushNewUser: function (user) {
      return $firebaseObject(firebase.child('gyms').child(window.gymUniqueId).child("users")).$add(user);
    },
  };
  return Gym;
});

//// EVENTS
app.factory('EventsFactory', function ($firebaseArray) {
  var firebase = new Firebase(app_url);
  var events = $firebaseArray(firebase.child('gyms/').child(window.gymUniqueId).child("events/"));
  return events;
});

app.factory('GradesFactory', function() {

  var Grades = {};

  function generateGrades() {
    var grades_array = [];
    var num = 3;
    while (num < 10) {
      var letter = 97;
      while (letter < 100) {
        var g = {
          num : num,
          letter: String.fromCharCode(letter),
          title: num + String.fromCharCode(letter),
        };
        grades_array.push(g);
        console.log("added :", g);
      letter++;
      }
      num++;
    }
    Grades = {
      grades: grades_array,
      getGrades: function() {
        return factory.grades_array;
      },
      getGrade: function(id) {
        return factory.grades_array[id];
      },
    };
  }
  generateGrades();
  return Grades;
 });
