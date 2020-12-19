const { check } = require('express-validator');

module.exports = function (req, res, next) {
    [
        check('title', 'The title is required').not().isEmpty(),
        check('content', 'Content is required').not().isEmpty(),
        check('image', 'Image is required').not().isEmpty(),
        check('category', 'Category is required').not().isEmpty(),
    ]
    next();
}