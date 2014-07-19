function CreaFinestre1(house,objects){

    var loader = new THREE.OBJLoader();
    loader.load('assets/models/finestra_6.obj', function (obj) {
    var material = new THREE.MeshLambertMaterial({color: 0x5B4033, shading: THREE.FlatShading});
    material.side=THREE.DoubleSide;
    obj.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        child.material = material;
      }
    });
    mesh = obj;

    var cubeGeometry = new THREE.BoxGeometry(.8,.01,1.1);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
    cubeMaterial.transparent=true;
    cubeMaterial.opacity=0.3;

    var glass = new THREE.Mesh(cubeGeometry, cubeMaterial);
    obj.add(glass);
    glass.position.set(0.45,0.07,0.6);
    obj.scale.set(5.15, 10, 11.7);
    obj.position.set(56.4,87,13);
    house.add(obj);

    glass.interact=function(){
        if (obj.rotation.z===0) {
        var doorRot = new TWEEN.Tween(obj.rotation)
        .to({ x: 0, y: 0, z: -0.7*Math.PI }, 2200)
        .start();
        sound=new Sound('opendoor');
        sound.audio.play();
        }
        else{
        var doorRot = new TWEEN.Tween(obj.rotation)
        .to({ x: 0, y: 0, z: 0}, 1800)
        .start();
        sound=new Sound('closedoor');
        sound.audio.play();
        }
    };
    obj666=obj.clone();
    obj666.scale.set(5, 10, 11.7);
    obj666.position.set(65.5,88,13);
    obj666.rotation.z=-1*Math.PI;
    glass666=glass.clone();
    obj666.add(glass666);

    glass666.interact=function(){
    if (obj666.rotation.z===-1*Math.PI) {
        var doorTrans = new TWEEN.Tween(obj666.position)
        .to({ x: 65.5, y: 87, z: 13 }, 2200)   
        .start();
        var doorRot = new TWEEN.Tween(obj666.rotation)
        .to({ x: 0, y: 0, z: -0.3*Math.PI }, 2200)
        .start();

        sound=new Sound('opendoor');
        sound.audio.play();
    }
    else{
        var doorTrans = new TWEEN.Tween(obj666.position)
        .to({ x: 65.5, y: 88, z: 13 }, 2200)   
        .start();

        var doorRot = new TWEEN.Tween(obj666.rotation)
        .to({ x: 0, y: 0, z: -1*Math.PI}, 1800)
        .start();

        sound=new Sound('closedoor');
        sound.audio.play();
    }
  };

    house.add(obj666);

    obj222=obj.clone();
    obj222.scale.set(4.65, 10, 11.7);
    obj222.position.set(75.4,87,13);
    glass222=glass.clone();
    obj222.add(glass222);
    glass222.interact=function(){
    if (obj222.rotation.z===0) {
        var doorRot = new TWEEN.Tween(obj222.rotation)
        .to({ x: 0, y: 0, z: -0.7*Math.PI }, 2200)
        .start();
        sound=new Sound('opendoor');
        sound.audio.play();
    }
    else{
        var doorRot = new TWEEN.Tween(obj222.rotation)
        .to({ x: 0, y: 0, z: 0}, 1800)
        .start();
        sound=new Sound('closedoor');
        sound.audio.play();
     }
    };
    house.add(obj222);

    obj888=obj.clone();
    obj888.scale.set(4.65, 10, 11.7);
    obj888.position.set(83.7,88,13);
    obj888.rotation.z=-1*Math.PI;
    glass888=glass.clone();
    obj888.add(glass888);
    glass888.interact=function(){
    if (obj888.rotation.z===-1*Math.PI) {

        var doorTrans = new TWEEN.Tween(obj888.position)
        .to({ x: 83.7, y: 87.5, z: 13 }, 2200)   
        .start();

        var doorRot = new TWEEN.Tween(obj888.rotation)
        .to({ x: 0, y: 0, z: -0.7*Math.PI }, 2200)
        .start();
        
        sound=new Sound('opendoor');
        sound.audio.play();
     }
    else{
        var doorTrans = new TWEEN.Tween(obj888.position)
        .to({ x: 83.7, y: 88, z: 13 }, 2200)   
        .start();

        var doorRot = new TWEEN.Tween(obj888.rotation)
        .to({ x: 0, y: 0, z: -1*Math.PI}, 1800)
        .start();
        sound=new Sound('closedoor');
        sound.audio.play();
     }
    };
    house.add(obj888);

    obj333=obj.clone();
    obj333.scale.set(4.65, 10, 11.7);
    obj333.position.set(85.25,87,13);
    glass333=glass.clone();
    obj333.add(glass333);
    glass333.interact=function(){
    if (obj333.rotation.z===0) {
        var doorRot = new TWEEN.Tween(obj333.rotation)
        .to({ x: 0, y: 0, z: -0.3*Math.PI }, 2200)
        .start();
        sound=new Sound('opendoor');
        sound.audio.play();
    }
    else{
        var doorRot = new TWEEN.Tween(obj333.rotation)
        .to({ x: 0, y: 0, z: 0}, 1800)
        .start();
        sound=new Sound('closedoor');
        sound.audio.play();
     }
    };
    house.add(obj333);

    obj9=obj333.clone();
    obj9.scale.set(4.65, 10, 11.7);
    obj9.position.set(93.6,88,13);
    obj9.rotation.z=-1*Math.PI;
    glass999=glass.clone();
    obj9.add(glass999);
    glass999.interact=function(){
        if (obj9.rotation.z===-1*Math.PI) {

        var doorTrans = new TWEEN.Tween(obj9.position)
        .to({ x: 93.6, y: 87.5, z: 13 }, 2200)   
        .start();

        var doorRot = new TWEEN.Tween(obj9.rotation)
        .to({ x: 0, y: 0, z: -0.3*Math.PI }, 2200)
        .start();
        
        sound=new Sound('opendoor');
        sound.audio.play();
    }
    else{
        var doorTrans = new TWEEN.Tween(obj9.position)
        .to({ x: 93.6, y: 88, z: 13 }, 2200)   
        .start();

        var doorRot = new TWEEN.Tween(obj9.rotation)
        .to({ x: 0, y: 0, z: -1*Math.PI}, 1800)
        .start();
        sound=new Sound('closedoor');
        sound.audio.play();
    }
  };
    house.add(obj9);

    obj444=obj.clone();
    obj444.rotation.z=0.5*Math.PI;
    obj444.scale.set(4.65, 9.8, 11.7);
    obj444.position.set(3,22.4,13);
    glass444=glass.clone();
    obj444.add(glass444);
    ruotato=false;

    glass444.interact=function(){
    if (!ruotato) {
        var doorRot = new TWEEN.Tween(obj444.rotation)
        .to({ x: 0, y: 0, z: -0.25*Math.PI }, 2200)
        .start();
        sound=new Sound('opendoor');
        sound.audio.play();
        ruotato=true;
    }
    else{
        var doorRot = new TWEEN.Tween(obj444.rotation)
        .to({ x: 0, y: 0, z: 0.5*Math.PI}, 1800)
        .start();
        sound=new Sound('closedoor');
        sound.audio.play();
        ruotato=false;
     }
    };
    house.add(obj444);

    obj10=obj444.clone();
    obj10.rotation.z=-0.1*Math.PI;
    obj10.scale.set(4.65, 9.8, 11.7);
    obj10.position.set(2.7,29.8,13);
    house.add(obj10);          

    obj555=obj.clone();
    obj555.rotation.z=0.5*Math.PI;
    obj555.scale.set(4.65, 9.8, 11.7);
    obj555.position.set(3,32.2,13);
    glass555=glass.clone();
    obj555.add(glass555);
    ruotatof_5=false;
    glass555.interact=function(){
    if (!ruotatof_5) {
        var doorRot = new TWEEN.Tween(obj555.rotation)
        .to({ x: 0, y: 0, z: 0 }, 2200)
        .start();
        sound=new Sound('opendoor');
        sound.audio.play();
        ruotatof_5=true;
    }
    else{
        var doorRot = new TWEEN.Tween(obj555.rotation)
        .to({ x: 0, y: 0, z: 0.5*Math.PI}, 1800)
        .start();
        //joint_p.rotation.z=0*Math.PI;
        sound=new Sound('closedoor');
        sound.audio.play();
        ruotatof_5=false;
     }
    };
    house.add(obj555); 

    obj11=obj555.clone();
    obj11.rotation.z=-0.8*Math.PI;
    obj11.scale.set(4.65, 9.8, 11.7);
    obj11.position.set(6.4,43.2,13);
    house.add(obj11); 

    objects.push(glass,glass222,glass333,glass444,glass555,glass666,glass888,glass999);

  });


}


