// ===== LOVEFLIX =====
const profile = localStorage.getItem("profile");

if(!profile){

window.location.href="profiles.html";

}
const welcome = document.getElementById("welcome");

if (welcome) {
    welcome.innerHTML = "Welcome, " + profile + " 💕";
}

// Play Button

const playBtn = document.querySelector(".play");

playBtn.addEventListener("click", () => {
    playEpisode("videos/episode1.mp4");
});

function playEpisode(videoFile){

    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("videoPlayer");

    popup.style.display = "flex";
    video.src = videoFile;
    video.play();

}

function closeVideo(){

    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("videoPlayer");

    video.pause();
    video.src = "";
    popup.style.display = "none";

}
