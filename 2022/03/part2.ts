import { resolve } from 'path'

const path = resolve(import.meta.dir, 'input.txt')

const res = await Bun.file(path).text()
const inputs = res.split('\n')

const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let result = 0

for (let i = 0; i < inputs.length / 3; i++) {
  const idx = i * 3

  const c = inputs[idx].split('').filter(c => inputs[idx + 1].includes(c) && inputs[idx + 2].includes(c))[0]

  result += alpha.indexOf(c) + 1
}

console.log(result)
