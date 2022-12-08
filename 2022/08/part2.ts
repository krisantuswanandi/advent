import { resolve } from 'path'

const file = resolve(import.meta.dir, 'input.txt')

const res = await Bun.file(file).text()
const inputs = res.split('\n').map(a => a.split('').map(b => parseInt(b)))

const width = inputs[0].length
const height = inputs.length

const trees = (curr, x, y, dx, dy) => {
  let total = 0

  while (x > 0 && y > 0 && x < width - 1&& y < height - 1) {
    x += dx
    y += dy

    total++
    if (curr <= inputs[y][x]) break
  }

  return total
}

const score = []

inputs.forEach((line, y) => {
  line.forEach((tree, x) => {
    const up = trees(tree, x, y, 0, -1)
    const down = trees(tree, x, y, 0, 1)
    const left = trees(tree, x, y, -1, 0)
    const right = trees(tree, x, y, 1, 0)

    score.push(up * down * left * right)
  })
})

const result = Math.max(...score)
console.log(result)
