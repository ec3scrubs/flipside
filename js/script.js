var flipIt = angular.module('flipIt',[]);

flipIt.service('rest_api', function($http) {
  this.getData = function() {
    // $http() returns a $promise that we can add handlers with .then()
    return $http({
      method: 'GET',
      url: 'http://localhost:5000/sentiment/api/'
    });
  }
});

flipIt.controller('flipitController', function($scope, rest_api) {
  $scope.data = null;
  /*rest_api.getData().then(function(dataResponse) {
    console.log(dataResponse);
    $scope.data = dataResponse;
  });*/
  var dummy = [
    {
      'id': 1,
      'name': 'This is my name',
      'date': '19-05-2015',
      'location': 'Your house',
      'review': 'Food is best',
      'sentiment': 'positive',
      'score': '0.5'
    },
    {
      'id': 2,
      'name': 'Dog',
      'date': '20-05-2015',
      'location': 'My room',
      'review': 'Horrible service',
      'sentiment': 'negative',
      'score': '-0.9'
    }
  ];
  $scope.data = dummy;
});

// stackoverflow ftw
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var avatars = [1, 2, 3, 4, 5, 6];
shuffle(avatars);

window.onload = function() {
  $('.reviewer-profile-pic').each(function(i, obj) {
    //var randNum = Math.ceil(Math.random() * 6);
    var randNum = avatars.pop();
    var source = "assets/avatars/avatar-" + randNum + ".jpg";
    $(obj).attr("src", source);
  });
};
