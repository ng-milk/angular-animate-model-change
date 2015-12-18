/*
 * angular-animate-model-change v0.0.1
 * (c) 2015 Dan Mindru http://mindrudan.com
 * License: MIT
 */

 angular.module('dm.animateModelChange', [])
 .directive('animateModelChange', animateModelChangeDirective);


/*
 * @param <...*> attrs.model: the model to watch for.
 * @param <Int> attrs.timeout: the amount of time after which the animation is reversed.
 * @param <String> attrs.incrementClass: the class to apply when incrementing.
 * @param <String> attrs.decrementClass: the class to apply when decrementing.
* @param <String> attrs.nonNumberClass: the class to apply when the model is not a number.
*/
animateModelChangeDirective.$inject = ['$timeout'];
function animateModelChangeDirective($timeout){
  function animateModelChangeLink(scope, element, attrs){
    var timer = null,
        timeout = (attrs.timeout || getTransitionDuration(element[0], attrs.$normalize)) || 300,
        currentClass = parseClassName(element.attr('class')) || 'model',
        incrementClass = attrs.incrementClass || currentClass + '--increment',
        decrementClass = attrs.decrementClass || currentClass + '--decrement',
        nonNumberClass = attrs.nonNumberClass || currentClass + '--non-number';

    function parseClassName(className){
      // Don't read the ng-* class names on the element.
      var classComps = className.split(' ').filter(function(item){
        if(!(item.indexOf('ng-') > -1)){
          return item;
        }
      });

      return classComps[classComps.length - 1];
    }

    function modelChanged(newVal, oldVal){
      if(newVal !== oldVal){
        // The non-number class will be the default value.
        var changeClass = nonNumberClass;

        // Clear previous timeout.
        if(timer){
          $timeout.cancel(timer);
          timer = null;

          // For very fast clicking to work, it's required to remove classes if a timeout is still active.
          clearClasses();
        }

        // Figure out the correct class name based on the value change.
        if(angular.isNumber(Number(newVal)) && !isNaN(Number(newVal))){
          if(Number(newVal) < Number(oldVal)){
            changeClass = decrementClass;
          } else {
            changeClass = incrementClass;
          }
        }

        // Add class and set a 'remove' timeout.
        element.addClass(changeClass);
        timer = $timeout(function removeCartNumber(){
          clearClasses();
        }, Number(timeout));
      }
    }

    function clearClasses(){
      element.removeClass(incrementClass);
      element.removeClass(decrementClass);
      element.removeClass(nonNumberClass);
    }

    scope.$watch(function(){ return attrs.model; }, modelChanged);
  }

  return {
    replace: true,
    restrict: 'A',
    link: animateModelChangeLink
  };
}


/*
 * @param <Object> computedStyle: an object containing all element computed styles.
 * @param <Function> normalize: a method that converts a given string to a camelCase format.
 *
 * @return <Int>: transition duration in milliseconds.
 */
function getTransitionDuration(element, normalize){
  var prefixes = ' webkit moz ms o khtml'.split(' '),
      result = 0,
      computedStyle = getComputedStyle(element),
      duration,
      delay,
      prefix;

  for(var i = 0; i < prefixes.length; i++){
    prefix = prefixes[i] + '-';

    if(prefixes[i] === ''){
      prefix = '';
    }

    duration = computedStyle[normalize(prefix + 'transition-duration')];

    if(duration){
      duration = (duration.indexOf('ms') >- 1) ? parseFloat(duration) : parseFloat(duration) * 1000;

      // Check if there's a delay.
      delay = computedStyle[normalize(prefix + 'transition-delay' )];

      if(delay){
        duration += (delay.indexOf('ms') >- 1) ? parseFloat(delay) : parseFloat(delay) * 1000;
      }

      result = duration;
      break;
    }
  }

  return result;
}