function creaLampadari(house,objects){

      var sphereGeometry = new THREE.SphereGeometry(1.5,20,20);
      var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xB22222});
      var lamp_sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
      lamp_sphere.position.set(70,25,25.6);
      sphereMaterial.transparent=true;
      sphereMaterial.opacity=0.8;
      house.add(lamp_sphere)

      var cylinderGeometry = new THREE.CylinderGeometry(.05, .05, 2.5,20);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
      var reggi_lamp = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      reggi_lamp.position.y=2.7;
      lamp_sphere.add(reggi_lamp);

      var cylinderGeometry = new THREE.CylinderGeometry(.25, .25, .4,20);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
      var reggi_lamp_2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      reggi_lamp_2.position.y=4.1;
      lamp_sphere.add(reggi_lamp_2);
      lamp_sphere.rotation.x=0.5*Math.PI;

      var pointColor = 0xFFFFFF;
      pointLight_sphere = new THREE.PointLight(pointColor);
        pointLight_sphere.position.set(1,-10,5);
      pointLight_sphere.distance = 36;

      lamp_sphere.add(pointLight_sphere);
      pointLight_sphere.intensity=0;

      lamp_sphere.interact=function(){
      	if(pointLight_sphere.intensity===0){
        pointLight_sphere.intensity=5;
        sound=new Sound('SwitchOn');
        sound.audio.play();
      }
    	else{
    	pointLight_sphere.intensity=0;
        sound=new Sound('SwitchOff');
        sound.audio.play();
      }
    }

    var sphereGeometry = new THREE.SphereGeometry(1.5,20,20);
    var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x4682B4});
    var lamp_sphere2 = new THREE.Mesh(sphereGeometry,sphereMaterial);
    lamp_sphere2.position.set(85,67,25.6);
    sphereMaterial.transparent=true;
    sphereMaterial.opacity=0.8;
    house.add(lamp_sphere2)

    var cylinderGeometry = new THREE.CylinderGeometry(.05, .05, 2.5,20);
    var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
    var reggi_lamp = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    reggi_lamp.position.y=2.7;
    lamp_sphere2.add(reggi_lamp);

    var cylinderGeometry = new THREE.CylinderGeometry(.25, .25, .4,20);
    var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
    var reggi_lamp_2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    reggi_lamp_2.position.y=4.1;
    lamp_sphere2.add(reggi_lamp_2);
    lamp_sphere2.rotation.x=0.5*Math.PI;

    var pointColor = 0xFFFFFF;
    pointLight_sphere2 = new THREE.PointLight(pointColor);
      pointLight_sphere2.position.set(5,-5,-1);
    pointLight_sphere2.distance = 23;

    lamp_sphere2.add(pointLight_sphere2);
    pointLight_sphere2.intensity=0;



    lamp_sphere2.interact=function(){
      if(pointLight_sphere2.intensity===0){
      pointLight_sphere2.intensity=5;
      sound=new Sound('SwitchOn');
      sound.audio.play();
     }
    else{
    pointLight_sphere2.intensity=0;
      sound=new Sound('SwitchOff');
      sound.audio.play();
     }
    }

    var sphereGeometry = new THREE.SphereGeometry(1.5,20,20);
    var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x228B22});
    var lamp_sphere3 = new THREE.Mesh(sphereGeometry,sphereMaterial);
    lamp_sphere3.position.set(18,35,25.6);
    sphereMaterial.transparent=true;
    sphereMaterial.opacity=0.8;
    house.add(lamp_sphere3)

    var cylinderGeometry = new THREE.CylinderGeometry(.05, .05, 2.5,20);
    var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
    var reggi_lamp = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    reggi_lamp.position.y=2.7;
    lamp_sphere3.add(reggi_lamp);

    var cylinderGeometry = new THREE.CylinderGeometry(.25, .25, .4,20);
    var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
    var reggi_lamp_2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    reggi_lamp_2.position.y=4.1;
    lamp_sphere3.add(reggi_lamp_2);
    lamp_sphere3.rotation.x=0.5*Math.PI;

    var pointColor = 0xFFFFFF;
    pointLight_sphere3 = new THREE.PointLight(pointColor);
      pointLight_sphere3.position.set(0,-5,0);
    pointLight_sphere3.distance = 23;

    lamp_sphere3.add(pointLight_sphere3);
    pointLight_sphere3.intensity=0;

    lamp_sphere3.interact=function(){
      if(pointLight_sphere3.intensity===0){
      pointLight_sphere3.intensity=5;
      sound=new Sound('SwitchOn');
      sound.audio.play();
     }
    else{
    pointLight_sphere3.intensity=0;
      sound=new Sound('SwitchOff');
      sound.audio.play();
   }
  }

  objects.push(lamp_sphere,lamp_sphere2,lamp_sphere3);

}