var demoTpl = require('../tpls/index2.string');
var commonUtil = require('../utils/common.util.js');
commonUtil.render(demoTpl);

var myApp = angular.module('myApp', ['ui.router']);

myApp.directive('search',function(){
  return {
    restrict: 'E',
    templateUrl:  '/src/scripts/tpls/directiveTpl.html',
    replace: true,
    scope: {},
    controller:function(){

    }
  }
});

myApp.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
});

myApp.config(function($urlMatcherFactoryProvider){
  $urlMatcherFactoryProvider.caseInsensitive(true);//所有路由不区分大小写
});

myApp.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('home', {
      url:'/home',
      templateUrl: '/src/scripts/tpls/ui-router/home.html',
      controller: 'homeController'
    })
    .state('/homeDetail', {
      url:'/homeDetail/:id',
      templateUrl: '/src/scripts/tpls/ui-router/homedetail.html',
      controller: 'homeDetailController'
    })
    .state('mwy', {
      url:'/home',
      templateUrl: '/src/scripts/tpls/ui-router/mwy.html',
      controller: 'mwyController'
    })
    .state('/mwyDetail', {
      url:'/homeDetail/:id',
      templateUrl: '/src/scripts/tpls/ui-router/mwydetail.html',
      controller: 'mwyDetailController'
    })
}]);

//home
myApp.controller('homeController', ['$scope','$state','$http',function($scope,$state, $http){
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
  //     $state.go('homeDetail',{
  //       keywords:$scope.keywords
  //     })
  //   }
  // }
}]);

myApp.controller('homeDetailController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
  $http({
    url: '/mock/mjk.json',
    params: {
      id: $stateParams.id
    },
    method: 'get'
  })
  .then(function(res){
    $scope.products = res.data.data[$stateParams.id-1];
    // for(var i=0;i<res.data.data.length;i++){
    //   if(res.data.data[i].id=$routeParams.id){
    //       $scope.products = res.data.data[i];
    //       // console.log($scope.products);
    //   }
    // }
  }, function(){
    ;
  });
}]);

//mwy
myApp.controller('mwyController', ['$scope','$state','$http',function($scope,$state, $http){
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

myApp.controller('mwyDetailController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http){
  $http({
    url: '/mock/mwy.json',
    params: {
      id: $stateParams.id
    },
    method: 'get'
  })
  .then(function(res){
    $scope.products = res.data.data[$stateParams.id-1];
  }, function(){
    ;
  });
}]);
