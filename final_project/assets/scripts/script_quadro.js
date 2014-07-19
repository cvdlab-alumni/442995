function creaQuadroSalone1(house){

      var quadro =createMesh2(new THREE.PlaneGeometry(11, 6.5), "frame_red_lupin.jpg","frame_red_bump.jpg");
      quadro.rotation.x=0.5*Math.PI;

      quadro.position.set(54,35.5,23);
      house.add(quadro);
}

function creaQuadroSalone2(house){

      var quadro =createMesh2(new THREE.PlaneGeometry(9, 10), "frame_black_white_comp.jpg","frame_black_white_bump.jpg");
      quadro.rotation.x=0.5*Math.PI;
      quadro.position.set(54,43.5,23);
      house.add(quadro);
}


function creaQuadroSalone3(house){

      var quadro =createMesh2(new THREE.PlaneGeometry(12, 8), "black_frame_1_compl2.jpg","black_frame_1_bump.jpg");
      quadro.rotation.x=0.5*Math.PI;     
      quadro.position.set(68,43.5,22.5);
      house.add(quadro);

}


function creaQuadroSalone4(house){

      var quadro =createMesh2(new THREE.PlaneGeometry(14, 9), "black_frame_2_compl.jpg","black_frame_2_bump.jpg");
      quadro.rotation.x=0.5*Math.PI;
      quadro.rotation.y=0.5*Math.PI;
      quadro.position.set(45.3,32.5,22);
      house.add(quadro);

}



function creaQuadroSalone5(house){

      var quadro =createMesh2(new THREE.PlaneGeometry(14, 10), "black_frame_2_compl_2.jpg","black_frame_2_bump.jpg");
      quadro.rotation.x=0.5*Math.PI;
      quadro.position.set(84,3.8,21);
      house.add(quadro);

}


function creaQuadroSalaHobby1(house){

      var quadro =createMesh2(new THREE.PlaneGeometry(10, 16), "frame_pulp_fiction.jpg","frame_pulp_fiction_bump.jpg");
      quadro.rotation.x=0.5*Math.PI;
      quadro.rotation.y=1*Math.PI;
      quadro.position.set(12,51.1,21);
      house.add(quadro);

}

function creaQuadroSalaHobby2(house){

      var quadro =createMesh2(new THREE.PlaneGeometry(10, 16), "frame_Spirited_Away_compl.jpg","frame_pulp_fiction_bump.jpg");
      quadro.rotation.x=0.5*Math.PI;
      quadro.rotation.y=1*Math.PI;
      quadro.position.set(24,51.1,21);
      house.add(quadro);

}

function creaQuadroSalaHobby3(house){

      var quadro =createMesh2(new THREE.PlaneGeometry(11, 6.5), "frame_red_lupin.jpg","frame_red_bump.jpg");
      quadro.rotation.x=0.5*Math.PI;
      quadro.rotation.y=0.5*Math.PI;
      quadro.position.set(32.7,61.1,24);
      house.add(quadro);

}

function creaQuadroCameretta(house){

      var quadro =createMesh2(new THREE.PlaneGeometry(10, 14), "frame_blue_compl.jpg","frame_blue_bump.jpg");
      quadro.rotation.x=0.5*Math.PI;
      quadro.rotation.y=0.5*Math.PI;
      quadro.position.set(96.7,79,20);
      house.add(quadro);

}

function creaQuadroCameretta2(house){

      var quadro =createMesh2(new THREE.PlaneGeometry(10, 7), "frame_blue2.jpg","frame_blue2_bump.jpg");
      quadro.rotation.x=0.5*Math.PI;
      quadro.rotation.y=0.5*Math.PI;
      quadro.position.set(96.7,52,20);
      house.add(quadro);

}

function creaQuadroCameraLetto(house){

      var quadro =createMesh2(new THREE.PlaneGeometry(19, 12), "green_frame_compl.jpg","green_frame_bump.jpg");
      quadro.rotation.x=0.5*Math.PI;
      quadro.position.set(17,49.5,21.5);
      house.add(quadro);

}


function creaQuadroCucina(house){

      var quadro =createMesh2(new THREE.PlaneGeometry(12, 9), "brown_frame.jpg","brown_frame_bump2.jpg");
      quadro.rotation.x=0.5*Math.PI;
      quadro.position.set(42,86.8,22.5);
      house.add(quadro);

}


function creaQuadroCucina2(house){

      var quadro =createMesh2(new THREE.PlaneGeometry(9, 11), "brown_frame_compl2.jpg","brown_frame_bump2.jpg");
      quadro.rotation.x=0.5*Math.PI;
      quadro.rotation.y=0.5*Math.PI;
      quadro.position.set(34.3,60.8,21.5);
      house.add(quadro);

      var quadro =createMesh2(new THREE.PlaneGeometry(13, 8), "brown_frame_compl3.jpg","brown_frame_bump2.jpg");
      quadro.rotation.x=0.5*Math.PI;
      quadro.rotation.y=0.5*Math.PI;
      quadro.position.set(34.3,45,21.5);
      house.add(quadro);

      var quadro =createMesh2(new THREE.PlaneGeometry(11, 9), "antique_frames_compl.jpg","antique_frames_bump_2.jpg");
      quadro.rotation.x=0.5*Math.PI;
      quadro.rotation.y=0.5*Math.PI;
      quadro.position.set(43.8,32,21.5);
      house.add(quadro);
}




    function createMesh2(geom, imageFile, bump) {
      var texture = THREE.ImageUtils.loadTexture("assets/textures/general/" + imageFile)
      geom.computeVertexNormals();
      var mat = new THREE.MeshPhongMaterial({side: THREE.DoubleSide});
      mat.map = texture;

      if (bump) {
        var bump = THREE.ImageUtils.loadTexture("assets/textures/general/" + bump)
        mat.bumpMap = bump;
        mat.bumpScale = 0.2;
      }

      var mesh = new THREE.Mesh(geom, mat);

      return mesh;
    }
