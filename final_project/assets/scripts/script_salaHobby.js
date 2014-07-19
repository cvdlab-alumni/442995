function creaCanestro(house,objects){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;

        object.scale.set(.1,.1, .1);
        house.add(object);
        object.position.set(100,45,20);
        object.rotation.x=0.5*Math.PI;
        object.rotation.y = 0.5*Math.PI;

        var cubeGeometry = new THREE.BoxGeometry(50,50,50);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF0F8FF});
        var glass_chit = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;

        });


        loader.load(
          'assets/models/basketball_net_and_board.obj', 
          'assets/models/basketball_net_and_board.mtl', 
          {side: THREE.DoubleSide}
        );

}


function creaPingPong(house,objects){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;

        object.scale.set(.075,.15, .075);
        house.add(object);
        object.position.set(15,63,10);
        object.rotation.x=0.5*Math.PI;
        object.rotation.y = 0.5*Math.PI;

        var cubeGeometry = new THREE.BoxGeometry(50,50,50);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF0F8FF});
        var glass_chit = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;

        });

        loader.load(
          'assets/models/table_tennis.obj', 
          'assets/models/table_tennis.mtl', 
          {side: THREE.DoubleSide}
        );

}



function creaPortaCD(house,objects){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;


        object.scale.set(.14,.12, .13);
        house.add(object);
        object.position.set(33,64.5,3);
        object.rotation.x=0.5*Math.PI;
        object.rotation.y = -0.5*Math.PI;

        });

        loader.load(
          'assets/models/CDrack.obj', 
          'assets/models/CDrack.mtl', 
          {side: THREE.DoubleSide}
        );

}


function creaFreccette(house,objects){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;

        object.scale.set(.5,.5, .5);
        house.add(object);
        object.position.set(33,83.5,20);
        object.rotation.x=1*Math.PI;
        object.rotation.z = .5*Math.PI;

        var cylGeometry = new THREE.CylinderGeometry(5, 5, .5,20);
        var cylMaterial = new THREE.MeshLambertMaterial({color: 0x121212});
        var cyl = new THREE.Mesh(cylGeometry, cylMaterial);
        cyl.position.set(-.5,0,-1);
        object.add(cyl);

        var cubeGeometry = new THREE.BoxGeometry(50,50,50);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF0F8FF});
        var glass_chit = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;

        });

        loader.load(
          'assets/models/dart_2.obj', 
          'assets/models/dart_2.mtl', 
          {side: THREE.DoubleSide}
        );

}


