var app_url = "https://climbinggymstats.firebaseio.com/";
window.app_url = app_url;

//// USERS
app.factory("UserFactory", function() {
  var user = {};
  return user;
});

//// USERS
app.factory('UsersFactory', function ($firebaseArray, $firebaseObject) {
  var firebase = new Firebase(app_url);
  var users = $firebaseArray(firebase.child('users'));

  var Users = {
    all: users,
    create: function (user) {
      return users.$add(user);
    },
    get: function (userID) {
      return $firebaseObject(firebase.child('users').child(userID));
    },
    delete: function (user) {
      return users.$remove(user);
    }
  };
  return Users;
});

//// GYM
app.factory('GymsFactory', function ($firebaseArray, $firebaseObject) {
  var firebase = new Firebase(app_url);
  var gyms = $firebaseArray(firebase.child('gyms'));

  var Gyms = {
    all: gyms,
    create: function (gym) {
      return gyms.$add(gym);
    },
    get: function (gymsId) {
      return $firebaseObject(firebase.child('gyms').child(gymsId));
    },
    delete: function (gym) {
      return gyms.$remove(gym);
    }
  };
  return Gyms;
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
