module("At");

test("test at returns correct value", function() {
  var str = "awesome";
  deepEqual( str.at(1), "w");
});

module("Capitalize");

test("test capitalize returns correct value", function() {
  var str = "this is my sentence";
  deepEqual( str.capitalize(), "This is my sentence");
});

module("Currency");

test("test currency returns correct value from string", function() {
  var str = "85.67";
  deepEqual( str.currency(), "$85.67");
});

test("test currency returns correct value from string with custom currency type", function() {
  var str = "85.67";
  deepEqual( str.currency("£"), "£85.67");
});

test("test currency returns correct value from integer", function() {
  var number = 85;
  deepEqual( number.currency(), "$85.00");
});

module("First");

test("test first returns correct value", function() {
  var str = "jaguar";
  deepEqual( str.first(4), "jagu");
});

module("Last");

test("test last returns correct value", function() {
  var str = "jaguar";
  deepEqual( str.last(4), "guar");
});

module("Parameterize");

test("test parameterize returns correct value", function() {
  var str = "this is my SenteNce";
  deepEqual( str.parameterize(), "this-is-my-sentence");
});

module("Titlecase All");

test("test titlecase returns correct value", function() {
  var str = "this is my sentence";
  deepEqual( str.titlecase(), "This Is My Sentence");
});

module("Trim");

test("test trim returns correct value", function() {
  var str = " this is    my sentence ";
  deepEqual( str.trim(), "this is my sentence");
});

module("Truncate");

test("test truncation retruns correct value", function() {
  var str = "my awesome string";
  deepEqual( str.truncate(10), "my awesome...");
});

test("test truncation returns correct value with custom ending", function() {
  var str = "my awesome string";
  deepEqual( str.truncate(10,"[...]"), "my awesome[...]");
});

test("test truncation returns full string if no count passed", function() {
  var str = "my awesome string";
  deepEqual( str.truncate(), "my awesome string");
});

test("test truncation returns full string if character count is longer than string", function() {
  var str = "my awesome string";
  deepEqual( str.truncate(20), "my awesome string");
});

module("To String");

test("test to_s converts to string", function() {
  var num = 10.0;
  deepEqual( num.to_s(), "10");
});

module("To Integer");

test("test to_i converts to integer form float", function() {
  var num = 10.5;
  deepEqual( num.to_i(), 10);
});

test("test to_i converts to integer from string", function() {
  var str = "10.5";
  deepEqual( str.to_i(), 10);
});

module("To Float");

test("test to_f converts to float", function() {
  var str = "10.6";
  deepEqual( str.to_f(), 10.6);
});

module("To Array");

test("test to_a converts to array", function() {
  var str = "test"
  deepEqual( str.to_a(), ['test']);
});

module("Flatten");

test("Flattens an array.", function() {
  var arr = [[1,1],[2,2],[3,3]];
  deepEqual( arr.flatten(), [1,1,2,2,3,3]);
});

module("Any");

test("Test any for string", function() {
  var str = "test";
  deepEqual( str.any(), true);
});

test("Test any for empty string", function() {
  var str = "";
  deepEqual( str.any(), false);
});

test("Test any for array", function() {
  var arr = [1,2,3];
  deepEqual( arr.any(), true);
});

test("Test any for empty array", function() {
  var arr = [];
  deepEqual( arr.any(), false);
});

test("Test any for object", function() {
  var obj = {foo: "bar"};
  deepEqual( obj.any(), true);
});

test("Test any for empty object", function() {
  var obj = {};
  deepEqual( obj.any(), false);
});