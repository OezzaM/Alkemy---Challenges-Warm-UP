const express = require('express');
const app = express();

const port = process.env.port || 5000;

app.use(express.json({ extended: true }))

app.use('/posts', require('./routes/post'));

app.get('/', (req, res) => {
    res.send('CHALLENGE ALKEMY')
})

app.listen(port, () => {
    console.log('Listening in port: ', port)
})