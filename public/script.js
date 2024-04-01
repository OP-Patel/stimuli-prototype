document.getElementById('video-box').addEventListener('click', function() {
    var videoPlayer = document.getElementById('video-player');
    var placeholderText = this.querySelector('p'); // Access the placeholder paragraph
  
    // Hide the placeholder text
    placeholderText.style.display = 'none';
  
    // Show the video player
    videoPlayer.style.display = 'block';
  
    // Attempt to play the video
    videoPlayer.play().catch(function(error) {
      // If there's an error when trying to play, log it to the console
      console.error("Video play failed", error);
    });
});

let currentRating = 0;

document.querySelectorAll('.circle-container').forEach(container => {
    const circle = container.querySelector('.circle');
    const rating = parseInt(container.dataset.rating, 10);
  
    circle.addEventListener('click', () => {
      currentRating = rating; // Update the current rating
      highlightCircles(rating); // Update the highlighted circles
    });
  
    circle.addEventListener('mouseenter', () => {
      highlightCircles(rating); // Highlight circles on mouse enter
    });
  
    circle.addEventListener('mouseleave', () => {
      // When leaving the circle, only highlight the current rating
      highlightCircles(currentRating);
    });
});
  
function highlightCircles(upToRating) {
    document.querySelectorAll('.circle-container').forEach(container => {
      const innerRating = parseInt(container.dataset.rating, 10);
      const innerCircle = container.querySelector('.circle');
      if (innerRating <= upToRating) {
        innerCircle.classList.add('circle-highlighted');
      } else {
        innerCircle.classList.remove('circle-highlighted');
      }
    });
}


function clearRating() {
    currentRating = 0; // Reset current rating
    highlightCircles(0); // Remove highlighting from all circles
}
  