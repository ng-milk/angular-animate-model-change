/*
 * angular-animate-model-change v0.0.1
 * (c) 2015 Dan Mindru http://mindrudan.com
 * License: MIT
 */

angular.module('dm.animateModelChange', [])
       .directive('animateModelChange', animateModelChangeDirective);


/* #@todo
 * @param <...*> attrs.model: the model to watch for.
 * @param <Int> attrs.timeout: the amount of time after which the animation is reversed.
 * @param <String> attrs.defaultClass: the class to apply when the model is not a number (defaults to increment class).
 * @param <String> attrs.incrementClass: the class to apply when incrementing.
 * @param <String> attrs.decrementClass: the class to apply when decrementing.
 */
animateModelChangeDirective.$inject = ['$timeout'];
function animateModelChangeDirective($timeout){
  function animateModelChangeLink(scope, element, attrs){
    var timeout = attrs.timeout || 500,
        currentClass = element.className || 'model',
        incrementClass = attrs.incrementClass || currentClass + '--increment',
        decrementClass = attrs.decrementClass || currentClass + '--decrement',
        defaultClass = incrementClass || currentClass+ '--increment';

    function modelChanged(newVal, oldVal){
      if(newVal !== oldVal){
        var changeClass = defaultClass;

        // Figure out the correct class name based on the value change.
        if(angular.isNumber(newVal)){
          if(newVal < oldVal){
            changeClass = incrementClass;
          } else {
            changeClass = decrementClass;
          }
        }

        // Add class and set remove timeout.
        element.addClass(changeClass);
        $timeout(function removeCartNumber(){
          element.removeClass(changeClass);
        }, Number(timeout));
      }
    }

    scope.$watch(function(){ return attrs.model; }, modelChanged);
  }

  return {
    replace: true,
    restrict: 'A',
    link: animateModelChangeLink
  };
}