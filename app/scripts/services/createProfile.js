'use strict';

app.factory('Profile', ['Firebase', 'FBURL', '$rootScope', function(Firebase, FBURL, $rootScope) {

    // create profile for user
    return function(id, name, email, callback) {
      new Firebase(FBURL).child('users/'+id).set({email: email, name: name}, function(err) {
        if( callback ) {
          callback(err);
          $rootScope.$apply();
        }
      });
    }
  }]);