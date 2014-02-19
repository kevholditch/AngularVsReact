'use strict';

/* Directives */


angular.module('myApp.directives', [])
  .directive('reactRepeater', function() {
    return {
      restrict: 'E',
      link: function(scope, element) {
        scope.$watch('reactArray', function(newVal, oldVal) {
          
          React.renderComponent(ReactResults({
            array: scope.reactArray
          }), document.getElementById('reactResults'));
        }, true);
      }
    }
  });
