require('dotenv').config()
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT

const info = {
    name: 'Chris Josue Dev',
    title: 'Curso de Nodejs'
}

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')


// Middleware
// Static Files
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home', info)
})

app.get('/generic', (req, res) => {
    res.render('generic', info)
})

app.get('/elements', (req, res) => {
    res.render('elements', info)
})

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})