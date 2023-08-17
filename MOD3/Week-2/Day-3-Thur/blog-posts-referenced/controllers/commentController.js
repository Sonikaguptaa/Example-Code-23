const Posts = require('../models/postModel')
const Comments = require('../models/commentModel')

module.exports.create = async (req, res) => {
    // create a comment by updating the comments property in post
    try {
        // create a document in our comments collection
        const comment = await Comments.create(req.body)
        // find the post
        await Posts.findByIdAndUpdate(req.params.postId, {
            // push the new comment document's id
            $push: {
                comments: comment._id
            }
        })
    } catch(err) {
        console.log(err)
    }
    res.redirect(`/posts/${req.params.postId}`)
}

module.exports.delete = async (req, res) => {
    // delete a comment by updating the comments property in post
    try {
        // first use the comment id to delete the comment from the comments collection
        await Comments.findByIdAndDelete(req.params.commentId)
        // then use the post id to find the post
        await Posts.findByIdAndUpdate(req.params.postId, {
            // pull/remeove the reference id of the comment we deleted
            $pull: {
                comments: req.params.commentId
            }
        })
    } catch(err) {
        console.log(err.message)
    }


    res.redirect(`/posts/${req.params.postId}`)
}

module.exports.index = async (req, res) => {
    // target the comments property 
    res.send('')
}

module.exports.show = async (req, res) => {
    // find the post and filter it's comments property array
    res.render('comments/Edit', { postId: req.params.postId, comment })
}

module.exports.update = async (req, res) => {
    // update a comment by updating an item in the comments property in post
    res.redirect(`/posts/${req.params.postId}`)
}