var app_url = "https://climbinggymstats.firebaseio.com/";
window.app_url = app_url;
window.gymUniqueId = 0;
window.userUniqueId = 0;

//// USERS
app.factory('UsersFactory', function ($firebaseArray, $firebaseObject) {
  var firebase = new Firebase(app_url);
  var users = $firebaseArray(firebase.child('users'));

  var Users = {
    currentUser: {},
    all: users,
    create: function (user) {
      return users.$add(user);
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
app.factory('SessionsFactory', function ($firebaseArray, $firebaseObject, UsersFactory) {
  var firebase = new Firebase(app_url);
  var sessions = $firebaseArray(firebase.child('sessions/' + window.userUniqueId));

  var Sessions = {
    all: sessions,
    create: function (session) {
      return sessions.$add(session);
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

// GYM
app.factory('GymFactory', function ($firebaseObject, $timeout) {
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
  var factory = {
    grades: [
      {
        title: "5a",
        num: 5,
        letter: "a",
        plus: false,
      },
      {
        title: "5a+",
        num: 5,
        letter: "a",
        plus: true,
      },
      {
        title: "5b",
        num: 5,
        letter: "b",
        plus: false,
      },
      {
        title: "5b+",
        num: 5,
        letter: "b",
        plus: true,
      },
      {
        title: "5c",
        num: 5,
        letter: "c",
        plus: false,
      },
      {
        title: "5c+",
        num: 5,
        letter: "c",
        plus: true,
      },
    ],
    getGrades: function() {
      return factory.grades;
    },
    getGrade: function(id) {
      return factory.grades[id];
    },
  };
  return factory;
 });
