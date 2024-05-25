document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const lightBulb = document.getElementById('lightBulb');
    const switchButton = document.getElementById('switchButton');
    
    let isLightOn = false;

    switchButton.addEventListener('click', function() {
        if (isLightOn) {
            body.classList.remove('light-on');
            switchButton.textContent = 'Switch On';
        } else {
            body.classList.add('light-on');
            switchButton.textContent = 'Switch Off';
        }
        isLightOn = !isLightOn;
    });
});
