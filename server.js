const express = require('express')
const app = express()
app.use(express.static('dist/')) // absolute or relative to CWD
// TODO: remove switch block when develop subdomain will be irrelevant !!!
switch(__dirname) {
    case '/home/deployer/uic-deploy':
        let port = 1337
        break
    case '/home/deployer/uic-develop-deploy':
        let port = 1338
        break
    default:
        break
}
app.listen(port, () => console.log(`Listening on port ${port}`))
