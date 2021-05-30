var szovegJSON = '[{"kerdes":"My name ... Klaudia","valasz1":"is","valasz2":"are","valasz3":"bla"},{"kerdes":"Ich ... dich","valasz1":"liebe","valasz2":"komme","valasz3":"spreche"},{"kerdes":"Was ... das","valasz1":"are","valasz2":"ist","valasz3":"du"}]';
var szovegbolObjektum = JSON.parse(szovegJSON);

$(function () {
    kiirKerdesek();
//    ellenorzes();
    leptetes();
});

function kiirKerdesek() {
    document.querySelector("#kerdesek").innerHTML = szovegbolObjektum[0].kerdes;
    
    document.querySelector("#valaszok1").innerHTML = szovegbolObjektum[0].valasz1;
    document.querySelector("#valaszok2").innerHTML += szovegbolObjektum[0].valasz2;
    document.querySelector("#valaszok3").innerHTML += szovegbolObjektum[0].valasz3;
    ellenorzes();
}

function ellenorzes() {
    for (var i = 0; i < max; i++) {
        
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
}

function leptetes() {
    $("#jobb")[0].addEventListener("click", kepLeptetesJobb);
    
}

function kepLeptetesJobb() {
    var j = "#valaszok" + this.id;
    for (var i = 0; i < szovegbolObjektum.length; i++) {
        document.querySelector("#kerdesek").innerHTML = szovegbolObjektum[i].kerdes;
        i++;
        console.log(j);
        $(j).attr("disabled", "enabled");
    }
//    for (var i = 0; i < szovegbolObjektum.length; i++) {
//        document.querySelector("#valaszok1").innerHTML = szovegbolObjektum[i].valasz1;
//        document.querySelector("#valaszok2").innerHTML = szovegbolObjektum[i].valasz2;
//        document.querySelector("#valaszok3").innerHTML = szovegbolObjektum[i].valasz3;
//        i++;
//    }
    $("#valaszok").empty();
    
//    for (var i = 0; i < szovegbolObjektum.length; i++) {
//    if(i>szovegbolObjektum.length-1) {
//         document.querySelector("#kerdesek").innerHTML = szovegbolObjektum[i].kerdes;
//     }
// }
}