import { testCase } from "./resources/types";

function lengthOfLongestSubstring(s: string): number {
  // letter => lastIndex
  let stringToAssess = new String(s);
  let indexMap = new Map<string, number>();
  let currMax = 0;
  let currIndex = 0;
  let lastRepeatIndex = -1;
  
  // if indexMap.has(char)
    // if indexMap.get(char) > lastRepeatIndex
      // lastRepeatIndex = indexMap.get(char)
  // set indexMap(char -> currentIndex)
  // newMax = currentIndex - lastRepeatIndex 
  while (currIndex < stringToAssess.length) {
    let char = stringToAssess[currIndex];
    let lastSeenIndexOfChar = indexMap.get(char);

    if (lastSeenIndexOfChar === undefined) {
      lastSeenIndexOfChar = -1;
    }

    if (lastSeenIndexOfChar > lastRepeatIndex){
      lastRepeatIndex = lastSeenIndexOfChar;
    }

    indexMap.set(char, currIndex);

    let newMax = currIndex - lastRepeatIndex;

    currMax = newMax > currMax ? newMax : currMax;
    currIndex++;
  }
  
  return currMax;
};

export const testCases: testCase[]= [["abcabcbb", 3], ["bbbbb", 1], ["pwwkew", 3], ["", 0], [" ", 1], ["au", 2], ["abc", 3]];

export default lengthOfLongestSubstring;


/*

p w w k e w
1 2 1 2 3 3

a u
1 2

a c a b c b b
1 2 2 3 3 2 1

index of last repeated character + last seen of current character
*/