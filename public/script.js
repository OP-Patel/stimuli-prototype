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

