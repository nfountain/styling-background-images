// Global variables

var bttnFullScreen = document.getElementById('full-screen');
var bttnRepeatImg = document.getElementById('repeat');
var bodyStyle = document.body.style;
var isVisible = false;

var setFullScrn = function () {
    var loadImg = function () {
        bttnFullScreen.innerText = "Loading Image";
        isVisible = true;
        bodyStyle.background = "url('https://images.unsplash.com/photo-1548620848-d375c7919ea2?ixlib=rb-1.2.1&auto=format&fit=crop&w=7s50&q=80') no-repeat center center fixed";
        bodyStyle.backgroundSize = "cover";
        console.log(isVisible);
    }
    loadImg();
    setTimeout(function () {
        bttnFullScreen.innerText = "Full Screen Image";
    }, 500);
};

// Event Listeners

bttnFullScreen.addEventListener('click', setFullScrn);


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