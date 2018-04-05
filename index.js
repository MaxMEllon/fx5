const stdin = require('get-stdin')
const { parse, last, transpile } = require('./lib/utils')

async function main() {
  const text = await stdin()
  const code = transpile(process.argv[2])
  const json = parse(text)
  const fx5 = eval(`json => {
      try {
        const func = ${code}
        return func(json)
      } catch (err) {
        console.error(err)
        process.exit(1)
      }
    }`)
  const string = JSON.stringify(fx5(json), null, 2)
  if (string) {
    console.log(string.replace(/(^")|("$)/g, ''))
  } else {
    console.log(string)
  }
}

module.exports = main
