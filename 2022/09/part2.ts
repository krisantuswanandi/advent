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

const len = 10
const points = Array(len).fill(0).map(_ => ({ x: 0, y: 0 }))

const position = []

inputs.forEach(input => {
  const [dir, step] = input.split(' ')

  for (let k = 0; k < parseInt(step); k++) {
    points[0].x += d[dir].x
    points[0].y += d[dir].y
  
    let prev = points[0]

    points.slice(1).forEach(curr => {
      const dx = curr.x - prev.x
      const dy = curr.y - prev.y
  
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        curr.x -= Math.sign(dx)
        curr.y -= Math.sign(dy)
      }

      prev = curr
    })
    
    position.push(`${points[len - 1].x},${points[len - 1].y}`)
  }
})

console.log(new Set(position).size)
