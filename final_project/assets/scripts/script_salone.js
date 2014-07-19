function creaDivano(house){

      var cubeGeometry = new THREE.BoxGeometry(.8,10,10);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x121212});
      var divano = new THREE.Mesh(cubeGeometry, cubeMaterial);

      var cubeGeometry = new THREE.BoxGeometry(27,4,9);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x121212});
      var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(13.5,-3,0);
      divano.add(cube);

      var cubeGeometry = new THREE.BoxGeometry(.8,10,10);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x121212});
      var cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube2.position.set(27,0,0);
      divano.add(cube2);

      var cylinderGeometry = new THREE.CylinderGeometry(.3, .3, 27);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x121212});
      var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      cylinder.rotation.z=0.5*Math.PI;

      cylinder.position.set(13.5, -1, 4.5);

      divano.add(cylinder);

      var cylinderGeometry = new THREE.CylinderGeometry(.45, .45, 10);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x121212});
      var cylinder2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      cylinder2.rotation.x=0.5*Math.PI;

      cylinder2.position.set(0, 5, 0);

      divano.add(cylinder2);

      cylinder3=cylinder2.clone();
      cylinder3.position.x=27;
      divano.add(cylinder3);

      var cubeGeometry = new THREE.BoxGeometry(27,4,9);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xB22222});
      var cuscino = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cuscino.position.set(13.5,0.5,0);
      cuscino.scale.y=.8;
      divano.add(cuscino);

      var cylinderGeometry = new THREE.CylinderGeometry(.3, .3, 27);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xB22222});
      var cylinder4 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      cylinder4.rotation.z=0.5*Math.PI;

      cylinder4.position.set(13.5, 2, 4.25);
      divano.add(cylinder4);

      var cylinderGeometry = new THREE.CylinderGeometry(.3, .3, 9);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xB22222});
      var cylinder5 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      cylinder5.rotation.x=0.5*Math.PI;

      cylinder5.position.set(.64, 1.9, -0.1);
      divano.add(cylinder5);

      cylinder6=cylinder5.clone();
      cylinder6.position.x=9;
      divano.add(cylinder6);

      cylinder7=cylinder5.clone();
      cylinder7.position.x=18;
      divano.add(cylinder7);

      cylinder8=cylinder5.clone();
      cylinder8.position.x=26.3;
      divano.add(cylinder8);

      var cubeGeometry = new THREE.BoxGeometry(27,10.5,0.5);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x121212});
      var schienale = new THREE.Mesh(cubeGeometry, cubeMaterial);
      schienale.position.set(13.5,1.5,-4.5);
      divano.add(schienale);

      var sphereGeometry = new THREE.SphereGeometry(0.3,12,12);
      var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x121212});
      var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);

      sphere.position.set(22,2,0);
      divano.add(sphere);

      sphere2=sphere.clone();
      sphere2.position.set(13.5,2,0);  
      divano.add(sphere2);

      sphere3=sphere.clone();
      sphere3.position.set(4.7,2,0);  
      divano.add(sphere3);

      var cylinderGeometry = new THREE.CylinderGeometry(.3, .3, 14,20);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xB22222});
      var cusc_schienale = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
      cusc_schienale.rotation.z=0.5*Math.PI;
      cusc_schienale.position.set(7,5,-3.1);
      cusc_schienale.rotation.x=-0.1*Math.PI;
      cusc_schienale.scale.x=9;
      cusc_schienale.scale.z=3;   
      cusc_schienale.scale.y=0.9;  
      divano.add(cusc_schienale);

      cusc_schienale2=cusc_schienale.clone();
      cusc_schienale2.scale.y=0.9;
      cusc_schienale2.position.x=20;
      divano.add(cusc_schienale2);

      divano.scale.set(0.9,0.9,0.9);
      divano.rotation.x=0.5*Math.PI;
      divano.rotation.y=1*Math.PI;
      divano.position.set(74,27.5,8);
      house.add(divano);
 }


