import { resolve } from 'path'

const path = resolve(import.meta.dir, 'input.txt')

const res = await Bun.file(path).text()
const inputs = res.split('\n')

let score = 0

const rock = {
  X: 'B',
  Y: 'A',
  Z: 'C',
}

const paper = {
  X: 'C',
  Y: 'B',
  Z: 'A',
}

const scissors = {
  X: 'A',
  Y: 'C',
  Z: 'B',
}

const point = {
  X: 0,
  Y: 3,
  Z: 6,
}

inputs.forEach(value => {
  const play = value.split(' ')

  const op = play[0]
  const p = play[1]

  if (rock[p] === op) score += 1
  else if (paper[p] === op) score += 2
  else if (scissors[p] === op) score += 3
  
  score += point[p]
})

console.log(score)
