import { resolve } from 'path'

const path = resolve(import.meta.dir, 'input.txt')

const res = await Bun.file(path).text()

const [i1, i2] = res.split('\n\n')
const stacks = i1.split('\n').splice(0, i1.length - 1)
const moves = i2.replace(/(move |from |to )/g, '').split('\n')

const len = (stacks[0].length + 1) / 4
const newStacks = stacks.reduce((arr, s) => {
  for (let i = 0; i < len; i++) {
    const crate = s[i * 4 + 1]

    if (crate !== ' ') {
      if (!arr[i]) arr[i] = []
      arr[i].push(crate)
    }
  }

  return arr
}, [])

moves.forEach(move => {
  const [qty, src, dst] = move.split(' ').map(m => parseInt(m))

  const crane = newStacks[src - 1].splice(0, qty)
  newStacks[dst - 1].unshift(...crane)
})

const result = newStacks.map(a => a[0]).join('')

console.log(result)
