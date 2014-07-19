    function CreaPorte1(house,objects){

          var loader = new THREE.OBJLoader();
          loader.load('assets/models/porta_salone.obj', function (obj) {
            var material = new THREE.MeshLambertMaterial({color: 0x5B4033, shading: THREE.FlatShading});
            material.side=THREE.DoubleSide;
            obj.traverse(function (child) {
              if (child instanceof THREE.Mesh) {
                child.material = material;
              }
             });
            mesh = obj;
            obj.scale.set(2, 5.7, 10);
            obj.position.set(44.4,5.5,3);
            house.add(obj);
            var cubeGeometry = new THREE.BoxGeometry(0.9,.01,2);
            var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
            cubeMaterial.transparent=true;
            cubeMaterial.opacity=0.3;
            var glass_salone = new THREE.Mesh(cubeGeometry, cubeMaterial);
            glass_salone.rotation.z=0.5*Math.PI;
            obj.add(glass_salone);
            glass_salone.position.set(0.2,0.6,1.1);

            glass_salone.interact=function(){
            if (obj.rotation.z===0) {
                var doorTrans = new TWEEN.Tween(obj.position)
                .to({ x: 45, y: 5.5, z: 3 }, 2200)   
                .start();
                var doorRot = new TWEEN.Tween(obj.rotation)
                .to({ x: 0, y: 0, z: -0.5*Math.PI }, 2200)
                .start();
                sound=new Sound('opendoor');
                sound.audio.play();
             }
            else{
                var doorTrans = new TWEEN.Tween(obj.position)
                .to({ x: 44.4, y: 5.5, z: 3 }, 2200) 
                .start(); 
                var doorRot = new TWEEN.Tween(obj.rotation)
                .to({ x: 0, y: 0, z: 0}, 1800)
                .start();
                sound=new Sound('closedoor');
                sound.audio.play();
             }
            };

            var porta_salone2=obj.clone();
            porta_salone2.rotation.z=Math.PI;
            porta_salone2.position.set(45,18,3);
            house.add(porta_salone2);
            glass_salone2=glass_salone.clone();
            porta_salone2.add(glass_salone2);

            glass_salone2.interact=function(){
            if (porta_salone2.rotation.z===Math.PI) {
                var doorTrans = new TWEEN.Tween(porta_salone2.position)
                .to({ x: 45.1, y: 18, z: 3 }, 2200) 
                .start(); 

                var doorRot = new TWEEN.Tween(porta_salone2.rotation)
                .to({ x: 0, y: 0, z: 1.7*Math.PI }, 2200)
                .start();
                sound=new Sound('opendoor');
                sound.audio.play();
             }
            else{
                var doorTrans = new TWEEN.Tween(porta_salone2.position)
                .to({ x: 45, y: 18, z: 3 }, 2200) 
                .start(); 
                var doorRot = new TWEEN.Tween(porta_salone2.rotation)
                .to({ x: 0, y: 0, z: Math.PI}, 1800)
                .start();
                sound=new Sound('closedoor');
                sound.audio.play();
             }
            };

            porta_balcone=obj.clone();
            porta_balcone.scale.y=9.1;
            porta_balcone.scale.z=10.9;        
            porta_balcone.position.set(31,90,3);
            porta_balcone.rotation.z=-0.1*Math.PI;
            house.add(porta_balcone);

            objects.push(glass_salone,glass_salone2);

          });

    }

    function CreaPorte2(house,objects){
            var loader = new THREE.OBJLoader();
            loader.load('assets/models/porta.obj', function (obj) {
            var material = new THREE.MeshLambertMaterial({color: 0x5B4033, shading: THREE.FlatShading});
            material.side=THREE.DoubleSide;
            obj.traverse(function (child) {
              if (child instanceof THREE.Mesh) {
                child.material = material;
              }
            });
            mesh = obj;

            var joint_p = new THREE.Object3D();
            joint_p.position.set(0,0,0);

            var cubeGeometry = new THREE.BoxGeometry(1.2,.01,3);
            var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
            cubeMaterial.transparent=true;
            cubeMaterial.opacity=0;
            var glass = new THREE.Mesh(cubeGeometry, cubeMaterial);
            obj.add(glass);
            glass.position.set(0.45,0.07,0.6);

            glass.interact=function(){
              if (obj.parent.rotation.z===0) {
                var doorRot = new TWEEN.Tween(joint_p.rotation)
                .to({ x: 0, y: 0, z: -0.5*Math.PI }, 2200)
                .start();
                sound=new Sound('opendoor');
                sound.audio.play();
            }
            else{
                var doorRot = new TWEEN.Tween(joint_p.rotation)
                .to({ x: 0, y: 0, z: 0}, 1800)
                .start();
                sound=new Sound('closedoor');
                sound.audio.play();
             }
            };

            obj.scale.set(7.5, 3, 10);
            obj.position.set(-8.5,-1,0);
            house.add(joint_p);
            joint_p.add(obj);
            joint_p.position.set(26.3,18.7,3);

            joint_p2=joint_p.clone();
            joint_p2.position.set(88.7,45,3);
            glass2=glass.clone();
            glass2.position.set(-5,0,10);
            glass2.scale.set(8,8,8);
            joint_p2.add(glass2);
            house.add(joint_p2);

            glass2.interact=function(){
              if (joint_p2.rotation.z===0) {
                var doorRot = new TWEEN.Tween(joint_p2.rotation)
                .to({ x: 0, y: 0, z: -0.5*Math.PI }, 2200)
                .start();
                sound=new Sound('opendoor');
                sound.audio.play();
            }
            else{
                var doorRot = new TWEEN.Tween(joint_p2.rotation)
                .to({ x: 0, y: 0, z: 0}, 1800)
                .start();
                sound=new Sound('closedoor');
                sound.audio.play();
             }
            };

            joint_p3=joint_p.clone();
            joint_p3.position.set(65.3,57.2,3);
            glass33=glass.clone();
            glass33.position.set(-5,0,10);
            glass33.scale.set(8,8,8);
            joint_p3.add(glass33);
            house.add(joint_p3);


            glass33.interact=function(){
              if (joint_p3.rotation.z===0) {
                var doorRot = new TWEEN.Tween(joint_p3.rotation)
                .to({ x: 0, y: 0, z: -0.5*Math.PI }, 2200)
                .start();
                sound=new Sound('opendoor');
                sound.audio.play();
            }
            else{
                var doorRot = new TWEEN.Tween(joint_p3.rotation)
                .to({ x: 0, y: 0, z: 0}, 1800)
                .start();
                sound=new Sound('closedoor');
                sound.audio.play();
             }
            };

            porta4=obj.clone();
            porta4.scale.set(7.5, 3, 10);
            porta4.rotation.z=1.2*Math.PI;
            porta4.position.set(34,73.5,3);
            house.add(porta4);

            porta5=porta4.clone();
            porta5.position.set(34,34.5,3);
            porta5.rotation.z=0.7*Math.PI;
            house.add(porta5);

            joint_p6=joint_p.clone();
            joint_p6.position.set(43.4,3,3);
            joint_p6.scale.y=2;
            glass66=glass.clone();
            glass66.position.set(-5,0,10);
            glass66.scale.set(8,8,8);
            joint_p6.add(glass66);
            house.add(joint_p6);

            glass66.interact=function(){
              if (joint_p6.rotation.z===0) {
                var doorRot = new TWEEN.Tween(joint_p6.rotation)
                .to({ x: 0, y: 0, z: -0.45*Math.PI }, 2200)
                .start();
                sound=new Sound('opendoor');
                sound.audio.play();
             }
            else{
                var doorRot = new TWEEN.Tween(joint_p6.rotation)
                .to({ x: 0, y: 0, z: 0}, 1800)
                .start();
                sound=new Sound('closedoor');
                sound.audio.play();
             }
            };
          objects.push(glass,glass2,glass33,glass66);

          });
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