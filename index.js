let video = document.querySelector("video");
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

    video.src = videoSrc[screenSize];

}

loadVideoSource();
window.addEventListener("resize", loadVideoSource);

window.addEventListener("resize", function(){
    let screenSize = window.innerWidth;

    if (screenSize <= 1000) {
        document.querySelector("body > div > div:nth-child(1) > div.container.col-xxl-8.px-4.py-5 > div.row.flex-lg-row-reverse.align-items-center.g-5.my-4.py-5 > div.col-lg-6.text-center").classList.add("text-center");
    } else {
        document.querySelector("body > div > div:nth-child(1) > div.container.col-xxl-8.px-4.py-5 > div.row.flex-lg-row-reverse.align-items-center.g-5.my-4.py-5 > div.col-lg-6.text-center").classList.remove("text-center");
    }
});


