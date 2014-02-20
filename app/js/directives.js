'use strict';

/* Directives */


angular.module('myApp.directives', [])
  .directive('reactRepeater', [function() {
    return {
      restrict: 'E',
      link: function(scope, element) {
        scope.$watch('reactArray', function(newVal, oldVal) {

          React.renderComponent(ReactResults({
            array: scope.reactArray
          }), document.getElementById('reactResults'), function(){

          	var end = new Date();          
          	if (scope.reactArray.length > 0){
        		$('#results').text("## React rendering list took: " + (end - scope.startTime) + " ms");    	
        	}
          });
        }, true);
        
      }
    }
  }])
  .directive('riotRepeater', [function() {
    return {
      restrict: 'E',
      link: function(scope, element) {
        scope.$watch('riotArray', function(newVal, oldVal) {

          var root = $("#riotResults"),
            template = $("[type='html/riot']").html()

            root.empty();
            for(var i = 0; i < scope.riotArray.length; i++) {
              $($.render(template, scope.riotArray[i])).appendTo(root);
            }

            var end = new Date();          
            if (scope.riotArray.length > 0){
              $('#results').text("## Riot rendering list took: " + (end - scope.startTime) + " ms");     
            }
          
        }, true);
        
      }
    }
  }])
 .directive('postRepeatDirective', ['$timeout',  function($timeout) {
 	 return {      
      link: function(scope, element) {
      	
        if (scope.$last){        	
         $timeout(function(){             
             var end = new Date();             
             $('#results').text("## Angular rendering list took: " + (end - scope.startTime) + " ms");                          
         });
       }
      }
    }
  }
]);

