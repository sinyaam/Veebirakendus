function lugemine() {
    document.getElementById("vastus").innerHTML =
        "Tere hommikust, " +
        document.getElementById("nimi").value+
        " "+document.getElementById("pnimi").value;
}
function lugemine2() {
    let nimi = document.getElementById("nimi").value;
    let pnimi = document.getElementById("pnimi").value;
    let vastus = document.getElementById("vastus");
    let varv = document.getElementById("varv");
    let mees =document.getElementById("mees");
    let naine=document.getElementById("naine");
    let paev= document.getElementById("synnipaev").value;
    let GBRAM=document.getElementById("GBRAM").value;
    let email=document.getElementById("email").value;
    let tel=document.getElementById("tel").value;
    let url=document.getElementById("url").value;
    let pilt=document.getElementById("pilt");

    if (mees.checked) {
        vastus.innerHTML ="Tere hommikust, mees "+nimi+" "+pnimi+"!"+
        " Sinu sünnipäev on "+paev+"<br>GB RAM-i teil on:"+GBRAM+"<br>teil email on:"
            +email+"<br>teil tel number on:"+tel+"<br>url, mille kirjutasid:"+url;
        vastus.style.color =varv.value;
        pilt.src="mees.png";

    }
    else if (naine.checked) {
        vastus.innerHTML ="Tere hommikust, naine "+nimi+" "+pnimi+"!"+
        " Sinu sünnipäev on "+paev+"<br>GB RAM-i teil on:"+GBRAM+"<br>teil email on:"
            +email+"<br>teil tel number on:"+tel+"<br>url, mille kirjutasid:"+url;
        vastus.style.color =varv.value;
        pilt.src="naine.png";
    }
    else {
        vastus.innerHTML ="täitke andmed"
    }
}
function selectVAlik(){
    let vastus2=document.getElementById("vastus2");
    let linn=document.getElementById("linn");

    vastus2.innerHTML ="Sinu linn -"+linn.value;
    vastus2.style.backgroundColor ="lightgreen";
}
function checkboxValik(){

    let vastus3=document.getElementById("vastus3");
    let sport=document.getElementById("sport");
    let joonistamine=document.getElementById("joonistamine");
    let muusika=document.getElementById("muusika");
    let reisida=document.getElementById("reisida");
    let kaljuronimine=document.getElementById("kaljuronimine");
    let hobby=""
    if (sport.checked) {
        hobby+=sport.value+", ";
    }
    if (joonistamine.checked) {
        hobby+=joonistamine.value+", ";
    }
    if (muusika.checked) {
        hobby+=muusika.value+", ";
    }
    if (reisida.checked) {
        hobby += reisida.value + ", ";
    }
    if (kaljuronimine.checked) {
            hobby+=kaljuronimine.value+", ";

    }
    vastus3.innerHTML ="sinu hobby -"+hobby;
}