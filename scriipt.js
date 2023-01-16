/* have the function Consecutive(arr) take the array of integers stored in arr and return the minimum 
 Number of integers needed to make the contents of arr consecutive from the lowest number to the highest number.
 For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to be added to the 
 array (5 and 7) to make it a consecutive array of numbers from 4 to 8.
 Negative numbers may be entered as parameters and no array will have less than 2 elements. 
 */
/*
const arr = [4, -2, 2, 10, 8, 6];
const sortedArr = arr.sort((a, b) => a - b); // [-2,]
console.log(sortedArr);
let count = 0;
if (arr.length > 2) {
  for (let i = sortedArr[0]; i <= sortedArr[sortedArr.length - 1]; i++) {
    // i = -2 to i = 4
    if (sortedArr.includes(i)) {
      continue;
    } else {
      count++;
    }
  }
}
console.log(count);
*/

/*  have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2,
 and return the result as a string with properly formatted commas and 4 significant digits after the decimal place. 
 For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789".
 The output must contain a number in the one's place even if it is a zero.
 */

/*
const num1 = 123456789;
const num2 = 100;
const result = (num1 / num2).toFixed(4).split(".");
const number = Number(result[0]).toLocaleString();
console.log(number + "." + result[1]);
*/

/* Have the function letterChanges(str) take the str parameter being passed and
 * modify it using the following algorithm. Replace every letter in the string
 * with the letter following it in the alphabet (ie. c becomes d, z becomes a).
 * Then capitalize every vowel in this new string (a, e, i, o, u) and finally
 * return this modified string.
 * */
/*
str = "fdsofz";
function letterChanges(str) {
  str1 = [];
  pattern = /[0-9_.,!"'/$]/g;
  arr = ["a", "i", "e", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "z") {
      str1.push("a");
    } else if (pattern.test(str[i])) {
      str1.push(str[i]);
    } else {
      str1.push(String.fromCharCode(Number(str.charCodeAt(i) + 1)));
    }
    if (arr.includes(str1[i])) {
      console.log("ok");
      str1[i] = str1[i].toUpperCase();
    }
  }
  return str1.join("");
}
console.log(letterChanges("85451234"));
*/
// test Cases : zxz, abc, 85451234_zabc%$!#4, zab, zdhnt, QUICK brown FOX jumped OVER

/* Have the function letterCountI(str) take the str parameter being passed and
 * return the first word with the greatest number of repeated letters. For
 * example: "Today, is the greatest day ever!" should return greatest because it
 * has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there
 * are no words with repeating letters return -1. Words will be separated by
 * spaces.
 */

/*
function letterCountI(str) {
  pattern = /[_.,!"'/$]/g;
  var arr = [];
  var count;
  str1 = str.replace(pattern, "").split(" ");
  for (let i = 0; i < str1.length; i++) {
    count = 0;
    for (let j = 0; j < str1[i].length - 1; j++) {
      for (let k = j + 1; k < str1[i].length; k++) {
        if (str1[i][j] === str1[i][k]) {
          count++;
        }
      }
    }
    if (count > 0) {
      return str1[i];
    }
  }
  if (count == 0) {
    return -1;
  }
}
console.log(letterCountI("abc zzzzfdaf mmmmadffad"));
*/

/*
 * Have the function swapCase(str) take the str parameter and swap the case of
 * each character. For example: if str is "Hello World" the output should be
 * hELLO wORLD. Let numbers and symbols stay the way they are.
 */

/*
function swapCase(str) {
  str1 = [...str];
  pattern1 = /[a-z]/;
  pattern2 = /[A-Z]/;
  output = "";
  for (let i = 0; i < str1.length; i++) {
    if (pattern2.test(str1[i])) {
      output += str1[i].toLowerCase();
    } else if (pattern1.test(str1[i])) {
      output += str1[i].toUpperCase();
    } else {
      output += str1[i];
    }
  }
  return output;
}
console.log(swapCase("fAbRVvvE"));
*/

