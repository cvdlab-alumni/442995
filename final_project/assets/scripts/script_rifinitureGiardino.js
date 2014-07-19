function creaMuraGiardino(house,objects){
        var cubeGeometry = new THREE.BoxGeometry(70,45,10);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFF0F5});
        var esterno = new THREE.Mesh(cubeGeometry, cubeMaterial);
        esterno.position.set(65,0,-3);
        house.add(esterno);

        var sopra_esterno = createMesh(new THREE.PlaneGeometry(70,45), "piastrelle_6.jpg");
        repeatX = 8;
        repeatY = 5;
        sopra_esterno.material.map.repeat.set(repeatX, repeatY);
        sopra_esterno.position.set(65,0,2.2);
        house.add(sopra_esterno);


        var cubeGeometry = new THREE.BoxGeometry(4,10,2);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFF0F5});
        var scalino = new THREE.Mesh(cubeGeometry, cubeMaterial);


        var sotto_scalino=scalino.clone();
        sotto_scalino.scale.z=3;
        sotto_scalino.scale.x=4;
        sotto_scalino.position.set(20,-4,-5);
        house.add(sotto_scalino);

        var sotto_scalino2=scalino.clone();
        sotto_scalino2.scale.z=4.5;
        sotto_scalino2.scale.x=2;
        sotto_scalino2.position.set(30,-4,-3.5);
        house.add(sotto_scalino2);

        var sopra_scalino = createMesh(new THREE.BoxGeometry(4.2,10,.15), "piastrelle_6.jpg");

        repeatX = -.5;
        repeatY = 1;
        sopra_scalino.material.map.repeat.set(repeatX, repeatY);

        sopra_scalino.position.set(-0.1,0,1);  
        scalino.add(sopra_scalino); 

        scalino.position.set(28,-4,.9);
        house.add(scalino);

        scalino2=scalino.clone();
        scalino2.position.set(24,-4,-1);
        house.add(scalino2); 

        var cubeGeometry = new THREE.BoxGeometry(4,10,2);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFF0F5});
        var scalino3 = new THREE.Mesh(cubeGeometry, cubeMaterial);

        var sopra_scalino3 = createMesh(new THREE.BoxGeometry(4.2,10,.15), "piastrelle_6.jpg");

        repeatX = 1;
        repeatY = 1;
        sopra_scalino3.material.map.repeat.set(repeatX, repeatY);
        sopra_scalino3.position.set(-0.1,0,1); 
        scalino3.add(sopra_scalino3); 

        scalino3.scale.x=2.5;
        scalino3.position.set(17,-4,-3);
        scalino3.rotation.z=0.5*Math.PI;
        house.add(scalino3);  

        scalino4=scalino.clone();
        scalino4.rotation.z=0.5*Math.PI;
        scalino4.position.set(17,-11,-5);
        house.add(scalino4);        

        scalino5=scalino.clone();
        scalino5.rotation.z=0.5*Math.PI;
        scalino5.position.set(17,-15,-7);

        scalino6=scalino.clone();
        scalino6.rotation.z=-0.5*Math.PI;
        scalino6.scale.z=1.1;
        scalino6.position.set(26,92,2);
        house.add(scalino6);

        scalino7=scalino6.clone();
        scalino7.position.set(26,96,-0.3);
        house.add(scalino7);

        scalino8=scalino6.clone();
        scalino8.position.set(26,100,-2.6);
        house.add(scalino8);

        scalino9=scalino6.clone();
        scalino9.position.set(26,104,-4.9);
        house.add(scalino9);

        scalino10=scalino6.clone();
        scalino10.position.set(26,108,-7.2);
        house.add(scalino10);


        var cubeGeometry = new THREE.BoxGeometry(4,10,2);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFF0F5});
        var sotto_scalino5 = new THREE.Mesh(cubeGeometry, cubeMaterial);
        sotto_scalino5.rotation.z=0.5*Math.PI;
        sotto_scalino5.position.set(17,-11,-7);        
        house.add(scalino5);  
        house.add(sotto_scalino5);

        var cubeGeometry = new THREE.BoxGeometry(10,4,10);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFF0F5});
        var sotto_scalino6 = new THREE.Mesh(cubeGeometry, cubeMaterial);
        sotto_scalino6.position.set(26,92,-3);         
        house.add(sotto_scalino6);

        var cubeGeometry = new THREE.BoxGeometry(10,4,7);
        var sotto_scalino7 = new THREE.Mesh(cubeGeometry, cubeMaterial);
        sotto_scalino7.position.set(26,96,-4.5);         
        house.add(sotto_scalino7);

        var cubeGeometry = new THREE.BoxGeometry(10,4,5);
        var sotto_scalino8 = new THREE.Mesh(cubeGeometry, cubeMaterial);
        sotto_scalino8.position.set(26,100,-5.5);         
        house.add(sotto_scalino8);

        var cubeGeometry = new THREE.BoxGeometry(10,4,3);
        var sotto_scalino9 = new THREE.Mesh(cubeGeometry, cubeMaterial);
        sotto_scalino9.position.set(26,104,-7);         
        house.add(sotto_scalino9);


        var cubeGeometry = new THREE.BoxGeometry(100,90,8);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
        var base_casa = new THREE.Mesh(cubeGeometry, cubeMaterial);
        base_casa.position.set(50,45,-4);
        house.add(base_casa);




        var cubeGeometry = new THREE.BoxGeometry(4,13.5,10);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFF0F5});
        var corrim = new THREE.Mesh(cubeGeometry, cubeMaterial);

        var sopra_corrim = createMesh(new THREE.BoxGeometry(5,13.5,1), "piastrelle_6.jpg");

        repeatX = -.5;
        repeatY = 1;
        sopra_corrim.material.map.repeat.set(repeatX, repeatY);


        sopra_corrim.position.set(0,0,5.5);  
        corrim.add(sopra_corrim); 

        corrim.position.set(32,-15.75,7);
        house.add(corrim); 


        var cubeGeometry = new THREE.BoxGeometry(4,22,10);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFF0F5});
        var corrim2 = new THREE.Mesh(cubeGeometry, cubeMaterial);

        var sopra_corrim2 = createMesh(new THREE.BoxGeometry(5,23,1), "piastrelle_6.jpg");

        repeatX = -.5;
        repeatY = 2;
        sopra_corrim2.material.map.repeat.set(repeatX, repeatY);


        sopra_corrim2.position.set(0,0,5.5);  
        corrim2.add(sopra_corrim2); 


        corrim2.position.set(98,-11.2,7);
        house.add(corrim2);

        var cubeGeometry = new THREE.BoxGeometry(70,4,10);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFF0F5});
        var corrim3 = new THREE.Mesh(cubeGeometry, cubeMaterial);

        var sopra_corrim3 = createMesh(new THREE.BoxGeometry(71.2,5,1), "piastrelle_6.jpg");

        repeatX = 10;
        repeatY = .5;
        sopra_corrim3.material.map.repeat.set(repeatX, repeatY);


        sopra_corrim3.position.set(0,0,5.5);  
        corrim3.add(sopra_corrim3); 

        corrim3.position.set(65,-20.51,7.03);
        house.add(corrim3);

        var muro_est1 = createMesh(new THREE.PlaneGeometry(70,20), "muro_est2.jpg");

        repeatX = 5;
        repeatY = 1;
        muro_est1.material.map.repeat.set(repeatX, repeatY);
        muro_est1.rotation.x=0.5*Math.PI;

        muro_est1.position.set(65,-22.6,2);
        house.add(muro_est1);

        var muro_est2 = createMesh(new THREE.PlaneGeometry(13.5,20), "muro_est2.jpg");
        repeatX = 1;
        repeatY = 1;
        muro_est2.material.side=THREE.DoubleSide;
        muro_est2.material.map.repeat.set(repeatX, repeatY);
        muro_est2.rotation.x=0.5*Math.PI;
        muro_est2.rotation.y=0.5*Math.PI;

        muro_est2.position.set(29.95,-15.8,2);
        house.add(muro_est2);

        var muro_est3 = createMesh(new THREE.PlaneGeometry(23,20), "muro_est2.jpg");
        repeatX = 2;
        repeatY = 1;
        muro_est3.material.side=THREE.DoubleSide;
        muro_est3.material.map.repeat.set(repeatX, repeatY);
        muro_est3.rotation.x=0.5*Math.PI;
        muro_est3.rotation.y=0.5*Math.PI;
        muro_est3.position.set(100.1,-11,2);
        house.add(muro_est3);

        var muro_est4 = createMesh(new THREE.PlaneGeometry(90,14), "muro_est3.jpg");
        repeatX = 7;
        repeatY = 1;
        muro_est4.material.side=THREE.DoubleSide;
        muro_est4.material.map.repeat.set(repeatX, repeatY);
        muro_est4.rotation.x=0.5*Math.PI;
        muro_est4.rotation.y=0.5*Math.PI;
        muro_est4.position.set(-0.1,45,-1);
        house.add(muro_est4);

        var cylinderGeometry = new THREE.CylinderGeometry(.7, .7, 90);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFAEBD7});
        var cornice_muro2 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        cornice_muro2.rotation.z=0.5*Math.PI;   
        cornice_muro2.position.y=7.5;  
        muro_est4.add(cornice_muro2);

        var muro_est6=muro_est4.clone();
        muro_est6.position.set(100.15,45,-1);
        house.add(muro_est6);

        var muro_est5 = createMesh(new THREE.PlaneGeometry(34.9,14), "muro_est3.jpg");
        repeatX = 2;
        repeatY = 1;
        muro_est5.material.side=THREE.DoubleSide;
        muro_est5.material.map.repeat.set(repeatX, repeatY);
        muro_est5.rotation.x=0.5*Math.PI;
        muro_est5.position.set(17.4,-0.1,-1);
        house.add(muro_est5);

        var cylinderGeometry = new THREE.CylinderGeometry(.7, .7, 34.9);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFAEBD7});
        var cornice_muro1 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        cornice_muro1.rotation.z=0.5*Math.PI;
        cornice_muro1.position.set(17.4,-0.1,6.5);
        house.add(cornice_muro1);    

        var muro_est6 = createMesh(new THREE.PlaneGeometry(69,14), "muro_est3.jpg");
        repeatX = 4;
        repeatY = 1;
        muro_est6.material.side=THREE.DoubleSide;
        muro_est6.material.map.repeat.set(repeatX, repeatY);
        muro_est6.rotation.x=0.5*Math.PI;
        muro_est6.position.set(65.7,90.1,-1);
        house.add(muro_est6);

        var cylinderGeometry = new THREE.CylinderGeometry(.7, .7, 69);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFAEBD7});
        var cornice_muro3 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        cornice_muro3.rotation.z=0.5*Math.PI;
        cornice_muro3.position.set(65.7,90.1,6.5);
        house.add(cornice_muro3);  

        var muro_est7 = createMesh(new THREE.PlaneGeometry(21,14), "muro_est3.jpg");
        repeatX = 4;
        repeatY = 1;
        muro_est7.material.side=THREE.DoubleSide;
        muro_est7.material.map.repeat.set(repeatX, repeatY);
        muro_est7.rotation.x=0.5*Math.PI;
        muro_est7.position.set(10.5,90.1,-1);
        house.add(muro_est7);

        var cylinderGeometry = new THREE.CylinderGeometry(.7, .7, 21);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFAEBD7});
        var cornice_muro4 = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        cornice_muro4.rotation.z=0.5*Math.PI;
        cornice_muro4.position.set(10.5,90.1,6.5);
        house.add(cornice_muro4);  

        giardino = createMesh(new THREE.PlaneGeometry(200,300,100,100), "giard2.jpg");

        repeatX = 5;
        repeatY = 5;
        giardino.material.side=THREE.DoubleSide;
        giardino.material.map.repeat.set(repeatX, repeatY);
        giardino.position.set(50,45,-8);

        house.add(giardino);

        var giardino2 = createMesh(new THREE.PlaneGeometry(10,100), "viale1.jpg");
        repeatX = 1;
        repeatY = 15;
        giardino2.material.side=THREE.DoubleSide;
        giardino2.material.map.repeat.set(repeatX, repeatY);
        giardino2.position.set(17,-55,-7.95);
        house.add(giardino2);

        var lato_viale = createMesh(new THREE.BoxGeometry(2,106.3,1.5), "piastrelle_6.jpg");
        repeatX = .3;
        repeatY = 10;
        lato_viale.material.side=THREE.DoubleSide;
        lato_viale.material.map.repeat.set(repeatX, repeatY);
        lato_viale.position.set(11,-52,-7.95);
        house.add(lato_viale);

        lato_viale2=lato_viale.clone();
        lato_viale2.position.set(23,-52,-7.95);
        house.add(lato_viale2);
}


