// Hover over the car = Microphone rotates
var carIcon = document.querySelector('.js-car-svg');
var microphoneIcon = document.querySelector('.js-microphone-svg');
var triggerAnimationButton = document.querySelector('[data-trigger="animate"]');
var toggleSoundButton = document.querySelector('#playSoundButton');

// Add Event Listener. You are telling the browser to listen for an event
carIcon.addEventListener('mouseenter', addAnimationToMicrophone);
carIcon.addEventListener('mouseout', removeAnimationToMicrophone);
triggerAnimationButton.addEventListener('click', triggerAnimation);
toggleSoundButton.addEventListener('click', toggleSound);

// Functions
function addAnimationToMicrophone() {
    console.log('AddAnimationToMicrophone is called');
    // Add a .animate class to the microphone element
    microphoneIcon.classList.add('animate');
}

function removeAnimationToMicrophone() {
    console.log('removeAnimationToMicrophone is called');
    // Remove .animate class from the microphone element
    microphoneIcon.classList.remove('animate');
}

function triggerAnimation() {
    console.log('triggerAnimation Button Clicked');

    // Check to see if svgs have a class of .animate
    // if (microphoneIcon.classList.contains('animate') && carIcon.classList.contains('animate') ) {
    //     //  Remove .animate from svgs
    //     microphoneIcon.classList.remove('animate');
    //     carIcon.classList.remove('animate');
    //     triggerAnimationButton.innerHTML = 'Trigger Animation';
    // } else {
    //     // Add class of .animate to both svgs
    //     microphoneIcon.classList.add('animate');
    //     carIcon.classList.add('animate');
    //     triggerAnimationButton.innerHTML = 'Remove Animation';
    // }

    // OR 
    toggleClass(microphoneIcon, 'animate');
    toggleClass(carIcon, 'animate');
    toggleText(triggerAnimationButton);
}

function toggleClass(element, className) {
    console.log('toggleClass is called');
    if (element.classList.contains('animate')) {
        element.classList.remove('animate');
    } else {
        element.classList.add('animate');
    }
}

function toggleText(element) {
    if (element.innerHTML == 'Trigger Animation') {
        element.innerHTML = 'Remove Animation';
    } else {
        element.innerHTML = 'Trigger Animation';
    }
}

function toggleSound() {
    console.log('Toggle Sound button was clicked');
    // Grab audio clip
    var audioClip = document.querySelector('.js-audio');
    // Check if the sound is currently playing
    if (audioClip.paused) {
        // Play Sound
        audioClip.play();
    } else {
        // Pause Sound
        audioClip.pause();
    }
}