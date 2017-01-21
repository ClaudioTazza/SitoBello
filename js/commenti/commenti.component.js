angular.
  module('commenti').
  component('commenti', {
    templateUrl: 'js/commenti/commenti.template.html',
    controller: ['$http', '$routeParams', function ($http, $routeParams) {
      var self = this;

      var evId = $routeParams.eventoId;

      $http.get('listacommenti.php', { params: {'evId': evId} }).then(function(response) {
        self.commenti = response.data;
      });
    }],
  });