function creaTetto(house,objects){

      var cubeGeometry = new THREE.BoxGeometry(110,75,4);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x5B4033});
      var parte_sin = new THREE.Mesh(cubeGeometry, cubeMaterial);

      house.add(parte_sin)
      parte_sin.position.set(50,10,34);
      parte_sin.rotation.x=0.06*Math.PI;


      var tetto_text = createMesh(new THREE.PlaneGeometry(110,75), "roof2.jpg");

      repeatX = 1.5;
      repeatY = 1.5;
      tetto_text.material.map.repeat.set(repeatX, repeatY);
      parte_sin.add(tetto_text);

      tetto_text.position.z=2.1;

      var cubeGeometry = new THREE.BoxGeometry(110,55,4);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x5B4033});
      var parte_destra = new THREE.Mesh(cubeGeometry, cubeMaterial);
      parte_sin.add(parte_destra);
      parte_destra.rotation.x=-0.125*Math.PI;
      parte_destra.position.y=62.1;
      parte_destra.position.z=-10.365;

      var tetto_text2 = createMesh(new THREE.PlaneGeometry(110,55), "roof2.jpg");
      repeatX = 1.5;
      repeatY = 1.5;
      tetto_text2.material.map.repeat.set(repeatX, repeatY);
      parte_destra.add(tetto_text2);
      tetto_text2.position.z=2.1;

      var cubeGeometry = new THREE.PlaneGeometry(100,90,100,100);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF,side:THREE.DoubleSide});
      var sotto_tetto = new THREE.Mesh(cubeGeometry, cubeMaterial);
      sotto_tetto.rotation.x=-0.06*Math.PI;
      sotto_tetto.position.set(0,33,-10.4);
      parte_sin.add(sotto_tetto);

      var esterno_tetto = new THREE.Object3D();
      parte_sin.add(esterno_tetto);

      var shape= new THREE.Mesh(new THREE.ShapeGeometry(drawShape()), new THREE.MeshLambertMaterial({color: 0xFFFFFF, side:THREE.DoubleSide}));
      esterno_tetto.add(shape);
      esterno_tetto.rotation.y=0.5*Math.PI;
      esterno_tetto.rotation.x=0.44*Math.PI;
      esterno_tetto.position.set(50,-10,-2.17);
      esterno_tetto2=esterno_tetto.clone();
      parte_sin.add(esterno_tetto2);
      esterno_tetto2.position.set(-50,-10,-2.17);

      var cubeGeometry = new THREE.BoxGeometry(4,4,35);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
      var colonna_sinistra = new THREE.Mesh(cubeGeometry, cubeMaterial);
      colonna_sinistra.position.set(2,-20,9.2);
      house.add(colonna_sinistra);

      var cubeGeometry = new THREE.BoxGeometry(5,5,7);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x5B4033});
      var colonna_sinistra2 = new THREE.Mesh(cubeGeometry, cubeMaterial);
      colonna_sinistra2.position.set(2,-20,-5);
      house.add(colonna_sinistra2);     

      var cubeGeometry = new THREE.BoxGeometry(4,4,35);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
      var colonna_destra = new THREE.Mesh(cubeGeometry, cubeMaterial);
      colonna_destra.position.set(94,-20.55,9.2);
      house.add(colonna_destra);

      function drawShape() {
        var shape = new THREE.Shape();
        // startpoint
        shape.moveTo(-0.6, 0);
        shape.lineTo(47, 12);

        shape.lineTo(96, 0);

        shape.lineTo(0, 0);
      
        return shape;
      }

      return parte_sin;
}


      function createMesh(geom, texture) {
        var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + texture)
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;

        geom.computeVertexNormals();
        var mat = new THREE.MeshPhongMaterial();
        mat.map = texture;

        var mesh = new THREE.Mesh(geom, mat);

        return mesh;
      }


