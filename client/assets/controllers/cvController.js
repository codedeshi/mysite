myApp.controller('cvController', ['$anchorScroll', '$location', '$scope',
  function($anchorScroll, $location, $scope) {
    $scope.gotoAnchor = function(x) {
      var cvpages =['pageOne','pageTwo','pageThree','pageFour',]
      if ($location.hash() !== x) {
          $('.page').children().hide();
        if (cvpages.indexOf(x)>=0){
          $('#cvpage').children().fadeIn(1000);
          $location.hash(x);
        }
        else {
          $('#'+x).children().fadeIn(1000);
        }     
          $location.hash(x); 
      }else {        
        $anchorScroll();
      }
    };
  }
])