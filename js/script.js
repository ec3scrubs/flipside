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
      'date': '19-05-2015',
      'description': 'ate food',
      'sentiment': 'positive',
      'score': '0.5'
    },
    {
      'id': 2,
      'date': '20-05-2015',
      'description': 'failed all the exams rofl',
      'sentiment': 'negative',
      'score': '-0.9'
    }
  ];
  $scope.data = dummy;
});
