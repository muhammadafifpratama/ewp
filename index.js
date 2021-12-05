let app = require('express')()
let port = 3000;

let { tes } = require('./router')

app.use("/ngetes", tes)

app.get('/', (req, res) => {
    res.send(`<h1>muncul kan</h1>`)
})

app.listen(port, () => console.log(port))