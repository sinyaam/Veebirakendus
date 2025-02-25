let kellekord="x.png";
function klick(pilt){
    pilt.src=kellekord;


}
function pildiValik(pilt){
    kellekord=pilt.src
    document.getElementById("valitudPilt").src=kellekord;
}