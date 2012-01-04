### About
This light weight (1K min.js) allows you to get some rails style helpers in your JavaScript projects. There are currently only a few to start with but I plan on adding more over time.

### Documentation

#### at
    "awesome".at(1); // "w"
#### capitalize
    "my awesome string".capitalize(); // "My awesome string"
#### currency
    "85".currency(); // "$85.00"
    cost = 85.67; cost.currency(); // "$85.67"
#### first( length )
    "word".first(3); // "wor"
#### last( length )
    "word".last(3); // "ord"
#### parameterize
    " my AWesome   string ".parameterize(); // "my-awesome-string"
#### titlecase
    "my awesome string".titlecase(); // "My Awesome String"
#### trim
    " my awesome   string ".trim(); // "my awesome string"
#### truncate( length,ending = "..." )
    "my awesome string".truncate(10); // "my awesome..."
    "my awesome string".truncate(10,"[...]"); // "my awesome[...]"
    
Documentation Page: http://skorecky.github.com/JShelper/

### Testing
The helper.js file is tested with qUinit and you can see the test suite at http://skorecky.github.com/JShelper/test/

This file is also regurally tested at http://jshint.com

### How to Use
Simply download this repo locally and include helper.js in your html file before anything that calls it. 

    <script type="text/javascript" src="helpers.min.js"></script>
    
It's written in pure JavaScript so it should work nicely with any JS Framework / Library.