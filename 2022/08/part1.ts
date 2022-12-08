import { resolve } from 'path'

const file = resolve(import.meta.dir, 'input.txt')

const res = await Bun.file(file).text()
const inputs = res.split('\n').map(a => a.split('').map(b => parseInt(b)))

const width = inputs[0].length
const height = inputs.length

const trees = (x, y, dx, dy) => {
  const trees = []

  while (x > 0 && y > 0 && x < width - 1&& y < height - 1) {
    x += dx
    y += dy

    trees.push(inputs[y][x])
  }

  return trees
}

const isVisible = (tree, ...args: Args) => trees(...args).every(t => t < tree)

let result = 0

inputs.forEach((line, y) => {
  line.forEach((tree, x) => {
    const up = isVisible(tree, x, y, 0, -1)
    const down = isVisible(tree, x, y, 0, 1)
    const left = isVisible(tree, x, y, -1, 0)
    const right = isVisible(tree, x, y, 1, 0)

    if (up || down || left || right) result++
  })
})

console.log(result)

type Args = [number, number, number, number]
