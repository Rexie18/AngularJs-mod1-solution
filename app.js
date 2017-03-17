
//  (function () {

// 'use strict';
     
//     angular.module('LunchChecker', [])
//    .controller('MyLunchCheckController', MyLunchCheckController);
     
//     MyLunchCheckController.$inject  =  ['$scope'];
//     function MyLunchCheckController($scope) {
//     $scope.MenuInput= [];
//      $scope.msg1  =   "Enjoy!";
//      $scope.msg2  =   "Too much!";
//         $scope.msg3  =   "Enter data first";

//      $scope.checkInput  =  function() {
//               if(!$scope.MenuInput.split(",").length <= 3){
//                 $scope.values = $scope.msg3;
//             }
//             else if($scope.MenuInput.split(",").length <= 3) {
//                 $scope.values = $scope.msg1;
//             } else{
//                 $scope.values = $scope.msg2;
//             }
//          }
//     };  
// })();



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
!function(){"use strict";function a(a){a.MenuInput=[],a.msg1="Enjoy!",a.msg2="Too much!",a.msg3="Enter data first",a.checkInput=function(){!a.MenuInput.split(",").length<=3?a.values=a.msg3:a.MenuInput.split(",").length<=3?a.values=a.msg1:a.values=a.msg2}}angular.module("LunchChecker",[]).controller("MyLunchCheckController",a),a.$inject=["$scope"]}();
