const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { check } = require('express-validator');
const validations = require('../middlewares/validations');

router.get('/', postController.getPost );

router.get('/:id', postController.getPostId);

router.post('/',
validations,
postController.createPost);

router.put('/:id', 
validations,
postController.updatePost);

router.delete('/:id', postController.deletePost);

module.exports = router;