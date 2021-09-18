export function Stairs(num = 17, totalWidth = 4420, totalHeight = 2900, depth = 1400) {
  this.width = this.totalWidth / this.num
  this.height = this.totalHeight / this.num
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
  return vertices
}

export function  Flight(h = 180, upThickness = 180, upLevelWidth = 500, downLevelWidth = 500, downThickness = 180) {
  this.h = h
  this.upThickness = upThickness
  this.upLevelWidth = upLevelWidth
  this.downThickness = downThickness
  this.downLevelWidth = downLevelWidth
}
 Flight.prototype.createFlightVertices = function (stairs) {
  let vertices = [], upVertice = [], downVertice = []
  let k = stairs.height / stairs.width // 161/260
  // y=k*x-h
  downVertice.push(new THREE.Vector2((-this.downThickness + this.h) / k, -this.downThickness))
  downVertice.push(new THREE.Vector2(-this.downLevelWidth, -this.downThickness), new THREE.Vector2(-this.downLevelWidth, 0))

  upVertice.push(new THREE.Vector2(stairs.totalWidth, stairs.totalHeight + this.upThickness), new THREE.Vector2(stairs.totalWidth + this.upLevelWidth, stairs.totalHeight + this.upThickness))
  upVertice.push(new THREE.Vector2(stairs.totalWidth + this.upLevelWidth, stairs.totalHeight))
  upVertice.push(new THREE.Vector2((stairs.totalHeight + this.h) / k, stairs.totalHeight))
  vertices.push(downVertice, upVertice)
  return vertices
}

export function LadderBeam(beamWidth = 200, beamHeight = 400, corbelWidth = 200, corbelHeight = 200, sinkHeight = 200) {
  this.beamWidth = beamWidth
  this.beamHeight =beamHeight
  this.corbelWidth = corbelWidth
  this.corbelHeight = corbelHeight
  this.sinkHeight = sinkHeight
}
LadderBeam.prototype.createLadderBeamVertices = function (stairs, flight, seam) {
  let vertices = []
  vertices.push(new THREE.Vector2(stairs.totalWidth + flight.upLevelWidth + seam.f5, stairs.totalHeight + this.beamHeight-this.sinkHeight))
  vertices.push(new THREE.Vector2(stairs.totalWidth + flight.upLevelWidth + seam.f5 + this.beamWidth, stairs.totalHeight + this.beamHeight-this.sinkHeight))
  vertices.push(new THREE.Vector2(stairs.totalWidth + flight.upLevelWidth + seam.f5 + this.beamWidth, stairs.totalHeight + this.beamHeight-this.sinkHeight - this.beamHeight))
  vertices.push(new THREE.Vector2(stairs.totalWidth + flight.upLevelWidth + seam.f5, stairs.totalHeight + this.beamHeight-this.sinkHeight - this.beamHeight))
  vertices.push(new THREE.Vector2(stairs.totalWidth + flight.upLevelWidth + seam.f5 - this.corbelWidth, stairs.totalHeight + this.beamHeight-this.sinkHeight - this.beamHeight))
  vertices.push(new THREE.Vector2(stairs.totalWidth + flight.upLevelWidth + seam.f5 - this.corbelWidth, stairs.totalHeight + this.beamHeight-this.sinkHeight - this.beamHeight + this.corbelHeight))
  vertices.push(new THREE.Vector2(stairs.totalWidth + flight.upLevelWidth + seam.f5, stairs.totalHeight + this.beamHeight-this.sinkHeight - this.beamHeight + this.corbelHeight))
  return vertices
}

export function Seam(f1 = 20, f2 = 20, f3 = 20, f4 = 20, f5 = 30, f6 = 20) {
  this.f1 = f1
  this.f2 = f2
  this.f3 = f3
  this.f4 = f4
  this.f5 = f5
  this.f6 = f6
}