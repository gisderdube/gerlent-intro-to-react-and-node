const path = require('path')
const morgan = require('morgan')
const express = require('express')

const server = express()

server.use(morgan('dev'))
server.use(express.static(path.join(__dirname, 'public')))

server.get('/gerlent', (request, response) => {
    response.send([
        {
            name: 'Lukas',
            website: 'https://dube.io',
        },
        {
            name: 'Behsaad',
            website: 'https://www.gerlent.com',
        },
    ])
})

server.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

server.listen(3000)
