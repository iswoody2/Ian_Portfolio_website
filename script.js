// Created list of image files to display
const images = [
    './images/Greenland.png', // first image
    './images/Snow_trip.png', // second image
    './images/Mountains.png',
];

// Begin with first image 
let currentIndex = 0; 

// Find the image with its id in the list 
const homeImage = document.getElementById('home-image');

// Function to change the image
function changeImage() {
    homeImage.classList.add('hidden'); // Fade out
    setTimeout(() => {
        // Goes to the next image in the list
        currentIndex = (currentIndex + 1) % images.length;
        // Update the "src" attribute of the image element 
        homeImage.src = images[currentIndex];
        homeImage.classList.remove('hidden'); // Fade in
    }, 500); // Wait for fade-out to complete
}

// Set an interval to change the image every 3 seconds
setInterval(changeImage, 3000);


// Get the button element by its ID
const cvButton = document.getElementById("cvButton");

// Add a click event listener to the button
cvButton.addEventListener("click", function (event) {
    // Prevent the default action (navigation to the file)
    event.preventDefault();

    // Change the button text to indicate loading
    cvButton.textContent = "Loading...";
    cvButton.style.pointerEvents = "none"; // Disable further clicks

    setTimeout(() => {
        // Trigger the download by creating a temporary link element
        const link = document.createElement('a');
        link.href = cvButton.href;  // Set the link's href to the CV file
        link.download = cvButton.href.split("/").pop(); 
        link.click();  // Trigger the download

        cvButton.textContent = "Download Ian's CV";
        cvButton.style.pointerEvents = "auto";
    }, 1000); // Delay in milliseconds (adjust if needed)
});