function creaRacchettaPingPong(house,objects){


      var cylinderGeometry = new THREE.CylinderGeometry(2, 2, .1,20);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFF0000});
      var racchetta = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      racchetta.position.set(15,72,10.7);
      racchetta.rotation.x=0.5*Math.PI;
      racchetta.rotation.y=0.2*Math.PI;   
      racchetta.scale.set(0.6,0.6,0.6);   
      house.add(racchetta);

      var cylinderGeometry = new THREE.CylinderGeometry(2, 2, .1,20);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x0000FF});
      var parte_blu = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      parte_blu.position.set(0,-0.3,0);
      racchetta.add(parte_blu);

      var cylinderGeometry = new THREE.CylinderGeometry(2, 2, .2,20);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xDEB887});
      var parte_centrale = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      parte_centrale.position.set(0,-0.15,0);
      racchetta.add(parte_centrale);

      var cylinderGeometry = new THREE.CylinderGeometry(3, 3, .2,26);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xDEB887});
      var impugnatura = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      impugnatura.scale.x=0.15;
      impugnatura.position.set(0,-0.15,1.3);
      racchetta.add(impugnatura);

      var pallaPingGeometry=new THREE.SphereGeometry(.3,20,20);
      var pallaPingMaterial = new THREE.MeshPhongMaterial({color: 0xFFA500});
      var pallaPing = new THREE.Mesh(pallaPingGeometry, pallaPingMaterial);
      pallaPing.position.set(13,72,10.7);
      house.add(pallaPing);

      racchetta.interact=function(){


      var racchRotat11 = new TWEEN.Tween(racchetta.rotation)
        .to({ x: 0.5*Math.PI, y: 0.2*Math.PI, z: 0*Math.PI}, 2000)
        .delay(2100);

      var racchRotat9 = new TWEEN.Tween(racchetta.rotation)
        .to({ x: 1*Math.PI, y: -0.2*Math.PI, z: 0.2*Math.PI}, 300)
        .chain(racchRotat11);

      var racchRotat8 = new TWEEN.Tween(racchetta.rotation)
        .to({ x: 1*Math.PI, y: -0.1*Math.PI, z: 1*Math.PI}, 600)
        .delay(1500)
        .chain(racchRotat9);

      var racchRotat7 = new TWEEN.Tween(racchetta.rotation)
        .to({ x: 1.1*Math.PI, y: 0.1*Math.PI, z: 0}, 200)
        .chain(racchRotat8)

      var racchRotat6 = new TWEEN.Tween(racchetta.rotation)
        .to({ x: 0.9*Math.PI, y: 0.1*Math.PI, z: 0}, 300)
        .delay(2100)
        .chain(racchRotat7);

      var racchRotat5 = new TWEEN.Tween(racchetta.rotation)
        .to({ x: 1.1*Math.PI, y: 0, z: 0}, 200)
        .chain(racchRotat6)

      var racchRotat4 = new TWEEN.Tween(racchetta.rotation)
        .to({ x: 0.9*Math.PI, y: 0, z: 0}, 300)
        .delay(2100)
        .chain(racchRotat5);


      var racchRotat3 = new TWEEN.Tween(racchetta.rotation)
        .to({ x: 1*Math.PI, y: 0.2*Math.PI, z: -0.1*Math.PI}, 200)
        .chain(racchRotat4)


      var racchRotat2 = new TWEEN.Tween(racchetta.rotation)
        .to({ x: 1*Math.PI, y: 0.2*Math.PI, z: 0.2*Math.PI}, 300)
        .delay(500)
        .chain(racchRotat3);

      var racchRotat = new TWEEN.Tween(racchetta.rotation)
        .to({ x: 1*Math.PI, y: 0.2*Math.PI, z: 0}, 1000)
        .chain(racchRotat2)
        .start();   

      var ballTween24 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 25, y: 82, z: 4}, 550)
        .easing(TWEEN.Easing.Bounce.Out)
        

      var ballTween23 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 25, y: 82, z: 6}, 250)
        .chain(ballTween24); 

      var ballTween22 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 25, y: 82, z: 4}, 400)
        .chain(ballTween23); 

      var ballTween21 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 21, y: 77, z: 12}, 500)
        .chain(ballTween22); 

      var ballTween20 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 18, y: 71, z: 10.5}, 800)
        .chain(ballTween21); 

      var ballTween19 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 3, y: 55, z: 17}, 400)
        .chain(ballTween20); 

      var ballTween18 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 16, y: 51, z: 20}, 400)
        .chain(ballTween19); 

      var ballTween17 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 21, y: 66, z: 10.5}, 200)
        .chain(ballTween18); 

      var ballTween16 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 23, y: 76, z: 15}, 500)
        .chain(ballTween17); 

      var ballTween15 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 20, y: 66, z: 10.5}, 800)
        .chain(ballTween16); 

      var ballTween14 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 17, y: 51, z: 21}, 800)
        .chain(ballTween15); 

      var ballTween13 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 14, y: 66, z: 10.5}, 500)
        .chain(ballTween14); 

      var ballTween12 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 13, y: 76, z: 15}, 500)
        .chain(ballTween13); 

      var ballTween11 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 13, y: 66, z: 10.5}, 800)
        .chain(ballTween12); 

      var ballTween10 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 13, y: 51, z: 21}, 800)
        .chain(ballTween11); 

      var ballTween9 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 13, y: 66, z: 10.5}, 500)
        .chain(ballTween10); 

      var ballTween8 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 13, y: 76, z: 15}, 500)
        .chain(ballTween9); 

      var ballTween7 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 17, y: 66, z: 10.5}, 800)
        .chain(ballTween8); 

      var ballTween6 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 22, y: 51, z: 21}, 800)
        .chain(ballTween7); 

      var ballTween5 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 17, y: 66, z: 10.5}, 500)
        .chain(ballTween6); 

      var ballTween4 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 13, y: 76, z: 15}, 300)
        .chain(ballTween5); 

      var ballTween3 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 13, y: 76, z:19 }, 400)
        .chain(ballTween4); 

      var ballTween2 = new TWEEN.Tween(pallaPing.position)
        .to({ x: 13, y: 76, z: 10.5}, 300)
        .chain(ballTween3); 

      var ballTween = new TWEEN.Tween(pallaPing.position)
        .to({ x: 13, y: 76, z: 15}, 1000)
        .chain(ballTween2) 
        .start();      

      var racchTween11 = new TWEEN.Tween(racchetta.position)
      .to({ x: 13, y: 72, z: 10.7 },2000)
      .delay(2100);

      var racchTween10 = new TWEEN.Tween(racchetta.position)
      .to({ x: 23, y: 76.3, z: 15 },200)
      .chain(racchTween11)

      var racchTween9 = new TWEEN.Tween(racchetta.position)
      .to({ x: 23, y: 80, z: 15 },300)
      .chain(racchTween10)

      var racchTween8 = new TWEEN.Tween(racchetta.position)
      .to({ x: 23, y: 76.3, z: 15 },1000)
      .delay(1100)
      .chain(racchTween9)

      var racchTween7 = new TWEEN.Tween(racchetta.position)
      .to({ x: 13, y: 76.3, z: 15 },200)
      .chain(racchTween8)

      var racchTween6 = new TWEEN.Tween(racchetta.position)
      .to({ x: 13, y: 80, z: 15 },300)
      .delay(2100)
      .chain(racchTween7)

      var racchTween5 = new TWEEN.Tween(racchetta.position)
      .to({ x: 13, y: 76.3, z: 15 },200)
      .chain(racchTween6)

      var racchTween4 = new TWEEN.Tween(racchetta.position)
      .to({ x: 13, y: 80, z: 15 },300)
      .delay(2100)
      .chain(racchTween5)

      var racchTween3 = new TWEEN.Tween(racchetta.position)
      .to({ x: 13, y: 76.3, z: 15 },200)
      .chain(racchTween4)

      var racchTween2 = new TWEEN.Tween(racchetta.position)
      .to({ x: 13, y: 80, z: 15 },300)
      .delay(500)
      .chain(racchTween3)

      var racchTween = new TWEEN.Tween(racchetta.position)
      .to({ x: 13, y: 78, z: 15}, 1000)
      .chain(racchTween2)  
      .start();      

      }

      objects.push(racchetta);

}


