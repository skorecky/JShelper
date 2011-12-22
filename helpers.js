(function(){
'use strict';
// Setup variables
var new_string,ending,characters,num,sentence;

// Truncate
// Example: str = "my awesome string"; str.truncate(10);
// Example Returns: "my awesome..."
var truncate = function(characters, ending) {        
  ending = ending ? ending : "...";
  if(characters <= 0 || characters === undefined || characters >= this.length){
    return this.toString();
  } else {
    return this.substring(0,characters) + ending;
  }
};

// Currency
// Example: money = 85; money.currency(); OR money = "85"; money.currency();
// Example Returns: "$85.00"
var currency = function() {
  num = parseFloat(this);
  num = num.toFixed(2);
  return "$"+num.toString();
}

// Capitalize
// Example: str = "my awesome string"; str.capitalize();
// Example Returns: "My awesome string"
var capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

// CapitalizeAll
// Example: str = "my awesome string"; str.capitalizeAll();
// Example Returns: "My Awesome String"
var capitalizeAll = function(){
  sentence = this.split(" ");
  var new_sentence = [];
  for (var i=0; i < sentence.length; i++) {
    new_sentence.push(sentence[i].charAt(0).toUpperCase()+sentence[i].slice(1));
  };
  return new_sentence.join(" ");
}

// Extend String Prototype
String.prototype.truncate=truncate;
String.prototype.currency=currency;
String.prototype.capitalize=capitalize;
String.prototype.capitalizeAll=capitalizeAll;

// Extend Number Prototype
Number.prototype.currency=currency;
}());