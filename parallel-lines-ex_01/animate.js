// Render Loop
function animate() {

  //Update Orbit Controls
  controls.update();

  // Run animate() function every frame
  requestAnimationFrame( animate );

  // Render the scene
  renderer.render(scene, camera);
};

animate();