function creaFreccia(house,objects){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;


        object.scale.set(.5,.5, .5);
        house.add(object);
        object.position.set(33.5,85.5,20);
        object.rotation.x=.5*Math.PI;
        object.rotation.y = .5*Math.PI;

        var cubeGeometry = new THREE.BoxGeometry(10,10,.3);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF0F8FF});
        var glass = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;
        glass.position.set(-3,0,0);
        object.add(glass);

        glass.interact=function(){

        var cubeTweenBack3 = new TWEEN.Tween(object.position)
          .to({ x: 33.5, y: 86.9, z: 20.3 }, 200)
          .delay(200);       


        var cubeTween3 = new TWEEN.Tween(object.position)
          .to({ x: 19.5, y: 85.5, z: 21 }, 400)
          .delay(1000)
          .chain(cubeTweenBack3);  

        var cubeTweenBack2 = new TWEEN.Tween(object.position)
          .to({ x: 22.5, y: 85.5, z: 21 },1000)
          .chain(cubeTween3);

        var cubeTween2 = new TWEEN.Tween(object.position)
          .to({ x: 22.5, y: 85.5, z: 19 }, 1000)
          .chain(cubeTweenBack2);  

        var cubeTweenBack = new TWEEN.Tween(object.position)
          .to({ x: 22.5, y: 85.5, z: 21 },1000)
          .chain(cubeTween2);

        var cubeTween = new TWEEN.Tween(object.position)
          .to({ x: 22.5, y: 85.5, z: 20 }, 1000)
          .chain(cubeTweenBack)  
          .start();

         }

        objects.push(glass);

        });

        loader.load(
          'assets/models/dart_1.obj', 
          'assets/models/dart_1.mtl', 
          {side: THREE.DoubleSide}
          );

}






