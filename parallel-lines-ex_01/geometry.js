
/*
 * -----------------
 * Add geometries
 * -----------------
 */


 // Create points

 // smooth my curve over this many points
 var numPoints = 100;

 spline = new THREE.SplineCurve3([
   new THREE.Vector3(-window.innerWidth/2, 1, 0),
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(15, -5, 0),
 ]);

 var splinePoints = spline.getPoints(numPoints);

 // Create geometry
 var geometry = new THREE.Geometry();

 for(var i = 0; i < splinePoints.length; i++){
     geometry.vertices.push(splinePoints[i]);
 }

// Create material
 var material = new THREE.LineBasicMaterial({
     color: 0xffffff,
 });

 // Create line
 var line = new THREE.Line(geometry, material);

 scene.add(line);