function lampada(house){

        var loader = new THREE.OBJLoader();
        loader.load('assets/models/Lamp.obj', function (obj) {
          var material = new THREE.MeshLambertMaterial({color: 0xB22222, shading: THREE.FlatShading});
          material.side=THREE.DoubleSide;
          obj.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
              child.material = material;
            }
          });
        obj.scale.set(0.07, 0.07, 0.07);
        obj.position.set(0,20,0);
        var cylinderGeometry = new THREE.CylinderGeometry(3, 3, 54,20);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x121212});
        stecco = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        stecco.position.set(0,19,5.5);  
        var sphereGeometry = new THREE.SphereGeometry(3.5,12,12);
        var sphereMaterial = new THREE.MeshLambertMaterial({color: 0xF5FFFA});
        var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
        sphere.position.set(0,48,5.5);
        sphere2=sphere.clone();
        sphere2.scale.set(9,5,9);
        sphere2.position.set(0,-6,5.5);
        obj.add(stecco);
        obj.add(sphere);
        obj.add(sphere2);
        obj.rotation.x=0.5*Math.PI;
        house.add(obj);
        obj.position.set(71,41.8,10);
        });
}

function Dresser(obj){

        var loader = new THREE.OBJLoader();
        loader.load('assets/models/Dresser.obj', function (obj) {
          var material = new THREE.MeshLambertMaterial({ color: 0XF5FFFA,shading: THREE.FlatShading});
          material.side=THREE.DoubleSide;
          obj.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
              child.material = material;
            }
          });
          obj.scale.set(.25, .2, .2);
          obj.position.set(0,30,0);
          var cubeGeometry = new THREE.BoxGeometry(1.3,33,46);
          var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x121212});
          var cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial);
          cube2.position.set(62.2,18,-4.5);
          obj.add(cube2);
          cube=cube2.clone();
          cube.position.set(-67,17.8,-4.5);
          obj.add(cube);

          var cubeGeometry = new THREE.BoxGeometry(126,15,.9);
          var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x121212});
          var cube3 = new THREE.Mesh(cubeGeometry, cubeMaterial);

          obj.add(cube3);
          cube3.position.set(-2.2,9.7,38.3);

          cube4=cube3.clone();
          cube4.position.set(-2.2,25.7,19.11);
          obj.add(cube4);
          obj.rotation.x=0.5*Math.PI;
          obj.rotation.y=2*Math.PI;
          obj.position.set(62,41,3); 
          obj.scale.set(0.18,0.17,0.13);  
          house.add(obj);  

        });  
}


function creaLibreria(house){


        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

          var object = event.content;

          object.scale.set(.4,.4, .4);
          object.position.y=7.5;
          object.position.x=15;
          var cubeGeometry = new THREE.BoxGeometry(1.3,31.5,14);
          var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xB22222});
          var cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial);
          cube2.position.set(21.2,15.5,-4.7);
          object.add(cube2);

          cube3=cube2.clone();
          cube3.position.set(-17.9,15.5,-4.7);
          object.add(cube3);

          var cubeGeometry = new THREE.BoxGeometry(39,1.5,13.5);
          var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF5FFFA});
          var cube4 = new THREE.Mesh(cubeGeometry, cubeMaterial);

          object.add(cube4);
          cube4.position.set(2,15.5,-4.8);

          cube5=cube4.clone();
          cube5.position.set(2,0.5,-4.8);
          object.add(cube5);

          cube6=cube4.clone();
          cube6.position.set(2,30.1,-4.8);
          object.add(cube6);
          object.rotation.x=0.5*Math.PI;
          object.rotation.y=1*Math.PI;
          object.position.set(63,7,4);
          object2=object.clone();
          object.position.set(63,7,10);
          house.add(object);
          house.add(object2);
        });


        loader.load(
          'assets/models/bookshelf.obj', 
          'assets/models/bookshelf.mtl', 
          {side: THREE.DoubleSide}
        );


}


