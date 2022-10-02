import { testCase } from "./resources/types";

/*
Four steps
1. Understand question and scope (description, constraints, test cases)
2. High level and buy-in (pseudo-code, high-level, big(O) space/time)
3. Implementation deep-dive
4. Wrap (Review implementation and big(O), refinements if had time, )
*/

/*
DESCRIPTION
  Given an array of distinct integers candidates and a target integer target,
  return a list of allunique combinations of candidates where the chosen
  numbers sum to target. You may return the combinations in any order.

  The same number may be chosen from candidates an unlimited number of times.
  Two combinations are unique if the frequency of at least one of the chosen 
  numbers is different.

  The test cases are generated such that the number of unique combinations
  that sum up to target is less than 150 combinations for the given input.

CONSTRAINTS
  1 <= candidates.length <= 30
  2 <= candidates[i] <= 40
  All elements of candidates are distinct.
  1 <= target <= 500

*/

/*
SOLUTION

General idea
Chose one number, then run subroutine on the array with a differenced target

Base cases
  1. Target is equal to a candidate
    Return the candidate
  2. Target is unreachable
    Return empty array

Pitfalls
  1. Make sure we avoid duplicates in the final answer
    Better to prevent them than sort them after the fact
  2. Make sure to avoid infinite loops when developing
    Annoying to deal with
  3. Be careful with stackframes (since this is a recursive solution)

    Example of repeated solutions:
      [2, 3, 6, 7,], 9
      2, 2, 2, 3
      2, 2, 3, 2
      2, 3, 2, 2

PSEUDOCODE

  Sub-Routine: candidates, target
    LET R-solutions
    ITERATE over each candidate
      Subtract it from target
        IF target now negative, end
        IF target now 0 -> add to solutions to return
        IF target positive
          Call SR on current candidates list and new target -> SR-solutions
          IF SR-solutions is empty, this dfs call has no valid solutions
          ITERATE over SR-solutions,
            append candidate to each SR-solution
            add to R-solutions to return
      Remove current candidate (or use slicing when calling SR)
      
    Return R-solutions
*/

function combinationSum(input: {candidates: number[], target: number}): number[][] {
  const { candidates, target } = input;
  let solutions: number[][] = [];
  let currIndex = 0
  
  while (currIndex < candidates.length) {
    const currCandidate = candidates[currIndex];
    const newTarget = target - currCandidate;
      
    if (newTarget === 0) {
      solutions.push([currCandidate]);
    } 
    else if (newTarget > 0) {
      const subRoutineSolutions = combinationSum(
        {
          candidates: candidates.slice(currIndex),
          target: newTarget
        }
      );

      subRoutineSolutions.forEach((solution) => {
        solution.push(currCandidate)
      });
      solutions = solutions.concat(subRoutineSolutions);
    }

    currIndex++;
  }

  return solutions;
}

export const testCases: testCase[]= [
  [
    {
      candidates: [2, 3, 6, 7],
      target: 7
    },
    [
      [2, 2, 3],
      [7]
    ]
  ],
  [
    {
      candidates: [2, 3, 5],
      target: 8
    },
    [
      [2, 2, 2, 2],
      [2, 3, 3,],
      [3, 5]
    ]
  ],
  [
    {
      candidates: [2],
      target: 1
    },
    []
  ]
];

export default combinationSum;