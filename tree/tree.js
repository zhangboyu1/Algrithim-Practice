var Tree = function () {

    var root = null
    var node = function (value) { //辅助类
        value = value;
        node.left = null;
        node.right = null;
    }


    var insertNode = function (node_from, node_to) {
        //要插入这个节点，首先要满足一定的条件：
        //条件就是： 
        if (node_to < node_from) {
            //放到 它的左边
            if (node_from.left == null) {
                node_from.left = node_to
                return node_from
            } else {
                insertNode(node_from.left, node_to)
            }
        }

        if (node_to > node_from) {
            //放到它的右边
            node_from.right = node_to

            if (node_from.right == null) {
                node_from.right = node_to
                return node_from
            } else {
                insertNode(node_from.right, node_to)
            }
        }
    }

    this.insert = function (value) {

        var newNode = new Node(value);
        if (root == null) {
            //this is an empty tree
            root = newNode
        } else {
            //插入node.
            //怎么插入：
            //定义一个函数：
            inserNode(root, newNode)
        }
    }


    this.getRoot = function () {
        return root
    }

    this.findMin = function () {

    }

    this.findMax = function () {

    }

    this.delete = function () {

    }

    this.treverse = function () {

    }
}


var t = new Tree()

t.insert(1)


