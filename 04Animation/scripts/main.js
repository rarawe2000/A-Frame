// changing individual properties with code and using setInterval
var rotationSpeed = 0.01;
var widthIncrease = 0.1;
var positionChangeY = 0.01;

var myOtherBox = document.getElementById('myOtherBox');
var myBox = document.getElementById('myBox');


function spin(){
	myOtherBox.object3D.rotation.x -= rotationSpeed;
	myOtherBox.object3D.rotation.y -= rotationSpeed;
	myOtherBox.object3D.rotation.z -= rotationSpeed;

	myOtherBox.object3D.width += widthIncrease;

	myOtherBox.object3D.position.y += positionChangeY;
	myBox.object3D.position.y += positionChangeY;


	if (myOtherBox.object3D.rotation.x <= -5) {
		rotationSpeed = 0.4;
		widthIncrease -= 0.4;
	}

	if (myOtherBox.object3D.rotation.x <= -50) {
		rotationSpeed = 0.01;
		widthIncrease = 0.1;
	}

	if (myOtherBox.object3D.rotation.x <= -55) {
		rotationSpeed = 0.4;
		widthIncrease -= 0.4;
	}

	if (myOtherBox.object3D.rotation.x <= -100) {
		rotationSpeed = 0.01;
		widthIncrease = 0.1;
	}

	if (myOtherBox.object3D.rotation.x <= -105) {
		rotationSpeed = 0.4;
		widthIncrease -= 0.4;
	}

	if (myOtherBox.object3D.rotation.x <= -180) {
		rotationSpeed = 0.4;
		widthIncrease = 0.1;
		myOtherBox.object3D.rotation.x = 0;
	}

	if (myOtherBox.object3D.position.y >= -3 && myOtherBox.object3D.position.y <= 10) {
		positionChangeY = 0.01;
	}

	console.log(myOtherBox.object3D.rotation.x);
}

setInterval(spin, 16); //equivalent to 60 fps