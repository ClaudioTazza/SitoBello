angular.
  module('eventi').
  component('commenti', {
    templateUrl: 'js/eventi/commenti/commenti.template.html',
    controller: ['$http', '$routeParams', function ($http, $routeParams) {
      var self = this;

      var evId = $routeParams.eventoId;

      $http.get('listacommenti.php', { params: {'evId': evId} }).then(function(response) {
        self.evento = response.data.shift();
        console.log(self.evento);
        self.commenti = response.data;
      });
    }],
  });
