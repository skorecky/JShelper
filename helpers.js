(function(){
'use strict';
// Setup variables
var new_string,ending,characters,num,sentence,string,param;

// At
// Example: "hello".at(2)
// Example Returns: "e"
var at = function(at){
  return this.substr((at),1);
};

// Capitalize
// Example: "my awesome string".capitalize();
// Example Returns: "My awesome string"
var capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// Currency
// Example: num = 85; num.currency(); OR "85".currency();
// Example Returns: "$85.00"
var currency = function() {
  num = parseFloat(this);
  num = num.toFixed(2);
  return "$"+num.toString();
};

// First
// Example: "hello".first(3)
// Example Returns: "hel"
var first = function(limit){
  return this.substr(0,limit);
};

// Last
// Example: "hello".last(3)
// Example Returns: "llo"
var last = function(limit){
  return this.slice(-limit);
};

// Parameterize
// Example: "hello world".parameterize()
// Example Returns: "hello-world"
var parameterize = function(){
  string = this.trim();
  return string.replace(/\s+/g,"-").toLowerCase();
};

// Titlecase
// Example: "my awesome string".titlecase();
// Example Returns: "My Awesome String"
var titlecase = function(){
  sentence = this.split(" ");
  var new_sentence = [];
  for (var i=0; i < sentence.length; i++) {
    new_sentence.push(sentence[i].charAt(0).toUpperCase()+sentence[i].slice(1));
  }
  return new_sentence.join(" ");
};

// Trim
// Example: " hello  world ".trim()
// Example Returns: "hello world"
var trim = function(){
  string = this.replace(/^\s+/,"");
  string = string.replace(/\s+$/,"");
  return string.replace(/\s+/g," ");
};

// Truncate
// Example: "my awesome string".truncate(10);
// Example Returns: "my awesome..."
var truncate = function(characters, ending) {        
  ending = ending ? ending : "...";
  if(characters <= 0 || characters === undefined || characters >= this.length){
    return this.toString();
  } else {
    return this.substring(0,characters) + ending;
  }
};

// Params
// Example URL: http://example.com/?test=blah
// Example: window.location.params("test")
// Example Returns: "blah"
window.location.params = function(param) {
  param = param.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if(results === null){
    return "";
  } else {
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }
};

// Extend String Prototype
String.prototype.at=at;
String.prototype.capitalize=capitalize;
String.prototype.currency=currency;
String.prototype.first=first;
String.prototype.last=last;
String.prototype.parameterize=parameterize;
String.prototype.titlecase=titlecase;
String.prototype.trim=trim;
String.prototype.truncate=truncate;

// Extend Number Prototype
Number.prototype.currency=currency;
})();