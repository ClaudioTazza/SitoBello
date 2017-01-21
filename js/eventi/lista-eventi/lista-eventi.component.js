angular.
  module('eventi').
  component('listaEventi', {
    templateUrl: 'js/eventi/lista-eventi/lista-eventi.template.html',
    controller: function ($http) {
      var self = this;
      //self.ordProp = 'Nome';
      //self.ordProp = 'Luogo';
      self.ordProp = 'Data';

      $http.get('listaeventi.php').then(function(response) {
        self.eventi = response.data;
      });
    },
  });
