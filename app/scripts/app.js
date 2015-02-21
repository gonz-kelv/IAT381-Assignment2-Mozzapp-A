'use strict';

/**
 * @ngdoc overview
 * @name iat381Assignment2MozzappApp
 * @description
 * # iat381Assignment2MozzappApp
 *
 * Main module of the application.
 */
angular
  .module('iat381Assignment2MozzappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
