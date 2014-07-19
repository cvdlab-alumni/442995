      function creaDoccia(house, objects,oggetto){

        var loader = new THREE.OBJLoader();
        loader.load('assets/models/piatto_doccia.obj', function (obj) {
        var material = new THREE.MeshPhongMaterial({ color:0xC0C0C0, shading: THREE.FlatShading});
        material.side=THREE.DoubleSide;
        obj.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            child.material = material;
            }
          });

        obj.scale.set(.08,.1,.163);
        obj.rotation.x = 0.5*Math.PI;
        obj.rotation.y = Math.PI;
        house.add(obj);
        obj.position.set(29.5,10.4,3.5);

        var cubeGeometry = new THREE.BoxGeometry(10,5,20);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;
        var intera= new THREE.Mesh(cubeGeometry, cubeMaterial);
        intera.position.set(-38,105,0);
        obj.add(intera);

        var spugna= new THREE.Object3D();
        obj.add(spugna);

          function creaSpugna(){

          var loader = new THREE.OBJMTLLoader();
          loader.addEventListener('load', function (event) {

            var sp= event.content;
            sp.scale.set(.75,1.5, 1.5);
            spugna.add(sp);
            sp.rotation.y = .5*Math.PI;

          });


          loader.load(
            'assets/models/spugna/eponge.obj', 
            'assets/models/spugna/eponge.mtl', 
            {side: THREE.DoubleSide}
          );
          }
        creaSpugna();
        spugna.position.set(0,3.5,3);

          function creaRubinDoccia(house){

          var loader = new THREE.OBJMTLLoader();
          loader.addEventListener('load', function (event) {

            var object = event.content;

            object.scale.set(.5,1, .9);
            obj.add(object);
            object.position.set(-3,105,0);
            object.rotation.y = .5*Math.PI;

          });


          loader.load(
            'assets/models/ShowerHeadAndFaucet.obj', 
            'assets/models/ShowerHeadAndFaucet.mtl', 
            {side: THREE.DoubleSide}
          );
          }

        creaRubinDoccia(house);

        var cubeGeometry = new THREE.BoxGeometry(2,300,45);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=.3;
        var glass_doccia = new THREE.Mesh(cubeGeometry, cubeMaterial);
        glass_doccia.position.set(43.5,80,23);
        obj.add(glass_doccia);

        glass_doccia2=glass_doccia.clone();
        glass_doccia2.position.z=-22;
        obj.add(glass_doccia2);

        var acqua_doccia = createMesh(new THREE.PlaneGeometry(90,90), "water_1.jpg");
        acqua_doccia.material.side=THREE.DoubleSide;
        repeatX = 2;
        repeatY = 4;
        acqua_doccia.material.map.repeat.set(repeatX, repeatY);
        acqua_doccia.material.transparent=true;
        acqua_doccia.material.opacity=0.4;

        acqua_doccia.rotation.x=-0.5*Math.PI;
        acqua_doccia.position.set(0,0,0);
        obj.add(acqua_doccia);
        aperta=false;


        glass_doccia2.interact=function(){


        if(!aperta){
        var cubeTween = new TWEEN.Tween(glass_doccia2.position)
          .to({ x: 43.5, y:80 , z: 23 }, 2000)
          .start();    
          aperta=true;
          }
        else {
        var cubeTween = new TWEEN.Tween(glass_doccia2.position)
          .to({ x: 43.5, y:80 , z: -22 }, 2000)
          .start();  
          aperta=false;
        }  

          sound=new Sound('shower_open_close');
          sound.audio.play();
          }


        intera.interact=function(){


          if(controllo.morning===true){

        acqua_doccia.material.map=THREE.ImageUtils.loadTexture("assets/textures/general/water_1.jpg");
        stringa_doccia='assets/textures/general/raindrop2flip.png';

          }
          else{
        acqua_doccia.material.map=THREE.ImageUtils.loadTexture("assets/textures/general/blood.jpg");
        stringa_doccia='assets/textures/general/blood_fall_3.png';

          }


        sound=new Sound('shower_water_2');
        sound.audio.play();

        var spugnaRot3 = new TWEEN.Tween(spugna.rotation)
          .to({ x: 0, y:0 , z: 0 }, 1000)
          .delay(3000);

        var spugnaRot2 = new TWEEN.Tween(spugna.rotation)
          .to({ x: 0.3*Math.PI, y:0 , z: 0 }, 1000)
          .chain(spugnaRot3)
          .delay(5000);

        var spugnaRot = new TWEEN.Tween(spugna.rotation)
          .to({ x: 0.5*Math.PI, y:0 , z: 0 }, 3000)
          .chain(spugnaRot2)
          .start();   

        var spugnaTween11 = new TWEEN.Tween(spugna.position)
          .to({ x: -25, y:3.5 , z: 3 }, 3000)

        var spugnaTween10 = new TWEEN.Tween(spugna.position)
          .to({ x: -25, y:70 , z: 5 }, 1000)
          .chain(spugnaTween11)

        var spugnaTween9 = new TWEEN.Tween(spugna.position)
          .to({ x: -25, y:100 , z: -10 }, 1000)
          .chain(spugnaTween10)

        var spugnaTween8 = new TWEEN.Tween(spugna.position)
          .to({ x: -25, y:70 , z: 5 }, 1000)
          .chain(spugnaTween9)

        var spugnaTween7 = new TWEEN.Tween(spugna.position)
          .to({ x: -25, y:100, z: -10 }, 1000)
          .chain(spugnaTween8)

        var spugnaTween6 = new TWEEN.Tween(spugna.position)
          .to({ x: -25, y:70 , z: 5 }, 1000)
          .chain(spugnaTween7)

        var spugnaTween5 = new TWEEN.Tween(spugna.position)
          .to({ x: -25, y:130 , z: 5 }, 1000)
          .chain(spugnaTween6)

        var spugnaTween4 = new TWEEN.Tween(spugna.position)
          .to({ x: -25, y:70 , z: 5 }, 1000)
          .chain(spugnaTween5)

        var spugnaTween3 = new TWEEN.Tween(spugna.position)
          .to({ x: -25, y:130 , z: 5 }, 1000)
          .chain(spugnaTween4)

        var spugnaTween2 = new TWEEN.Tween(spugna.position)
          .to({ x: -25, y:70 , z: 5 }, 1000)
          .chain(spugnaTween3)

        var spugnaTween = new TWEEN.Tween(spugna.position)
          .to({ x: -25, y:130 , z: 5 }, 3000)
          .chain(spugnaTween2)
          .start();         

        var cubeTween = new TWEEN.Tween(acqua_doccia.position)
          .to({ x: 0, y:0 , z: 0 }, 5000)
          .delay(20000)
          .start();      

        var cubeTween = new TWEEN.Tween(acqua_doccia.position)
          .to({ x: 0, y:5.5 , z: 0 }, 5000)
          .start();      



      var settings = {

        positionStyle    : Type.CUBE,
        positionBase     : new THREE.Vector3(31.6,30.8,-10.4),
        positionSpread   : new THREE.Vector3( .5, 20, .5 ),
   
        velocityStyle    : Type.CUBE,
        velocityBase     : new THREE.Vector3( 0, -50, 0 ),
        velocitySpread   : new THREE.Vector3( 0, 0, 0 ), 
        accelerationBase : new THREE.Vector3( 0, 0, 0 ),

        particleTexture : THREE.ImageUtils.loadTexture(stringa_doccia ),      
   
        sizeBase    : 0.1,
        sizeSpread  : 0.1,
        colorBase   : new THREE.Vector3(0.66, 1.0, 0.7), // H,S,L
        colorSpread : new THREE.Vector3(0.00, 0.0, 0.2),
        opacityBase : 0.6,
   
        particlesPerSecond : 6000,
        particleDeathAge   : .2,  
        emitterDeathAge    : 5.5
        };
        if(oggetto[0]!==null){
          oggetto[0].destroy();}
        engin = new ParticleEngine();   
        engin.setValues( settings );
        engin.initialize();
        oggetto[0]=engin;

         }

         objects.push(intera,glass_doccia2);


      });

      return oggetto;

    }


