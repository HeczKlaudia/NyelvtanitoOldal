var szovegJSON = '[{"kerdes":"My name ... Klaudia","valasz1":"is","valasz2":"are","valasz3":"bla"},{"kerdes":"Ich ... dich","valasz1":"liebe","valasz2":"komme","valasz3":"spreche"},{"kerdes":"Was ... das","valasz1":"are","valasz2":"ist","valasz3":"du"}]';
var szovegbolObjektum = JSON.parse(szovegJSON);

$(function () {
    kiirKerdesek();

    for (var i = 0; i < 3; i++) {
        $("#szavak button").eq(i).on("click", ellenorzes);
    }
    
    leptetes();
    $("#jobb").on("click", kiirKerdesek);
    
});

var kor = 0;

function kiirKerdesek() {    
    document.querySelector("#kerdesek").innerHTML = szovegbolObjektum[kor].kerdes;
    document.querySelector("#valaszok1").innerHTML = szovegbolObjektum[kor].valasz1;
    document.querySelector("#valaszok2").innerHTML = szovegbolObjektum[kor].valasz2;
    document.querySelector("#valaszok3").innerHTML = szovegbolObjektum[kor].valasz3;
    kor++;
}

function ellenorzes() {
    var ID = "#" + this.id;
    console.log(this.id);
    
    if ($(ID).text() === szovegbolObjektum[0].valasz1) {
        document.getElementById("valaszok").innerHTML = "Helyes a válasz";
        $("#valaszok2").attr("disabled", "disabled");
        $("#valaszok3").attr("disabled", "disabled");
        this.classList.add("joValaszSzinezes");
    } else {
        document.getElementById("valaszok").innerHTML = "Rossz a válasz";
        this.classList.add("rosszValaszSzinezes");
        $(ID).attr("disabled", "disabled");
    };
    
function leptetes() {
    
}



//    document.getElementById("valaszok1").onclick = function () {
//        document.getElementById("valaszok").innerHTML = "Helyes a válasz";
//        $("#valaszok2").attr("disabled", "disabled");
//        $("#valaszok3").attr("disabled", "disabled");
//    };



//    document.getElementById("valaszok2").onclick = function () {
//        document.getElementById("valaszok").innerHTML = "Rossz a válasz";
//        $("#valaszok2").attr("disabled", "disabled");
//    };
//    document.getElementById("valaszok3").onclick = function () {
//        document.getElementById("valaszok").innerHTML = "Rossz a válasz";
//        $("#valaszok3").attr("disabled", "disabled");
//    };

// }
}