function CreaFinestre2(house,objects){

    var loader = new THREE.OBJLoader();
    loader.load('assets/models/finestra_3.obj', function (obj) {
    var material = new THREE.MeshLambertMaterial({color: 0x5B4033, shading: THREE.FlatShading});
    material.side=THREE.DoubleSide;
    obj.traverse(function (child) {
      if (child instanceof THREE.Mesh) {
        child.material = material;
      }
    });
    mesh = obj;
    var cubeGeometry = new THREE.BoxGeometry(.8,.01,1.3);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
    cubeMaterial.transparent=true;
    cubeMaterial.opacity=0.3;
    var glass_f = new THREE.Mesh(cubeGeometry, cubeMaterial);
    obj.add(glass_f);
    glass_f.position.set(0.45,0.07,0.7);
    obj.scale.set(16.5, 10, 10);
    obj.position.set(4.7,87,13);      

    house.add(obj);
    obj.scale.set(15.5, 10, 10);  
    obj.position.set(5,87,13);        

    glass_f.interact=function(){
    if (obj.rotation.x===0) {
        var doorRot = new TWEEN.Tween(obj.rotation)
        .to({ x: 0.07*Math.PI, y: 0, z: 0 }, 2200)
        .start();

        sound=new Sound('opendoor');
        sound.audio.play();
     }
    else{
        var doorRot = new TWEEN.Tween(obj.rotation)
        .to({ x: 0, y: 0, z: 0*Math.PI}, 1800)
        .start();
        sound=new Sound('closedoor');
        sound.audio.play();
     }
    };

    objfinestra_2=obj.clone();
    glass_f2=glass_f.clone();
    objfinestra_2.add(glass_f2);
    objfinestra_2.rotation.z=0.5*Math.PI;
    objfinestra_2.scale.set(10, 10, 5.7);
    objfinestra_2.position.set(3,6,19);
    house.add(objfinestra_2);  

    glass_f2.interact=function(){
    if (objfinestra_2.rotation.y===0) {

        var doorRot = new TWEEN.Tween(objfinestra_2.rotation)
        .to({ x: 0, y: 0.1*Math.PI, z: 0.5*Math.PI }, 2200)
        .start();

        sound=new Sound('opendoor');
        sound.audio.play();
     }
    else{
        var doorRot = new TWEEN.Tween(objfinestra_2.rotation)
        .to({ x: 0, y: 0, z: 0.5*Math.PI}, 1800)
        .start();
        sound=new Sound('closedoor');
        sound.audio.play();
     }
    };

    objfinestra_3=obj.clone();
    glass_f3=glass_f.clone();
    objfinestra_3.add(glass_f3);
    objfinestra_3.rotation.z=0.5*Math.PI;
    objfinestra_3.scale.set(12.5, 10, 10.2);
    objfinestra_3.position.set(3,71,13);
    house.add(objfinestra_3);  

    glass_f3.interact=function(){
    if (objfinestra_3.rotation.y===0) {

        var doorRot = new TWEEN.Tween(objfinestra_3.rotation)
        .to({ x: 0, y: 0.07*Math.PI, z: 0.5*Math.PI }, 2200)
        .start();

        sound=new Sound('opendoor');
        sound.audio.play();
     }
    else{
        var doorRot = new TWEEN.Tween(objfinestra_3.rotation)
        .to({ x: 0, y: 0, z: 0.5*Math.PI}, 1800)
        .start();
        sound=new Sound('closedoor');
        sound.audio.play();
     }
    };

    objfinestra_4=obj.clone();
    glass_f4=glass_f.clone();
    objfinestra_4.add(glass_f4);
    objfinestra_4.rotation.z=0.5*Math.PI;
    objfinestra_4.scale.set(12.5, 10, 10.2);
    objfinestra_4.position.set(3,59.7,13);
    house.add(objfinestra_4);  

    glass_f4.interact=function(){
    if (objfinestra_4.rotation.y===0) {

        var doorRot = new TWEEN.Tween(objfinestra_4.rotation)
        .to({ x: 0, y: 0.07*Math.PI, z: 0.5*Math.PI }, 2200)
        .start();

        sound=new Sound('opendoor');
        sound.audio.play();
     }
    else{
        var doorRot = new TWEEN.Tween(objfinestra_4.rotation)
        .to({ x: 0, y: 0, z: 0.5*Math.PI}, 1800)
        .start();
        sound=new Sound('closedoor');
        sound.audio.play();
     }
    };

    objects.push(glass_f,glass_f2,glass_f3,glass_f4);

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