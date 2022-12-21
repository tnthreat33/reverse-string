function reverseString(str) {
  let letterArray = str.split('');
  let reverseArray = [];
  for(let i=0; i< letterArray.length; i++){
      reverseArray.push(letterArray[letterArray.length-1-i]);
  }
  let reverseWord = reverseArray.join('');
  return reverseWord;
}

if (require.main === module) {
  // add your own tests in here
console.log("Expecting: 'rachel")
console.log("=>" , reverseString("lehcar"))

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// rewrite question
  //take a string(word) reverse the word so when the function is run it gives the arguement in reverse

  //* Please add your pseudocode to this file
//assign a new array to the hold the letters of the reverse word
//split the word into individual characters
//add those characters to the new array
//reverse the array
//join the array back together to create the new word
//the output is the new word 


// And a written explanation of your solution
