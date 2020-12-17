const { Post } = require('../config/sequelize.js');
const { validationResult } = require('express-validator');

exports.getPost = (req, res) => {
    
    try {
    Post.findAll()
        .then(posts => {
            res.send(posts)
        })
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');  
    }
}

exports.getPostId = (req, res) => {
    try {
        const id = req.params.id;
        Post.findOne({ where: {id}})
        .then(post => {
            res.json(post)
        })
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');  
    } 
    }

exports.createPost = (req, res) => {
    try {
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
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');  
    } 
}
    
exports.updatePost = (req, res) => {
    try {
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
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');  
    } 
}
    
exports.deletePost = (req, res) => {
    try {
        const id = req.params.id;
        Post.destroy({
            where: { id }
        }).then( () => { res.send('Post deleted') })
    } catch (error) {
        console.log(error);
        res.status(400).send('Hubo un error');  
    } 
}