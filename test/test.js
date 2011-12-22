module("Truncate");

test("test truncation retruns correct value", function() {
  var str = "my awesome string"; str = str.truncate(10);
  equal( str, "my awesome...");
});

test("test truncation returns correct value with custom ending", function() {
  var str = "my awesome string"; str = str.truncate(10,"[...]");
  equal( str, "my awesome[...]");
});

test("test truncation returns full string if no count passed", function() {
  var str = "my awesome string"; str = str.truncate();
  equal( str, "my awesome string");
});

test("test truncation returns full string if character count is longer than string", function() {
  var str = "my awesome string"; str = str.truncate(20);
  equal( str, "my awesome string");
});

module("Currency");

test("test currency returns correct value from string", function() {
  var str = "85.67"; str = str.currency();
  equal( str, "$85.67");
});

test("test currency returns correct value from integer", function() {
  var number = 85; number = number.currency();
  equal( number, "$85.00");
});

module("Capitalize");

test("test capitalize returns correct value", function() {
  var str = "this is my sentence"; str = str.capitalize();
  equal( str, "This is my sentence");
});

module("Capitalize All");

test("test capitalize all returns correct value", function() {
  var str = "this is my sentence"; str = str.capitalizeAll();
  equal( str, "This Is My Sentence");
});

