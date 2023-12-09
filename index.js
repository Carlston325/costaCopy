const webSize = window.matchMedia("(max-width: 760px)");

if (webSize.matches) {
    document.querySelector(".heroVideo").setAttribute("src", "./assets/videos/CO89119_Yearly_Reunion_Social_Adapts_620_x_1126_V2.mp4");
}
