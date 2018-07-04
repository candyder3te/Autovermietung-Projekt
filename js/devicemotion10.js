if (window.DeviceOrientationEvent) {
    document.getElementById("dmeSupported").innerText = "OK - Device Rotation wird unterstützt!";
    window.addEventListener('deviceorientation', function(event) {

        document.getElementById("alphaRotation").innerHTML = 'alpha' + event.rotationRate.alpha.toFixed(2);
        document.getElementById("betaRotation").innerHTML = 'beta' + event.rotationRate.beta.toFixed(2);
        document.getElementById("gammaRotation").innerHTML = 'gamma' + event.rotationRate.gamma.toFixed(2);

    });
} else {
    document.getElementById("dmeSupported").innerText = "Device Rotation wird nicht unterstützt!";
}