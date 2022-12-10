import { resolve } from 'path'

const path = resolve(import.meta.dir, 'input.txt')

const res = await Bun.file(path).text()
const inputs = res.split('\n')

let cycle = 1
let register = 1
let total = 0

const next = (input = 0) => {
  if ((cycle + 20) % 40 === 0) {
    total += register * cycle
  }
  cycle++
  register += input
}

inputs.forEach(input => {
  next()
  
  if (input !== 'noop') {
    next(+input.split(' ')[1])
  }
})

console.log(total)
