function creaFrigo (house) {

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;


        object.scale.set(11,15,11.5);
        house.add(object);
        object.position.set(49.5,61,3.7);
        object.rotation.x = 0.5*Math.PI;
        object.rotation.y = -0.5*Math.PI;
      });

        loader.load(
          'assets/models/refridgerator.obj', 
          'assets/models/refridgerator.mtl', 
          {side: THREE.DoubleSide}
        );
}


function creaIsola(house,objects,oggetto){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;


        object.scale.set(.26,.35,.24);
        house.add(object);
        object.position.set(47,73,3);
        object.rotation.x = 0.5*Math.PI;
        object.rotation.y = -0.5*Math.PI;

        var cubeGeometry = new THREE.BoxGeometry(3,5,30);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;
        var glass_cuc = new THREE.Mesh(cubeGeometry, cubeMaterial);
        glass_cuc.position.set(10,30,0);
        object.add(glass_cuc);


        glass_cuc.interact=function(){

          sound=new Sound('fires');
          sound.audio.play();

          var settings3={

          positionStyle  : Type.SPHERE,
          positionBase   : new THREE.Vector3( 45.2, 32.8, -71.85 ),
          positionRadius : .100,
            
          velocityStyle : Type.SPHERE,
          speedBase     : 1.3,
          speedSpread   : .3,
        
          particleTexture : THREE.ImageUtils.loadTexture( 'assets/textures/general/smokeparticle.png' ),

          sizeTween    : new Tween( [0, 0.0062], [0.062, 7] ),
          opacityTween : new Tween( [0.7, 1], [1, 0] ),
          colorBase    : new THREE.Vector3(0.02, 1, 0.4),
          blendStyle   : THREE.AdditiveBlending,  
          
          particlesPerSecond : 90,
          particleDeathAge   : .05,   
          emitterDeathAge    : 5.6
          }
          if(oggetto[0]!==null){
            oggetto[0].destroy();}
          engine3 = new ParticleEngine();   
          engine3.setValues( settings3 );
          engine3.initialize();
          oggetto[0]=engine3;
        }
        objects.push(glass_cuc);
      });

        loader.load(
          'assets/models/fkc.obj', 
          'assets/models/fkc.mtl', 
          {side: THREE.DoubleSide}
        );

        return oggetto;

}


function creaCocomero(house,objects){

        radius = 1.7;
        widthSegments = 20;
        heightSegments = 20;
        phiStart = Math.PI;
        phiLength = Math.PI;
        thetaStart = 0;
        thetaLength = Math.PI;

        var cupGeometry = new THREE.SphereGeometry(radius,widthSegments,heightSegments, phiStart,phiLength, thetaStart,thetaLength);
        var cup = createMesh(cupGeometry, "cocom.jpg");
        cup.material.side=THREE.DoubleSide;

        var cylinderGeometry = new THREE.CylinderGeometry(radius, radius, .001,32);
        var interno = createMesh(cylinderGeometry, "cocom_intern.jpg");
        interno.rotation.x=0.5*Math.PI;      
	      repeatX = 1;
	      repeatY = 1;
	      interno.material.map.repeat.set(repeatX, repeatY);
        cup.rotation.y=.5*Math.PI;  

        cup.position.set(47,83,14.5);
        cup.add(interno);

        cup_2=cup.clone();
        cup_2.position.set(47,83,14.5);
        cup_2.rotation.y=-.5*Math.PI;  
        house.add(cup_2);

        house.add(cup);

        var coltello = new THREE.Object3D();

          function creaColt(coltello){

          var loader = new THREE.OBJMTLLoader();
          loader.addEventListener('load', function (event) {

          var object = event.content;

          object.scale.set(.15,.15,.15);
          object.rotation.x = 0.5*Math.PI;
          coltello.add(object);
          });

          loader.load(
            'assets/models/colt.obj', 
            'assets/models/colt.mtl', 
            {side: THREE.DoubleSide}
           );
  		    }

        creaColt(coltello);
        coltello.position.set(47,79,12.5);
        var cubeGeometry = new THREE.BoxGeometry(7,7,2);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF0F8FF});
        var glass = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;
        glass.position.set(0,0,0);
        coltello.add(glass);
        house.add(coltello);

        glass.interact=function(){


          var CocTween2Pos = new TWEEN.Tween(cup_2.position)
          .to({ x: 48, y: 83, z: 14.5 },2000)
          .delay(6000)
          .start();

          var CocTween2 = new TWEEN.Tween(cup_2.rotation)
          .to({ x: 0, y: -0.9, z: 0 },3000)
          .delay(6000)
          .start();

          var CocTweenPos = new TWEEN.Tween(cup.position)
          .to({ x: 46, y: 83, z: 14.5 },2000)
          .delay(6000)
          .start();

          var CocTween = new TWEEN.Tween(cup.rotation)
          .to({ x: 0, y: 0.9, z: 0 },3000)
          .delay(6000)
          .start();

          var cubeTween6 = new TWEEN.Tween(coltello.position)
            .to({ x: 47, y: 81.5, z: 14 },700)

          var cubeTween5 = new TWEEN.Tween(coltello.rotation)
            .to({ x: -0.3*Math.PI, y: -0.5*Math.PI, z: 0 },1000)

          var cubeTween4 = new TWEEN.Tween(coltello.rotation)
            .to({ x: 0.25*Math.PI, y: -0.5*Math.PI, z: 0 },2000)
            .chain(cubeTween6)

          var cubeTween3 = new TWEEN.Tween(coltello.position)
            .to({ x: 47, y: 83.5, z: 18 },2000)
            .chain(cubeTween5);

          var cubeTween2 = new TWEEN.Tween(coltello.position)
            .to({ x: 47, y: 79, z: 18 },3000)
            .chain(cubeTween4)
            .start();

          var cubeTween = new TWEEN.Tween(coltello.rotation)
            .to({ x: 0, y:-0.5*Math.PI , z: 0 }, 3000)
            .chain(cubeTween3)  
            .start();

         }

       objects.push(glass);

}


function creaArmadietto(house, objects){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;


        object.scale.set(1.6,1.1,1);
        object.rotation.x = 0.5*Math.PI;
        object.rotation.y = -0.5*Math.PI;
        house.add(object);
        object.position.set(48,75,22);
      });

        loader.load(
          'assets/models/2DoorUpperCabinet.obj', 
          'assets/models/2DoorUpperCabinet.mtl', 
          {side: THREE.DoubleSide}
        );
		}


function creaLavandinoCucina(house){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;

        object.scale.set(2.5,2.3,2.1);
        object.rotation.x = 0.5*Math.PI;
        house.add(object);
        object.position.set(39,84.5,7.8);
      });

        loader.load(
          'assets/models/labello_cucina/kitchenSinkWithMarble.obj', 
          'assets/models/labello_cucina/kitchenSinkWithMarble.mtl', 
          {side: THREE.DoubleSide}
        );
    }