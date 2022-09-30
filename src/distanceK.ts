import { treeNode, testCase } from "./resources/types";

/*
  Definition for a binary tree node.
  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }
*/

/*
  Four steps
  1. Understand question and scope (description, constraints, test cases)
  2. High level and buy-in (pseudo-code, high-level, big(O) space/time)
  3. Implementation deep-dive
  4. Wrap (Review implementation and big(O), refinements if had time, )
*/

/*
  DESCRIPTION
    Given the root of a binary tree, the value of a target node target, and an integer k,
    return an array of the values of all nodes that have a distance k from the target node.

    You can return the answer in any order.

  CONSTRAINTS
    The number of nodes in the tree is in the range [1, 500].
    0 <= Node.val <= 500
    All the values Node.val are unique.
    target is the value of one of the nodes in the tree.
    0 <= k <= 1000

  EXAMPLES
    Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
    Output: [7,4,1]
    Explanation: The nodes that are a distance 2 from the target node (with value 5) have
                 values 7, 4, and 1.

    Input: root = [1], target = 1, k = 3
    Output: []
*/

/*
SOLUTION

General idea
[TODO]

Base cases
  1. [TODO]

Pitfalls
  1. [TODO]

PSEUDOCODE
  [TODO]

*/

function distanceK(root: treeNode | null, target: treeNode | null, k: number): number[] {

  return [];
};