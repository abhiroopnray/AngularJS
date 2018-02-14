'use strict'

angular.module ('blogList').
  controller('BlogListController', function($scope){
    console.log("blog-list controller");
    $scope.tittle = "Hi! There !!";
    $scope.clicks = 0;
    $scope.buttonClicked = function(){
      console.log("Clicked button!");

      $scope.clicks += 1;

      $scope.tittle = "clicked " + $scope.clicks + " times!";
    }
  });
  //component('blogList');
