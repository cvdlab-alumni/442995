var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

if (havePointerLock) {

  var element = document.body;

  var pointerlockchange = function(event) {
    if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {
      AbilitaFirstPerson = true;
      controls.enabled = true;
      camera.position.set(0,0,0);
      camera.up = new THREE.Vector3(0, 1, 0);
      controls.getObject().position.set(20, 30, 50);
      if(controllo.morning)
      $("#point").fadeIn(1000);
      else{
      $("#pointer").fadeIn(1000);
      textNight(house);
      }        
    } else {
      location.reload();
    }
  }

  var pointerlockerror = function(event) {
    location.reload();
  }

  document.addEventListener('pointerlockchange', pointerlockchange, false);
  document.addEventListener('mozpointerlockchange', pointerlockchange, false);
  document.addEventListener('webkitpointerlockchange', pointerlockchange, false);

  document.addEventListener('pointerlockerror', pointerlockerror, false);
  document.addEventListener('mozpointerlockerror', pointerlockerror, false);
  document.addEventListener('webkitpointerlockerror', pointerlockerror, false);

  var initFirstPerson = function() {
    trackballControls.reset();
    controls = new THREE.PointerLockControls(camera);

      var cubeGeometry = new THREE.BoxGeometry(.1,.1,.1);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x121212,side: THREE.DoubleSide});
      cuubo = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cubeMaterial.transparent=true;
      cubeMaterial.opacity=0;
      cuubo.position.z=-8;
      cuubo.position.y=-1;
      controls.getObject().add(cuubo);
      torcia= new THREE.Object3D();
      controls.getObject().add(torcia);
      if (controllo.morning===false){


      var loader = new THREE.OBJMTLLoader();
      loader.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(1,1,1);
        object.rotation.x = 0.5*Math.PI;
        object.position.x=1;
        object.position.y=-0.5;
        object.position.z=-1;
        torcia.add(object);
      });

        loader.load(
          'assets/models/flashlight.obj', 
          'assets/models/flashlight.mtl', 
          {side: THREE.DoubleSide}
        );
    }
    scene.add(controls.getObject());
    element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;
    if (/Firefox/i.test(navigator.userAgent)) {
      var fullscreenchange = function(event) {
        if (document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element) {
          document.removeEventListener('fullscreenchange', fullscreenchange);
          document.removeEventListener('mozfullscreenchange', fullscreenchange);
          element.requestPointerLock();
        }
      }
      document.addEventListener('fullscreenchange', fullscreenchange, false);
      document.addEventListener('mozfullscreenchange', fullscreenchange, false);
      element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;
      element.requestFullscreen();
    } else {
      element.requestPointerLock();
    }
  };

  function animateFP(oggetti_inter) {
        controls.isOnObject( false );
        ray.ray.origin.copy( controls.getObject().position );
        ray.ray.origin.x -= 19;
        var intersections = ray.intersectObjects(oggetti_inter );
        if ( intersections.length > 0 ) {
          var distance = intersections[ 0 ].distance;
          if ( distance > 0 && distance < 19 ) {
            controls.isOnObject( true );
          }
        }
        controls.update();
  }

}