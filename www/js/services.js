var app_url = "https://climbinggymstats.firebaseio.com/";
window.app_url = app_url;

// ///// USERS
app.factory("Auth", function($firebaseAuth) {
  var usersRef = new Firebase(app_url+"/users");
  return $firebaseAuth(usersRef);
})

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

 // ///// SESSIONS
// app.factory('UserSessionFactory', ['$resource',function($resource){
//   return $resource(remote_server + '/users/sign_in.json', {}, {
//     delete: { url: remote_server + '/users/sign_out.json', method: "DELETE" }
//   });
// }]);
//
// app.factory('VoteFactory', ['$resource',function($resource){
//   return $resource(
//     remote_server + '/api/votes',
//     {},
//     {
//       vote: {
//         method: "POST",
//         votable_id: "@votable_id",
//         votable_type: "@votable_type",
//         note: "@note"
//       },
//     });
// }]);
//
// app.factory('UserFactory', ['$resource',function($resource){
//   return $resource(remote_server + '/api/user.json',
//   {id: "@id"},
//   {
//     query: {
//       url: remote_server + '/api/users/:id',
//       method: "GET"
//     },
//     getReviews: {
//       url: remote_server + '/api/user/reviews.json',
//       method: "GET"
//     },
//     getPosts: {
//       url: remote_server + '/api/user/posts.json',
//       method: "GET"
//     },
//     getFollowedRooms: {
//       url: remote_server + '/api/user/followed_rooms',
//       method: "GET"
//     },
//     create: {
//        url: remote_server + '/users.json',
//        method: "POST"
//        },
//     update: {
//       url: remote_server + '/api/user.json',
//       method: "PATCH"
//     },
//     updatePassword: {
//       url: remote_server + '/api/user/update_password',
//       method: "PATCH"
//       }
//   });
// }]);
//
// app.factory('FollowedUserFactory', ['$resource',function($resource){
//   return $resource(
//     remote_server + '/api/rooms.json',
//     {user_id: "@user_id"},
//     {
//       getFollowings: {
//         url: remote_server + '/api/user/followings.json',
//         method: "GET",
//       },
//       getFollowers: {
//         url: remote_server + '/api/user/followers.json',
//         method: "GET",
//       },
//       follow: {
//         url: remote_server + '/api/users/:user_id/relationships/follow.json',
//         method: "GET",
//         isArray: true
//       },
//       unfollow: {
//         url: remote_server + '/api/users/:user_id/relationships/unfollow.json',
//         method: "GET",
//         isArray: true
//       },
//   });
// }]);
//
// ///// ROOMS
// app.factory('RoomFactory', ['$resource',function($resource){
//   return $resource(
//     remote_server + '/api/rooms.json',
//     {room_id: "@room_id"},
//     {
//       search: {
//          url: remote_server + '/api/rooms/search.json',
//          method: "POST"
//       },
//       show: {
//          url: remote_server + '/api/rooms/:room_id.json',
//          method: "GET"
//       },
//       getFollowers: {
//         url: remote_server + '/api/rooms/:room_id/follower_rooms.json',
//         method: "GET",
//       },
//       follow: {
//         url: remote_server + '/api/rooms/:room_id/follower_rooms.json',
//         method: "POST",
//       },
//       unfollow: {
//         url: remote_server + '/api/rooms/:room_id/follower_rooms/1.json',
//         method: "DELETE",
//         isArray: true
//       },
//   });
// }]);
//
// ///// POSTS
// app.factory('PostsFactory', ['$resource',function($resource){
//   return $resource(remote_server + '/api/rooms/:room_id/posts.json', {}, {
//     index: { method: "GET"},
//   });
// }]);
//
// app.factory('UserPostsFactory', ['$resource',function($resource){
//   return $resource(
//     remote_server + '/api/users/:user_id/posts.json',
//     {user_id: "@user_id"},
//     {
//       get: {
//         url: remote_server + '/api/users/:user_id/posts.json',
//         method: "GET",
//       }
//     });
// }]);
//
// app.factory('PostFactory', ['$resource',function($resource){
//   return $resource(remote_server + '/api/rooms/:room_id/posts.json',
//   {room_id: "@room_id"},
//   {
//     create: {
//       url: remote_server + '/api/rooms/:room_id/posts.json',
//       method: "POST",
//       review: "@post",
//       user_token: "@user_token",
//       user_email: "@user_email"
//     },
//     update: {
//       url: remote_server + '/api/rooms/:room_id/posts/:id.json',
//       method: "PATCH"
//     },
//     destroy: {
//        url: remote_server + '/api/rooms/:room_id/posts/:id.json',
//        method: "DELETE"
//      }
//   });
// }]);
//
// ///// REVIEWS
// app.factory('ReviewsFactory', ['$resource',function($resource){
//   return $resource(remote_server + '/api/rooms/:room_id/reviews.json', {}, {
//     index: { method: "GET"},
//   });
// }]);
//
// app.factory('UserReviewsFactory', ['$resource',function($resource){
//   return $resource(
//     remote_server + '/api/users/:user_id/reviews.json',
//     {user_id: "@user_id"},
//     {
//       get: {
//         url: remote_server + '/api/users/:user_id/reviews.json',
//         method: "GET",
//       }
//     });
// }]);
//
// app.factory('ReviewFactory', ['$resource',function($resource){
//   return $resource(
//     remote_server + '/api/rooms/:room_id/reviews.json',
//     {room_id: "@room_id"},
//     {
//       create: {
//         url: remote_server + '/api/rooms/:room_id/reviews.json',
//         method: "POST",
//         review: "@review",
//         user_token: "@user_token",
//         user_email: "@user_email"
//       },
//
//       update: {
//          url: remote_server + '/api/rooms/:room_id/reviews/:id.json',
//          method: "PATCH",
//          id: "@id",
//          user_token: "@user_token",
//          user_email: "@user_email"
//       },
//
//       destroy: {
//          url: remote_server + '/api/rooms/:room_id/reviews/:id.json', method: "DELETE",
//          id: "@id",
//          user_token: "@user_token",
//          user_email: "@user_email"
//       }
//     });
// }]);
