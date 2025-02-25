let kellekord="x.png";
let lopp=false;

function klick(pilt){
    pilt.src=kellekord;
    if(vyidukontroll()){
        alert("Sa võtsid!");
        lopp=true;
    }

    if(kellekord=="x.png"){
        kellekord="o.png";
    } else{
        kellekord="x.png";
    }
}
//kontroll kes võidab
function vyidukontroll(){
    if(kontrollsisu(1,2,3, kellekord)){return true;}
    if(kontrollsisu(4,5,6, kellekord)){return true;}
    if(kontrollsisu(7,8,9, kellekord)){return true;}
    if(kontrollsisu(1,4,7, kellekord)){return true;}
    if(kontrollsisu(2,5,8, kellekord)){return true;}
    if(kontrollsisu(3,6,9, kellekord)){return true;}
    if(kontrollsisu(1,5,9, kellekord)){return true;}
    if(kontrollsisu(3,5,7, kellekord)){return true;}
    return false;
}
//määrab failinimi
function failinimi(nr){

    let fnimi=document.getElementById("p"+nr).src;
    fnimi=fnimi.split("/").pop();
    return fnimi;
}
function kontrollsisu(a,b,c, sisu){
    //a,b,c - номера картинок  sisu - адрес нужной картинки

    sisu=sisu.split("/").pop();
    //pop() удаляет из пути к файлу все лишние элементы
    if(failinimi(a)==sisu && failinimi(b)==sisu &&
        failinimi(c)==sisu){
        return true;
    } else {
        return false;
    }
}

