var FtpDeploy = require('ftp-deploy')
var ftpDeploy = new FtpDeploy()

var config = {
  user: process.env.FTPUSERNAME,
  password: process.env.FTPPASS,
  host: process.env.FTPHOST,
  port: 21,
  localRoot: __dirname + '/../dist/',
  remoteRoot: 'www',
  include: ['*']
}

ftpDeploy.deploy(config, function(err) {
  if (err) {
    console.error(err)
    process.exit(1)
  } else {
    console.log('Deployed! 🚀')
  }
})
