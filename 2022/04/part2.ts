import { resolve } from 'path'

const path = resolve(import.meta.dir, 'input.txt')

const res = await Bun.file(path).text()
const inputs = res.replace(/[,-]/g, ' ').split('\n')

const total = inputs.filter(line => {
  const [s1, e1, s2, e2] = line.split(' ').map(s => parseInt(s))

  return s1 <= e2 && e1 >= s2
}).length

console.log(total)