function AggiungiSkyBox(value){

        if(value){
          var imagePrefix = "assets/textures/general/";
          var directions  = ["posx", "negx", "posy", "negy", "posz", "negz"];
          var imageSuffix = ".jpg";
          var skyGeometry = new THREE.CubeGeometry( 600, 600, 600 ); 
          var materialArray = [];
          for (var i = 0; i < 6; i++)
            materialArray.push( new THREE.MeshBasicMaterial({
              map: THREE.ImageUtils.loadTexture( imagePrefix + directions[i] + imageSuffix ),
              side: THREE.BackSide
            }));
          var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
          skyBox = new THREE.Mesh( skyGeometry, skyMaterial );
          skyBox.position.set(50,70,-50);
          scene.add( skyBox );
          house.remove(giardino);
          giardino = createMesh(new THREE.PlaneGeometry(400,400,100,100),"grass.jpg");

          repeatX = 5;
          repeatY = 5;
          giardino.material.side=THREE.DoubleSide;
          giardino.material.map.repeat.set(repeatX, repeatY);
          giardino.position.set(50,45,-8);
          house.add(giardino);
        }
        else{
          scene.remove(skyBox);
          house.remove(giardino);
          giardino = createMesh(new THREE.PlaneGeometry(200,300,100,100),"giard2.jpg");
          repeatX = 7;
          repeatY = 7;
          giardino.material.side=THREE.DoubleSide;
          giardino.material.map.repeat.set(repeatX, repeatY);
          giardino.position.set(50,45,-8);
          house.add(giardino);
         }
        }

