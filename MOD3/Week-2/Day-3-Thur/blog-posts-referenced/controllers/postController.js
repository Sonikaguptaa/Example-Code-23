const Posts = require('../models/postModel')
const Comments = require('../models/commentModel')
const posts = require('../models/posts')

module.exports.seed = async (req, res) => {
    await Posts.deleteMany({})
    await Posts.create(posts)
    res.redirect('/posts')
}

module.exports.index = async (req, res) => {
    const posts = await Posts.find().sort({ createdAt: 1 })
    res.render('posts/Index', { posts })
}

module.exports.new = async (req, res) => {
    res.render('posts/New')
}

module.exports.delete = async (req, res) => {
    try {
        // find the post, storing it in a varaible, then deleting it
        const post = await Posts.findByIdAndDelete(req.params.id)
        // deleting all comments where the comment id
        await Comments.deleteMany({ _id: {
            // matches any comment ids in the given array
            $in: post.comments   
        }})
    } catch(err) {
        console.log(err.message)
    }

    res.redirect('/posts')
}

module.exports.update = async (req, res) => {
    await Posts.findByIdAndUpdate(req.params.id, req.body)
    res.redirect(`/posts/${req.params.id}`)
}

module.exports.create = async (req, res) => {
    console.log(req.body)
    try {
        await Posts.create(req.body)
        res.redirect('/posts')
    } catch(err) {
        res.send(err.message)
    }
}

module.exports.edit = async (req, res) => {
    const post = await Posts.findById(req.params.id)
    console.log(post)
    console.log('edit route')
    res.render('posts/Edit', { post })
}

module.exports.show = async (req, res) => {
    console.log('Show:')
    // populate replaces the ids with actual documents/objects we can use
    const post = await Posts.findById(req.params.id).populate('comments')
    res.render('posts/Show', { post })
}