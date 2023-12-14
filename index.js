let video = document.getElementById("video");
let videoSrc = ["./assets/videos/CO89119_Yearly_Reunion_Social_Adapts_620_x_1126_V2.mp4", "./assets/videos/CO89119_Yearly_Reunion_Social_Adapts_1600x640__2_.mp4"];

function getScreenSize() {
    let screenWidth = window.innerWidth;

    if (screenWidth <= 767) {
        return 0;
    } else {
        return 1;
    }
}

function loadVideoSource() {
    let screenSize = getScreenSize();

    video.pause();
    video.src = videoSrc[screenSize];
    video.play();
}

loadVideoSource();
window.addEventListener("resize", loadVideoSource);
