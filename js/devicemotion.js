if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "OK - Device Motion wird unterstützt!";
    window.addEventListener('devicemotion', function(event) {

        document.getElementById("xRotation").innerHTML = 'Rotation um die x-Achse: ' + event.rotationRate.beta.toFixed(2);
        document.getElementById("yRotation").innerHTML = 'Rotation um die y-Achse: ' + event.rotationRate.gamma.toFixed(2);
        document.getElementById("zRotation").innerHTML = 'Rotation um die z-Achse: ' + event.rotationRate.alpha.toFixed(2);

    });
} else {
    document.getElementById("dmeSupported").innerText = "Device Motion wird nicht unterstützt!";
}