// Javascript Practice

console.log('Hello');
const bulb = document.getElementById('bulb');

// Store the paths for the images
const bulbOffSrc = 'bulb_off.png';
const bulbOnSrc = 'bulb_on.png';

// Add event listeners for hover
bulb.addEventListener('mouseover', () => {
  // Change the image source to the lit bulb
  bulb.src = bulbOnSrc;
});

bulb.addEventListener('mouseout', () => {
  // Change the image source back to the unlit bulb
  bulb.src = bulbOffSrc;
});
