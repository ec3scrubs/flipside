var flipIt = angular.module('flipIt',[]);

flipIt.service('rest_api', function($http) {
  this.getData = function() {
    // $http() returns a $promise that we can add handlers with .then()
    return $http({
      method: 'GET',
      url: 'http://localhost:5000/sentiment/api/'
    });
  },
  this.sendQuery = function(query) {
    return $http.post('http://localhost:5000/' + query);
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

  $scope.httpPost = function() {
    console.log("angular posting");
    var postData = $("#angular-search-field").val();
    //console.log($scope.postData)
    // may need to stringify
    var results = rest_api.sendQuery(postData);
    console.log(results);
  }

});
