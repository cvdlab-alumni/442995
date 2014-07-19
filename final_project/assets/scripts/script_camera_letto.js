function creaArmadioLetto(house){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

          var object = event.content;

          object.scale.set(.055,.08, .07);
          house.add(object);
          object.position.set(7,23.5,13);
          object.rotation.x=0.5*Math.PI;
          object.rotation.y = -1*Math.PI;


        });


        loader.load(
          'assets/models/armadio_cam_letto/armoireLotus.obj', 
          'assets/models/armadio_cam_letto/armoireLotus.mtl', 
          {side: THREE.DoubleSide}
        );
}


function creaLettoCameraLetto(house){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;
        object.scale.set(.09,.14, .09);
        house.add(object);
        object.position.set(13,30.5,7);
        object.rotation.x=0.5*Math.PI;

        });


        loader.load(
          'assets/models/letto_cam_letto/lit.obj', 
          'assets/models/letto_cam_letto/lit.mtl', 
          {side: THREE.DoubleSide}
        );

}


function creaPuff(house){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;
        object.scale.set(.08,.12, .08);
        house.add(object);
        object.position.set(29.7,23,5.3);
        object.rotation.x=0.5*Math.PI;
        object.rotation.y = -.7*Math.PI;

        });


        loader.load(
          'assets/models/puff/puff.obj', 
          'assets/models/puff/puff.mtl', 
          {side: THREE.DoubleSide}
        );

}



function creaComodinoCamLetto(house){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;


        object.scale.set(.08,.08, .08);
        house.add(object);
        object.position.set(21.7,49,3);
        object.rotation.x=0.5*Math.PI;

        });


        loader.load(
          'assets/models/comod_cam_letto/hallTable.obj', 
          'assets/models/comod_cam_letto/hallTable.mtl', 
          {side: THREE.DoubleSide}
        );
}



function creaLibreriaCorrid(house){

        var loader = new THREE.OBJMTLLoader();
        loader.addEventListener('load', function (event) {

        var object = event.content;


        object.scale.set(.14,.1, .15);
        house.add(object);
        object.position.set(69.7,50.5,10);
        object.rotation.x=0.5*Math.PI;
        object.rotation.y = -.5*Math.PI;
        });


        loader.load(
          'assets/models/libreria/full-bookcase.obj', 
          'assets/models/libreria/full-bookcase.mtl', 
          {side: THREE.DoubleSide}
        );

}