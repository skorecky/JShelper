### About
This light weight (2K min.js) allows you to get some rails style helpers in your
JavaScript projects.

### Documentation

#### at(index)
    "awesome".at(1); // "w"
#### capitalize()
    "my awesome string".capitalize(); // "My awesome string"
#### currency("currency type")
    "85".currency(); // "$85.00"
    cost = 85.67; cost.currency(); // "$85.67"
#### first(length)
    "word".first(3); // "wor"
#### flatten()
    [[1,1],[2,2]].flatten(); // [1,1,2,2]
#### last( length )
    "word".last(3); // "ord"
#### parameterize()
    " my AWesome   string ".parameterize(); // "my-awesome-string"
#### titlecase()
    "my awesome string".titlecase(); // "My Awesome String"
#### trim()
    " my awesome   string ".trim(); // "my awesome string"
#### truncate(length, ending = "...")
    "my awesome string".truncate(10); // "my awesome..."
    "my awesome string".truncate(10,"[...]"); // "my awesome[...]"
#### to_s ()
    10.0.to_s(); // "10"
#### to_i ()
    "10.5".to_i(); // 10
#### to_f ()
    "10.3".to_f(); // 10.3
#### to_a ()
    "test".to_a(); // ["test"]
#### any()
    [1,2,3].any(); // true
    [].any(); // false
    "".any(); // false
    {foo: "bar"}.any() // true

Documentation Page: http://skorecky.github.com/JShelper/

### Testing
The helper.js file is tested with qUinit and you can see the test suite at http://skorecky.github.com/JShelper/test/

This file is also regurally tested at http://jshint.com

### How to Use
Simply include helper.js in your html file before anything that calls it.

    <script type="text/javascript" src="https://raw.github.com/skorecky/JShelper/master/helpers.min.js"></script>

It's written in pure JavaScript so it should work nicely with any JS Framework / Library.