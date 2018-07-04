if (window.DeviceOrientation.Event) {
    document.getElementById("dmeSupported").innerText = "OK - Device Rotation wird unterstützt!";
    window.addEventListener('deviceorientation', function(event) {
            var alpha;
            var beta;
            var gamma;
            document.getElementById("alphaRotation").innerHTML = 'alpha ' + event.rotationRate.alpha.toFixed(2);
            document.getElementById("betaRotation").innerHTML = 'beta ' + event.rotationRate.beta.toFixed(2);
            document.getElementById("gammaRotation").innerHTML = 'gamma ' + event.rotationRate.gamma.toFixed(2);
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