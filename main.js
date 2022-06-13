schiff = document.getElementById("Schiff");
tuhh = document.getElementById("TUHH");
schiffsbau = document.getElementById("Schiffsbau");
schnupperstudium = document.getElementById("Schnupperstudium");
grundriss = document.getElementById("Grundriss");
quellen = document.getElementById("Quellen");

bug = document.getElementById("bug");
heck = document.getElementById("heck");
ruder = document.getElementById("ruder");

info1 = document.getElementById("info-1");
info2 = document.getElementById("info-2");
info3 = document.getElementById("info-3");
info4 = document.getElementById("info-4");
info5 = document.getElementById("info-5");
info6 = document.getElementById("info-6");

document.addEventListener('keydown', (event) => {
    var name = event.key;

    if (name == 'r') {
        schiff.style.display = "block";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "none";
        quellen.style.display = "none";

        bug.style.display = "none";
        heck.style.display = "none";
        ruder.style.display = "none";
    }

    if (name == 'a') {
        schiff.style.display = "block";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "none";
        quellen.style.display = "none";

        bug.style.display = "block";
        heck.style.display = "none";
        ruder.style.display = "none";

        try {
            model.rotation.z = Math.PI / 1.8;
        }
        catch(err) {
            console.log(err);
        }
    }
    
    if (name == 'b') {
        schiff.style.display = "block";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "none";
        quellen.style.display = "none";

        bug.style.display = "none";
        heck.style.display = "none";
        ruder.style.display = "block";

        try {
            model.rotation.z = Math.PI * 1.2;
        }
        catch(err) {
            console.log(err);
        }
    }

    if (name == 'c') {
        schiff.style.display = "block";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "none";
        quellen.style.display = "none";

        bug.style.display = "none";
        heck.style.display = "block";
        ruder.style.display = "none";

        try {
            model.rotation.z = Math.PI * -0.5;
        }
        catch(err) {
            console.log(err);
        }
    }

    if (name == 'd') {
        schiff.style.display = "none";
        tuhh.style.display = "block";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "none";
        quellen.style.display = "none";
    }

    if (name == 'e') {
        schiff.style.display = "none";
        tuhh.style.display = "none";
        schiffsbau.style.display = "block";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "none";
        quellen.style.display = "none";
    }

    if (name == 'f') {
        schiff.style.display = "none";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "block";
        grundriss.style.display = "none";
        quellen.style.display = "none";
    }

    if (name == '1') {
        schiff.style.display = "none";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "block";
        quellen.style.display = "none";

        info1.style.display = "block";
        info2.style.display = "none";
        info3.style.display = "none";
        info4.style.display = "none";
        info5.style.display = "none";
        info6.style.display = "none";
    }

    if (name == '2') {
        schiff.style.display = "none";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "block";
        quellen.style.display = "none";

        info1.style.display = "none";
        info2.style.display = "block";
        info3.style.display = "none";
        info4.style.display = "none";
        info5.style.display = "none";
        info6.style.display = "none";
    }

    if (name == '3') {
        schiff.style.display = "none";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "block";
        quellen.style.display = "none";

        info1.style.display = "none";
        info2.style.display = "none";
        info3.style.display = "block";
        info4.style.display = "none";
        info5.style.display = "none";
        info6.style.display = "none";
    }

    if (name == '4') {
        schiff.style.display = "none";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "block";
        quellen.style.display = "none";
        
        info1.style.display = "none";
        info2.style.display = "none";
        info3.style.display = "none";
        info4.style.display = "block";
        info5.style.display = "none";
        info6.style.display = "none";
    }

    if (name == '5') {
        schiff.style.display = "none";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "block";
        quellen.style.display = "none";

        info1.style.display = "none";
        info2.style.display = "none";
        info3.style.display = "none";
        info4.style.display = "none";
        info5.style.display = "block";
        info6.style.display = "none";
    }

    if (name == '6') {
        schiff.style.display = "none";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "block";
        quellen.style.display = "none";
        
        info1.style.display = "none";
        info2.style.display = "none";
        info3.style.display = "none";
        info4.style.display = "none";
        info5.style.display = "none";
        info6.style.display = "block";
    }

    if (name == 'q') {
        schiff.style.display = "none";
        tuhh.style.display = "none";
        schiffsbau.style.display = "none";
        schnupperstudium.style.display = "none";
        grundriss.style.display = "none";
        quellen.style.display = "block";

        info1.style.display = "none";
        info2.style.display = "none";
        info3.style.display = "none";
        info4.style.display = "none";
        info5.style.display = "none";
        info6.style.display = "none";
    }
}, false);

var container, 
renderer, 
scene, 
camera, 
mesh, 
start = Date.now(),
fov = 30;

let scene2, camera2, renderer2;

var clock = new THREE.Clock();

var timeUniform = {
	iGlobalTime: {
		type: 'f',
		value: 0.1
	},
	iResolution: {
		type: 'v2',
		value: new THREE.Vector2()
	}
};

timeUniform.iResolution.value.x = window.innerWidth;
timeUniform.iResolution.value.y = window.innerHeight;

window.addEventListener('load', function() {
    scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera( 
            fov, 
            window.innerWidth / window.innerHeight, 
            1, 
            10000
          );
          camera.position.x = 20;    
          camera.position.y = 10;    
          camera.position.z = 20;
        
          camera.lookAt(scene.position);
      scene.add(camera);
    
    material = new THREE.ShaderMaterial({
        uniforms: timeUniform,
        vertexShader: document.getElementById('vertex-shader').textContent,
        fragmentShader: document.getElementById('fragment-shader').textContent
    });
    
    var water = new THREE.Mesh(
        new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight, 40), material
        );
        water.renderOrder = 0;
        scene.add(water);
        
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setSize( window.innerWidth, window.innerHeight );

    container = document.getElementById('container');
    container.appendChild( renderer.domElement );
    render();
    scene2 = new THREE.Scene();
    
    camera2 = new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5000);
    camera2.rotation.y = 44/180*Math.PI;
    camera2.position.x = 650;
    camera2.position.y = 50;
    camera2.position.z = 800;
    
    light = new THREE.PointLight(0xffffff, 1);
    light.position.set(1000,100,500);
    scene2.add(light);
    
    renderer2 = new THREE.WebGLRenderer( { alpha: true } );
    renderer2.setSize(window.innerWidth,window.innerHeight);
    
    container2 = document.getElementById( 'container2' );
    container2.appendChild(renderer2.domElement);
    
    let loader = new THREE.GLTFLoader();
    loader.load('scene.gltf', function(gltf){
        model = gltf.scene.children[0];
        model.scale.set(50, 50, 50);
        scene2.add(gltf.scene);
        animate();
    });
});

window.addEventListener('resize',function() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});

function render() {
  timeUniform.iGlobalTime.value += clock.getDelta();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}


function animate() {
    renderer2.render(scene2, camera2);
      if (bug.style.display == "none" && heck.style.display == "none" && ruder.style.display == "none") {
            model.rotation.z += 0.007;
      }
    requestAnimationFrame(animate);
}