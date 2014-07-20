Final Project
================
Michele D'Antimi matr: 442995
-----------------------

Project organization :
==================

* [index](index.html) creates some instance variables and create the scene, camera, the apartment,the gui and call the other function to add the light, the texture and the object in the apartment with their animations.
* The functions [scriptFinestre](assets/scripts/script_Finestre.js), [scriptPorte](assets/scripts/script_Porte.js), [scriptLuci](assets/script/script_luci.js),[scriptTexture](assets/script/script_texture_app.js),[scriptRifinitureEsterne](assets/script/script_texture_app.js) create the window and the door that are imported from Lar model created by me, and add the texture and the light in the apartment.
* The functions [scriptSalone](assets/scripts/script_salone.js), [scriptBagno](assets/scripts/script_bagno.js), [scriptCameraLetto](assets/script/script_camera_letto.js),[scriptCameretta](assets/script/script_cameretta.js), [scriptCucina](assets/script/script_cucina.js)[scriptSalaHobby](assets/script/script_salaHobby.js), [scriptEsterno](assets/script/script_esterno.js)[scriptQuadri](assets/script/script_quadro.js) create all the objects in the apartment, some objects like the sofa, the lamp , the library or the Ping Pong Racket are created by me, other are object imported; the most have been modified by me( by adding geometries or by changing the mtl file).
* [FirstPerson](assets/functions/FirstPersonScript.js) contains the method that allow the use of first person control.
* [Particles](assets/functions/script_particles.js) contains the definition of particles.

Graphic Techniques:
==================
* bump map, repeat wrapping -> frame and walls.
* Video Texture -> HD tv
* texture -> walls,floors,objects.
* tween animation -> PingPong ball and racket, Basket ball, chair rotation, opening/closing shower door, Ufo movement and first person fly, opening/closing doors and windows, darts movement, water animation, knife and watermelon animation, bell animation.
* import obj, obj/mtl.
* **SkyBox.**
* **TrackballControls, PointerLockControls, picking object.**
* **particle** -> star in the night, clouds, water in the shower, flames, fountain near the basket camp, fireflies.
* **Audio** -> tv,guitar,light on/off ,bell,chair rotation,fountain, flames, open/close water, open/close window and door, UFO, scary sound in the bathroom (only in the night), open/close shower door, PC.
* Cube Camera -> Mirror in the bathroom.
* Text Geometry -> cvdlab mat.
* Keyboard state -> animation of the torch carried by the player (only in the night with First Person control).
* Shape -> wall and roof.
* Gui ->  set night and day, Skybox, extern light, particle, change camera controls.
* PointLight, SpotLight, DirectionalLight.

Descriptions:
==================
* You can interact with object by clicking.
* With the gui you can choose which environment and camera you prefer.
* In addition to the frames, there are drawings on the walls ( a tree and a girl).
* With first person control you can move in the ambient by clicking the button "a","s","d","w".
* In the night you can use the torch : click "r" to turn on the light, click "t" to turn off the light, hold "w" to raise the torch, hold "r" to lower the torch.
* There are difference beetween the video (in tv and PC) and the girl draw in the day and in the night.
* In the night the water in bathroom is very very scary, and if you click the mirror in the bathroom near the boys room (with first person control) it could be dangerous.
* Only with First Person Control if you click the telescope the animation can begin.