/**
 * Have the function simpleSymbols(str) take the str parameter being passed and
 * determine if it is an acceptable sequence by either returning the string true
 * or false. The str parameter will be composed of + and = symbols with several
 * letters between them (ie. ++d+===+c++==a) and for the string to be true each
 * letter must be surrounded by a + symbol. So the string to the left would be
 * false. The string will not be empty and will have at least one letter.
 * */

/*
function simpleSymbols(str) {
  regex = /[a-zA-Z]/;
  flag = 0;
  for (let i = 1; i < str.length - 1; i++) {
    if (str > 0) {
      if (str[i - 1] == "+" && regex.test(str[i]) && str[i + 1] == "+") {
        console.log(str[i]);
        flag = 1;
      }
    } else {
      flag = 0;
    }
  }
  if (flag == 0) {
    return false;
  }
  return true;
}
console.log(simpleSymbols(""));
*/

/* Have the function thirdGreatest(strArr) take the array of strings stored in
 * strArr and return the third largest word within in. So for example: if strArr
 * is ["hello", "world", "before", "all"] your output should be world because
 * "before" is 6 letters long, and "hello" and "world" are both 5, but the
 * output should be world because it appeared as the last 5 letter word in the
 * array. If strArr was ["hello", "world", "after", "all"] the output should be
 * after because the first three words are all 5 letters long, so return the
 * last one. The array will have at least three strings and each string will
 * only contain letters.
 */

/*
function thirdGreatest(strArr) {
  max = strArr.sort((a, b) => b.length - a.length);
  return max[2];
}
console.log(thirdGreatest(["hello", "world", "after", "all"]));
*/

/* Have the function timeConvert(num) take the num parameter being passed and
 * return the number of hours and minutes the parameter converts to (ie. if num
 * = 63 then the output should be 1:3). Separate the number of hours and minutes
 * with a colon.
 */

/*
function timeConvert(num) {
  hours = `'${Math.trunc(num / 60).toString()}:${(num % 60).toString()}'`;
  console.log(hours);
}
timeConvert(120);
*/

/*Have the function vowelCount(str) take the str string parameter being passed
 * and return the number of vowels the string contains (ie. "All cows eat grass
 * and moo" would return 8). Do not count y as a vowel for this challenge.
 */

/*
function vowelCount(strArr) {
  regex = /[aeiouAEIOU]/;
  count = 0;
  for (let i = 0; i < strArr.length; i++) {
    if (regex.test(strArr[i])) {
      count++;
    }
  }
  return count;
}
console.log(vowelCount(""));
*/

/* Have the function wordCount(str) take the str string parameter being passed
 * and return the number of words the string contains (e.g. "Never eat shredded
 * wheat or cake" would return 6). Words will be separated by single spaces.
 * */

/*
function wordCount(str) {
  strArr = str.split(" ");
  return strArr.length;
}
console.log(wordCount("foo"));
*/

/***********************************************MEDIUM LEVEL CHALLENGES*************************************************/

/**
 * Using the JavaScript language, have the function arrayMinJumps(arr) take the
 * array of integers stored in arr, where each integer represents the maximum
 * number of steps that can be made from that position, and determine the least
 * amount of jumps that can be made to reach the end of the array. For example:
 * if arr is [1, 5, 4, 6, 9, 3, 0, 0, 1, 3] then your program should output the
 * number 3 because you can reach the end of the array from the beginning via
 * the following steps: 1 -> 5 -> 9 -> END or 1 -> 5 -> 6 -> END. Both of these
 * combinations produce a series of 3 steps. And as you can see, you don't
 * always have to take the maximum number of jumps at a specific position, you
 * can take less jumps even though the number is higher.
 * */

/*
function arrayMinJumps(arr, n) {
  // Base case: when source and
  // destination are same
  if (n == 1) return 0;

  // Traverse through all the points
  // reachable from arr[l]
  // Recursively, get the minimum number
  // of jumps needed to reach arr[h] from
  // these reachable points
  let res = Number.MAX_VALUE;
  for (let i = n - 2; i >= 0; i--) {
    // i=13,
    if (i + arr[i] >= n - 1) {
      // 13+1 >= 14
      let sub_res = arrayMinJumps(arr, i + 1);
      if (sub_res != Number.MAX_VALUE) res = Math.min(res, sub_res + 1);
    }
  }

  return res;
}
arr = [1, 3, 6, 8, 2, 7, 1, 2, 1, 2, 6, 1, 2, 1, 2];
n = arr.length;
console.log(arrayMinJumps(arr, n));
*/

