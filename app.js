
 (function () {

'use strict';
     
    angular.module('LunchChecker', [])
   .controller('MyLunchCheckController', MyLunchCheckController);
     
    MyLunchCheckController.$inject  =  ['$scope'];
    function MyLunchCheckController($scope) {
    $scope.MenuInput= [];
     $scope.msg1  =   "Enjoy!";
     $scope.msg2  =   "Too much!";

     $scope.checkInput  =  function() {
            if($scope.MenuInput.split(",").length <= 3) {
                $scope.values = $scope.msg1;
            } else{
                $scope.values = $scope.msg2;
            }
         }
    };  
})();



//     'use strict';
     
//     angular.module('LunchChecker', [])
//    .controller('MyLunchCheckController', MyLunchCheckController);
     
//     MyLunchCheckController.$inject  =  ['$scope'];
//     function MyLunchCheckController($scope) {
//       $scope.MenuInput  = [];
//      // $scope.MenuInput.splice(,);
//       $scope.msg1  =   "Enjoy!";
//       $scope.msg2  =   "Too much!";
       
//       $scope.checkInput  =  function() {
//        // for (var i = 0; i < $scope.values; i++) {
//           if($scope.MenuInput.length <= 3) {
//           //if($scope.values <= 3) {
//             return $scope.msg1;
//              }else{
//             return $scope.msg2;
//              }
//           }
//       };   
      
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
