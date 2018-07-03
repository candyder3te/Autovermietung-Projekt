if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "OK - Device Motion wird unterstützt!";
    window.addEventListener('devicemotion', function(event) {
        document.getElementById("xBeschl").innerHTML = 'x ' + event.rotationRate.x.toFixed(2);
        document.getElementById("yBeschl").innerHTML = 'y ' + event.rotationRate.y.toFixed(2);
        document.getElementById("zBeschl").innerHTML = 'z ' + event.rotationRate.z.toFixed(2);
        var maxi = -1;
        if (event.rotationRate.z > maxi) {
            maxi = event.rotationRate.z;
            document.getElementById("meinMax").innerHTML = 'max z: ' + maxi;
        } else {
            document.getElementById("dmeSupported").innerText = "Device Motion wird nicht unterstützt!";
        }
    });
}


function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('Abfrage der Geoposition untersagt.');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Es sind keine Geopositionsdaten verfügbar.');
            break;
        case error.TIMEOUT:
            alert('Timeout überschritten.');
            break;
        default:
            alert('Unbekannter Fehler');
            break;
    }
}