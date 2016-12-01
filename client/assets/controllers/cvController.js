myApp.controller('cvController', ['$anchorScroll', '$location', '$scope',
  function($anchorScroll, $location, $scope) {
    $scope.gotoAnchor = function(x) {
      var cvpages =['pageOne','pageTwo','pageThree','pageFour',]
      console.log(x,$location.hash())
      if ($location.hash() !== x) {
          $('.page').children().hide();
        if (cvpages.indexOf(x)>=0){
          console.log('here')
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