import { resolve } from 'path'

const path = resolve(import.meta.dir, 'input.txt')

const res = await Bun.file(path).text()
const inputs = res.split('\n')

let max = 0
let total = 0

inputs.forEach(input => {
  if (input !== '') {
    total += parseInt(input)
  } else {
    max = Math.max(max, total)
    total = 0
  }
})

console.log(max)