/* Using the JavaScript language, have the function preorderTraversal(strArr)
 * take the array of strings stored in strArr, which will represent a binary
 * tree with integer values in a format similar to how a binary heap is
 * implemented with NULL nodes at any level represented with a #. Your goal is
 * to return the pre-order traversal of the tree with the elements separated by
 * a space. For example: if strArr is ["5", "2", "6", "1", "9", "#", "8", "#",
 * "#", "#", "#", "4", "#"] then this tree looks like the following tree:
 */

/*
function preorderTraversal(strArr) {
  const preOrderArr = preorder(strArr);
  return preOrderArr.join(" ");
}
function preorder(strArr, index = 0) {
  let current = strArr[index];
  if (index >= strArr.length - 1 || current === "#") {
    return [];
  }
  const left = preorder(strArr, 2 * index + 1);
  const right = preorder(strArr, 2 * index + 2);
  const nodes = [];
  nodes.push(current, ...left, ...right);
  return nodes;
}
console.log(
  preorderTraversal([
    "5",
    "2",
    "6",
    "1",
    "9",
    "#",
    "8",
    "#",
    "#",
    "#",
    "#",
    "4",
    "#",
  ])
);
*/

/*<!-- // Character Removal
// Have the function CharacterRemoval(strArr) read the array of strings stored in strArr, which will
contain 2 elements: the first element will be a sequence of characters representing a word, and the
second element will be a long string of comma-separated words, in alphabetical order, that represents
a dictionary of some arbitrary length. For example: strArr can be:
["worlcde", "apple,bat,cat,goodbye,hello,yellow,why,world"]. Your goal is to determine the minimum
number of characters, if any, can be removed from the word so that it matches one of the words from
the dictionary. In this case, your program should return 2 because once you remove the characters "c"
and "e" you are left with "world" and that exists within the dictionary. If the word cannot be found
no matter what characters are removed, return -1.
Examples
Input: ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]
Output: 4
Input: ["apbpleeeef", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"]->8 -->
*/

/*
function CharacterRemoval(strArr) {
  firstElement = strArr[0];
  secondElement = strArr[1].split(",").sort((a, b) => a.length - b.length);
  let min = Number.MAX_VALUE;
  for (let i = 0; i < secondElement.length; i++) {
    elementArr = secondElement[i];
    let newElement = firstElement;
    for (let j = 0; j < elementArr.length; j++) {
      index = newElement.indexOf(elementArr[j]);
      newElement =
        newElement.slice(0, index) +
        newElement.slice(index + 1, newElement.length);
      console.log(newElement);
    }
    if (min > newElement.length) {
      min = newElement.length;
    }
  }
  if (min == Number.Max_VALUE) {
    return -1;
  }
  return min;
}
console.log(
  CharacterRemoval(["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"])
);
*/

/**
 * Have the function primeTime(num) take the num parameter being passed and
 * return the string true if the parameter is a prime number, otherwise return
 * the string false. The range will be between 1 and 2^16.
 * return {string}
 */

/*
function primeTime(num) {
  for (let i = 2, max = Math.floor(num / 2); i <= max; i++) {
      if (num % i === 0) {
          // divisible!  not prime
          return 'false';
      }
  }
  return 'true';
}

function primeTime(num) {
  for (let i = 2; i < 9; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(primeTime(89));
*/

