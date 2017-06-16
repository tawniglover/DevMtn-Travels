angular.module('devmtnTravel').controller('packagesCtrl', function (mainSrv, $scope, $state) {

  var country = $state.params.country;
  getData(country);


  function getData(country) {
    $scope.packageData = mainSrv.getData(country);
  }

// This logic is being handled by mainSrv
  // if (country) {
  //   $scope.packageData = mainSrv.packageInfo.filter(function(package) {
  //     return package.country.toLowerCase() === country.toLowerCase();
  //   });
  // } else {
  //   $scope.packageData = mainSrv.packageInfo;
  // }

})
