/*
 * -----------------
 * Set-up the scene.
 * -----------------
 */

// Create an empty scene
var scene = new THREE.Scene();

// Create a basic perspective camera and set position
camera = new THREE.PerspectiveCamera (3, window.innerWidth/window.innerHeight, 1, 10000);
camera.position.y = 160;
camera.position.z = 400;
camera.lookAt (new THREE.Vector3(0,0,0));

// Create a light and set position
var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );

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
