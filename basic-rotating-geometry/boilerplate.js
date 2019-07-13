// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera
camera = new THREE.PerspectiveCamera (3, window.innerWidth/window.innerHeight, 1, 10000);
camera.position.y = 160;
camera.position.z = 400;
camera.lookAt (new THREE.Vector3(0,0,0));

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

// Create cube01
var geometry = new THREE.SphereGeometry( 5, 1, 1 );
//var material = new THREE.MeshBasicMaterial( {color: "#666666"} );
var material = new THREE.MeshStandardMaterial( {
    color: 0xff0051,
    shading: THREE.FlatShading, // default is THREE.SmoothShading
    metalness: 0,
    roughness: 1
} );
var cube01 = new THREE.Mesh( geometry, material );
cube01.position.set (0, 0, 0);
scene.add( cube01 );

// Create wireframe for cube01
var material = new THREE.MeshBasicMaterial( { color: "#000000",wireframe:true,transparent:true } );
var cube02 = new THREE.Mesh( geometry, material );
cube02.position.set (0, 0, 0);
scene.add( cube02 );

// Create a renderer with Antialiasing
var renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setClearColor("#0b0a08");                          // Configure renderer clear color
renderer.setSize( window.innerWidth, window.innerHeight );  // Configure renderer size
document.body.appendChild( renderer.domElement );           // Append Renderer to DOM


// Create controls for the user
controls = new THREE.OrbitControls (camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.25;
// controls.enableZoom = true;
// controls.autoRotate = true;

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: "#333333" } );
// var cube01 = new THREE.Mesh( geometry, material );
// scene.add( cube01 );





// Render Loop
var render = function () {
  //Update Orbit Controls
  controls.update();

  requestAnimationFrame( render );

  cube01.rotation.x += 0.01;
  cube01.rotation.y += 0.01;

  cube02.rotation.x = cube01.rotation.x
  cube02.rotation.y = cube01.rotation.y

  // Render the scene
  renderer.render(scene, camera);
};

render();
