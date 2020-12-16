const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { check } = require('express-validator');

router.get('/', postController.getPost );

router.get('/:id', postController.getPostId);

router.post('/',
[
    check('title', 'The title is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty(),
    check('image', 'Image is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
],
postController.createPost);

router.put('/:id', 
[
    check('title', 'The title is required').not().isEmpty(),
    check('content', 'Content is required').not().isEmpty(),
    check('image', 'Image is required').not().isEmpty(),
    check('category', 'Category is required').not().isEmpty(),
],
postController.updatePost);

router.delete('/:id', postController.deletePost);

module.exports = router;