// For this challenge you will be determining the largest number of unique characters between two letters.
/*
have the function MatchingCharacters(str) take the str parameter being passed and determine 
the largest number of unique characters that exists between a pair of matching letters anywhere 
in the string. For example: if str is "ahyjakh" then there are only two pairs of matching letters,
the two a's and the two h's. Between the pair of a's there are 3 unique characters: h, y, and j. 
Between the h's there are 3 unique characters: y, j, a, and k. So for this example your program should return 4.
Another example: if str is "ghececgkaem" then your program should return 5 because the most unique characters
 exists within the farthest pair of e characters. The input string may not contain any character pairs, and in 
 that case your program should just return 0. The input will only consist of lowercase alphabetic characters.
*/

/*
function MatchingCharacters(str) {
  strArr = [...str];
  arr = [];
  const word = [
    strArr.map((el, i) => {
      for (j = i + 1; j < strArr.length; j++) {
        if (el === strArr[j]) {
          arr.push(j - 1 - i);
          break;
        }
      }
    }),
  ];
  maxUniqueCharacter = arr.sort((a, b) => b - a);
  if (arr.length === 0) {
    return -1;
  }
  return maxUniqueCharacter[0];
}
console.log(MatchingCharacters("mmmerme"));
*/

/*Have the function MinWindowSubstring(strArr) take the array of strings stored in strArr, which will contain only
two strings, the first parameter being the string N and the second parameter being a string K of some characters, 
and your goal is to determine the smallest substring of N that contains all the characters in K. For example:
if strArr is ["aaabaaddae", "aed"] then the smallest substring of N that contains the characters a, e, and d 
is "dae" located at the end of the string. So for this example your program should return the string dae.

Another example: if strArr is ["aabdccdbcacd", "aad"] then the smallest substring of N that contains all of the
characters in K is "aabd" which is located at the beginning of the string. Both parameters will be strings ranging
in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings 
will only contains lowercase alphabetic characters.
Examples
Input: ["ahffaksfajeeubsne", "jefaa"]
Output: aksfaje
Input: ["aaffhkksemckelloe", "fhea"]
Output: affhkkse
*/

/*
function MinWindowSubstring(strArr) {
  const [firstStr, secondStr] = strArr;
  arr = [];
  for (let i = 0; i < firstStr.length; i++) {
    for (let j = secondStr.length - 1 + i; j < firstStr.length; j++) {
      strLen = secondStr.length;
      const subStr = firstStr.slice(i, j + 1);
      let newStr = [...subStr];
      for (let k = 0; k < secondStr.length; k++) {
        if (newStr.includes(secondStr[k])) {
          strLen--;
          index = newStr.indexOf(secondStr[k]);
          editedStr = newStr.splice(index, 1);
          // console.log(newStr);
        }
      }
      if (strLen <= 0) {
        arr.push(subStr);
      }
    }
  }
  result = arr.sort((a, b) => a.length - b.length);
  return result[0];
}

console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));
*/

/*For this challenge you will determine how to order an array of numbers consecutively.
  have the function Consecutive(arr) take the array of integers stored in arr and return the minimum
  number of integers needed to make the contents of arr consecutive from the lowest number to the highest
  number. For example: If arr contains [4, 8, 6] then the output should be 2 because two numbers need to
  be added to the array (5 and 7) to make it a consecutive array of numbers from 4 to 8. Negative numbers
  may be entered as parameters and no array will have less than 2 elements. */

/*
function Consecutive(arr) {
  let sortArr = arr.sort((a, b) => a - b);
  let minNum = sortArr[0];
  let maxNum = sortArr[sortArr.length - 1];
  count = 0;
  for (let i = minNum; i < maxNum; i++) {
    if (!sortArr.includes(i)) {
      count++;
    }
  }
  return count;
}
console.log(Consecutive([4, 8, 6]));
*/

/* have the function FormattedDivision(num1,num2) take both parameters being passed, divide num1 by num2,
 and return the result as a string with properly formatted commas and 4 significant digits after the decimal
  place. For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345.6789". The output
  must contain a number in the one's place even if it is a zero. 
*/

/*
function FormattedDivision(num1, num2) {
  const result = String((num1 / num2).toFixed(4)).split(".");
  resultStr = Number(result[0]).toLocaleString();
  console.log(resultStr + "." + result[1]);
}
FormattedDivision(123456789, 10000);
*/

