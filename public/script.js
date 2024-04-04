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





document.addEventListener('DOMContentLoaded', function () {
  //array of videos --> update with new clips so the functions below can work
  var videos = [
    { 
      src: 'cooperation-clip1.mp4', 
      text: '#2',
      genre: 'Gaming - Rocket League',
      duration: '0:24s',
      mediaType: 'Video',
      emotionMeasured: 'teamwork',
    },
    { 
      src: 'audio-clip3.mp4', 
      text: '#3',
      genre: 'Audio - AVIA AI',
      duration: '0:30s',
      mediaType: 'Audio/Video',
      emotionMeasured: 'excitement',
    }    
  ];
  
var currentIndex = -1; //account for the +1

function updateVideoDetails(video) {
    //update video details manually
    var videoPlayer = document.getElementById('video-player');
    videoPlayer.src = video.src;
    videoPlayer.load();

    document.getElementById('video-title').textContent = `Media - ${video.text}`;
    document.getElementById('genre').textContent = video.genre;
    document.getElementById('duration').textContent = video.duration;
    document.getElementById('media-type').textContent = video.mediaType;
    document.getElementById('emotion_measured').textContent = video.emotionMeasured;
}

function handleSubmit() {
    clearRating();
    if (currentIndex < videos.length - 1) {
    currentIndex = (currentIndex + 1) % videos.length; //move to next vid
    updateVideoDetails(videos[currentIndex]);
    
    //hide the video player and show the placeholder text for the new video
    document.getElementById('video-player').style.display = 'none';
    var videoBoxText = document.getElementById('video-box').querySelector('p');
    videoBoxText.style.display = 'block';
    videoBoxText.textContent = `Click here to see Media - ${videos[currentIndex].text}`;
    } else { //end of the array
      document.getElementById('sub-btn2').disabled = true;
      document.getElementById('sub-btn3').disabled = true;
      document.getElementById('video-player').style.display = 'none';
      var videoBoxText = document.getElementById('video-box').querySelector('p');
      videoBoxText.style.display = 'none'; // Optionally hide the placeholder text
      document.getElementById('media-details').style.display = 'none';
      document.getElementById('main_container').style.display = 'none';
    }
}
 
  document.getElementById('video-box').addEventListener('click', function() {
    var videoPlayer = document.getElementById('video-player');
    var videoBoxText = this.querySelector('p');
  
    videoBoxText.style.display = 'none'; //hide placeholder text
    videoPlayer.style.display = 'block'; //show the video
    videoPlayer.play().catch(function(error) {
      console.error("Video play failed", error);
    });
  });

  document.getElementById('sub-btn2').addEventListener('click', handleSubmit);
  document.getElementById('sub-btn3').addEventListener('click', handleSubmit);
});