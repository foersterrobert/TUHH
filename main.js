let scene, camera, renderer;
      
function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);
        
    camera = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    camera.rotation.y = 44/180*Math.PI;
    camera.position.x = 400;
    camera.position.y = 100;
    camera.position.z = 1000;

    hlight = new THREE.AmbientLight (0x404040,100);
    scene.add(hlight);

    directionalLight = new THREE.DirectionalLight(0xffffff,100);
    directionalLight.position.set(0,1,0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    light = new THREE.PointLight(0xc4c4c4,10);
    light.position.set(0,300,500);
    scene.add(light);
    light2 = new THREE.PointLight(0xc4c4c4,10);
    light2.position.set(500,100,0);
    scene.add(light2);
    light3 = new THREE.PointLight(0xc4c4c4,10);
    light3.position.set(0,100,-500);
    scene.add(light3);
    light4 = new THREE.PointLight(0xc4c4c4,10);
    light4.position.set(-500,300,500);
    scene.add(light4);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);

    container = document.getElementById( 'ship3d' );
    container.appendChild(renderer.domElement);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', renderer);

    let loader = new THREE.GLTFLoader();
    loader.load('scene.gltf', function(gltf){
        car = gltf.scene.children[0];
        car.scale.set(1, 1, 1);
        scene.add(gltf.scene);
        animate();
    });
}
function animate() {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}
    init();

    bug = document.getElementById("bug");
    heck = document.getElementById("heck");
    ruder = document.getElementById("ruder");

    schiff = document.getElementById("Schiff");
    tuhh = document.getElementById("TUHH");
    schiffsbau = document.getElementById("Schiffsbau");
    schnupperstudium = document.getElementById("Schnuppertag");
    grundriss = document.getElementById("Grundriss");

    info1 = document.getElementById("info-1");
    info2 = document.getElementById("info-2");
    info3 = document.getElementById("info-3");
    info4 = document.getElementById("info-4");
    info5 = document.getElementById("info-5");

    document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    if (schiff.style.display != "none") {
    if (name == 's') {
        heck.style.display = "block";
        bug.style.display = "none";
        ruder.style.display = "none";
        car.rotation.z = 2*Math.PI;
    } 

    else if (name == 'w') {
        heck.style.display = "none";
        bug.style.display = "block";
        ruder.style.display = "none";
        car.rotation.z = Math.PI;
    }

    else if (name == 'a') {
        heck.style.display = "none";
        bug.style.display = "none";
        ruder.style.display = "block";
        car.rotation.z = 0;
    }
    }

    else if (grundriss.style.display != "none") {
    if (name == 'q') {
        info1.style.display = "block";
        info2.style.display = "none";
        info3.style.display = "none";
        info4.style.display = "none";
        info5.style.display = "none";
    }

    else if (name == 'w') {
        info1.style.display = "none";
        info2.style.display = "block";
        info3.style.display = "none";
        info4.style.display = "none";
        info5.style.display = "none";
    }

    else if (name == 'e') {
        info1.style.display = "none";
        info2.style.display = "none";
        info3.style.display = "block";
        info4.style.display = "none";
        info5.style.display = "none";
    }

    else if (name == 'r') {
        info1.style.display = "none";
        info2.style.display = "none";
        info3.style.display = "none";
        info4.style.display = "block";
        info5.style.display = "none";
    }

    else if (name == 't') {
        info1.style.display = "none";
        info2.style.display = "none";
        info3.style.display = "none";
        info4.style.display = "none";
        info5.style.display = "block";
    }
    }

    if (name == '1') {
        schiff.style.display = "block";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "none";
    }

    else if (name == '2') {
        schiff.style.display = "none";
        tuhh.style.display = "block";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "none";
    }

    else if (name == '3') {
        schiff.style.display = "none";
        tuhh.style.display = "none";
        schiffsbau.style.display = "block";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "none";
    }

    else if (name == '4') {
        schiff.style.display = "none";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "block";
        grundriss.style.display = "none";
    }

    else if (name == '5') {
        schiff.style.display = "none";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "block";
    }
}, false);