/* For this challenge you will be manipulating a string using dashes (-).
have the function DashInsertII(str) insert dashes ('-') between each two odd numbers and insert asterisks ('*')
between each two even numbers in str. For example: if str is 4546793 the output should be 454*67-9-3. Don't
count zero as an odd or even number. 
*/

/*
function DashInsertII(str) {
  newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "0" ||
      str[i + 1] === "0" ||
      str[str.length - 1] === str[i]
    ) {
      newStr += str[i];
    } else if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
      newStr += str[i] + "*";
    } else if (str[i] % 2 !== 0 && str[i + 1] % 2 !== 0) {
      newStr += str[i] + "-";
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}
console.log(DashInsertII("45406793"));
*/

/*For this challenge you will be manipulating numbers in a string based on the characters.
have the function SwapII(str) take the str parameter and swap the case of each character. Then,
if a letter is between two numbers (without separation), switch the places of the two numbers.
For example: if str is "6Hello4 -8World, 7 yes3" the output should be 4hELLO6 -8wORLD, 7 YES3. 
*/

/*
function SwapII(str) {
  regexLow = /[a-z]/;
  regexHigh = /[A-Z]/;
  regexNum = /[0-9]/;
  newStr = [];
  strArr = str.split(" ");
  for (let j = 0; j < strArr.length; j++) {
    el = strArr[j].split("");
    if (regexNum.test(el[0]) && regexNum.test(el[el.length - 1])) {
      let temp = el[0];
      el[0] = el[el.length - 1];
      el[el.length - 1] = temp;
    }
    for (let i = 0; i < el.length; i++) {
      if (regexLow.test(el[i]) && el[i] !== Number) {
        newStr.push(el[i].toUpperCase());
      } else if (regexHigh.test(el[i]) && el[i] !== Number) {
        newStr.push(el[i].toLowerCase());
      } else {
        newStr.push(el[i]);
      }
    }
    newStr.push(" ");
  }
  finalStr = newStr.join("");
  return finalStr;
}
console.log(SwapII("6Hello45 -8World, 74 1yes3"));
*/

/*For this challenge you will transform a string using the Caesar Cipher.
have the function CaesarCipher(str,num) take the str parameter and perform a Caesar Cipher shift
on it using the num parameter as the shifting number. A Caesar Cipher works by shifting each letter
in the string N places down in the alphabet (in this case N will be num). Punctuation, spaces, and 
capitalization should remain intact. For example if the string is "Caesar Cipher" and num is 2 the
output should be "Ecguct Ekrjgt". 
*/

/*
function CaesarCipher(str, num) {
  newStr = "";
  regex = /[a-zA-Z]/;
  for (let i of str) {
    if (i === "z") {
      newStr += String.fromCharCode(96 + num);
    } else if (i === "Z") {
      newStr += String.fromCharCode(64 + num);
    } else if (regex.test(i)) {
      newStr += String.fromCharCode(i.charCodeAt() + num);
    } else {
      newStr += i;
    }
  }
  return newStr;
}
console.log(CaesarCipher("Caesar CipherzZ", 2));
*/

/* have the function TripleDouble(num1,num2) take both parameters being passed, and return 1 if there is a 
straight triple of a number at any place in num1 and also a straight double of the same number in num2.
For example: if num1 equals 451999277 and num2 equals 41177722899, then return 1 because in the first 
parameter you have the straight triple 999 and you have a straight double, 99, of the same number in the
second parameter. If this isn't the case, return 0. 
*/

function TripleDouble(num1, num2) {
  num1Str = num1.toString();
  num2Str = num2.toString();
  for (let i = 0; i < num1Str.length; i++) {
    if (num1Str[i] && num1Str[i + 1] && num1Str[i + 2] === num1Str[i]) {
      for (let j = 0; j < num2Str.length; j++) {
        if (
          num2Str[j] &&
          num2Str[j + 1] === num1Str[i] &&
          num2Str[j + 2] !== num1Str[i]
        ) {
          return 1;
        }
      }
    }
  }
  return 0;
}
console.log(TripleDouble(451992777, 41177722899));
