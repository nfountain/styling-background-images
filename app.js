// Global variables

var bttnFullScreen = document.getElementById('full-screen');
var bttnRepeatImg = document.getElementById('repeat');
var bodyStyle = document.body.style;
var container = document.getElementById('container');
var header = document.getElementById('header');
var refSection = document.getElementById('reference');
var isVisible = false;

var setFullScrn = function () {
    var loadImg = function () {
        bttnFullScreen.innerText = "Loading Image";
        isVisible = true;
        header.style.backgroundImage = "none";
        refSection.style.backgroundImage = "none";
        bodyStyle.background = "url('images/andreea-popa-1327283-unsplash.jpg') no-repeat center center fixed";
        bodyStyle.backgroundSize = "cover";
        console.log(isVisible);
    }
    loadImg();
    setTimeout(function () {
        bttnFullScreen.innerText = "Full Screen Image";
    }, 500);
};

var setRepeatImg = function () {
    var loadImg = function () {
        bttnRepeatImg.innerText = "Loading Image";
        isVisible = true;
        header.style.backgroundImage = "none";
        refSection.style.backgroundImage = "none";
        bodyStyle.backgroundImage = "url('images/tree-736877_1280.jpg')";
        bodyStyle.backgroundSize = "300px auto";
        bodyStyle.backgroundRepeat = "repeat";
        console.log(isVisible);
    }
    loadImg();
    setTimeout(function () {
        bttnRepeatImg.innerText = "Repeating Image";
    }, 500);
    container.style.backgroundColor = "rgba(214, 213, 179, 0.9)";
};

// Event Listeners

bttnFullScreen.addEventListener('click', setFullScrn);
bttnRepeatImg.addEventListener('click', setRepeatImg);

/*
TODO: change function of button to hide the image, as well. (And change the setTimeout bttnFullScreen.innerText = "Full Screen Image" to say "Hide Image".)
TODO: Turn button function into a factory object and create a new object for each button, passing the parameters of the image/styling
// Return to default attempt
var clickToHide = function () {
    bttnFullScreen.innerText = "Full Screen Image";
    document.body.style.backgroundImage = "none";
    isVisible = false;
}
// FACTORY FUNCTION ATTEMPT
var changeBackgroundImg = {};
changeBackgroundImg.body = body;
changeBackgroundImg.style = body.style('background-color: purple');
changeBackgroundImg.showBackgroundImg = function () {
    body.style.backgroundImage('none');
    isVisible = false;
    this.button.innerText = "";
}
changeBackgroundImg.hideBackgroundImg = function () {
    body.style.backgroundImage('none');
    isVisible = false;
    this.button.innerText = "";
}
*/