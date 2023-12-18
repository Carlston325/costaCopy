* {
    font-family: 'Fira Sans', sans-serif;
    font-size: 20px;
}

body {
    margin: 0;
}

body > div > div:nth-child(1) {
    overflow: hidden;
}

#costaLogo {
    width: 200px;
}

body > div > div:nth-child(1) {
    position: relative;
}

/* HERO VIDEO */
header {
    position: absolute;
    width:100%;

}

.heroVideoBox {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: -1;
    overflow: hidden;
}

.heroVideoBox > .video {
    min-height: 100%;
    min-width: 100%;
    transform: translate(0%, -25%);
    height: auto !important;
    width: 105%;
    object-fit: cover;
}

/* TEXT */
h1 {
    font-size: 48px;
}

h3 {
    font-size: 30px;
}

h4 {
    font-size: 25px;
    font-weight: bold;
}

h5 {
    font-size: 20px;
}

p {
    font-family: 'Fira Sans', sans-serif;
    font-size: 18px;
    line-height: 30px;
    font-weight: normal;
}

.textColourCostaRed {
    color: rgb(109, 31, 55);
}

.textColourWhite {
    color: rgb(255, 255, 255);
}

/* BUTTON */
/* red */
.costaBTN {
    background-color: rgb(109, 31, 55);
    color: rgb(255, 255, 255);
    border-radius: 25px;
}

/* white */
.costaBTN2 {
    background-color: rgb(255, 255, 255);
    color: rgb(109, 31, 55);
    border-radius: 25px;
}

.btnFlash {
    color: rgb(193, 31, 69);
    
}

/* Hero */
/* menu small screen */
#headerSmall {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: rgb(109, 31, 55);
}

.menuContainer {
    width: 100%;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
}

.menuCard {
    width:100%;
    height: 100%;
    align-self: center;
}

#headerSmall > div.menuContainer > div:nth-child(3) > button {
    position: relative;
    left: 50%;
}

/* background */
.waveBackground {
    width: 210%;
    height: 100%;
    position: absolute;
    top: 6%;
    left: 0%;
    z-index: -1;
}

/* heroUpperSection */
.heroUpperSection {
    width: 50%;
    height: 70%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
}

.heroUpperSection > button {
    width: auto;
}

/* FEATURES */
main {
    min-width: fit-content;
}

main > h2 {
    font-weight: 600;
    font-size:large;
}

main > div {
    overflow: hidden;
    display: grid;
    gap: 10px;
    
    justify-content: center;

}

.featureRed {
    background-color: rgb(109, 31, 55);
    margin: 0px;
    padding: 0px 0px 15px 0px;
    display: flex;
    flex-direction: column;
}

.featureRed > * {
    box-sizing: inherit;
    padding: 5px;
    margin: 0;
    width: 320px;
}

.featurePurple {
    background-color: rgb(54, 56, 77);
    margin: 0px;
    padding: 0px 0px 15px 0px;
    display: flex;
    flex-direction: column;
}

.featurePurple > * {
    box-sizing: inherit;
    padding: 5px;
    margin: 0;
    width: 320px;
}

.FeatureImage {
    padding: 0px;
    margin: 0px;
    background-size: cover;
}

.FeatureImage > img {
    width: 320px;
    height: 241px;
    padding: 0;
    margin: 0;
}

/* FOOTER BACKGROUND */
.background {
    background-color: rgb(109, 31, 55);
}

.background1 {
    background-color: rgb(181, 17, 68);
}

/* WEBSITE RESPONSIVE SIZE */
@media (max-width:1240px) {
    #costaLogo {
        width: 90px;
    }
}

@media (min-width:767px) {  
    .video {
        transform: translate(-50%, 0%) !important;
        width: auto !important;
        min-height: 60% !important;
        min-width: auto !important;
    }

    .waveBackground {
        width: 300%;
        height: 100%;
        position:absolute;
        top: 4%;
        left: -0%;
    }

    .buyTenImage {
        max-width: 500px !important;
        height: 300px !important;
    }

    main > div {
        overflow: hidden;
        display: grid;
        gap: 10px;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
    }

    main > h2 {
        font-size:xx-large;
    }

    .FeatureImage > img {
        height: 180px;
        width: 240px;
    }

    .featurePurple > * {
        width: 240px;
    }
    
    .featureRed > * {
        width: 240px;
    }
}

@media (min-width:985px) {  
    .video {
        transform: translate(-30%, 0%) !important;
        width: auto !important;
        min-height: 60% !important;
        min-width: auto !important;
    }

    .waveBackground {
        width: 100%;
        height: 100%;
        position:absolute;
        top: 4%;
        left: -0%;
    }

    .FeatureImage > img {
        height: 240px;
        width: 300px;
    }

    .featurePurple > * {
        width: 300px;
    }
    
    .featureRed > * {
        width: 300px;
    }
}

@media (min-width:1100px) {  
    .video {
        transform: translate(-20%, 0%) !important;
        width: auto !important;
        min-height: 60% !important;
        min-width: auto !important;
    }
}

@media (min-width:1190px) { 
    .waveBackground {
        width: 100%;
        height: 100%;
        position: absolute;
        top: -2%;
        left: -0%;
    }
}

@media (min-width:1200px) { 
    .FeatureImage > img {
        height: 260px;
        width: 360px;
    }

    .featurePurple > * {
        width: 360px;
    }
    
    .featureRed > * {
        width: 360px;
    }
}

@media (min-width:1290px) {  
    .video {
        transform: translate(0%, 0%) !important;
        width: auto !important;
        min-height: 60% !important;
        min-width: auto !important;
    }

    .buyTenImage {
        max-width: 600px !important;
        height: 400px !important;
    }
}

@media (min-width:1630px) {  
    .video {
        transform: translate(0%, 0%) !important;
        width: auto !important;
        min-height: 60% !important;
        min-width: 100% !important;
    }
}

/* MENU ANIMATION */
.menuHide {
    transform:scaleX(50%);
    transform:translate(-50%);
    transform:scaleX(0%);
}
