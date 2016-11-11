myApp.controller('cvController', ['$anchorScroll', '$location', '$scope',
  function($anchorScroll, $location, $scope) {
    $scope.gotoAnchor = function(x) {
			console.log(x)
      if ($location.hash() !== x) {
        $location.hash(x);
      } else {
        $anchorScroll();
      }
    };
  }
]);