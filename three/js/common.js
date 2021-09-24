export default{
     initLight(scene) {
        let ambientLight = new THREE.AmbientLight("#ffffff", 0.3);
        scene.add(ambientLight);
        let directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
        directionalLight.position.set(0, 80, 20)
        directionalLight.target = scene
        scene.add(directionalLight)
    },
     initCamera(screen,s=10000) {
        let k=window.innerWidth/window.innerHeight
        let camera=new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 10000)
        camera.position.set(100,300,8000)
        camera.lookAt(screen.position)
        return camera
    },
     initRenderer(renderer) {
        renderer.setSize(window.innerWidth,window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio);//设置canvas的像素比为当前设备的屏幕像素比，避免高分屏下模糊
        document.body.appendChild(renderer.domElement)
    },
    getStdVector(e){
        let mouse={}
        e.preventDefault()
        mouse.x=(e.clientX/window.innerWidth)*2-1
        mouse.y=-(e.clientY/window.innerHeight)*2+1
        return mouse
    },
    getWorldVector(mouse,camera){
        let stdVector=new THREE.Vector3(mouse.x,mouse.y,0.5)
        let worldVector=stdVector.unproject(camera)
        return worldVector
    },
   
}