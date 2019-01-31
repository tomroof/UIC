const express = require('express')
const app = express()
app.use(express.static('dist/')) // absolute or relative to CWD
const port = 1337
app.listen(port, () => console.log(`Listening on port ${port}`))
