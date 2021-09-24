export function pointMaterial(attribute={color: 0xff0000,size:5}){
  let material=new THREE.PointsMaterial(attribute)
  return material
}

export function lineMaterial(attribute={color: 0xff0000},type='line'){
  let material
  if(type=='line'){
    material=new THREE.LineBasicMaterial(attribute)
  }else{
    material=new THREE.LineDashedMaterial(attribute)
  }
  return material
}

export function meshMaterial(attribute={color: 0xff0000},type='basic'){
  let material
  if(type=='basic'){
    material=new THREE.MeshBasicMaterial(attribute)
  }else if(type=='lambert'){
    material=new THREE.MeshLambertMaterial(attribute)
  }
  return material
}