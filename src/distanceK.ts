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
  1. Convert tree to bi-directional graph
    - Start from root and traverse the tree
    - Convert all uni-directional edges to bi-directional so that we may run a graph search
  2. BFS
    - Take the target node, and run BFS (with k as the edge distance)
    - BFS - use a hashset to store seen nodes
    - Once k is reached, return the node value
  
  Optimization:
    Normal BFS from the target treenode (since we're given a pointer to it) down k-distance. 
    Return node value once target distance reach

Base cases (for step 1)
  1. Root is null

Pitfalls
  

PSEUDOCODE
  [TODO]

*/

class treeNodeWithParent extends treeNode {
  constructor(
    public val?: number,
    public left?: treeNodeWithParent | null,
    public right?: treeNodeWithParent | null,
    public parent?: treeNodeWithParent | null,
  ) {
    super();
  }
}

function distanceK(root: treeNode | null, target: treeNode | null, k: number): number[] {
  if (target === null || target.val === null) return [];

  const targetNode = convertTreeToGraph(root, null, target?.val);

  const seenNodes = new Set<number>();
  seenNodes.add(-1);    // Stand-in for undefined - we don't want infinite loops over nodes with undefined vals

  const results = kDistanceTreeBFS(targetNode, seenNodes, k);

  return results;
}

function convertTreeToGraph(root: treeNodeWithParent | null ,
  parent: treeNodeWithParent | null,
  target: number | undefined ) : treeNodeWithParent | null {
  if (root === null || root === undefined) {
    return null;
  }

  root = new treeNodeWithParent(
    root.val,
    root.left,
    root.right,
    parent,
  );

  let left = convertTreeToGraph(root.left === undefined ? null : root.left, root, target);
  let right = convertTreeToGraph(root.right === undefined ? null : root.right, root, target);

  if (left !== null) return left;

  if (right !== null) return right;

  return root.val === target ? root : null;
}

function kDistanceTreeBFS(root: treeNodeWithParent | null | undefined,
  seenNodes: Set<number>,
  k: number) : number[] {
  if (root === null || root === undefined) return [];

  let val = root.val !== undefined ? root.val : -1;
  if (seenNodes.has(val)) return [];
  
  seenNodes.add(val);

  if (k === 0) return [val];

  let parentResults = kDistanceTreeBFS(root.parent, seenNodes, k-1);
  let leftResults = kDistanceTreeBFS(root.left, seenNodes, k-1);
  let rightResults = kDistanceTreeBFS(root.right, seenNodes, k-1);
  let totalResults = parentResults.concat(leftResults.concat(rightResults));

  return totalResults;
}

export const testCases: testCase[]= [
  [
    {},
    [true]
  ]
];

export default distanceK;