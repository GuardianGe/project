var demoTpl = require('../tpls/index.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

var myApp = angular.module('myApp', ['ngRoute']);

myApp.directive('search',function(){
  return {
    restrict: 'E',
    templateUrl:  '/src/scripts/tpls/directiveTpl.html',
    replace: true,
    scope: {},
    controller:function(){

    }
  }
})

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.caseInsensitiveMatch = true; //所有路由不区分大小写
  $routeProvider
    .when('/home', {
      templateUrl: '/src/scripts/tpls/route/home.html',
      controller: 'homeController'
    })
    .when('/homeDetail/:id', {
      templateUrl: '/src/scripts/tpls/route/homedetail.html',
      controller: 'homeDetailController'
    })
    .when('/mwy', {
      templateUrl: '/src/scripts/tpls/route/home.html',
      controller: 'mwyController'
    })
    .when('/mwyDetail/:id', {
      templateUrl: '/src/scripts/tpls/route/homedetail.html',
      controller: 'mwyDetailController'
    })
    .otherwise({
      redirectTo: '/home'
    })
}]);

//home
myApp.controller('homeController', ['$scope','$http','$location',function($scope, $http,$location){
  $http({
    url: '/mock/mjk.json'
  })
  .then(function(res){
    $scope.products = res.data.data;
    console.log(res.data.data);
  }, function(){
    ;
  });
  $scope.keywords = "";
  // $scope.search = function(){
  //   if($scope.keywords){
  //     $location.url('/homeDetail/' + $scope.keywords);
  //   }
  // }
}]);

myApp.controller('homeDetailController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
  $http({
    url: '/mock/mjk.json',
    params: {
      id: $routeParams.id
    },
    method: 'get'
  })
  .then(function(res){
    $scope.products = res.data.data[$routeParams.id-1];
  }, function(){
    ;
  });
}]);

//mwy
myApp.controller('mwyController', ['$scope','$http','$location',function($scope, $http,$location){
  $http({
    url: '/mock/mwy.json'
  })
  .then(function(res){
    $scope.products = res.data.data;
    console.log(res.data.data);
  }, function(){
    ;
  });
  $scope.keywords = "";
}]);

myApp.controller('mwyDetailController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
  $http({
    url: '/mock/mwy.json',
    params: {
      id: $routeParams.id
    },
    method: 'get'
  })
  .then(function(res){
    $scope.products = res.data.data[$routeParams.id-1];
  }, function(){
    ;
  });
}]);
