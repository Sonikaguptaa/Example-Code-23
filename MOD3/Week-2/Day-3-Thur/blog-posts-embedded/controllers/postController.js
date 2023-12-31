const Posts = require('../models/postModel')
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
    await Posts.findByIdAndDelete(req.params.id)
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
    const post = await Posts.findById(req.params.id)
    console.log(post)
    res.render('posts/Show', { post })
}