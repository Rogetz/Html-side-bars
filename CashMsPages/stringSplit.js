var testString = "[I ,am, a ,man]";

//Trying to slice the string such that it excludes the [] symbol at the begining and the end of the string.
var replacedString = testString.slice(1,testString.length-1);

// split the string accordinng to the symbol passed, the symbol should be part of the initial string.
var splitArray = replacedString.split(",");

var numberTest = 7;
// connverting an int to a string representation.
var stringifiedInt = numberTest.toString();
console.log(stringifiedInt); 
 


splitArray.forEach(function(e,key){
    console.log(e);
});