function AggiungiCammino(house,oggetti_inter){

        var planeGeometry = new THREE.PlaneGeometry(500,500);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF,side: THREE.DoubleSide });
        planeMaterial.transparent=true;
        planeMaterial.opacity=0;
        var pianobase_1 = new THREE.Mesh(planeGeometry,planeMaterial);
        pianobase_1.position.z=-8;
        house.add(pianobase_1);

        var planeGeometry = new THREE.PlaneGeometry(107,90);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0x444444,side: THREE.DoubleSide });
        planeMaterial.transparent=true;
        planeMaterial.opacity=0;
        var pianobase_2 = new THREE.Mesh(planeGeometry,planeMaterial);
        pianobase_2.position.set(40,45,2);
        house.add(pianobase_2);

        var planeGeometry = new THREE.PlaneGeometry(82,40);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0x444444,side: THREE.DoubleSide });
        planeMaterial.transparent=true;
        planeMaterial.opacity=0;
        var pianobase_3 = new THREE.Mesh(planeGeometry,planeMaterial);
        pianobase_3.position.set(60,-5,2);
        house.add(pianobase_3);

        var planeGeometry = new THREE.PlaneGeometry(30,45);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0x444444,side: THREE.DoubleSide });
        var pianobase_4 = new THREE.Mesh(planeGeometry,planeMaterial);
        planeMaterial.transparent=true;
        planeMaterial.opacity=0;
        pianobase_4.rotation.x=-0.1*Math.PI;
        pianobase_4.position.set(20,100,-3);
        house.add(pianobase_4);

        var planeGeometry = new THREE.PlaneGeometry(60,29);
        var planeMaterial = new THREE.MeshLambertMaterial({color: 0x444444,side: THREE.DoubleSide });
        var pianobase_5 = new THREE.Mesh(planeGeometry,planeMaterial);
        planeMaterial.transparent=true;
        planeMaterial.opacity=0;
        pianobase_5.rotation.x=0.1*Math.PI;
        pianobase_5.position.set(14,-11.5,-3);
        house.add(pianobase_5);

        oggetti_inter.push(pianobase_1,pianobase_2,pianobase_3,pianobase_4,pianobase_5);

    }