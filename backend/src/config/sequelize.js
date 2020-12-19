const Sequelize = require('sequelize');
const PostModel = require('../models/Post');

const DBURL = 'mysql://root@localhost:3306/alkemy-challenge'

const sequelize = new Sequelize(DBURL);

const Post = PostModel (sequelize, Sequelize)

sequelize.sync()
.then(() => {
    console.log('Table created')
})

module.exports = {
    Post
}