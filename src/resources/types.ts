export type testCase = [object | any, any]

export class treeNode {
  constructor(
    public val?: number,
    public left?: treeNode | null,
    public right?: treeNode | null,
  ) {}
}

export class twoThreeTreeNode {
  constructor(
    public leftVal?:number,
    public rightVal?:number,
    public left?:twoThreeTreeNode,
    public middle?:twoThreeTreeNode,
    public right?:twoThreeTreeNode,
  ) {}
}