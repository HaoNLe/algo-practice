export type testCase = [object | any, any]

export class treeNode {
    val: number
    left: treeNode | null
    right: treeNode | null
    constructor(val?: number, left?: treeNode | null, right?: treeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}