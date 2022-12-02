import { resolve } from 'path'

const path = resolve(import.meta.dir, 'input.txt')

const res = await Bun.file(path).text()
const inputs = res.split('\n')

let maxs = [0, 0, 0, 0]
let total = 0

inputs.forEach(input => {
  if (input !== '') {
    total += parseInt(input)
  } else {
    maxs[0] = total
    maxs.sort((a, b) => a - b)
    total = 0
  }
})

const result = maxs[1] + maxs[2] + maxs[3]
console.log(result)
