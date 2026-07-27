// ===== LOVEFLIX =====

const profile = localStorage.getItem("profile");

if (!profile) {
    window.location.href = "profiles.html";
}

const welcome = document.getElementById("welcome");

if (welcome) {
    welcome.innerHTML = "Welcome, " + profile + " 💕";
}

// ===== Play Episode =====

function playEpisode(videoFile) {

    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("videoPlayer");

    popup.style.display = "flex";

    video.src = videoFile;

    video.load();

    video.play();

}

function closeVideo() {

    const popup = document.getElementById("videoPopup");
    const video = document.getElementById("videoPlayer");

    video.pause();

    video.currentTime = 0;

    video.src = "";

    popup.style.display = "none";

}

// ===== More Info Button =====

const infoBtn = document.querySelector(".info");

if (infoBtn) {

    infoBtn.addEventListener("click", () => {

        alert("❤️ Welcome to LOVEFLIX ❤️\n\nEvery episode tells a part of our story.\nThank you for being my favourite person.\n\nLove you forever. 🤍");

    });

}

// ===== Fade In Episodes =====

const episodes = document.querySelectorAll(".episode");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

episodes.forEach((episode) => {

    observer.observe(episode);

});

// ===== Header Blur =====

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});
