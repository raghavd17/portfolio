var app = angular.module('myApp', []);



//Define Routing for app
//Uri /portfolio -> template add_order.html and Controller PaintingsCtrl
//Uri /about -> template about.html and Controller ShowAboutController

// app.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/', {
//         templateUrl: 'portfolio.html',
//         controller: 'PaintingsCtrl'
//     }).
//       when('/about', {
//         templateUrl: 'about.html',
//         controller: 'AboutController'
//       }).
//       when('/contact', {
//         templateUrl: 'contact.html',
//         controller: 'ContactController'
//       }).
//       otherwise({
//         redirectTo: '/'
//       });
// }]);

// function MainNavController($scope, $location)
// 	{
// 	$scope.isActive = function (viewLocation) {
// 	    return viewLocation === $location.path();
// 	};
// }

// create the controller and inject Angular's $scope



app.controller('workCtrl', function($scope, $http) {
    $scope.filters = {};
    var jsonfile = "json/work.json";
    $http.get(jsonfile)
        .success(function(response) {
            $scope.works = response.work;
            console.log(response);
        });



    $scope.toggleInfo = function(selectedWork) {
        //console.log('food object: ', selectedFood);
        // alert('hellooo');
        slideAnimation();
        // console.log($scope.showInfo, 'test');
        $scope.selectedWork = selectedWork;
        console.log(selectedWork);
    };

    function slideAnimation() {
        $('.modelbox').animate({
            marginLeft: '0'
        }, 500, function() {
            $('body').css('overflow', 'hidden');
            $('.btn_close').fadeIn();
        });
    }
    // slideAnimation

    $('.btn_close').hide();
      $('.btn_close').on('click',function() {
          $(this).fadeOut().delay(800);
    	  $('.modelbox').animate({marginLeft:'100%'},500);
          $('body').removeAttr('style');

      });
// close modelbox

});
