# serializeObject
it is not just another serializeObject plugin, it extend simple serializeObject to catch array of inputs
```html
<form>
<input type="text" name="INP_T" value="TEXT">
<input type="checkbox" name="INP_CH[A]" value="1">
<input type="checkbox" name="INP_CH[B]" value="2">
<input type="checkbox" name="INP_CH[C]" value="3">
</form>
```

``` javascript
var s = $('form').serializeObject();

/*
s = {
  "INP_T" : "TEXT",
  "INP_CH" : {
    "A":"1",
    "B":"2",
    "C":"3"
  }
};
*/
```

