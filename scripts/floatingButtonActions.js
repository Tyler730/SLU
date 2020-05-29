//Code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top

var floatingButton = document.getElementById("float");

window.onscroll = () => {displayFloatingButton()};


function displayFloatingButton() {
    if((document.body.scrollTop > 20) || (document.documentElement.scrollTop > 20)){
        floatingButton.style.display = "block";
    }
    else{
        floatingButton.style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}