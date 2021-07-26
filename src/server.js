const express = require('express')

const routes = require('./routes/routes')
const app = express()

app.use('/api/', routes)

const port = process.env.PORT || 5000
app.listen(port, ()=> console.log("YES! Server is running!"))