function creaCampo(house){

        var campo_B = createMesh(new THREE.PlaneGeometry(35,40), "basket3.jpg");
        campo_B.material.side=THREE.DoubleSide;
        campo_B.position.set(117.5,45,-7.8);
        house.add(campo_B);

}


function creaPalla(house,objects){


        var palla = createMesh(new THREE.SphereGeometry(1.5,20,20), "BasketballMap.jpg");
        house.add(palla);
        palla.position.set(125,45,-6);

        palla.interact=function(){
        palla.position.set(125,45,-6);

        var cubeTween5 = new TWEEN.Tween(palla.position)
        .to({ x: 109, y: 45, z: -6 }, 900)
        .easing(TWEEN.Easing.Bounce.Out)

        var cubeTweenBack4 = new TWEEN.Tween(palla.position)
        .to({ x: 101, y: 45, z:16 }, 100)
        .chain(cubeTween5); 

        var cubeTween4 = new TWEEN.Tween(palla.position)
        .to({ x: 104, y: 45, z: 19 }, 100)
        .chain(cubeTweenBack4);        

        var cubeTween33 = new TWEEN.Tween(palla.position)
        .to({ x: 110, y: 45, z:20.5 }, 100)
        .chain(cubeTween4); 

        var cubeTweenBack3 = new TWEEN.Tween(palla.position)
        .to({ x: 115, y: 45, z:19 }, 200)
        .delay(1000)
        .chain(cubeTween33);

        var cubeTween3 = new TWEEN.Tween(palla.position)
        .to({ x: 125, y: 45, z: 6 }, 1000)
        .easing(TWEEN.Easing.Bounce.In)
        .chain(cubeTweenBack3);

        var cubeTweenBack2 = new TWEEN.Tween(palla.position)
        .to({ x: 125, y: 45, z: -6 }, 1000)
        .easing(TWEEN.Easing.Bounce.Out)
        .chain(cubeTween3);

        var cubeTween2 = new TWEEN.Tween(palla.position)
        .to({ x: 125, y: 42, z: 6 }, 1000)
        .easing(TWEEN.Easing.Bounce.In)
        .chain(cubeTweenBack2);


        var cubeTweenBack = new TWEEN.Tween(palla.position)
        .to({ x: 125, y: 45, z: -6 },1000)
        .easing(TWEEN.Easing.Bounce.Out)
        .chain(cubeTween2) ;

        var cubeTween = new TWEEN.Tween(palla.position)
        .to({ x: 125, y: 48, z: 6 }, 1000)
        .easing(TWEEN.Easing.Bounce.In)
        .chain(cubeTweenBack)  
        .start();

       }

       objects.push(palla);


}

        function createMesh(geom, texture) {
          var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + texture)
          texture.wrapS = THREE.RepeatWrapping;
          texture.wrapT = THREE.RepeatWrapping;

          geom.computeVertexNormals();
          var mat = new THREE.MeshLambertMaterial();
          mat.map = texture;

          var mesh = new THREE.Mesh(geom, mat);

          return mesh;
        }