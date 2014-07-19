        function creaLetto(house){

            var loader = new THREE.OBJLoader();
            loader.load('assets/models/BED.obj', function (obj) {
              var material = new THREE.MeshLambertMaterial({ color : 0xDEB887,shading: THREE.FlatShading});
              material.side=THREE.DoubleSide;
              obj.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                  child.material = material;
                }
              });
              obj.scale.set(.003, .004, .0025);
              obj.position.set(-3,14,0);
              var cubeGeometry = new THREE.BoxGeometry(28,2,18.5);
              var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x4682B4});
              var cube3 = new THREE.Mesh(cubeGeometry, cubeMaterial);
              cube3.scale.set(200,200,200);
              cube3.position.set(70,1500,300);

              obj.add(cube3);
              obj.rotation.x=0.5*Math.PI;
              obj.position.set(82,82,2.5);

              house.add(obj);
            });
        }

        function creaPc(house,objects){
            var loader = new THREE.OBJMTLLoader();
            loader.addEventListener('load', function (event) {
              var object = event.content;
              object.scale.set(.7,.7,.7);
              house.add(object);
              object.position.set(74.5,68,11);
              object.rotation.x=0.5*Math.PI;
              object.rotation.y=0.1*Math.PI;

              var cube = createMesh( new THREE.BoxGeometry(6.8,4.8,.3), "MAC.png");
              cube.rotation.x=-0.07*Math.PI;
              object.add(cube);
              cube.position.set(0.2,7.6,3.2);
              object.add(cube);
              var accesa=true;
              cube.interact=function(){

                if(!accesa){
                  accesa=true;
                  if(controllo.morning)
                  cube.material.map=THREE.ImageUtils.loadTexture("assets/textures/general/MAC.png");
                  else
                  cube.material.map=THREE.ImageUtils.loadTexture("assets/textures/general/gimp.gif");

                  sound=new Sound('pc_on');
                  sound.audio.play();
                }
                else{
                  cube.material.map=THREE.ImageUtils.loadTexture("assets/textures/general/black.jpg");
                  accesa=false;
                  sound=new Sound('pc_on');
                  sound.audio.play();
                }
              }
              objects.push(cube);
            });


            loader.load(
              'assets/models/iMac.obj', 
              'assets/models/iMac.mtl', 
              {side: THREE.DoubleSide}
            );
        }


        function creaDesk(house){

            var loader = new THREE.OBJLoader();
            loader.load('assets/models/Desk.obj', function (obj) {
              //var material = new THREE.MeshLambertMaterial({color: 0xF4A460, shading: THREE.FlatShading});
              var material = new THREE.MeshLambertMaterial({ color : 0xDEB887,shading: THREE.FlatShading});
              material.side=THREE.DoubleSide;
              obj.traverse(function (child) {
                if (child instanceof THREE.Mesh) {
                  child.material = material;
                }
              });
            obj.scale.set(.04, .04, .03);
            obj.position.set(13,14,0);

            var cubeGeometry = new THREE.BoxGeometry(120,45,5);
            var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x4682B4});
            var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube.position.set(0,175,87);
            obj.add(cube);

            cube4=cube.clone();
            cube4.position.set(295,175,95);
            cube4.scale.x=0.9;
            obj.add(cube4);

            var cubeGeometry = new THREE.BoxGeometry(120,45,5);
            var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x4682B4});
            var cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube2.position.set(0,125,87);
            obj.add(cube2);

            cube5=cube2.clone();
            cube5.position.set(295,125,95);
            cube5.scale.x=0.9;
            obj.add(cube5);

            var cubeGeometry = new THREE.BoxGeometry(120,80,5);
            var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x4682B4});
            var cube3 = new THREE.Mesh(cubeGeometry, cubeMaterial);
            cube3.position.set(0,55,87);

            obj.add(cube3);
            cube6=cube3.clone();
            cube6.position.set(295,55,95);
            cube6.scale.x=0.9;
            obj.add(cube6);
            obj.position.set(75,55,2.5);
            obj.rotation.x=0.5*Math.PI;
            obj.rotation.y=0.5*Math.PI;

            house.add(obj);
            });
        }


        function creaArmadioRagazzo(house){
        var loader = new THREE.OBJLoader();
        loader.load('assets/models/Rack.obj', function (obj) {
          //var material = new THREE.MeshLambertMaterial({color: 0xF4A460, shading: THREE.FlatShading});
          var material = new THREE.MeshLambertMaterial({ color:0xDEB887, shading: THREE.FlatShading});
          material.side=THREE.DoubleSide;
          obj.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
              child.material = material;
            }
          });
          obj.scale.set(20,20, 20);
          obj.position.set(13,20,0);

          var cubeGeometry = new THREE.BoxGeometry(.7,.015,.35);
          var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x4682B4});
          var cube3 = new THREE.Mesh(cubeGeometry, cubeMaterial);
          cube3.position.set(0,.36,-0.02);

          obj.add(cube3);
          obj.position.set(94,65,15);
          obj.rotation.x=0.5*Math.PI;
          obj.rotation.y=0.5*Math.PI;
          house.add(obj);
        });
        }


        function creaSediaRagazzo(house,objects){

        var loader = new THREE.OBJLoader();
        loader.load('assets/models/DeskChair.obj', function (obj) {
          var material = new THREE.MeshLambertMaterial({ color:0x4682B4, shading: THREE.FlatShading});
          material.side=THREE.DoubleSide;
          obj.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
              child.material = material;
            }
          });

        obj.scale.set(.2,.2,.2);
        obj.position.set(0,20,0);

        var cubeGeometry = new THREE.BoxGeometry(14,25,1);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF0F8FF});
        var cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube2.rotation.x=-0.025*Math.PI;
        cube2.position.set(-1,38,-8.999);
        obj.add(cube2);

        var cubeGeometry = new THREE.BoxGeometry(14,1,20);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF0F8FF});
        var cube3 = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube3.position.set(-1,26.45,0);
        obj.add(cube3);

        obj.rotation.x=0.5*Math.PI;
        obj.rotation.y=-0.7*Math.PI;        
        obj.position.set(82,60,3);
        house.add(obj);

        var cubeGeometry = new THREE.BoxGeometry(30,100,30);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF0F8FF});
        var cube3 = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;
        obj.add(cube3);  


        cube3.interact=function(){

        var cubeTweenBack3= new TWEEN.Tween(obj.rotation)
            .to({ x: 0.5*Math.PI, y: -0.7*Math.PI, z: 0 }, 4000)
            .easing(TWEEN.Easing.Sinusoidal.InOut);



        var cubeTweenBack2= new TWEEN.Tween(obj.rotation)
            .to({ x: 0.5*Math.PI, y: 15*Math.PI, z: 0 }, 0.001)
            .chain(cubeTweenBack3);


            
        var cubeTweenBack = new TWEEN.Tween(obj.rotation)
            .to({ x: 0.5*Math.PI, y: 7*Math.PI, z: 0 }, 2700)
             .easing(TWEEN.Easing.Sinusoidal.InOut)
            .chain(cubeTweenBack2);

        var cubeTween = new TWEEN.Tween(obj.rotation)
            .to({ x: 0.5*Math.PI, y: -1.3*Math.PI, z: 0 }, 650)
            .easing(TWEEN.Easing.Sinusoidal.InOut)
            .chain(cubeTweenBack)  
            .start();
                sound=new Sound('roller2');
                sound.audio.play();
           }


       objects.push(cube3);

         });
        }


        function creaChitarra(house,objects){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;
        object.scale.set(.1,.1, .1);
        mesh = object;
        house.add(mesh);
        object.position.set(94.5,85,10);
        object.rotation.x=-1*Math.PI;
        object.rotation.z = 0.2*Math.PI;

        var cubeGeometry = new THREE.BoxGeometry(50,50,50);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF0F8FF});
        var glass_chit = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cubeMaterial.transparent=true;
        cubeMaterial.opacity=0;
        object.add(glass_chit);
        objects.push(glass_chit);

        glass_chit.interact=function(){
            sound=new Sound('Wish');
            sound.audio.play();
         }
        });


        loader.load(
          'assets/models/GipsyGuitar.obj', 
          'assets/models/GipsyGuitar4.mtl', 
          {side: THREE.DoubleSide}
         );
        }


    function Sound(name) {
        this.name = name;
        this.audio = document.createElement('audio');
        var source = document.createElement('source');
        source.src = 'assets/sound/' + name + '.mp3';
        this.audio.appendChild(source);
      }
      
    Sound.prototype.play = function() {
        this.audio.play();
      };