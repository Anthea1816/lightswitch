let btnOff = document.getElementById('btn_off');
let btnOn = document.getElementById('btn_on');

btnOn.addEventListener("click", on );
btnOff.addEventListener("click", off);

function on(){
    document.getElementById('myImage').src = "light on.jpg";
}

function off (){
    document.getElementById('myImage').src = "off.jpg";
}
