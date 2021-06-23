

// changing individual properties with code and using setInterval
// var rotationSpeed = 0.01;

// var myOtherBox = document.getElementById('myOtherBox');

// function spin(){
// 	var axis = [x,y,z];

// 	for (i = 0; i < axis.length; i++) { 
//   		myOtherBox.object3D.rotation.axis[i] -= rotationSpeed;
// 	}

// 	// myOtherBox.object3D.rotation.x -= rotationSpeed;
// 	// myOtherBox.object3D.rotation.y -= rotationSpeed;
// 	// myOtherBox.object3D.rotation.z -= rotationSpeed;

// 	rotationSpeed += 0.49;

// 	for (i = 0; i < axis.length; i++) { 
//   		myOtherBox.object3D.rotation.axis[i] -= rotationSpeed;
// 	}

// 	rotationSpeed -= 0.49;


// 	// console.log(myOtherBox.object3D.rotation.x);
// }

// setInterval(spin, 16); //equivalent to 60 fps

//-------------------------------------

// changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
	myOtherBox.object3D.rotation.y -= rotationSpeed;
	myOtherBox.object3D.rotation.z -= rotationSpeed;
	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps