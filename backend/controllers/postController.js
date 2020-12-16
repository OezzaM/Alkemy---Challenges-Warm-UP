const { Post } = require('../sequelize.js');
const { validationResult } = require('express-validator');

exports.getPost = (req, res) => {

    Post.findAll()
        .then(posts => {
            res.send(posts)
        })
}

exports.getPostId = (req, res) => {
    const id = req.params.id;
    Post.findOne({ where: {id}})
        .then(post => {
            res.json(post)
        })
    }

exports.createPost = (req, res) => {
    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array()})
    }

    const { title, content, image, category } = req.body
    Post.create({
        title,
        content,
        image,
        category
    }). then (post => {
        res.send('POST CREATED')
    })
}

exports.updatePost = (req, res) => {

    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({errors: error.array()})
    }

    const id = req.params.id;
    const update = req.body
    Post.findOne({ where: { id }})
        .then(post => {
            post.update(update)
                .then( postUpdated => {
                    res.json(postUpdated)
                })
        })
}

exports.deletePost = (req, res) => {
    const id = req.params.id;

    Post.destroy({
        where: { id }
    }).then( () => { res.send('Post deleted') })
}