'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
  controller('MyCtrl1', ['$scope', function($scope) {

  	$scope.amount = 100;
  	$scope.angularArray = [];
  	$scope.reactArray = [];


  	$scope.createArray = function(a){
  		$scope.startTime = new Date();  		
  		for(var i=0; i<$scope.amount; i++){
  			a.push({text: 'hello'});
  		}
  	};

  	$scope.reset = function(){
  		$scope.angularArray = [];
  		$scope.reactArray = [];
  		$('#results').text("");             
  	};

  }])
  .controller('MyCtrl2', [function() {

  }]);