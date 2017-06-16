angular.module('devmtnTravel').controller('bookedCtrl', function (mainSrv, $scope) {
  $scope.bookedData = mainSrv.packageInfo;

})
