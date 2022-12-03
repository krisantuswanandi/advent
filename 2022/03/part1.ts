import { resolve } from 'path'

const path = resolve(import.meta.dir, 'input.txt')

const res = await Bun.file(path).text()
const inputs = res.split('\n')

const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

const result = inputs.reduce((total, r) => {
  const clen = r.length / 2
  const c1 = r.substring(0, clen)
  const c2 = r.substring(clen)

  const c = c1.split('').filter(c => c2.includes(c))[0]

  return total + alpha.indexOf(c) + 1
}, 0)

console.log(result)
