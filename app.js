
(function (angular) {
    'use strict';
  MyLunchCheckcontroller.$inject  =  ['$scope'];
  angular.module('LunchCheck', [])
    .controller('MyLunchCheckcontroller', MyLunchCheckcontroller);
  
    var MyLunchCheckcontroller = function ($scope) {
      $scope.MenuInput  =  [];
      $scope.values  =  new Array($scope.MenuInput.length);
      $scope.values.splice("", "");
      $scope.msg1  =   "Enjoy!";
      $scope.msg2  =   "Too much!";
       
      $scope.checkInput  =  function() {
        return $scope.values.length() <= 3 ? $scope.msg1 : $scope.msg2;
       
    }
  };
  
})(angular); 


// (function () {
//     'use strict';
     
//     angular.module('LunchCheck', [])
//    .controller('MyLunchCheckController', MyLunchCheckController);
     
//     MyLunchCheckController.$inject  =  ['$scope'];
//     function MyLunchCheckController($scope) {
//       var msg1  =   "Enjoy!";
//       var msg2  =   "Too much!";
       
//       this.checkInput  =  function() {
//          $scope.MenuInput.split(",")  =  [];
//         var InputReturn = $scope.MenuInput.split(",");
//         return InputReturn.length() <= 3 ? msg1 : msg2;       
//       }
  
//   };
      
// })();


// (function () {
// 'use strict';

// angular.module('LunchChecker', [])
// .controller('MyLunchCheckController', MyLunchCheckController);

// MyLunchCheckController.$inject = ['$scope'];
// function MyLunchCheckController($scope) {
//   $scope.MenuInput = [];
//   $scope.values = new Array($scope.MenuInput.length);
//   $scope.values.splice("","");
//   $scope.msg1 = "Enjoy!";
//   $scope.msg2 = "Too much!";
  
//       $scope.checkInput = function($scope.values) {
//       for (var i = 0; i < $scope.values; i++) {
     
//         if($scope.values <= 3) {
//         return $scope.msg1;
//       }else{
//         return $scope.msg2;
//       }
//     }
//   }
// };

// })();
