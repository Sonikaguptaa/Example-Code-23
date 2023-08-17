const Posts = require('../models/postModel')

module.exports.create = async (req, res) => {
    // create a comment by updating the comments property in post
    try {
        await Posts.findByIdAndUpdate(req.params.postId, {
            // push the req.body to the comments property of the found post
            $push: {
                comments: req.body
            }
        })
    } catch(err) {
        console.log(err.message)
    }

    res.redirect(`/posts/${req.params.postId}`)
}

module.exports.delete = async (req, res) => {
    // delete a comment by updating the comments property in post
    try {
        await Posts.findByIdAndUpdate(req.params.postId, {
            // remove or pull out a subdocument 
            $pull: {
                // from the comments property
                comments: {
                    // with a matching comment id
                    _id: req.params.commentId
                }
            }
        })
    } catch(err) {
        console.log(err.message)
    }
    res.redirect(`/posts/${req.params.postId}`)
}

module.exports.index = async (req, res) => {
    // target the comments property 
    try {
        const post = await Posts.findById(req.params.postId)
        console.log(post)
        res.send(post.comments)
    } catch(err) {
        console.log(err.message)
        res.send(err.message)
    }
}

module.exports.show = async (req, res) => {
    // find the post and filter it's comments property array
    try {
        const post = await Posts.findById(req.params.postId)
        const indexOfPost = post.comments.findIndex(comment => comment._id.toString() === req.params.commentId)
        res.render('comments/Edit', { postId: req.params.postId, comment: post.comments[indexOfPost] })
    } catch(err) {
        console.log(err.message)
    }
}

module.exports.update = async (req, res) => {
    // update a comment by updating an item in the comments property in post

    res.redirect(`/posts/${req.params.postId}`)
}