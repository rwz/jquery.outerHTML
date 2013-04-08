jQuery.outerHTML
================
Returns the html-string representation of jQuery object.

You can also replace the whole element with some html by passing html string as an attribute.

Getter
---

`$('<div>').addClass('foo').text('bar').outerHTML(); # '<div class="foo">bar</div>'`

Setter
---
`$('#my-element').outerHTML('<div class="foo">bar</div>');`
