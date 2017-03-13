(function)(){
  'use strict';

  angular.module('LunchCheck', [])
.controller(MyLunchCheckController', MyLunchCheckController);
      
      MyLunchCheckController.$inject = ['$scope'$message];      
      function MyLunchCheckController($scope){
     $scope.labels = [];
     $scope.values = new Array($scope.labels.length);

  };  
  
})();


// <body ng-controller="MyController">
//     <label ng-repeat-start="label in labels">Label {{label}}</label>
//     <input ng-model='values[$index]' type='text' value='' />
//     <br ng-repeat-end>

//     <button ng-click="saveEverything()">Save</button>
//   </body>
  
//   var myApp = angular.module('app', []);

// myApp.controller('MyController', function($scope, $log) {
//   $scope.labels = ['one', 'two', 'three'];
//   $scope.values = new Array($scope.labels.length);

//   $scope.saveEverything = function() {
//     $scope.contents = [];
//     for (i = 0; i < $scope.labels.length; i++) {
//       $scope.contents.push({
//         label: $scope.labels[i],
//         value: $scope.values[i]
//       });
//     }
//     $log.info('Saved to array[0]: ' + $scope.contents[0].value);
//     $log.info('Saved to array[1]: ' + $scope.contents[1].value);
//     $log.info('Saved to array[2]: ' + $scope.contents[2].value);
//   }
// });

// $scope.check = function(value) {
//     if (input <= $scope.values[i]) {
//       return '270px';
//     } else {
//       return '360px';
//     }
//   };
// });
