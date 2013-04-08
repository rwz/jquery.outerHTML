jQuery.outerHTML
================
Returns the html-string representation of jQuery object.

You can also replace the whole element with some html by passing html string as an attribute.

Getter
---

```javascript
$('<div>').addClass('foo').text('bar').outerHTML(); // => "<div class="foo">bar</div>"
$('<a>', { href: '#lol', text: 'wut'}).outerHTML(); // => "<a href="#lol">wut</a>"
```

Setter
---
```javascript
$('#my-element').outerHTML('<div class="foo">bar</div>');
```
