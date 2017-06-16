angular.module('devmtnTravel').controller('locationsCtrl', function (mainSrv, $scope) {
  $scope.travelData = mainSrv.travelInfo;

})
