//
// $(document).ready(function(){
//   $("input").submit(function(){
// var firstName = $(".firstName").val()
// var lastName = $(".lastName").val()
// var sentence = (firstName, lastName)
//
//  function firstLetter(firstName){
//
//  var firstLetter1 = firstName.charAt(0).toUpperCase();
//  var process =
// console.log(0);
// console.log (firstName);
// }
// });
// });
$(document).ready(function(){
var sentence = prompt("Hey whats your sentence")
function capitalizeLetter(){
  var sentence1 = sentence.charAt(0).toUpperCase();
  console.log(sentence1)
}
function capitalizeLast(){
  var sentence3 = sentence.charAt(sentence.length-1).toUpperCase();
  console.log(sentence3);
}

// var sentence = prompt("Hey whats your sentence")
// var array = []
// var okok = array.push(sentence)
// function stringReverse(){
//   array.reverse();
// //var sentence1 = sentence.charAt(0).toUpperCase();
// //var sentence2 = sentence.slice(1,sentence.length-1);
// //var sentence3 = sentence.charAt(sentence.length-1).toUpperCase();
// //var sentence4 = ;
// //});
// // console.log(sentence1 + sentence2 + sentence3)
// console.log(okokok)
// stringReverse("okokok");
capitalizeLast()
capitalizeLetter()
});
