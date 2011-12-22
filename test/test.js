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

module("Titlecase All");

test("test titlecase returns correct value", function() {
  var str = "this is my sentence".titlecase();
  equal( str, "This Is My Sentence");
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