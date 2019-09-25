const express = require('express')
const path = require('path')

const app = express()
app.use(express.static('dist/')) // absolute or relative to CWD
// TODO: remove switch block when develop subdomain will be irrelevant !!!
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
let port = 0
switch(__dirname) {
    case '/home/deployer/uic-deploy':
        port = 1337
        break
    default:
    case '/home/deployer/uic-develop-deploy':
        port = 1338
        break
}
app.listen(port, () => console.log(`Listening on port ${port}`))
