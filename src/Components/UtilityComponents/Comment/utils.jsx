// tree Operations
import React from 'react'

const useNode = () => {
    const nodeDelete = (tree, nodeId) => {
        console.log(nodeId)
        for (let i = 0; i < tree.Replies.length; i++) {
            console.log(`tree.Replies[i].id : ${tree.Replies[i].id}`)
            if (tree.Replies[i].id === nodeId) {
                tree.Replies.splice(i, 1);
                return tree;
            }
            else {
                nodeDelete(tree.Replies[i], nodeId);
            }
        }
        return tree;
    }
    const nodeChildAppend = (tree, parentId, message) => {
        if (parentId === tree.id) {
            tree.Replies.push({
                id: new Date().getTime(),
                message: message,
                Replies: [],
            });
            return tree
        }

        let childNodeReplies = tree.Replies.map((obj) => {
            return nodeChildAppend(obj, parentId, message)
        })
        return { ...tree, Replies: childNodeReplies }
    }

    const nodeUpdate = (tree, parentId, message) => {
        if (parentId === tree.id) {
            tree.message = message;
            return tree;
        }

        let childNodeReplies = tree.Replies.map((obj) => {
            return nodeUpdate(obj, parentId, message);
        });
        return { ...tree, Replies: childNodeReplies };
    }

    const nodeCreate = (tree, parentId, message) => {
        if (parentId === tree.id) {
            tree.Replies.push({
                id: new Date().getTime(),
                message: message,
                Replies: [],
            });
            return tree
        }

        let childNodeReplies = tree.Replies.map((obj) => {
            return nodeCreate(obj, parentId, message)
        })

        return { ...tree, Replies: childNodeReplies }
    }

    return { nodeDelete, nodeChildAppend, nodeCreate, nodeUpdate }
};


export default useNode;