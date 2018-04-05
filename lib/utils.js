const JSON5 = require('json5')

const usage = () => {
  console.log(`
Usage:
  $ fx5 <code>

Example:
    $ echo '{"items": ["one", "two"]}' | fx5 'x => x.items'
    [
      "one",
      "two"
    ]
  `)
}

const handleError = err => {
  console.error(err.message)
  usage()
}

const last = array => {
  // set zero if null or undefined.
  const length = array == null ? 0 : array.length
  return length ? array[length - 1] : void 0
}

const transpile = (code = 'x => x') => {
  const result = require('@babel/core').transform(code, {
    presets: ['module:@maxmellon/babel-preset']
  })
  return result.code
}

const parse = text => {
  try {
    const json = JSON5.parse(text)
    return json
  } catch (err) {
    handleError(err)
    process.exit(1)
  }
}

module.exports = {
  last,
  transpile,
  parse,
}
