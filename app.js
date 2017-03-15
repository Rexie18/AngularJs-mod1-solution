(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";

  $scope.sayMessage = function () {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.feedYaakov = function () {
    $scope.stateOfBeing = "fed";
  };
}

})();


// (function)(){
//   'use strict';

//   angular.module('LunchCheck', [])
// .controller(MyLunchCheckController', MyLunchCheckController);
      
//       MyLunchCheckController.$inject = ['$scope'];      
//       function MyLunchCheckController($scope){
//      $scope.MenuInput = [];
//      $scope.values = new Array($scope.MenuInput.length);
//      $scope.values.splice(,);
//      $scope.msg1 = "Enjoy!";
//      $scope.msg2 = "Too much!";
//   };  
  
//     $scope.checkInput = function( ) {
//     $scope.values = [];
//     for (i = 0; i < $scope.MenuInput.length; i++) {
//      if($scope.values <= 3) {
//         return $scope.msg1;
//       }else{
//         return $scope.msg2;
        
//          }
//     }
//   };
          
// })();
