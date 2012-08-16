/**
  Returns the html-string representation of jQuery object.
  You can also replace the whole element with some html by passing html string as an attribute.

  Pavel Pravosud <pavel@pravosud.com>
  Licensed under MIT license in 2012
  https://github.com/rwz/jquery.outerHTML
 */


(function ($) {
  'use strict';

  var getter;

  if ('outerHTML' in $('<div>').get(0)) {
    // native support
    getter = function(){ return this.get(0).outerHTML; }
  } else {
    // no native support
    getter = function(){
      return $('<div>').append(this.first().clone()).html();
    };
  }

  $.fn.outerHTML = function(){
    if (arguments.length)
      return this.replaceWith.apply(this, arguments);
    else
      return getter.call(this);
  };

}(jQuery));