module("At");

test("test at returns correct value", function() {
  var str = "awesome".at(1);
  equal( str, "w");
});

module("Capitalize");

test("test capitalize returns correct value", function() {
  var str = "this is my sentence".capitalize();
  equal( str, "This is my sentence");
});

module("Currency");

test("test currency returns correct value from string", function() {
  var str = "85.67".currency();
  equal( str, "$85.67");
});

test("test currency returns correct value from string with custom currency type", function() {
  var str = "85.67".currency("£");
  equal( str, "£85.67");
});

test("test currency returns correct value from integer", function() {
  var number = 85; number = number.currency();
  equal( number, "$85.00");
});

module("First");

test("test first returns correct value", function() {
  var str = "jaguar".first(4);
  equal( str, "jagu");
});

module("Last");

test("test last returns correct value", function() {
  var str = "jaguar".last(4);
  equal( str, "guar");
});

module("Parameterize");

test("test parameterize returns correct value", function() {
  var str = "this is my SenteNce".parameterize();
  equal( str, "this-is-my-sentence");
});

module("Titlecase All");

test("test titlecase returns correct value", function() {
  var str = "this is my sentence".titlecase();
  equal( str, "This Is My Sentence");
});

module("Trim");

test("test trim returns correct value", function() {
  var str = " this is    my sentence ".trim();
  equal( str, "this is my sentence");
});

module("Truncate");

test("test truncation retruns correct value", function() {
  var str = "my awesome string".truncate(10);
  equal( str, "my awesome...");
});

test("test truncation returns correct value with custom ending", function() {
  var str = "my awesome string".truncate(10,"[...]");
  equal( str, "my awesome[...]");
});

test("test truncation returns full string if no count passed", function() {
  var str = "my awesome string".truncate();
  equal( str, "my awesome string");
});

test("test truncation returns full string if character count is longer than string", function() {
  var str = "my awesome string".truncate(20);
  equal( str, "my awesome string");
});

module("To String");

test("test to_s converts to string", function() {
  var str = 10.0.to_s();
  equal( str, "10");
});

module("To Integer");

test("test to_i converts to integer form float", function() {
  var str = 10.5.to_i();
  equal( str, 10);
});

test("test to_i converts to integer from string", function() {
  var str = "10.5".to_i();
  equal( str, 10);
});

module("To Float");

test("test to_f converts to float", function() {
  var str = "10.6".to_f();
  equal( str, 10.6);
});

// module("To Array"); //How the fuck do you test arrays?
// 
// test("test to_a converts to array", function() {
//   var str = "test".to_a();
//   equal( str, ["test"]);
// });

module("Any");

test("Test any for string", function() {
  var str = "test".any();
  equal( str, true);
});

test("Test any for empty string", function() {
  var str = "".any();
  equal( str, false);
});

test("Test any for array", function() {
  var str = [1,2,3].any();
  equal( str, true);
});

test("Test any for empty array", function() {
  var str = [].any();
  equal( str, false);
});

test("Test any for object", function() {
  var str = document.getElementsByTagName("body").any();
  equal( str, true);
});

test("Test any for empty object", function() {
  var str = document.getElementsByTagName("blah").any();
  equal( str, false);
});