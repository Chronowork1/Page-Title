//Given: Sentence String
//Return: String
//Goal: Given the sentence string, return the string palindrome with the most characters
function findLongestPalindrome(sentence){
  //Split the sentences into words
  let words = sentence.split(" ");
  //Declare an empty array to store palidrome value
  let palindromes = [];
  //Iterate through the arrays of word
  for(var i = 0; i < words.length; i++){
    //Alias
    let word = words[i];
    //If word is a palidrome push it to palindromes array
    if(isPalindrome(word)){
      palindromes.push(word);
    }
  }
  //Sort the array from least to greatest characters
  let sortedPalindomes = palindromes.sort(sortAscendingByLength);
  //Return the palindrome with the most characters
  return sortedPalindomes.pop();
}

//Given: String
//Return: String
//Goal: Given a string return the value in reverse
function reverseString(string){
  return string.split("").reverse().join("");
}

//Given: String
//Return: Boolean
//Goal: Determine if a string is a palindrome meaning if the letter is the same forward and backwards
function isPalindrome(word){
  //If the word is the same with the callback function reverseString return true else return false
  if(word === reverseString(word)){
    return true;
  }else{
    return false;
  }
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}

//Assertion function
function assertion(actual, expected, testName){
  if(actual === expected){
    console.log("Passed");
  }else{
    console.log('FAILED ['+testName+'] Expected "'+expected+'"but got "'+actual+'"');
  }
}

// TESTS CASES
let palindrome_test = "level";
let non_palindrome_test = "reticulated";

let palindrome_test_result = isPalindrome(palindrome_test);
assertion(palindrome_test_result, true, "should return palindrome");

let non_palindrome_test_result = isPalindrome(non_palindrome_test);
assertion(non_palindrome_test_result, false, "should return non-palindrome");

let resultOfReverse = "candy";
assertion(reverseString(resultOfReverse), "ydnac", "should return the reverse of the following stirng");

let resultOfFindLongest = "a cute racecar went down to eye stettets";
assertion(findLongestPalindrome(resultOfFindLongest), "stettets", "should return the longest palindrome");