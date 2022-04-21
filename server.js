const express = require('express')
const app = express()
const args = require('minimist')(process.argv.slice(2))
args['port']
const port = args.port || process.env.PORT || 5000

const server = app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})

app.get('/app/', (req, res) => {
    res.status(200).end('OK')
})

app.use(function(req, res) {
    res.status(404).send("404 NOT FOUND")
    res.type("text/plain")
})

app.get('/app/flip/', (req, res) => {
    flip = coinFlip()
    res.status(200).json({"flip":flip})
})

function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads' : 'tails';
}