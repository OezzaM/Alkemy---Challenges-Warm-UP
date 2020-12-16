exports.getPost = (req, res) => {
    res.send('Todos los posts')
}

exports.getPostId = (req, res) => {
    res.send('Buscando post por id')
    }

exports.createPost = (req, res) => {
    res.send('Creando un post');
}

exports.updatePost = (req, res) => {
    res.send('Actualizando un post')
}

exports.deletePost = (req, res) => {
    res.send('Eliminando un post');
}