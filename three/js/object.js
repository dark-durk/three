export function Stairs(num = 17, totalWidth = 4420, totalHeight = 2900, depth = 1400) {
  this.width = Number((((this.totalWidth / this.num) * 100) / 100).toFixed(2))
  this.height = Number((((this.totalHeight / this.num) * 100) / 100).toFixed(2))
  this.depth = depth
  this.num = num
  this.totalHeight = totalHeight
  this.totalWidth = totalWidth

}
Stairs.prototype.createStairsVertices = function () {
  let vertices = []
  this.width = this.totalWidth / this.num
  this.height = this.totalHeight / this.num
  for (let i = 0; i < this.num; i++) {
    let vector1 = new THREE.Vector2(i * this.width, i * this.height)
    let vector2 = new THREE.Vector2(i * this.width, (i + 1) * this.height)
    vertices.push(vector1)
    vertices.push(vector2)
  }
  vertices.push(new THREE.Vector2(this.num * this.width, this.num * this.height))

  vertices.push(new THREE.Vector2(this.num * this.width, this.num * this.height - 200))
  vertices.unshift(new THREE.Vector2(0, -200))
  // console.log(vertices)
  return vertices
}

export function Bench(h = 180, fh = 180, fw = 500, uw = 500, uh = 180) {
  this.h = h
  this.fh = fh
  this.fw = fw
  this.uh = uh
  this.uw = uw
}
Bench.prototype.createBenchVertices = function (stairs) {
  let vertices = [], upVertice = [], underVertice = []
  let k = stairs.height / stairs.width // 161/260
  // y=k*x-h
  underVertice.push(new THREE.Vector2((-this.uh + this.h) / k, -this.uh))
  underVertice.push(new THREE.Vector2(-this.uw, -this.uh), new THREE.Vector2(-this.uw, 0))

  upVertice.push(new THREE.Vector2(stairs.totalWidth, stairs.totalHeight + this.fh), new THREE.Vector2(stairs.totalWidth + this.fw, stairs.totalHeight + this.fh))
  upVertice.push(new THREE.Vector2(stairs.totalWidth + this.fw, stairs.totalHeight))
  upVertice.push(new THREE.Vector2((stairs.totalHeight + this.h) / k, stairs.totalHeight))
  vertices.push(underVertice, upVertice)
  // console.log(vertices)
  return vertices
}

export function LadderBeam(beamWidth = 200, beamHeight = 400, tiaoerWidth = 200, tiaoerHeight = 200, sinkHeight = 200) {
  this.beamWidth = beamWidth
  this.beamHeight = beamHeight
  this.tiaoerWidth = tiaoerWidth
  this.tiaoerHeight = tiaoerHeight
  this.sinkHeight = sinkHeight
}
LadderBeam.prototype.createLadderBeamVertices = function (stairs, bench, feng) {
  let vertices = []
  vertices.push(new THREE.Vector2(stairs.totalWidth + bench.fw + feng.f5, stairs.totalHeight + bench.fh))
  vertices.push(new THREE.Vector2(stairs.totalWidth + bench.fw + feng.f5 + this.beamWidth, stairs.totalHeight + bench.fh))
  vertices.push(new THREE.Vector2(stairs.totalWidth + bench.fw + feng.f5 + this.beamWidth, stairs.totalHeight + bench.fh - this.beamHeight))
  vertices.push(new THREE.Vector2(stairs.totalWidth + bench.fw + feng.f5, stairs.totalHeight + bench.fh - this.beamHeight))
  vertices.push(new THREE.Vector2(stairs.totalWidth + bench.fw + feng.f5 - this.tiaoerWidth, stairs.totalHeight + bench.fh - this.beamHeight))
  vertices.push(new THREE.Vector2(stairs.totalWidth + bench.fw + feng.f5 - this.tiaoerWidth, stairs.totalHeight + bench.fh - this.beamHeight + this.tiaoerHeight))
  vertices.push(new THREE.Vector2(stairs.totalWidth + bench.fw + feng.f5, stairs.totalHeight + bench.fh - this.beamHeight + this.tiaoerHeight))
  // console.log(vertices)
  return vertices
}

export function Feng(f1 = 20, f2 = 20, f3 = 20, f4 = 20, f5 = 30, f6 = 20) {
  this.f1 = f1
  this.f2 = f2
  this.f3 = f3
  this.f4 = f4
  this.f5 = f5
  this.f6 = f6
}