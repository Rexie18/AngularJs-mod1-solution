(function)(){
  'use strict';

  angular.module('LunchCheck', [])
.controller(MyLunchCheckController', MyLunchCheckController);
      
      MyLunchCheckController.$inject = ['$scope'$message];      
      function MyLunchCheckController($scope){
     $scope.MenuInput = [];
     $scope.values = new Array($scope.MenuInput.length);
     $scope.values.splice("");
     $scope.message1 = "First message";
     $scope.message2 = "Second message";

  };  
  
  $scope.check = function($scope.MenuInput) {
    $scope.values = [];
    for (i = 0; i < $scope.MenuInput.length; i++) {
     if($scope.values <= 3) {
        return $scope.message1;
      }else{
        return $scope.message2;
        
         }
      }
        
  });
  
})();
