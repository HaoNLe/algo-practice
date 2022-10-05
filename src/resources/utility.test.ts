import utility from './utility'

test('empty array returns empty treeNode', () => {
  const treeRoot = utility.createBinaryTreeFromArray([]);
  expect(treeRoot.val).toBeUndefined();
});

test('single element array returns single treeNode', () => {
  const rootVal = 1;
  const treeRoot = utility.createBinaryTreeFromArray([rootVal]);
  expect(treeRoot.val).toEqual(rootVal);
  expect(treeRoot.left).toBeNull();
  expect(treeRoot.right).toBeNull();
});

test('three element array returns two-height tree', () => {
  const rootVal = 1;
  const leftVal = 2;
  const rightVal = 3;
  const treeRoot = utility.createBinaryTreeFromArray([rootVal, leftVal, rightVal]);
  expect(treeRoot.val).toEqual(rootVal);
  expect(treeRoot.left).toBeTruthy();
  expect(treeRoot.left?.val).toEqual(leftVal);
  expect(treeRoot.right).toBeTruthy();
  expect(treeRoot.right?.val).toEqual(rightVal);
});