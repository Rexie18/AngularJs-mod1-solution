
 (function () {

'use strict';
     
    angular.module('LunchChecker', [])
   .controller('MyLunchCheckController', MyLunchCheckController);
     
    MyLunchCheckController.$inject  =  ['$scope'];
    function MyLunchCheckController($scope) {
    $scope.MenuInput= [];
     $scope.msg1  =   "Enjoy!";
     $scope.msg2  =   "Too much!";
     $scope.msg3  =   "Enter data first";

     $scope.checkInput  =  function() {
               if($scope.MenuInput.split(",").length !== 0)  {
                $scope.values = $scope.msg3;
            } 

              if($scope.MenuInput.split(",").length <= 3) {
                $scope.values = $scope.msg1;
            } else{
                $scope.values = $scope.msg2;
            }
         }
    };  
})();



//!function(){"use strict";function n(n){n.MenuInput=[],n.msg1="Enjoy!",n.msg2="Too much!",n.msg3="Enter data first",n.checkInput=function(){n.MenuInput.split(",").length<=3?n.values=n.msg1:n.values=n.msg2}}angular.module("LunchChecker",[]).controller("MyLunchCheckController",n),n.$inject=["$scope"]}();
