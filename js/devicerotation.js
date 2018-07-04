if (window.DeviceOrientationEvent) {
    document.getElementById("doeSupported").innerText = "OK - Device Motion wird unterstützt!";
    window.addEventListener('devicerotation', function(event) {

        document.getElementById("xRotation").innerHTML = 'Rotationsrate alpha um x-Achse: ' + event.rotationRate.alpha.toFixed(2);
        document.getElementById("yRotation").innerHTML = 'Rotationsrate beta um y-Achse: ' + event.rotationRate.beta.toFixed(2);
        document.getElementById("zRotation").innerHTML = 'Rotationsrate gamma um z-Achse: ' + event.rotationRate.gamma.toFixed(2);

    });
} else {
    document.getElementById("doeSupported").innerText = "Device Motion wird nicht unterstützt!";
}