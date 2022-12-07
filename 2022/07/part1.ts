import { resolve } from 'path'

const file = resolve(import.meta.dir, 'input.txt')

const res = await Bun.file(file).text()
const inputs = res.split('\n')

const paths = []
const dirs = {}

inputs.forEach(input => {
  const cmd = input.split(' ')

  if (cmd[1] === 'cd') {
    if (cmd[2] === '..') {
      paths.pop()
    } else {
      const dirname = paths.join('') + cmd[2]

      paths.push(dirname)
      dirs[dirname] = 0
    }
  } else {
    const size = parseInt(cmd[0])

    if (!isNaN(size)) {
      paths.forEach(path => { dirs[path] += size })
    }
  }
})

const result = Object.values<number>(dirs).filter(size => size <= 100000).reduce((total, size) => total + size, 0)
console.log(result)