function creaVanity(house,objects){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;


        object.scale.set(.13,.13, .13);
        house.add(object);
        object.position.set(72,64,3);
        object.rotation.x=0.5*Math.PI;
        object.rotation.y = -.5*Math.PI;

        var cubeGeometry = new THREE.BoxGeometry(50,50,50);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF0F8FF});
        var glass_chit = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;


        });


        loader.load(
          'assets/models/vanity2.obj', 
          'assets/models/vanity2.mtl', 
          {side: THREE.DoubleSide}
        );

}


function creaVanity2(house,objects){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;


        object.scale.set(.08,.08, .08);
        house.add(object);
        object.position.set(14,18.3,7);
        object.rotation.x=0.5*Math.PI;

        var cubeGeometry = new THREE.BoxGeometry(50,50,50);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF0F8FF});
        var glass_chit = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;


        });


        loader.load(
          'assets/models/bathroom1.obj', 
          'assets/models/bathroom1.mtl', 
          {side: THREE.DoubleSide}
        );

}

function creaLav(house,objects){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;
        object.scale.set(.11,.11, .1);
        house.add(object);
        object.position.set(67.5,72,8);
        object.rotation.x=0.5*Math.PI;
        object.rotation.y = -.5*Math.PI;

        });


        loader.load(
          'assets/models/lavatrice/clothes_washing_machine.obj', 
          'assets/models/lavatrice/clothes_washing_machine.mtl', 
          {side: THREE.DoubleSide}
        );

}



