function creaPanchina(house, objects){

      var loader = new THREE.OBJLoader();
      loader.load('assets/models/bench.obj', function (obj) {
      var material = new THREE.MeshLambertMaterial({ color:0x5B4033, shading: THREE.FlatShading});
      material.side=THREE.DoubleSide;
      obj.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
          child.material = material;
       }
      });
      obj.scale.set(5.5,6,5.5);
      obj.rotation.x = 0.5*Math.PI;
      obj.rotation.y = Math.PI;
      house.add(obj);
      obj.position.set(68,-2,5);
      });
		}


function Alieni(house,objects, oggetti_inter){

      var planeGeometry = new THREE.BoxGeometry(20,20,20);
      var planeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF,side: THREE.DoubleSide });
      planeMaterial.transparent=true;
      planeMaterial.opacity=0;
      var base_volante = new THREE.Mesh(planeGeometry,planeMaterial);
      base_volante.position.y=150;
      base_volante.position.z=-3;
      house.add(base_volante);

      var planeGeometry = new THREE.PlaneGeometry(50,50);
      var planeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF,side: THREE.DoubleSide });
      planeMaterial.transparent=true;
      planeMaterial.opacity=1;
      var base_volante2 = new THREE.Mesh(planeGeometry,planeMaterial);
      base_volante2.position.y=150;
      base_volante2.position.z=100;
      objects.push(base_volante);
      oggetti_inter.push(base_volante,base_volante2);

      var loader = new THREE.OBJMTLLoader();
      loader.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(.3,.3,.3);
        object.rotation.x = 0.5*Math.PI;
        object.rotation.y = -0.5*Math.PI;
        object.position.set(0,150,-8);
        house.add(object);
      });

        loader.load(
          'assets/models/Telescope.obj', 
          'assets/models/Telescope.mtl', 
          {side: THREE.DoubleSide}
        );

    var Ufo_vol= new THREE.Object3D();
    house.add(Ufo_vol);
    Ufo_vol.position.set(500,700,700);

    var cylinderGeometry = new THREE.CylinderGeometry(10, 10, 170,23);
    var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFFFF00, side:THREE.DoubleSide});
    cylinderMaterial.transparent=true;
    cylinderMaterial.opacity=0;
    var ascens_alieno = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    ascens_alieno.rotation.x=0.5*Math.PI;
    ascens_alieno.scale.y=0;
    ascens_alieno.position.set(0,-30,8);
    Ufo_vol.add(ascens_alieno);  

    var pointColor = 0xFFFFFF;
    pointLightUfo = new THREE.PointLight(pointColor);
    pointLightUfo.position.set(-20,-35,-80);
    pointLightUfo.distance = 200;
    pointLightUfo.intensity=1;
    Ufo_vol.add(pointLightUfo);

    base_volante.interact=function(){

    cylinderMaterial.opacity=0.5;
    if(AbilitaFirstPerson===true){
        sound=new Sound('ufos2');
        sound.audio.play();
        sound.audio.loop=true;
      var quadroAlieno =createMesh2(new THREE.PlaneGeometry(15, 11), "cvdlab.jpg");
      quadroAlieno.rotation.x=0.5*Math.PI;
      quadroAlieno.rotation.y=0.5*Math.PI;
      quadroAlieno.position.set(-20,-35,21);
      Ufo_vol.add(quadroAlieno);
      var loader = new THREE.OBJMTLLoader();

      loader.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(.2,.2,.2);
        object.rotation.x = 0.5*Math.PI;
        object.rotation.y = Math.PI;
        Ufo_vol.add(object);
      });

        loader.load(
          'assets/models/Ufo/UFO_1.obj', 
          'assets/models/Ufo/UFO_1.mtl', 
          {side: THREE.DoubleSide}
        );

      var ascpos= new TWEEN.Tween(ascens_alieno.position)
        .to({ x: 0, y: -30, z: -75}, 5000)
        .delay(25000)
        .start();

      var asc= new TWEEN.Tween(ascens_alieno.scale)
        .to({ x: 1, y: 1, z: 1}, 5000)
        .delay(25000)
        .start();

      var UfoVola= new TWEEN.Tween(Ufo_vol.position)
        .to({ x: 0, y: 150, z: 150}, 30000)
        .start();

      var Volare2 = new TWEEN.Tween(controls.getObject().position)
        .to({ x: 0, y: 193, z: -115}, 50000);

      var Volare = new TWEEN.Tween(controls.getObject().position)
        .to({ x: 0, y: 193, z: -115}, 10000) 
        .chain(Volare2);

      var Volare0 = new TWEEN.Tween(controls.getObject().position)
        .to({ x: 0, y: 30, z: -115}, 32000) 
        .chain(Volare)
        .start();

      }
    }
}


