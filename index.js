const stdin = require('get-stdin')
const { parse, last, transpile, generateFx, putToStdout } = require('./lib/utils')

async function main() {
  const text = await stdin()
  const code = transpile(process.argv[2])
  const json = parse(text)
  const fx5 = generateFx(code)
  putToStdout(fx5, json)
}

module.exports = main
