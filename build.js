const FS = require('fs')

const fileNames = ['peppermint.js']

for (let fileName of fileNames) {
  const realpath = `./node_modules/Peppermint/dist/${fileName}`
  let code = FS.readFileSync(realpath, {encoding: 'utf-8'})

  // Remove jQuery stuff
  code = code.replace(/if \(window\.jQuery\) {[\S\s]*?(?=})}/g, '')
  FS.writeFileSync(fileName, code)
}
