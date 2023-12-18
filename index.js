// HERO VIDEO
let video = document.getElementById("video");
let videoSrc = ["./assets/videos/CO89119_Yearly_Reunion_Social_Adapts_620_x_1126_V2.mp4", "./assets/videos/CO89119_Yearly_Reunion_Social_Adapts_1600x640__2_.mp4"];
let header = ["headerSmall", "headerLarge"]

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

// HEADER
const menu = $("#headerSmall");
const closeButton = $(".closeMenuBTN");

function toggleMenuIn() {
    menu.addClass("menuHide70");
    setTimeout(function(){
        menu.removeClass("menuHide70");
        menu.addClass("menuHide50");
    }, 20);

    setTimeout(function(){
        menu.removeClass("menuHide50");
        menu.addClass("menuHide30");
    }, 40);
    
    setTimeout(function(){
        menu.addClass("menuHideFULL");
    }, 80);
}

$(closeButton).on("click", toggleMenuIn);

function toggleMenuOut() {
    menu.addClass("menuHide30");
    setTimeout(function(){
        menu.removeClass("menuHide30");
        menu.addClass("menuHide50");
    }, 30);

    setTimeout(function(){
        menu.removeClass("menuHide50");
        menu.addClass("menuHide70");
    }, 50);
    
    setTimeout(function(){
        menu.removeClass("menuHide70");
        menu.addClass("menuHideNone");
    }, 70);
}

function headerScreen () {
    let screenWidth = window.innerWidth;

    if (screenWidth <= 1050) {
        toggleMenuOut();
        $("#headerLarge").slideUp();
    } else {
        $("#headerLarge").slideDown();
        toggleMenuIn();
    }
}

headerScreen();
window.addEventListener("resize", headerScreen);
