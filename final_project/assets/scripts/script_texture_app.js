	function TextApp(obj){

	      var pavim = createMesh(new THREE.PlaneGeometry(10,9), "parq3.jpg");
	      repeatX = 4;
	      repeatY = 4;
	      pavim.material.map.repeat.set(repeatX, repeatY);
	      pavim.position.set(5,4.5,0.32);
	      obj.add(pavim);

	      var pavim_s = createMesh(new THREE.PlaneGeometry(5.3,4.3), "pav_b2.jpg");
	      repeatX = 5;
	      repeatY = 5;
	      pavim_s.material.map.repeat.set(repeatX, repeatY);
	      pavim_s.position.set(7.1,2.3,0.34);
	      obj.add(pavim_s);

	      var pavim_bagno = createMesh(new THREE.PlaneGeometry(2,3.2), "bath_1.jpg");
	      repeatX = 5;
	      repeatY = 8;
	      pavim_bagno.material.map.repeat.set(repeatX, repeatY);
	      pavim_bagno.position.set(6.1,7.3,0.34);
	      obj.add(pavim_bagno);

	      var pavim_bagno2 = createMesh(new THREE.PlaneGeometry(3.2,1.5), "bath_1.jpg");
	      repeatX = 8;
	      repeatY = 4;
	      pavim_bagno2.material.map.repeat.set(repeatX, repeatY);
	      pavim_bagno2.position.set(1.8,1.05,0.34);
	      obj.add(pavim_bagno2);

	      var planeGeometry = new THREE.PlaneGeometry(5.3,2.5);
	      var planeMaterial = new THREE.MeshLambertMaterial({color: 0xB22222,side: THREE.DoubleSide });
	      var muro_s = new THREE.Mesh(planeGeometry,planeMaterial);
	      muro_s.rotation.x=0.5*Math.PI;
	      muro_s.position.set(7.1,.31,1.67);
	      obj.add(muro_s);

	      var planeGeometry = new THREE.PlaneGeometry(1,2.5);
	      var muro_s2 = new THREE.Mesh(planeGeometry,planeMaterial);
	      muro_s2.rotation.x=0.5*Math.PI;
	      muro_s2.rotation.y=0.5*Math.PI;
	      muro_s2.position.set(9.69,.8,1.67);
	      obj.add(muro_s2);

	      var muro_s3 = createMesh(new THREE.PlaneGeometry(3.1,2.5), "tree3.jpg");
	      muro_s3.rotation.x=0.5*Math.PI;
	      muro_s3.rotation.y=-0.5*Math.PI;
	      muro_s3.position.set(9.69,2.85,1.67);
	      obj.add(muro_s3);

	      var planeGeometry = new THREE.PlaneGeometry(3.3,2.5);
	      var planeMaterial = new THREE.MeshLambertMaterial({color: 0xB22222,side: THREE.DoubleSide });
	      var muro_s4 = new THREE.Mesh(planeGeometry,planeMaterial);
	      muro_s4.rotation.x=0.5*Math.PI;
	      muro_s4.position.set(6.1,4.39,1.67);
	      obj.add(muro_s4);

	      var planeGeometry = new THREE.PlaneGeometry(2.3,2.5);
	      var muro_s5 = new THREE.Mesh(planeGeometry,planeMaterial);
	      muro_s5.rotation.x=0.5*Math.PI;
	      muro_s5.rotation.y=0.5*Math.PI;
	      muro_s5.position.set(4.52,3.3,1.67);
	      obj.add(muro_s5);

	      var planeGeometry = new THREE.PlaneGeometry(.7,2.5);
	      var planeMaterial = new THREE.MeshLambertMaterial({color: 0xB22222,side: THREE.DoubleSide });
	      var muro_s6 = new THREE.Mesh(planeGeometry,planeMaterial);
	      muro_s6.rotation.x=0.5*Math.PI;
	      muro_s6.position.set(9.5,4.39,1.67);
	      obj.add(muro_s6);

	      var planeGeometry = new THREE.PlaneGeometry(2.5,0.06);
	      var striscia_s4 = new THREE.Mesh(planeGeometry,planeMaterial);
	      striscia_s4.rotation.x=0.5*Math.PI;
	      striscia_s4.rotation.y=0.5*Math.PI;
	      striscia_s4.position.set(4.52,1.5,2.89);
	      obj.add(striscia_s4);

	      var planeGeometry = new THREE.PlaneGeometry(.8,0.06);
	      var striscia_s5 = new THREE.Mesh(planeGeometry,planeMaterial);
	      striscia_s5.rotation.x=0.5*Math.PI;
	      striscia_s5.rotation.y=0.5*Math.PI;
	      striscia_s5.position.set(4.52,2.2,0.45);
	      obj.add(striscia_s5);

	      var planeGeometry = new THREE.PlaneGeometry(.3,0.06);
	      var striscia_s6 = new THREE.Mesh(planeGeometry,planeMaterial);
	      striscia_s6.rotation.x=0.5*Math.PI;
	      striscia_s6.rotation.y=0.5*Math.PI;
	      striscia_s6.position.set(4.52,.4,0.45);
	      obj.add(striscia_s6);

	      var planeGeometry = new THREE.PlaneGeometry(2.8,0.06);
	      var striscia_s1 = new THREE.Mesh(planeGeometry,planeMaterial);
	      striscia_s1.rotation.x=0.5*Math.PI;
	      striscia_s1.position.set(8.3,4.39,2.89);
	      obj.add(striscia_s1);     

	      var planeGeometry = new THREE.PlaneGeometry(1.2,0.06);
	      var striscia_s2 = new THREE.Mesh(planeGeometry,planeMaterial);
	      striscia_s2.rotation.x=0.5*Math.PI;
	      striscia_s2.position.set(7.45,4.39,0.45);
	      obj.add(striscia_s2);

	      var planeGeometry = new THREE.PlaneGeometry(1,0.06);
	      var striscia_s3 = new THREE.Mesh(planeGeometry,planeMaterial);
	      striscia_s3.rotation.x=0.5*Math.PI;
	      striscia_s3.position.set(9.35,4.39,0.45);
	      obj.add(striscia_s3); 

	      var muro_rag = createMesh(new THREE.PlaneGeometry(4.5,2.5), "azz1_2.jpg");
	      muro_rag.material.side=THREE.DoubleSide;
	      muro_rag.rotation.x=0.5*Math.PI;
	      muro_rag.rotation.y=0.5*Math.PI;
	      muro_rag.position.set(9.69,6.7,1.67);
	      obj.add(muro_rag);

	      var muro_rag2=muro_rag.clone();
	      muro_rag2.position.set(7.21,6.7,1.67);
	      obj.add(muro_rag2);

	      muro_rag3 = createMesh(new THREE.PlaneGeometry(2.5,2.5), "anime5.jpg");
	      muro_rag3.material.side=THREE.DoubleSide;
	      muro_rag3.rotation.x=0.5*Math.PI;
	      muro_rag3.rotation.y=0.5*Math.PI;
	      muro_rag3.position.set(7.212,6.1,1.67);
	      obj.add(muro_rag3);


	      var muro_rag4 = createMesh(new THREE.PlaneGeometry(.7,2.5), "azz1_3.jpg");
	      muro_rag4.material.side=THREE.DoubleSide;
	      muro_rag4.rotation.x=0.5*Math.PI;
	      muro_rag4.position.set(9.4,4.51,1.67);
	      obj.add(muro_rag4);

	      var muro_rag5 = muro_rag4.clone();
	      muro_rag5.position.set(7.5,4.51,1.67);
	      obj.add(muro_rag5);

		  var planeGeometry = new THREE.PlaneGeometry(1.2,.03);
		  var planeMaterial = new THREE.MeshLambertMaterial({color: 0x00A2E8,side: THREE.DoubleSide });
		  var muro_rag6 = new THREE.Mesh(planeGeometry,planeMaterial);
	      muro_rag6.material.side=THREE.DoubleSide;
	      muro_rag6.rotation.x=0.5*Math.PI;
	      muro_rag6.position.set(8.45,4.51,2.905);
	      obj.add(muro_rag6);

	      var muro_rag7 = createMesh(new THREE.PlaneGeometry(.3,2.5), "azz1_3.jpg");
	      muro_rag7.material.side=THREE.DoubleSide;
	      muro_rag7.rotation.x=0.5*Math.PI;
	      muro_rag7.position.set(9.6,8.695,1.67);
	      obj.add(muro_rag7);

	      var muro_rag8=muro_rag7.clone();
	      muro_rag8.position.set(7.3,8.695,1.67);
	      obj.add(muro_rag8);

	      var planeGeometry = new THREE.PlaneGeometry(2.5,.03);
	      var planeMaterial = new THREE.MeshLambertMaterial({color: 0x00A2E8,side: THREE.DoubleSide });
	      var muro_rag9 = new THREE.Mesh(planeGeometry,planeMaterial);
	      muro_rag9.material.side=THREE.DoubleSide;
	      muro_rag9.rotation.x=0.5*Math.PI;
	      muro_rag9.position.set(8.45,8.694,.42);
	      obj.add(muro_rag9);

	      var planeGeometry = new THREE.PlaneGeometry(2.5,.03);
	      var planeMaterial = new THREE.MeshLambertMaterial({color: 0x00A2E8,side: THREE.DoubleSide });
	      var muro_rag10 = new THREE.Mesh(planeGeometry,planeMaterial);
	      muro_rag10.material.side=THREE.DoubleSide;
	      muro_rag10.rotation.x=0.5*Math.PI;
	      muro_rag10.position.set(8.4502,8.694,2.905);
	      obj.add(muro_rag10);
	////////////////////////////////////////////////////////////////////////////////////////

	      muro_camera=createMesh(new THREE.PlaneGeometry(3,2.5), "green4_2.jpg");
	      muro_camera.material.side=THREE.DoubleSide;
	      muro_camera.rotation.x=0.5*Math.PI;
	      muro_camera.position.set(1.8,4.988,1.67);
	      obj.add(muro_camera);

	      muro_camera2=createMesh(new THREE.PlaneGeometry(1.5,2.5), "green4_2.jpg");
	      muro_camera2.material.side=THREE.DoubleSide;
	      muro_camera2.rotation.x=0.5*Math.PI;
	      muro_camera2.rotation.y=0.5*Math.PI;
	      muro_camera2.position.set(3.29,4.31,1.67);
	      obj.add(muro_camera2);


	      muro_camera3=createMesh(new THREE.PlaneGeometry(.9,2.5), "green4_2.jpg");
	      muro_camera3.material.side=THREE.DoubleSide;
	      muro_camera3.rotation.x=0.5*Math.PI;
	      muro_camera3.rotation.y=0.5*Math.PI;
	      muro_camera3.position.set(3.29,2.3,1.67);
	      obj.add(muro_camera3);

	      muro_camera4=createMesh(new THREE.PlaneGeometry(.35,2.5), "green4_2.jpg");
	      muro_camera4.material.side=THREE.DoubleSide;
	      muro_camera4.rotation.x=0.5*Math.PI;
	      muro_camera4.rotation.y=0.5*Math.PI;
	      muro_camera4.position.set(.305,2.02,1.67);
	      obj.add(muro_camera4);

	      muro_camera5=createMesh(new THREE.PlaneGeometry(.9,2.5), "green4_2.jpg");
	      muro_camera5.material.side=THREE.DoubleSide;
	      muro_camera5.rotation.x=0.5*Math.PI;
	      muro_camera5.rotation.y=0.5*Math.PI;
	      muro_camera5.position.set(.305,4.6,1.67);
	      obj.add(muro_camera5);

	      var planeGeometry = new THREE.PlaneGeometry(2,.04);
	      var planeMaterial = new THREE.MeshLambertMaterial({color: 0x20B2AA,side: THREE.DoubleSide });
	      var muro_camera6 = new THREE.Mesh(planeGeometry,planeMaterial);
	      muro_camera6.rotation.x=0.5*Math.PI;
	      muro_camera6.rotation.y=0.5*Math.PI;
	      muro_camera6.position.set(.305,3.15,2.9);
	      obj.add(muro_camera6);

	      muro_camera7=muro_camera6.clone();
	      muro_camera7.position.set(.305,3.15,.44);
	      obj.add(muro_camera7);  
	      muro_camera8=createMesh(new THREE.PlaneGeometry(1.5,2.5), "green4_2.jpg");
	      muro_camera8.material.side=THREE.DoubleSide;
	      muro_camera8.rotation.x=0.5*Math.PI;
	      muro_camera8.position.set(1,1.91,1.67);
	      obj.add(muro_camera8);

	      muro_camera9=createMesh(new THREE.PlaneGeometry(.7,2.5), "green4_2.jpg");
	      muro_camera9.material.side=THREE.DoubleSide;
	      muro_camera9.rotation.x=0.5*Math.PI;
	      muro_camera9.position.set(3,1.91,1.67);
	      obj.add(muro_camera9);

	      var planeGeometry = new THREE.PlaneGeometry(0.9,.04);
	      var planeMaterial = new THREE.MeshLambertMaterial({color: 0x20B2AA,side: THREE.DoubleSide });
	      var muro_camera10 = new THREE.Mesh(planeGeometry,planeMaterial);
	      muro_camera10.material.side=THREE.DoubleSide;
	      muro_camera10.rotation.x=0.5*Math.PI;
	      muro_camera10.position.set(2.2,1.91,2.9);
	      obj.add(muro_camera10);

	      var planeGeometry = new THREE.PlaneGeometry(2,.04);
	      var planeMaterial = new THREE.MeshLambertMaterial({color: 0x20B2AA,side: THREE.DoubleSide });
	      var muro_camera11 = new THREE.Mesh(planeGeometry,planeMaterial);
	      muro_camera11.rotation.x=0.5*Math.PI;
	      muro_camera11.rotation.y=0.5*Math.PI;
	      muro_camera11.position.set(3.295,3.15,2.9);
	      obj.add(muro_camera11);
	///////////////////////////////////////////////////////////////////////////////////////////////////////////

	      muro_corrid=createMesh(new THREE.PlaneGeometry(.6,2.66), "matton_2.jpg");
	      muro_corrid.material.side=THREE.DoubleSide;
	      muro_corrid.rotation.x=0.5*Math.PI;
	      muro_corrid.position.set(4.70,5.598,1.67);
	      obj.add(muro_corrid);

	      muro_corrid2=muro_corrid.clone();
	      muro_corrid2.position.y=5.705;
	      obj.add(muro_corrid2);

	      muro_corrid3=createMesh(new THREE.PlaneGeometry(.1,2.66), "matton_3.jpg");
	      muro_corrid3.material.side=THREE.DoubleSide;

	      muro_corrid3.rotation.x=0.5*Math.PI;
	      muro_corrid3.rotation.y=0.5*Math.PI;
	      muro_corrid3.position.set(4.399,5.65,1.67);
	      obj.add(muro_corrid3);

	      muro_corrid4=createMesh(new THREE.PlaneGeometry(3.66,.2), "matton9.jpg");
	      muro_corrid4.material.side=THREE.DoubleSide;
	      repeatX = 12;
	      repeatY = 1;
	      muro_corrid4.material.map.repeat.set(repeatX, repeatY);
	      muro_corrid4.rotation.x=0.5*Math.PI;
	      muro_corrid4.rotation.y=0.5*Math.PI;
	      muro_corrid4.position.set(3.401,5.38,.42);
	      obj.add(muro_corrid4);

	      muro_corrid5=createMesh(new THREE.PlaneGeometry(2.45,.2), "matton9.jpg");
	      muro_corrid5.material.side=THREE.DoubleSide;
	      repeatX = 8;
	      repeatY = 1;
	      muro_corrid5.material.map.repeat.set(repeatX, repeatY);
	      muro_corrid5.rotation.x=0.5*Math.PI;
	      muro_corrid5.rotation.y=0.5*Math.PI;
	      muro_corrid5.position.set(3.401,1.52,.42);
	      obj.add(muro_corrid5);

	      muro_corrid6=createMesh(new THREE.PlaneGeometry(1,.2), "matton9.jpg");
	      muro_corrid6.material.side=THREE.DoubleSide;
	      repeatX = 4;
	      repeatY = 1;
	      muro_corrid6.material.map.repeat.set(repeatX, repeatY);
	      muro_corrid6.rotation.x=0.5*Math.PI;
	      muro_corrid6.rotation.y=0.5*Math.PI;
	      muro_corrid6.position.set(3.401,8.51,.42);
	      obj.add(muro_corrid6);

	      muro_corrid7=createMesh(new THREE.PlaneGeometry(1.75,.2), "matton9.jpg");
	      muro_corrid7.material.side=THREE.DoubleSide;
	      repeatX = 4;
	      repeatY = 1;
	      muro_corrid7.material.map.repeat.set(repeatX, repeatY);
	      muro_corrid7.rotation.x=0.5*Math.PI;
	      muro_corrid7.position.set(4.2,8.699,.42);
	      obj.add(muro_corrid7);

	      muro_corrid8=createMesh(new THREE.PlaneGeometry(.8,.2), "matton9.jpg");
	      muro_corrid8.material.side=THREE.DoubleSide;
	      repeatX = 3;
	      repeatY = 1;
	      muro_corrid8.material.map.repeat.set(repeatX, repeatY);
	      muro_corrid8.rotation.x=0.5*Math.PI;
	      muro_corrid8.position.set(5.3,5.599,.42);
	      obj.add(muro_corrid8);

	      muro_corrid9=muro_corrid8.clone();
	      muro_corrid9.position.set(6.85,5.599,.42);
	      muro_corrid9.scale.x=.9;
	      obj.add(muro_corrid9);

	      muro_corrid10=muro_corrid8.clone();
	      muro_corrid10.position.set(5.75,4.501,.42);
	      muro_corrid10.scale.x=3.39;
	      obj.add(muro_corrid10);

	      muro_corrid11=createMesh(new THREE.PlaneGeometry(3.4,.2), "matton9.jpg");
	      muro_corrid11.material.side=THREE.DoubleSide;
	      repeatX = 9;
	      repeatY = 1;
	      muro_corrid11.material.map.repeat.set(repeatX, repeatY);
	      muro_corrid11.rotation.x=0.5*Math.PI;
	      muro_corrid11.rotation.y=0.5*Math.PI;
	      muro_corrid11.position.set(4.99,7.3,.42);
	      obj.add(muro_corrid11);

	      muro_corrid12=createMesh(new THREE.PlaneGeometry(2.7,.2), "matton9.jpg");
	      muro_corrid12.material.side=THREE.DoubleSide;
	      repeatX = 9;
	      repeatY = 1;
	      muro_corrid12.material.map.repeat.set(repeatX, repeatY);
	      muro_corrid12.rotation.x=0.5*Math.PI;
	      muro_corrid12.rotation.y=0.5*Math.PI;
	      muro_corrid12.position.set(4.399,3.15,.42);
	      obj.add(muro_corrid12);

	      muro_corrid13=createMesh(new THREE.PlaneGeometry(.4,.2), "matton9.jpg");
	      muro_corrid13.material.side=THREE.DoubleSide;
	      repeatX = 1;
	      repeatY = 1;
	      muro_corrid13.material.map.repeat.set(repeatX, repeatY);
	      muro_corrid13.rotation.x=0.5*Math.PI;
	      muro_corrid13.rotation.y=0.5*Math.PI;
	      muro_corrid13.position.set(4.399,.35,.42);
	      obj.add(muro_corrid13);

	      muro_corrid14=createMesh(new THREE.PlaneGeometry(1.2,.2), "matton9.jpg");
	      muro_corrid14.material.side=THREE.DoubleSide;
	      repeatX = 4;
	      repeatY = 1;
	      muro_corrid14.material.map.repeat.set(repeatX, repeatY);
	      muro_corrid14.rotation.x=0.5*Math.PI;
	      muro_corrid14.rotation.y=0.5*Math.PI;
	      muro_corrid14.position.set(7.099,5.1,.42);
	      obj.add(muro_corrid14);
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	      var muro_bagno1 = createMesh(new THREE.PlaneGeometry(3,1.3), "bath_1.jpg");
	      muro_bagno1.material.side=THREE.DoubleSide;
	      repeatX = 8;
	      repeatY = 3;
	      muro_bagno1.material.map.repeat.set(repeatX, repeatY);
	      muro_bagno1.rotation.x=0.5*Math.PI;
	      muro_bagno1.rotation.y=0.5*Math.PI;
	      muro_bagno1.position.set(5.11,7.2,1);
	      obj.add(muro_bagno1);

	      var muro_bagno2 = createMesh(new THREE.PlaneGeometry(3,.3), "sea3.jpg");
	      muro_bagno2.material.side=THREE.DoubleSide;
	      repeatX = 10;
	      repeatY = 1;
	      muro_bagno2.material.map.repeat.set(repeatX, repeatY);
	      muro_bagno2.position.y=.9;
	      muro_bagno1.add(muro_bagno2);

	      var cylinderGeometry = new THREE.CylinderGeometry(.05, .05, 3);
	      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFAEBD7});
	      var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
	      cylinder.rotation.z=0.5*Math.PI;
	      cylinder.position.y=.7;
	      muro_bagno1.add(cylinder);

	      muro_bagno3=muro_bagno1.clone();
	      muro_bagno3.position.x=7.089;
	      obj.add(muro_bagno3);

	      var muro_bagno4 = createMesh(new THREE.PlaneGeometry(.55,1.3), "bath_1.jpg");
	      muro_bagno4.material.side=THREE.DoubleSide;
	      repeatX = 2;
	      repeatY = 3;
	      muro_bagno4.material.map.repeat.set(repeatX, repeatY);
	      muro_bagno4.rotation.x=0.5*Math.PI;
	      muro_bagno4.position.set(5.36,8.689,1);
	      obj.add(muro_bagno4);

	      var muro_bagno5 = createMesh(new THREE.PlaneGeometry(.55,.3), "sea3.jpg");
	      muro_bagno5.material.side=THREE.DoubleSide;
	      repeatX = 2;
	      repeatY = 1;
	      muro_bagno5.material.map.repeat.set(repeatX, repeatY);
	      muro_bagno5.position.y=.9;
	      muro_bagno4.add(muro_bagno5);

	      var cylinderGeometry = new THREE.CylinderGeometry(.05, .05, .55);
	      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFAEBD7});
	      var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
	      cylinder.rotation.z=0.5*Math.PI;
	      cylinder.position.y=.7;
	      muro_bagno4.add(cylinder);

	      muro_bagno6=muro_bagno4.clone();
	      muro_bagno6.position.x=6.85;
	      obj.add(muro_bagno6);

	      muro_bagno7=muro_bagno4.clone();
	      muro_bagno7.position.y=5.709;
	      muro_bagno7.position.x=5.4;
	      obj.add(muro_bagno7);

	      muro_bagno8=muro_bagno4.clone();
	      muro_bagno8.position.y=5.709;
	      muro_bagno8.position.x=6.81;
	      obj.add(muro_bagno8);

	      var muro_bagno9 = createMesh(new THREE.PlaneGeometry(.95,1), "bath_1.jpg");
	      muro_bagno9.material.side=THREE.DoubleSide;
	      repeatX = 4;
	      repeatY = 2;
	      muro_bagno9.material.map.repeat.set(repeatX, repeatY);

	      muro_bagno9.rotation.x=0.5*Math.PI;
	      muro_bagno9.position.set(6.1,8.689,.8);
	      obj.add(muro_bagno9);

	      var dis_bagno = createMesh(new THREE.PlaneGeometry(3,1.2), "sea1.jpg");
	      dis_bagno.material.side=THREE.DoubleSide;
	      repeatX = 1;
	      repeatY = 1;
	      dis_bagno.material.map.repeat.set(repeatX, repeatY);
	      dis_bagno.rotation.y=0.5*Math.PI;
	      dis_bagno.rotation.x=0.5*Math.PI;
	      dis_bagno.scale.x=-1;
	      dis_bagno.position.set(7.088,7.2,2.35);
	      obj.add(dis_bagno);

	      muro_bagnet=muro_bagno1.clone();
	      muro_bagnet.rotation.y=1*Math.PI;
	      muro_bagnet.rotation.z=1*Math.PI;
	      muro_bagnet.rotation.x=-.5*Math.PI;
	      muro_bagnet.position.set(1.8,0.308,.9);
	      obj.add(muro_bagnet);

	      var muro_bagnet2 = createMesh(new THREE.PlaneGeometry(1.5,1.3), "bath_1.jpg");
	      muro_bagnet2.material.side=THREE.DoubleSide;
	      repeatX = 4;
	      repeatY = 3;
	      muro_bagnet2.material.map.repeat.set(repeatX, repeatY);

	      muro_bagnet2.rotation.x=0.5*Math.PI;
	      muro_bagnet2.rotation.y=0.5*Math.PI;
	      muro_bagnet2.position.set(0.309,1.05,.9);
	      obj.add(muro_bagnet2);

	      var cylinderGeometry = new THREE.CylinderGeometry(.05, .05, 1.5);
	      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFAEBD7});
	      var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
	      cylinder.rotation.z=0.5*Math.PI;
	      cylinder.position.y=.7;
	      muro_bagnet2.add(cylinder);

	      muro_bagnet3=muro_bagnet2.clone();
	      muro_bagnet3.position.x=3.298;
	      obj.add(muro_bagnet3);

	      muro_bagnet4=muro_bagnet2.clone();
	      muro_bagnet4.position.set(1.05,1.78,.9);
	      muro_bagnet4.rotation.y=1*Math.PI;
	      muro_bagnet4.rotation.z=1*Math.PI;
	      muro_bagnet4.rotation.x=-.5*Math.PI;
	      obj.add(muro_bagnet4);

	      var muro_bagnet5 = createMesh(new THREE.PlaneGeometry(.7,1.3), "bath_1.jpg");
	      muro_bagnet5.material.side=THREE.DoubleSide;
	      repeatX = 4;
	      repeatY = 3;
	      muro_bagnet5.material.map.repeat.set(repeatX, repeatY);
	      muro_bagnet5.rotation.x=0.5*Math.PI;
	      muro_bagnet5.position.set(2.95,1.78,.9);
	      obj.add(muro_bagnet5);

	      var cylinderGeometry = new THREE.CylinderGeometry(.05, .05, .7);
	      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFAEBD7});
	      var cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
	      cylinder.rotation.z=0.5*Math.PI;
	      cylinder.position.y=.7;
	      muro_bagnet2.add(cylinder);
	      muro_bagnet5.add(cylinder);


	      var muro_bagnet6 = createMesh(new THREE.PlaneGeometry(2.8,1.2), "sea4.jpg");
	      muro_bagnet6.material.side=THREE.DoubleSide;
	      muro_bagnet6.rotation.x=0.5*Math.PI;
	      muro_bagnet6.position.set(1.81,0.315,2.35);
	      obj.add(muro_bagnet6);

	      var planeGeometry = new THREE.PlaneGeometry(3.1,1.3);
	      var planeMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF,side: THREE.DoubleSide });
	      var muro_bagnet7 = new THREE.Mesh(planeGeometry,planeMaterial);
	      muro_bagnet7.material.side=THREE.DoubleSide;
	      muro_bagnet7.rotation.x=0.5*Math.PI;
	      muro_bagnet7.position.set(1.81,0.3091,2.3);
	      obj.add(muro_bagnet7);

	}




	function textNight(house){

    var foot= createMesh(new THREE.PlaneGeometry(1.5,3), "foot.png");
	     foot.material.side=THREE.DoubleSide;
         foot.material.transparent=true;
         foot.material.opacity=.99;
	     foot.position.set(40,44,3.4);
	     house.add(foot);

	     var foot2= createMesh(new THREE.PlaneGeometry(1.5,3), "foot.png");
	     foot2.material.side=THREE.DoubleSide;
         foot2.material.transparent=true;
         foot2.material.opacity=.99;
         foot2.rotation.z=-0.2*Math.PI;
	     foot2.position.set(37,47.5,3.4);
	     house.add(foot2);

		muro_rag3.material.map=THREE.ImageUtils.loadTexture("assets/textures/general/alessa.jpg");

	}