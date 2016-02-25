'use strict';

angular.module('myApp.tfIdfForm', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'tfIdfForm/tfIdfForm.html',
    controller: 'TfIdfFormCtrl'
  });
}])

.controller('TfIdfFormCtrl', [function() {

}]);
