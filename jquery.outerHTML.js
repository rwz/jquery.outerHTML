/**
  Returns the html-string representation of jQuery object.
  You can also replace the whole element with some html by passing html string as an attribute.

  Pavel Pravosud <pavel@pravosud.com>
  Licensed under MIT license in 2012
  https://github.com/rwz/jquery.outerHTML
 */


(function ($) {
  'use strict';

  var jdiv = $('<div>'), div = jdiv.get(0);

  var getter = ('outerHTML' in div) ?
    // native support
    function(){ return this.get(0).outerHTML; } :

    // no native support
    function(){ return jdiv.html(this.first().clone()).html(); };

  $.fn.outerHTML = function(){
    return arguments.length ?
      this.replaceWith.apply(this, arguments) :
      getter.call(this);
  };

}(jQuery));