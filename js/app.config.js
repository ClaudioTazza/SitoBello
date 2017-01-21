angular.
  module('eventiApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<lista-eventi></lista-eventi>'
        }).
        when('/eventi', {
          template: '<lista-eventi></lista-eventi>'
        }).
        when('/commenti/:eventoId', {
          template: '<commenti></commenti>'
        }).
        otherwise('/');
    }
  ]);
