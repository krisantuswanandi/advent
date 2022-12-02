import { resolve } from 'path'

const path = resolve(import.meta.dir, 'input.txt')

const res = await Bun.file(path).text()
const inputs = res.split('\n')

let score = 0

const win = {
  X: 'C',
  Y: 'A',
  Z: 'B',
}

const lose = {
  X: 'B',
  Y: 'C',
  Z: 'A',
}

const draw = {
  X: 'A',
  Y: 'B',
  Z: 'C',
}

const point = {
  X: 1,
  Y: 2,
  Z: 3,
}

inputs.forEach(value => {
  const play = value.split(' ')

  const op = play[0]
  const p = play[1]

  if (win[p] === op) score += 6
  else if (draw[p] === op) score += 3
  
  score += point[p]
})

console.log(score)
