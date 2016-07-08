/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

function splitString(stringToSplit) { //sets the function
  var removeSpclChar = stringToSplit.replace(/[^a-zA-Z ]/g, ""); // removes special character
  var arrayOfStrings = removeSpclChar.split(''); //store splitted string as arrayOfStrings
  var sortedString = arrayOfStrings.sort(); //the previous array will be sorted alphabetically
  var current = null;
  var count = 0; // start the count at zero for the array
  for (var i = 0; i < sortedString.length; i++) { // .length will count the number of indexes in the array
      if (sortedString[i] != current) { // if the string does not equal the value of the current, the count will be just one for that letter
          if (count > 0) { //if count is more than one, it will add one to current
                console.log(current + ' = ' + count);
              }
              current = sortedString[i];
              count = 1;// adds one to repetition
          } else { //if same character add one
              count++;
          }
      }
      if (count > 0) { // states the repetition count of the letter
          console.log(current + ' = ' + count);
        }
}
