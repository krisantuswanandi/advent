import { resolve } from 'path'

const path = resolve(import.meta.dir, 'input.txt')
const res = await Bun.file(path).text()

const len = 14
let index = 0
while (index < res.length - len) {
  const signal = res.substring(index, index + len)
  if (new Set(signal.split('')).size === len) {
    break
  }
  index++
}

const result = index + len
console.log(result)
