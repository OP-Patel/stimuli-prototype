document.getElementById('video-box').addEventListener('click', function() {
    var videoPlayer = document.getElementById('video-player');
    var placeholderText = this.querySelector('p');
  
    placeholderText.style.display = 'none';
    videoPlayer.style.display = 'block';
    videoPlayer.play().catch(function(error) {
      console.error("Video play failed", error);
    });
});

let currentRating = 0;

document.querySelectorAll('.circle-container').forEach(container => {
    const circle = container.querySelector('.circle');
    const rating = parseInt(container.dataset.rating, 10);
  
    circle.addEventListener('click', () => {
      currentRating = rating;
      highlightCircles(rating); 
    });
  
    circle.addEventListener('mouseenter', () => {
      highlightCircles(rating); 
    });
  
    circle.addEventListener('mouseleave', () => {
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
    currentRating = 0; //reset current rating
    highlightCircles(0); 
}
  