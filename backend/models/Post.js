module.exports = (sequelize, type) => {
    const Post = sequelize.define('post', {
        title: {
            type: type.STRING
        },
        content: {
            type: type.STRING
        },
        image: {
            type: type.STRING
        },
        category: {
            type: type.STRING
        }
    },{
        timestamps: true
    })
    return Post
}