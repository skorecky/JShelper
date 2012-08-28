(function(){
'use strict';
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
var currency = function(currencyType) {
  var num = parseFloat(this);
  num = num.toFixed(2);
  if(currencyType){
    return currencyType+num.toString();
  } else {
    return "$"+num.toString(); 
  }
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
  var string = this.trim();
  return string.replace(/\s+/g,"-").toLowerCase();
};

// Titlecase
// Example: "my awesome string".titlecase();
// Example Returns: "My Awesome String"
var titlecase = function(){
  var sentence = this.split(" ");
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
  var string = this.replace(/^\s+/,"");
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

// To String
// Example: 10.0.to_s();
// Example Returns: "10"
var to_s = function(){
  return this.toString();
}

// To Integer
// Example: "10.5".to_i();
// Example Returns: 10
var to_i = function(){
  return parseInt(this);
}

// To Float
// Example: "10.4".to_f();
// Example Returns: "10.4"
var to_f = function(){
  return parseFloat(this);
}

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
String.prototype.to_i=to_i;
String.prototype.to_f=to_f;

// Extend Number Prototype
Number.prototype.currency=currency;
Number.prototype.to_s=to_s;
Number.prototype.to_i=to_i;
Number.prototype.to_f=to_f;
})();