function creaSpecchio(house,objects){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;


        object.scale.set(.1,.05, .1);
        house.add(object);
        object.position.set(70.5,64,21);
        object.rotation.x=0.5*Math.PI;
        object.rotation.y = -.5*Math.PI;

        var glass_sp = createMesh( new THREE.BoxGeometry(25,55,1), "HandBlood2.png");
       // var glass_sp = new THREE.Mesh(cubeGeometry, cubeMaterial);
        glass_sp.material.transparent=true;
        glass_sp.material.opacity=0;
            object.add(glass_sp);

        glass_sp.interact=function(){

        if(!controllo.morning&&AbilitaFirstPerson){
        glass_sp.material.opacity=0.5;
        sound=new Sound('shock');
        sound.audio.play();
        }
        else
        glass_sp.material.opacity=0;
        }

        objects.push(glass_sp);





        });

        loader.load(
          'assets/models/ovalMirror.obj', 
          'assets/models/ovalMirror.mtl', 
          {side: THREE.DoubleSide}
        );


}


function creaWater(house,objects){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;

        object.scale.set(2,2.5, 2);
        house.add(object);
        object.position.set(55,66.5,12);
        object.rotation.x=0.5*Math.PI;
        object.rotation.y = .5*Math.PI;

        var cubeGeometry = new THREE.BoxGeometry(50,50,50);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF0F8FF});
        var glass_chit = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;

        obj2=object.clone();
        obj2.position.set(6.5,14.5,12);
        obj2.rotation.y=-2*Math.PI;
        obj2.rotation.x=-1.5*Math.PI;
        house.add(obj2);

        });


        loader.load(
          'assets/models/toilet3.obj', 
          'assets/models/toilet3.mtl', 
          {side: THREE.DoubleSide}
        );


}



function creaCartaIg(house,objects){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;

        object.scale.set(.17,.17, .17);
        house.add(object);
        object.position.set(51,62.5,10);
        object.rotation.x=0.5*Math.PI;
        object.rotation.y = .5*Math.PI;

        var cubeGeometry = new THREE.BoxGeometry(50,50,50);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF0F8FF});
        var glass_chit = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;

        });


        loader.load(
          'assets/models/toiletPaperDispenser.obj', 
          'assets/models/toiletPaperDispenser.mtl', 
          {side: THREE.DoubleSide}
        );


}







