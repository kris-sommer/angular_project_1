angular.module("quoteBook").controller("mainCtrl",function($scope){
  $scope.error = false;
  $scope.people = [
      { name: 'Kris', age: 27},
      { name: 'John', age: 43}
    ];

  $scope.addPerson = function(){
    if ($scope.newName === "" || $scope.newName === undefined) {
      $scope.error = true;
      return;
    }
    else {
      $scope.error = false;
    }
    var newPerson = {
      name:$scope.newName,
      age:$scope.newAge
    }
      $scope.people.push(newPerson);
      $scope.newName = '';
      $scope.newAge= '';
    }


  $scope.clearPerson = function(){

      $scope.newName = '';
      $scope.newAge= '';
  }

})
