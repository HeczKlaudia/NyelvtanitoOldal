var szovegJSON = '[{"kerdes":"My name ... Klaudia","valasz1":"is","valasz2":"are","valasz3":"bla"},{"kerdes":"Ich ... dich","valasz1":"liebe","valasz2":"komme","valasz3":"spreche"},{"kerdes":"Was ... das","valasz1":"are","valasz2":"ist","valasz3":"du"},{"kerdes":"Was ... das","valasz1":"are","valasz2":"ist","valasz3":"du"},{"kerdes":"Was ... das","valasz1":"are","valasz2":"ist","valasz3":"du"},{"kerdes":"Was ... das","valasz1":"are","valasz2":"ist","valasz3":"du"}]';
var szovegbolObjektum = JSON.parse(szovegJSON);

$(function () {
    kiirKerdesek();

    for (var i = 0; i < 3; i++) {
        $("#szavak button").eq(i).on("click", ellenorzes);
    }

    $("#jobb").on("click", kiirKerdesek);

});

var kor = -1;
var tomb = [];
tomb.push("#valaszok1", "#valaszok2", "#valaszok3");
console.log(tomb);

function kiirKerdesek() {
    if (kor < szovegbolObjektum.length-1) {
        try {
            for (var i = 0; i < tomb.length; i++) {
                $(tomb[i]).removeClass("joValaszSzinezes");
                $(tomb[i]).removeClass("rosszValaszSzinezes");
                for (var j = 0; j < 3; j++) {
                    $("#szavak button").eq(j).removeClass("joValaszTobbi");
                }
            }
        } catch (e) {

        }
        ;

        kor++;
        document.querySelector("#kerdesek").innerHTML = szovegbolObjektum[kor].kerdes;

        tomb.sort(function (a, b) {
            return Math.random() - 0.5;
        });

        document.querySelector(tomb[0]).innerHTML = szovegbolObjektum[kor].valasz1;
        document.querySelector(tomb[1]).innerHTML = szovegbolObjektum[kor].valasz2;
        document.querySelector(tomb[2]).innerHTML = szovegbolObjektum[kor].valasz3;

    } else {
        document.querySelector("#kerdesek").innerHTML = "VÉGE A JÁTÉKNAK!";
    }
}

function ellenorzes() {
    if (kor < szovegbolObjektum.length) {
        console.log(this.id);
        if ($(this).text() === szovegbolObjektum[kor].valasz1) {
            $("#valaszok").text("Helyes a válasz");
            $(this).addClass("joValaszSzinezes");
            for (var i = 0; i < 3; i++) {
                $("#szavak button").eq(i).addClass("joValaszTobbi");
            }
        } else {
            $("#valaszok").text("Rossz a válasz");
            $(this).addClass("rosszValaszSzinezes");
        }
    } else {
            document.querySelector("#kerdesek").innerHTML = "VÉGE A JÁTÉKNAK!";
    }

}