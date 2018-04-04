const JSON5 = require('json5')
const stdin = require('get-stdin')

const last = array => {
  // set zero if null or undefined.
  const length = array == null ? 0 : array.length
  return length ? array[length - 1] : void 0
}


async function main() {
  const text = await stdin()
  const json = JSON5.parse(text)
  const code = last(process.argv)

  const fx5 = eval(code)
  console.log(fx5(json))
}

main()

