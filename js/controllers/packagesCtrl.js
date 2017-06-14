angular.module('devmtnTravel').controller('packagesCtrl', function (mainSrv, $scope) {
  $scope.packageData = mainSrv.packageInfo;
  
})