function creaVasca(house,objects){

	      var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var obj = event.content;
        obj.scale.set(.11,.13, .13);
        house.add(obj);
        obj.position.set(60.5,87,3);
        obj.rotation.x=0.5*Math.PI;
        obj.rotation.y =0*Math.PI;

        var cubeGeometry = new THREE.BoxGeometry(30,20,60);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF0F8FF,side: THREE.DoubleSide});
        var cube3 = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube3.position.set(90,50,35);

        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;
        obj.add(cube3);

	      var acqua = createMesh(new THREE.PlaneGeometry(160,58), "water_1.jpg");
	      acqua.material.side=THREE.DoubleSide;
	      repeatX = 2;
	      repeatY = .5;
	      acqua.material.map.repeat.set(repeatX, repeatY);
        acqua.material.transparent=true;
        acqua.material.opacity=0.4;

	      acqua.rotation.x=-0.5*Math.PI;
	      acqua.position.set(0,15,30);
	      obj.add(acqua);

        var cylinderGeometry = new THREE.CylinderGeometry(1.6, 1.6, 90);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x87CEFA});
        cylinderMaterial.transparent=true;
        cylinderMaterial.opacity=0.3;
        var acqua_rub1 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        acqua_rub1.scale.y=0.001;
        acqua_rub1.position.set(70,55,25);
        obj.add(acqua_rub1);  


        var cylinderGeometry = new THREE.CylinderGeometry(1.6, 1.6, 90);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x87CEFA});
        cylinderMaterial.transparent=true;
        cylinderMaterial.opacity=0.3;
        var acqua_rub2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        acqua_rub2.scale.y=0.001;
        acqua_rub2.position.set(70,55,46);
        obj.add(acqua_rub2);  

          function creaAnatra(acqua){

          var loader = new THREE.OBJLoader();
          loader.load('assets/models/ducky.obj', function (obj) {
          var material = new THREE.MeshLambertMaterial({ color:0xFFFF52, shading: THREE.FlatShading});
          material.side=THREE.DoubleSide;
          obj.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                child.material = material;
              }
            });

          obj.scale.set(.05,.05,.05);
          obj.position.set(0,0,0);
          obj.rotation.x=0.5*Math.PI;
          obj.rotation.y=0.5*Math.PI;
     		  acqua.add(obj);

          });
          }

        creaAnatra(acqua);
		    acqua_bassa=true;

        cube3.interact=function(){

          if(controllo.morning===true){

        acqua.material.map=THREE.ImageUtils.loadTexture("assets/textures/general/water_1.jpg");
        acqua_rub1.material.color.setHex(0x87CEFA);
        acqua_rub2.material.color.setHex(0x87CEFA);


          }
          else{
        acqua.material.map=THREE.ImageUtils.loadTexture("assets/textures/general/blood.jpg");
        acqua_rub1.material.color.setHex(0xCC0000);
        acqua_rub2.material.color.setHex(0xCC0000);

          }








    if(acqua_bassa){
        var rubin_2_close2 = new TWEEN.Tween(acqua_rub2.position)
          .to({ x: 70, y: 55 ,z: 46 }, 0.001)

        var rubin_2_close = new TWEEN.Tween(acqua_rub2.scale)
          .to({ x: 1, y: 0.001 ,z: 1 }, 0.001)
          .delay(13000)
          .easing(TWEEN.Easing.Sinusoidal.InOut)
          .chain(rubin_2_close2);

        var rubin_2_open = new TWEEN.Tween(acqua_rub2.position)
          .to({ x: 70, y: 10 ,z: 46 }, 3000)
           .easing(TWEEN.Easing.Sinusoidal.InOut)
           .chain(rubin_2_close) 
          .start();

        var rubin_2 = new TWEEN.Tween(acqua_rub2.scale)
          .to({ x: 1, y: 1 ,z: 1 }, 3000)
           .easing(TWEEN.Easing.Sinusoidal.InOut)
          .start();


        var rubin_1_close2 = new TWEEN.Tween(acqua_rub1.position)
          .to({ x: 70, y: 55 ,z: 25 }, 0.001)

        var rubin_1_close = new TWEEN.Tween(acqua_rub1.scale)
          .to({ x: 1, y: 0.001 ,z: 1 }, 0.001)
          .delay(13000)
          .easing(TWEEN.Easing.Sinusoidal.InOut)
          .chain(rubin_1_close2);

        var rubin_1_open = new TWEEN.Tween(acqua_rub1.position)
          .to({ x: 70, y: 10 ,z: 25 }, 3000)
           .easing(TWEEN.Easing.Sinusoidal.InOut)
           .chain(rubin_1_close) 
          .start();

        var rubin_1 = new TWEEN.Tween(acqua_rub1.scale)
          .to({ x: 1, y: 1 ,z: 1 }, 3000)
           .easing(TWEEN.Easing.Sinusoidal.InOut)
          .start();

        var cubeTween = new TWEEN.Tween(acqua.position)
          .to({ x: 0, y: 40 ,z: 30 }, 17000)
           .easing(TWEEN.Easing.Sinusoidal.InOut)
          .start();
              sound=new Sound('Water');
              sound.audio.play();
              acqua_bassa=false;
          }

          else{
        var cubeTween = new TWEEN.Tween(acqua.position)
          .to({ x: 0, y: 15 ,z: 30 }, 19000)
           .easing(TWEEN.Easing.Sinusoidal.InOut)
          .start(); 
              sound=new Sound('sink3');
              sound.audio.play();

              acqua_bassa=true;
          }
         }
         objects.push(cube3);
          });
          loader.load(
            'assets/models/bath.obj', 
            'assets/models/bath.mtl', 
            {side: THREE.DoubleSide}
          );
}