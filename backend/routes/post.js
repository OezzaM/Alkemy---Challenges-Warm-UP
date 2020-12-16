const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.getPost );
router.get('/:id', postController.getPostId);
router.post('/', postController.createPost);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;