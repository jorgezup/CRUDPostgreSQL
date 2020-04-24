const express = require('express')
const routes = require('./routes/userRoutes')

/* App use express */
const app = express()

/* Req.body */
app.use(express.urlencoded({ extended: true }))
/* Use routes folder */
app.use(routes)

/* Server listen */
app.listen(3000, () => {
    console.log('server is running ...')
})