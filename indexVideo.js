// -------------------------Video-------------------------

var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");

function stopVideo(){
  videoPlayer.style.display = "none";
  myVideo.pause();
  //audio|video.pause();
}

function playVideo(file){
  console.log(file);
  myVideo.src = file;  
  videoPlayer.style.display = "block";
 
}

