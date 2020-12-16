let scene, camera, light, renderer;
let sphere;
let rings = [];
let cameraControl;
let axes;
let camerapos=0.05;

let generateSaturn = function(){
  let geometry = new THREE.SphereGeometry(6,32,32);
  let material = new THREE.MeshPhysicalMaterial({
    color: 0xfcba03
  });
  sphere =  new THREE.Mesh(geometry,material);
  scene.add(sphere);
  
  let geometry_r1 = new THREE.TorusGeometry(7, 1, 8, 50);
  let material_r1 = new THREE.MeshPhysicalMaterial({
    color: "#ede6c2"
  });
  let r1 =  new THREE.Mesh(geometry_r1,material_r1);
  rings.push(r1);
  
  let geometry_r2 = new THREE.TorusGeometry(9, 1, 8, 50);
  let material_r2 = new THREE.MeshPhysicalMaterial({
    color: "#f0e6b1"
  });
  let r2 =  new THREE.Mesh(geometry_r2,material_r2);
  rings.push(r2);
  
  let geometry_r3 = new THREE.TorusGeometry(11, 1, 8, 50);
  let material_r3 = new THREE.MeshPhysicalMaterial({
    color: "#f2f0e6"
  });
  let r3 =  new THREE.Mesh(geometry_r3,material_r3);
  rings.push(r3);
  
  rings.forEach(ring=>{
    ring.rotation.x=1.8;
    ring.rotation.y=0.3;
    scene.add(ring);
  })
  
};


let init = function(){
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  document.body.appendChild(renderer.domElement);
  generateSaturn();
  light = new THREE.DirectionalLight(0xffffff,1,1000);
  light.position.set(-20,-20,35);
  scene.add(light);
  
  axes = new THREE.AxesHelper(10);
  //scene.add(axes);
  
  camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1000);
  camera.position.z=30;
  
  cameraControl = new THREE.OrbitControls(camera,renderer.domElement);
};

let animate = function(){
  camera.position.y+=camerapos;
  if(camera.position.y>=2 || camera.position.y<=-2)
    camerapos*=-1;
  renderer.render(scene,camera);
  requestAnimationFrame(animate);
};

init();
animate();