function creaFico(house, objects){

      var loader = new THREE.OBJMTLLoader();
      loader.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(.15,.15,.15);
        object.rotation.x = 0.5*Math.PI;
        object.rotation.y = Math.PI;
        house.add(object);
        object.position.set(52,-6,-2);
      });

        loader.load(
          'assets/models/fico/yuccaPlant.obj', 
          'assets/models/fico/yuccaPlant.mtl', 
          {side: THREE.DoubleSide}
        );
    }



function creaSpatif(house, objects){

      var loader = new THREE.OBJMTLLoader();
      loader.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(.3,.3,.3);
        object.rotation.x = 0.5*Math.PI;
        object.rotation.y = Math.PI;
        house.add(object);
        object.position.set(27,-14,-8);
        obj2=object.clone();
        obj2.position.x=7.5;
        house.add(obj2);
      });

        loader.load(
          'assets/models/pianta/littlePlant.obj', 
          'assets/models/pianta/littlePlant.mtl', 
          {side: THREE.DoubleSide}
        );
    }


  function creaVasoEst(house, objects){

      var loader = new THREE.OBJMTLLoader();
      loader.addEventListener('load', function (event) {

        var objectt = event.content;
        objectt.scale.set(.25,.3,.3);
        objectt.rotation.x = 0.5*Math.PI;
        objectt.rotation.y = 2*Math.PI;
        house.add(objectt);
        objectt.position.set(35,-17.5,13);
        obj2=objectt.clone();
        obj2.position.x=68;
        house.add(obj2);
        obj3=objectt.clone();
        obj3.position.x=95.5;
        obj3.rotation.y=0.5*Math.PI;
        house.add(obj3);

      });

        loader.load(
          'assets/models/vaso_est/flowerBox.obj', 
          'assets/models/vaso_est/flowerBox.mtl', 
          {side: THREE.DoubleSide}
        );
    }

function creaLuciEst(house, objects){

      var loader = new THREE.OBJMTLLoader();
      loader.addEventListener('load', function (event) {
        var object = event.content;
        object.scale.set(2,2,2);
        object.rotation.x = 0.5*Math.PI;
        object.rotation.y = 2*Math.PI;
        house.add(object);
        object.position.set(87,-1.5,23);
        obj2=object.clone();
        obj2.position.x=7.5;
        house.add(obj2);
      });

        loader.load(
          'assets/models/luciEst/porch-light.obj', 
          'assets/models/luciEst/porch-light.mtl', 
          {side: THREE.DoubleSide}
        );
    }


function creaLampioni(house, objects){

      var loader = new THREE.OBJMTLLoader();
      loader.addEventListener('load', function (event) {

        var object = event.content;
        object.scale.set(2,2,2);
        object.rotation.x = 0.5*Math.PI;
        object.rotation.y = 2*Math.PI;
        house.add(object);
        object.position.set(27,-37,-7);
        obj2=object.clone();
        obj2.position.x=7;
        house.add(obj2);

        obj3=object.clone();
        obj3.position.y=-87;
        house.add(obj3);

        obj4=obj2.clone();
        obj4.position.y=-87;
        house.add(obj4);

        obj5=object.clone();
        obj5.position.set(125,12,-7);
        house.add(obj5);

        obj6=obj5.clone();
        obj6.position.y=78;
        house.add(obj6);

      });

        loader.load(
          'assets/models/lampione/classic-lamppost.obj', 
          'assets/models/lampione/classic-lamppost.mtl', 
          {side: THREE.DoubleSide}
        );
    }




function luciEsterneAccese(value,house,arrLuciEst){

        var pointColor = 0xFFFFFF;
         pointLight = new THREE.PointLight(pointColor);
        pointLight.position.set(7,-37,20);
        pointLight.distance = 40;
        house.add(pointLight);

        pointLight2 = new THREE.PointLight(pointColor);
        pointLight2.position.set(27,-37,20);
        pointLight2.distance = 40;
        house.add(pointLight2);

        pointLight3 = new THREE.PointLight(pointColor);
        pointLight3.position.set(7,-87,20);
        pointLight3.distance = 40;
        house.add(pointLight3);

        pointLight4 = new THREE.PointLight(pointColor);
        pointLight4.position.set(27,-87,20);
        pointLight4.distance = 40;
        house.add(pointLight4);

        pointLight5 = new THREE.PointLight(pointColor);
        pointLight5.position.set(10.5,-4,21);
        pointLight5.distance = 11;
        house.add(pointLight5);

        pointLight6 = new THREE.PointLight(pointColor);
        pointLight6.position.set(87.5,-1.8,21);
        pointLight6.distance = 10;
        house.add(pointLight6);

        var cubeGeometry = new THREE.BoxGeometry(1,1,1);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.position.set(87.5,-1.8,21);

        pointLight.intensity=0;
        pointLight2.intensity=0;
        pointLight3.intensity=0;
        pointLight4.intensity=0;
        pointLight5.intensity=0;
        pointLight6.intensity=0;    

        arrLuciEst.push(pointLight,pointLight2,pointLight3, pointLight4,pointLight5,pointLight6);

      return arrLuciEst;

    }


