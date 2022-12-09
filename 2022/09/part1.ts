import { resolve } from 'path'

const path = resolve(import.meta.dir, 'input.txt')

const res = await Bun.file(path).text()
const inputs = res.split('\n')

const d = {
  U: { x: 0, y: 1 },
  D: { x: 0, y: -1 },
  L: { x: 1, y: 0 },
  R: { x: -1, y: 0 },
}

const head = { x: 0, y: 0 }
const tail = { x: 0, y: 0 }

const position = []

inputs.forEach(input => {
  const [dir, step] = input.split(' ')

  for (let k = 0; k < parseInt(step); k++) {
    head.x += d[dir].x
    head.y += d[dir].y

    const dx = tail.x - head.x
    const dy = tail.y - head.y

    if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
      tail.x -= Math.sign(dx)
      tail.y -= Math.sign(dy)
    }
    
    position.push(`${tail.x},${tail.y}`)
  }
})

console.log(new Set(position).size)