function creaTV(objects,house){

       var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;
        object.rotation.x=0.5*Math.PI;
        object.rotation.y=0.05*Math.PI;
        house.add(object);
        object.position.set(58,41,9);

        object.scale.set(2,1.5, 1);

        var cubeGeometry = new THREE.BoxGeometry(3,.3,1.7);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xB22222});
        var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

        object.add(cube);
        cube.position.set(0,0,0);
        object.add(cube);

        video.load(); 
  
  
        videoImage = document.createElement( 'canvas' );
        videoImage.width = 480;
        videoImage.height = 204;

        videoImageContext = videoImage.getContext( '2d' );
        videoImageContext.fillStyle = '#000000';
        videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

        videoTexture = new THREE.Texture( videoImage );
        videoTexture.minFilter = THREE.LinearFilter;
        videoTexture.magFilter = THREE.LinearFilter;
        
        var movieMaterial = new THREE.MeshBasicMaterial( { map: videoTexture, overdraw: true, side:THREE.DoubleSide } );
        var movieGeometry = new THREE.PlaneGeometry(6.3, 3.5, 4, 4 );
        var movieScreen = new THREE.Mesh( movieGeometry, movieMaterial );
        movieScreen.position.set(0,3.9,.6);
        object.add(movieScreen);


          function creaTelecomando () {

          var loader = new THREE.OBJMTLLoader();
          loader.addEventListener('load', function (event) {

          var object = event.content;


          object.scale.set(.35,.35,.35);
          house.add(object);
          object.position.set(58,28,10);
          object.rotation.x = 0.5*Math.PI;
          object.rotation.y = -0.5*Math.PI;
          });

          var cubeGeometry = new THREE.BoxGeometry(1,3,4);
          var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
          cubeMaterial.transparent=true;
          cubeMaterial.opacity=0;
          var glass_tel = new THREE.Mesh(cubeGeometry, cubeMaterial);
          house.add(glass_tel);
          glass_tel.position.set(58,28,10);

          tel_acceso=false;

          glass_tel.interact=function(){
            if(!tel_acceso){
            if(controllo.morning===true)
            video.src = "assets/movies/Kings.mp4";
            else
            video.src = "assets/movies/Siren_2.mp4";           
            video.play();
            tel_acceso=true;
            }
            else{
            video.pause();
            video.currentTime = 0;        
            tel_acceso=false;
            }
        }
        objects.push(glass_tel);

        loader.load(
          'assets/models/telecomando/remote.obj', 
          'assets/models/telecomando/remote.mtl', 
          {side: THREE.DoubleSide}
        );
        }

      creaTelecomando();
        });


        loader.load(
          'assets/models/HDTV.obj', 
          'assets/models/HDTV.mtl', 
          {side: THREE.DoubleSide}
        );
}

function creaSedia(house){

        var loader = new THREE.OBJLoader();
        loader.load('assets/models/VITRA03.obj', function (obj) {
          //var material = new THREE.MeshLambertMaterial({color: 0xF4A460, shading: THREE.FlatShading});
          var material = new THREE.MeshLambertMaterial({ color : 0x121212,shading: THREE.FlatShading});
          material.side=THREE.DoubleSide;
          obj.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
              child.material = material;
            }
          });
          obj.scale.set(0.35, 0.35, 0.4);
          obj.position.set(13,8,0);
          var cubeGeometry = new THREE.BoxGeometry(15,15.2,.5);
          var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xB22222});
          var cube3 = new THREE.Mesh(cubeGeometry, cubeMaterial);

          obj.add(cube3);
          cube3.position.set(0,-0.5,17.1);
          obj.position.set(87,25,3);
          house.add(obj);
        });

}


function creaTavolo(house){

        var loader = new THREE.OBJLoader();
        loader.load('assets/models/SQUARE_TABLE.obj', function (obj) {
          //var material = new THREE.MeshLambertMaterial({color: 0xF4A460, shading: THREE.FlatShading});
          var material = new THREE.MeshLambertMaterial({ color:0x121212, shading: THREE.FlatShading});
          material.side=THREE.DoubleSide;
          obj.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
              child.material = material;
            }
          });
          obj.scale.set(.15,.095, .17);
          obj.position.set(13,20,0);
          var cylinderGeometry = new THREE.CylinderGeometry(3, 3, 97.5);
          var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xB22222});
          var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
          cylinder.position.set(0, 57, 0);
          obj.add(cylinder);
          obj.position.set(87,16,4);
          obj.rotation.x=0.5*Math.PI;
          house.add(obj);

        });


}
