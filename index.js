const Low = () => {
    document.getElementById('myImage').src='./bulb_off.gif';
    document.getElementById('html_text').innerHTML = "LOW!!"
}

const High = () => {
    document.getElementById('myImage').src='./bulbon.gif';
    document.getElementById('html_text').innerHTML = "HIGH!!";
}