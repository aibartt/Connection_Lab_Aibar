/*
Setup - NEED 3 THINGS:
	(1) a scene
	(2) a camera
	(3) a renderer
*/

//Create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('black');

//Create a camera
const camera = new THREE.PerspectiveCamera(500, window.innerWidth/window.innerHeight, 0.1, 1000);
camera.position.z = 3;

//Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
//Add the renderer to the DOM
document.body.appendChild(renderer.domElement);

//Add OrbitControls 
const controls = new THREE.OrbitControls(camera, renderer.domElement);

/*
ADD items to the scene.
For each item, NEED AT LEAST 3 THINGS:
	(1) the geomtery (the shape)
	(2) the material (the skin/appearance of the shape)
	(3) the mesh (the object that pairs the geometry and the material)
Let's make a cube...
*/

// (1) Initialize the geometry
let geometry = new THREE.SphereGeometry(2, 50, 50);


// (2) Initialize the material

//Set the material to be a color
//let material = new THREE.MeshBasicMaterial({color: 'green', wireframe: false});

//Set the material to be an image
let imageLink = 'earth.jpeg';
let imageLoader =  new THREE.TextureLoader();
let imageTexture =  imageLoader.load(imageLink);
//Now we can pass the texture onto the material
let material = new THREE.MeshBasicMaterial( { map: imageTexture} );

// (3) Initialize the mesh
let sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

let rotate = true;
let rotateX = 0.01;
let rotateY = 0.01;

//Define an animate function / call it repeatedly
function animate(){

	if(rotate){
		sphere.rotation.x += rotateX;
		sphere.rotation.y += rotateY;
	}

	//allow for controls to update
	controls.update();

	//call render
	renderer.render(scene, camera);

	// call animate again 
	requestAnimationFrame(animate);
}

animate();

function updateImage(){

    //generating a random intehger between 1 and 8 to display random planet in solar system
    const rndInt = Math.floor(Math.random() * 8) + 1

	if (rndInt == 1){
		imageLink = 'mars.jpeg';
	}
	else if(rndInt == 2){
		imageLink = 'earth.jpeg';
	}
    else if(rndInt == 3){
		imageLink = 'mercury.jpeg';
	}
    else if(rndInt == 4){
		imageLink = 'venus.jpeg';
	}
    else if(rndInt == 5){
		imageLink = 'jupiter.jpeg';
	}
    else if(rndInt == 6){
		imageLink = 'saturn.jpeg';
	}
    else if(rndInt == 7){
		imageLink = 'neptune.jpeg';
	}
    else if(rndInt == 8){
		imageLink = 'uranus.jpeg';
	}


	let imageLoaderUpdate =  new THREE.TextureLoader();
	let imageTextureUpdate =  imageLoaderUpdate.load(imageLink);

	sphere.material.map = imageTextureUpdate;
	//Set needsUpdate to "true"
	sphere.material.needsUpdate = true;
}

let rotateToggle = document.getElementById('rotate-toggle');
rotateToggle.addEventListener('click', () =>{
	rotate = !rotate;
});

let imageToggle = document.getElementById('image-toggle');
imageToggle.addEventListener('click', ()=>{
	updateImage();
});