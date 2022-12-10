import { resolve } from 'path'

const path = resolve(import.meta.dir, 'input.txt')

const res = await Bun.file(path).text()
const inputs = res.split('\n')

let cycle = 0
let register = 1
let values = []

const next = (input = 0) => {
  const hPos = cycle % 40
  const inRange = hPos >= register - 1 && hPos <= register + 1
  values[cycle] = inRange ? '#' : ' '
  cycle++
  register += input
}

inputs.forEach(input => {
  next()

  if (input !== 'noop') {
    next(+input.split(' ')[1])
  }
})

while (values.length) {
  console.log(values.splice(0, 40).join(''))
}