function creaTappetino(house){


      var cubeGeometry = new THREE.BoxGeometry(9.5,5,.5);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x5B4033});
      var tappetino = new THREE.Mesh(cubeGeometry, cubeMaterial);
      tappetino.position.set(39,-3,2); 
      house.add(tappetino);


          var options = {
          size: 1.7,
          height: 0.01,
          bevelThickness: 0.1,
          bevelSegments: 12,
          bevelSize: 0,
          bevelEnabled: true,
          curveSegments: 3,
          steps: 1,
          font: "gentilis",
          weight: "normal"
          };

      console.log(THREE.FontUtils.faces);

      text = new THREE.Mesh(new THREE.TextGeometry("CVD LAB", options), new THREE.MeshBasicMaterial({ color: 0x0A0A0A}));
      text.position.set(-4.3,-.7,0.2);
      tappetino.add(text);
}




      function creaCampanello(house,objects){


      var cubeGeometry = new THREE.BoxGeometry(.7,.9,.2);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x211F1F});
      var interr = new THREE.Mesh(cubeGeometry, cubeMaterial);
      interr.rotation.x=0.5*Math.PI;
      interr.position.set(33,-.1,15);
      house.add(interr);

      var cubeGeometry = new THREE.BoxGeometry(.4,.6,.15);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFDF5E6});
      var pulsante = new THREE.Mesh(cubeGeometry, cubeMaterial);
      pulsante.position.set(0,0,0.17);   
      interr.add(pulsante);


      interr.interact=function(){

        sound=new Sound('doorbell');
        sound.audio.play();


      var interrTween2 = new TWEEN.Tween(pulsante.position)
        .to({ x: 0, y: 0, z: 0.15 }, 500)     


      var interrTween = new TWEEN.Tween(pulsante.position)
        .to({ x: 0, y: 0, z: 0.05}, 450)
        .chain(interrTween2)  
        .start();
      }
      objects.push(interr);

      }

function creaAlbero(house, objects){

      var loader = new THREE.OBJMTLLoader();
      loader.addEventListener('load', function (event) {

        var object = event.content;
        object.scale.set(.5,.5,.5);
        object.rotation.x = 0.5*Math.PI;
        object.rotation.y = Math.PI;
        house.add(object);
        object.position.set(68,-70,-7);
      });

        loader.load(
          'assets/models/albero/Tree.obj', 
          'assets/models/albero/Tree.mtl', 
          {side: THREE.DoubleSide}
        );
    }

function creaFontanaFuoco(house,objects,oggetto){

      var cylinderGeometry = new THREE.CylinderGeometry(.45, .45, 3);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xB22222});
      var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      cylinder.rotation.x=0.5*Math.PI;

      cylinder.position.set(115,  70, -7);
      house.add(cylinder);

      var cubeGeometry = new THREE.BoxGeometry(4,4,2.8);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
      cubeMaterial.transparent=true;
      cubeMaterial.opacity=0;
      var glass_font = new THREE.Mesh(cubeGeometry, cubeMaterial);
      house.add(glass_font);
      glass_font.position.set(115,  70, -7);

      glass_font.interact=function(){

      sound=new Sound('fontana');
      sound.audio.play();

      var settings2 = {

        positionStyle    : Type.CUBE,
        positionBase     : new THREE.Vector3( 115,  15, -70 ),
        positionSpread   : new THREE.Vector3( 1, 0, 1 ),
        
        velocityStyle    : Type.CUBE,
        velocityBase     : new THREE.Vector3( 0,  17, 0 ),
        velocitySpread   : new THREE.Vector3( 10, 2, 10 ), 

        accelerationBase : new THREE.Vector3(0, -10, 0 ),
        
        particleTexture : THREE.ImageUtils.loadTexture( 'assets/textures/general/star.png' ),

        angleBase               : 0,
        angleSpread             : 180,
        angleVelocityBase       : 0,
        angleVelocitySpread     : 360 * 4,
        
        sizeTween    : new Tween( [0, .03], [.03, 1] ),
        opacityTween : new Tween( [2, 3], [1, 0] ),
        colorTween   : new Tween( [0.5, 2], [ new THREE.Vector3(0,1,0.5), new THREE.Vector3(0.8, 1, 0.5) ] ),

        particlesPerSecond : 200,
        particleDeathAge   : 3,   
        emitterDeathAge    : 7
     };

      if(oggetto[0]!==null){
        oggetto[0].destroy();}
    engine2 = new ParticleEngine();   
    engine2.setValues( settings2 );
    engine2.initialize();
    oggetto[0]=engine2;

      }

    objects.push(glass_font);

    return oggetto;
}