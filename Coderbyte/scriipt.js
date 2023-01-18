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

  if (n == 1) return 0;
  let res = Number.MAX_VALUE;
  for (let i = n - 2; i >= 0; i--) {
    if (i + arr[i] >= n - 1) {
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
  CharacterRemoval(["apbpleeeef", "a,ab,abc,abcg,b,c,dog,e,efd,zzzz"])
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
          // strLen--;
          index = newStr.indexOf(secondStr[k]);
          editedStr = newStr.splice(index, 1);
          console.log(newStr);
        }
      }
      
      if (strLen === 0) {
     
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

/* For this challenge you will manipulate a string of characters using a simple reduction method.
have the function StringReduction(str) take the str parameter being passed and return the smallest
number you can get through the following reduction method. The method is: Only the letters a, b, and
c will be given in str and you must take two different adjacent characters and replace it with the third.
For example "ac" can be replaced with "b" but "aa" cannot be replaced with anything. This method is done
repeatedly until the string cannot be further reduced, and the length of the resulting string is to be
outputted. For example: if str is "cab", "ca" can be reduced to "b" and you get "bb" (you can also
reduce it to "cc"). The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a",
 so you have "aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1.
 */

/*
 function StringReduction(str){
  newStr = ""
    for(let i=0; i<str.length; i++){
      if(str[i] === 'a' && str[i+1] === 'b' || str[i] === 'b' && str[i+1] === 'a'){
        newStr += 'c';
        i = i+1;
      }
      else if(str[i] === 'b' && str[i+1] === 'c' || str[i] === 'c' && str[i+1] === 'b'){
        newStr += 'a';
        i = i+1;
      }
      else if(str[i] === 'a' && str[i+1] === 'c' || str[i] === 'c' && str[i+1] === 'a'){
        newStr += 'b';
         i = i+1;
      }
      else{
        newStr += str[i];
      }
    }
    return allCharactersSame(newStr) ? StringReduction(newStr) : newStr.length;
 }
 function allCharactersSame(s)
 {
     let n = s.length;
     for (let i = 1; i < n; i++)
         if (s[i] != s[0])
             return true;

     return false;
 }
 console.log(StringReduction("cccc"));
 */

/*
For this challenge you will be determining the multiples of a specific number.
have the function ThreeFiveMultiples(num) return the sum of all the multiples of 3 and 5
that are below num. For example: if num is 10, the multiples of 3 and 5 that are below 10 are
3, 5, 6, and 9, and adding them up you get 23, so your program should return 23. The integer
being passed will be between 1 and 100. 
*/
/*
function ThreeFiveMultiples(num){
  num1 = Math.trunc(num / 3);
  num2 = Math.trunc(num / 5);
  if(num >= 5){
  return calculate(num1, 3) + calculate(num2, 5);
  }
  else if(num >= 3){
    return calculate(num1, 3);
  }
  else{
    return 0;
  }
}
function calculate(num, n){
  if(num === 1){
    return 1;
  }
  return n * num + calculate(num-1); 
}
console.log(ThreeFiveMultiples(1));
*/

/* For this challenge you will be determining the smallest combination of coins for a given output
have the function CoinDeterminer(num) take the input, which will be an integer ranging from 1 to 250,
and return an integer output that will specify the least number of coins, that when added, equal the
input integer. Coins are based on a system as follows: there are coins representing the integers 1, 5, 7, 9,
and 11. So for example: if num is 16, then the output should be 2 because you can achieve the number 16 
with the coins 9 and 7. If num is 25, then the output should be 3 because you can achieve 25 with 
either 11, 9, and 5 coins or with 9, 9, and 7 coins. 
*/

/*
function CoinDeterminer(num) {
  coins = [1, 5, 7, 9, 11];
	let index;
  let count = 0;
	let total = 0;
	let temp = num;
	while (total != num)
	{
    if(check(temp, count) > 0){
      return check(temp, count)
    }
		if (temp <= 4)
		{
			index = 0;
		}
		else if (temp <= 6)
		{
			index = 1;
		}
		else if (temp <= 12)
		{
			index = 2;
		}
		else if (temp <= 16)
		{
			index = 3;
		}
		else
		{
			index = 4;
		}
		count++;
		total += coins[index];
		temp = num - total;
	}
}
function check(num, count){
for (let x = 0; x < 5; x++)
	{
		if (num == coins[x])
		{
			return count + 1;
		}
	}
  return 0;
}
console.log(CoinDeterminer(16));
*/

/*
Have the function ArrayMatching(strArr) read the array of strings stored in strArr which will
contain only two elements, both of which will represent an array of positive integers. For example:
if strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input represent two integer
arrays, and your goal for this challenge is to add the elements in corresponding locations from 
both arrays. For the example input, your program should do the following additions: 
[(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17]. Your program should finally
return this resulting array in a string format with each element separated by a hyphen: 6-4-13-17.

If the two arrays do not have the same amount of elements, then simply append the remaining elements
onto the new array (example shown below). Both arrays will be in the format: [e1, e2, e3, ...] 
where at least one element will exist in each array.
Examples
Input: ["[5, 2, 3]", "[2, 2, 3, 10, 6]"]
Output: 7-4-6-10-6
Input: ["[1, 2, 1]", "[2, 1, 5, 2]"]
Output: 3-3-6-2
*/

/*
function ArrayMatching(strArr){
let [strArr1, strArr2] = strArr;
newArr1 = eval(strArr1);
newArr2 = eval(strArr2); 
let addArr;
  if(newArr1.length > newArr2.length){
    addArr = newArr1.map((el, index) => {return newArr2[index] ? newArr2[index] + el : el });
  }
  else{
    addArr = newArr2.map((el, index) => {
      return newArr1[index] ? newArr1[index] + el : el
    })
  }
  return addArr.join("-");
}
console.log(ArrayMatching(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]));
*/

/*
question1
Have the function MathChallenge(str) take the str parameter, which will be a simple mathematical
formula with three numbers, a single operator (+, -, *, or /) and an equal sign (=) and return 
the digit that completes the equation. In one of the numbers in the equation, there will be an x
character, and your program should determine what digit is missing. For example, if str is "3x + 12 = 46"
then your program should output 4. The x character can appear in any of the three numbers and all three
numbers will be greater than or equal to 0 and less than or equal to 1000000.
Examples
Input: "4 - 2 = x"
Output: 2
Input: "1x0 * 12 = 1200"
Output: 0

*/

/*
function MathChallenge(str) {
  newStr = str.split("=");
  firstoperand = newStr[0].replaceAll(" ", "");
  resultant = newStr[newStr.length - 1].trimStart();

  if (firstoperand.indexOf("x") !== -1) {
    for (let i = 0; i < 10; i++) {
      newPair = firstoperand.replace("x", i);
      checkEquality = eval(newPair);

      if (checkEquality === Number(resultant)) {
        return i;
      }

      newPair = newPair.replace(i, "x");
    }
  } else if (resultant.indexOf("x") !== -1) {
    leftSideTotal = eval(firstoperand);
    for (let i = 0; i < 10; i++) {
      newPair = resultant.replace("x", i);
      checkEquality = eval(newPair);
      if (checkEquality === Number(leftSideTotal)) {
        return i;
      }
      newPair = newPair.replace(i, "x");
    }
  }
  return 0;
}
console.log(MathChallenge("20 - 10 = x0"));
*/

/*
let res;
let result = "";

function MissingDigit(exp){
	exp = exp.split(' ')

	let first_operand = exp[0]
	let operator = exp[1]
	let second_operand = exp[2]
	let resultant = exp[exp.length-1]
  console.log(first_operand, operator, second_operand, resultant);

	// If x is present in resultant
	if(resultant.indexOf('x') != -1){
		x = resultant
		first_operand = parseInt(first_operand)
		second_operand = parseInt(second_operand)

		if(operator == '+')
			res = first_operand + second_operand
		else if(operator == '-')
			res = first_operand - second_operand
		else if(operator == '*')
			res = first_operand * second_operand
		else
			res = Math.floor(first_operand / second_operand)
	}

	 // If x in present in operands
	else{

		resultant = parseInt(resultant)

		// If x in the first operand
		if(first_operand.indexOf('x') != -1){

			x = first_operand
			second_operand = parseInt(second_operand)

			if(operator == '+')
				res = resultant - second_operand
			else if(operator == '-')
				res = resultant + second_operand
			else if(operator == '*')
				res = Math.floor(resultant / second_operand)
			else
				res = resultant * second_operand
		}

		// If x is in the second operand
		else{

			let x = second_operand
			first_operand = parseInt(first_operand)

			if(operator == '+')
				res = resultant-first_operand
			else if(operator == '-')
				res = first_operand - resultant
			else if(operator == '*')
				res = Math.floor(resultant / first_operand)
			else
				res = Math.floor(first_operand / resultant)
		}
	}
	res = res.toString()
	let k = 0
	for(let i of x){
		if(i == 'x'){
			result = res[k]
			break
		}
		else
			k = k + 1
	}

	return result
}
MissingDigit("3x + 12 = 46")
*/

/* question2:-
Have the function ArrayChallenge(arr) take the array of numbers stored in arr and first determine the largest
element in the array, and then determine whether or not you can reach that same element within the array by
moving left or right continuously according to whatever integer is in the current spot. If you can reach the
same spot within the array, then your program should output the least amount of jumps it took. For example:
if the input is [2, 3, 5, 6, 1] you'll start at the spot where 6 is and if you jump 6 spaces to the right
while looping around the array you end up at the last element where the 1 is. Then from here you jump 1 
space to the left and you're back where you started, so your program should output 2. If it's impossible
to end up back at the largest element in the array your program should output -1. The largest element
in the array will never equal the number of elements in the array. The largest element will be unique.
Examples
Input: [1,2,3,4,2]
Output: 3
Input: [1,7,1,1,1,1]
Output: 2
*/

/*
function arrayMinJumps(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  maxIndex = arr.indexOf(max);
  step = max;
  i = maxIndex;
  count = 1;
  return rightSideCheck(arr, i, step, count);
}
function rightSideCheck(arr, i, step, count) {
  while (step !== 0) {
    if (i == arr.length) {
      i = 0;
    }
    step--;
    i++;
  }
  if (i == maxIndex) {
    return count;
  } else if (i < maxIndex) {
    count++;
    step = arr[i];
    return rightSideCheck(arr, i, step, count);
  } else {
    count++;
    step = arr[i];
    return leftSideCheck(arr, i, step, count);
  }
}
function leftSideCheck(arr, i, step, count) {
  while (step !== 0) {
    if (i == 0) {
      i = arr.length;
    }
    step--;
    i--;
  }
  if (i == maxIndex) {
    return count;
  } else if (i < maxIndex) {
    count++;
    step = arr[i];
    return rightSideCheck(arr, i, step, count);
  } else {
    count++;
    step = arr[i];
    return leftSideCheck(arr, i, step, count);
  }
}
function checkSteps(i,arr,step){
  step = arr[i];
    if(step == 0 && i == 0){
      step = arr[arr.length-1];
    }
    if(step == 0){
      step = arr[i];
    }
}
console.log(arrayMinJumps([0, 5, 2]));

/* Problem Statement                                            *
 * Have the function NumberSearch(str) take the str parameter,  *
 * search for all the numbers in the string, add them together, *
 * then return that final number divided by the total amount of *
 * letters in the string. For example: if str is                *
 * "Hello6 9World 2, Nic8e D7ay!" the output should be 2.       *
 * First if you add up all the numbers, 6 + 9 + 2 + 8 + 7       *
 * you get 32. Then there are 17 letters in the string.         *
 * 32 / 17 = 1.882, and the final answer should be rounded to   *
 * the nearest whole number, so the answer is 2. Only single    *
 * digit numbers separated by spaces will be used throughout    *
 * the whole string,                                            *
 * (So this won't ever be the case: hello44444 world).          *
 * Each string will also have at least one letter.              *
 *                                                              *
 * Examples                                                     *
 * Input 1: "H3ello9-9"		                                *
 * Output 1: 4                                                  *
 *                                                              *
 * Input 2: "One Number*1*"                                     *
 * Output 2: 0           

*/


/*
function NumberAddition(str) {
  var mathches,
    total = 0;
  regex = /[a-zA-Z]/;
  letters = 0;
  for (let i = 0; i < str.length; i++) {
    if (regex.test(str[i])) {
      letters++;
    }
  }
  // use regexp to grab the numbers
  matches = str.match(/([\d]+)/g);

  //itereate and add
  for (var i = 0; i < matches.length; i++) {
    total = total + parseInt(matches[i]);
  }

  return Math.round(total / letters);
}
console.log(NumberAddition("Hello6 9World 2, Nic8e D7ay!"));
*/


/* Problem Statement                                            *
 * Have the function PermutationStep(num) take the num parameter*
 * being passed & return the next number greater than num using *
 * the same digits.                                             *
 *                                                              *
 * For example: if num is 123 return 132, if it's 12453 return  *
 * 12534. If a number has no greater permutations,              *
 * return -1 (ie. 999).                                         *
 *                                                              *
 * Examples                                                     *
 * Input 1: 11121		                                *
 * Output 1: 11211                                              *
 *                                                              *
 * Input 2: 41352                                               *
 * Output 2: 41523                                              *
 *                                                              *
 * Input 3: 897654321                                           *
 * Output 3: 912345678                                          *
 *                                                              *
 * Input 4: 76666666                                            *
 * Output 4: -1
 * */

/*
function swap_index_values( leftIndex, rightIndex, nums ) {
  [ nums[rightIndex], nums[leftIndex] ]  = [ nums[leftIndex], nums[rightIndex] ];   
}
function PermutationStep(nums){
  let n = nums;
  nums  = String(nums).split("").map(Number);
  let leftIndex = -1;
  let rightIndex = nums.length - 1;
  
  for( let i=nums.length-1; i>=0; i-- ) {
          if( nums[i] > nums[i-1] ) {
                  leftIndex = i-1;
                  break;
          }
  }
  
  if( leftIndex == -1 ) {
          return -1;
  }
  
  for( let i=nums.length-1; i>=0; i-- ) {
          if( nums[i] > nums[leftIndex] ) {
                  rightIndex = i;
                  break;
          }
  }
  
  swap_index_values(leftIndex, rightIndex, nums);
  leftIndex++;
  rightIndex = nums.length-1;
  
  while( leftIndex < rightIndex ) {
          swap_index_values(leftIndex, rightIndex, nums);
          leftIndex++;
          rightIndex--;
  }

  if( Number( nums.join("") ) > n ) {
    return Number( nums.join("") );
  }        
  return -1;
};
console.log(PermutationStep(123));
*/

/*Using the JavaScript language, have the function BinaryConverter(str) 
return the decimal form of the binary value. For example:
if 101 is passed return 5, or if 1000 is passed return 8. */

/*
function BinaryConverter(str) { 
  count =0;
    arr2 =str.split("").reverse().join("");
    arr=[1,2,4,8,16,32, 64, 128];
    for(var i=0; i<arr2.length; i++){
      if(arr2[i]=="1"){
      count+= arr[i];}
    }
  return count;
  }
*/

/*Have the function MissingDigitII(str) take the str parameter *
 * which will be simple mathematical formula with three numbers *
 * a single operator (+, -, *, or /) and an equal sign (=)      *
 * and return the two digits that complete the equation.        *
 * In two of the numbers in the equation, there will be a       *
 * single ? character, and your program should determine what   *
 * digits are missing and return them separated by a space.     *
 *                                                              *
 * For example, if str is "38?5 * 3 = 1?595" then your program  *
 * should output 6 1.                                           *
 *                                                              *
 * In one of the numbers in the equation, there will be an x    *
 * character, and your program should determine what digit is   *
 * missing.                                                     *
 *                                                              *
 * For example, if str is "3x + 12 = 46" then your program      *
 * should output 4. The x character can appear in any of the    *
 * three numbers and all three numbers will be greater than or  *
 * equal to 0 and less than or equal to 1000000.                *
 *                                                              *
 * The ? character will always appear in both the first number  *
 * and the last number in the mathematical expression.          *
 * There will always be a unique solution.                      *
 *                                                              *
 * Examples                                                     *
 * Input 1: "56? * 106 = 5?678"		                        *
 * Output 1: 3 9                                                *
 *                                                              *
 * Input 2: "18?1 + 9 = 189?"		                        *
 * Output 2: 8 0
 */
/*
function MissingDigitII(str) {
  newStr = str.split("=");
  let arr = [];
  leftSideOperand = newStr[0].replace(" ", "");
  rightSideOperand = newStr[1].replace(" ", "");
  for (let i = 0; i < 10; i++) {
    leftSide = leftSideOperand.replace("?", i);
    leftSideValue = eval(leftSide);
    for (let j = 0; j < 10; j++) {
      rightSide = rightSideOperand.replace("?", j);
      rightSideValue = eval(rightSide);
      if (leftSideValue == rightSideValue) {
        arr.push(i, j);
        break;
      }
    }
  }
  return arr.join(" ");
}
console.log(MissingDigitII("? + 21 = ?0"));
*/

/*
function parse( str ) {
  return Function(`'use strict'; return (${str})`)()
}

function MissingDigitII( str ) {
  let split_equation = str.split("=");
  let left_side_expression = split_equation[0].trim();
  let right_side_expression = split_equation[1].trim();

  let i = 0;
  while( i <= 9 ) {

          let equation1 = '';
          for( let k = 0 ; k < left_side_expression.length; k++ ) {
                  if( left_side_expression[k] === "?" ) {
                          equation1 += i;
                  }
                  else {
                          equation1 += left_side_expression[k];
                  }
          }

          for( let j = 0; j < 10; j++ ) {
                  let equation2 = '';
                  for( let l = 0 ; l < right_side_expression.length; l++ ) {
                          if( right_side_expression[l] === "?" ) {
                                  equation2 += j;
                          }
                          else {
                                  equation2 += right_side_expression[l];
                          }
                  }
                  equation1 = equation1.trim();
                  equation2 = equation2.trim();
                  if( equation1.startsWith("0") ) {
                          equation1 = equation1.replace(/^0+/, '');
                          if( equation1 === "" ) {
                                  equation1 = "0";
                          }
                  }
                  if( equation2.startsWith("0") ) {
                          equation2 = equation2.replace(/^0+/, '');
                          if( equation2 === "" ) {
                                  equation2 = "0";
                          }
                  }
                  if( parse( equation1 ) === parse( equation2 ) ) {
                          return i + " " + j;
                  }
          }
          i++;
  }
}
*/

/*
have the function PolynomialExpansion(str) take str which will be a string representing a polynomial containing only
 (+/-) integers, a letter, parenthesis, and the symbol "^", and return it in expanded form. For example: if str is
  "(2x^2+4)(6x^3+3)", then the output should be "12x^5+24x^3+6x^2+12". Both the input and output should contain no spaces. 
  The input will only contain one letter, such as "x", "y", "b", etc. There will only be four parenthesis in the input and 
  your output should contain no parenthesis. The output should be returned with the highest exponential element first down
   to the lowest.
 More generally, the form of str will be: ([+/-]{num}[{letter}[{^}[+/-]{num}]]...[[+/-]{num}]...)(copy) where "[]"
 represents optional features, "{}" represents mandatory features, "num" represents integers and "letter" represents 
 letters such as "x".
*/

/*
function PolynomialExpansion(str) {
  newStr = str.split(")(");
  arr = [];
  regex = /[0-9]/;
  firstStr = newStr[0].replace("(", "");
  secondStr = newStr[1].replace(")", "");
  firstValue = firstStr.split(/[+-]/);
  secondValue = secondStr.split(/[+-]/);
  operator1 = firstStr.match(/[+-]/g);
  operator2 = secondStr.match(/[+-]/g);
  for (let i = 0; i < secondStr.length; i++) {
    for (let j = 0; j < firstStr.length; j++) {
      for (let k = 0; k < firstValue.length; k++) {
        if (
          firstValue[j][k] == firstValue[j][firstValue.length - 1] &&
          secondValue[j][k] == secondValue[j][secondValue.length - 1]
        ) {
          arr.push(firstValue[j][k] + secondValue[i][k]);
        } else if (
          regex.test(firstValue[j][k]) &&
          regex.test(secondValue[j][k])
        ) {
          arr.push(firstValue[j][k] * secondValue[i][k]);
          console.log(arr);
        } else {
          arr.push(firstValue[j][k]);
        }
      }
      console.log(arr);
    }
  }
}
PolynomialExpansion("(2x^2+4)(6x^3+3)");
*/
