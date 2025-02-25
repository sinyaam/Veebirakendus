function kustuta() {
    const pyhi = document.getElementById("pyhi");
    if (pyhi.getContext) {
        let p = pyhi.getContext("2d");
        p.clearRect(0, 0, 400, 300);
    }
}
function maja(){
    const pyhi = document.getElementById("pyhi");
    if (pyhi.getContext) {
        let t = pyhi.getContext("2d");
        t.fillStyle="red"
        t.fillRect(130, 115, 150, 130);

        t.beginPath();
        t.arc(209, 182 , 50 , 0 ,2 * Math.PI, true);
        t.strokeStyle="red";
        t.stroke()
        t.fillStyle="yellow"
        t.fill();

        t.beginPath();
        t.lineWidth = "1";
        t.moveTo(130, 115);
        t.lineTo(208, 15);
        t.lineTo(283, 115);
        t.lineTo(130, 115);
        t.strokeStyle  = "red";
        t.fillStyle = "black";
        t.fill();



}
}
function maja2(){
    const pyhi = document.getElementById("pyhi");
    if (pyhi.getContext) {
        let p = pyhi.getContext("2d");
        p.fillStyle="green"
        p.fillRect(1, 265, 398, 32);

        p.beginPath();
        p.arc(366, 22 , 20 , 0 ,2 * Math.PI, true);
        p.strokeStyle="yellow";
        p.stroke()
        p.fillStyle="yellow"
        p.fill();

        p.beginPath();
        p.lineWidth = "10";
        p.moveTo(310, 85);
        p.lineTo(326, 68);
        p.lineTo(342, 53);
        p.lineTo(310, 85);
        p.strokeStyle  = "red";
        p.fillStyle = "yellow";
        p.fill();




    }
}

