const JSON5 = require('json5')
const stdin = require('get-stdin')

const last = array => {
  // set zero if null or undefined.
  const length = array == null ? 0 : array.length
  return length ? array[length - 1] : void 0
}

const usage = () => {
  console.log(`
Usage:

  WIP
  `)
}

const handleError = err => {
  if (err.lineNumber) {
    console.error(`${err.lineNumber}:${err.columnNumber}  ${err.message}`)
  } else {
    usage()
  }
}

const parse = text => {
  try {
    const json = JSON5.parse(text)
    return json
  } catch (err) {
    try {
      const json = JSON.parse(text)
      return json
    } catch (err) {
      handleError(err)
      process.exit(1)
    }
    handleError(err)
    process.exit(1)
  }
}

async function main() {
  const text = await stdin()
  let code = process.argv[2]
  if (!code) code = 'x => x'
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
  console.log(JSON.stringify(fx5(json), null, 2).replace(/(^")|("$)/g, ''))
}

main()
  .catch(err => console.error(err))

