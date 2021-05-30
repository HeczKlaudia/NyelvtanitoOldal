var szovegJSON = '[{"kerdes":"I bought a present ... my father.","valasz1":"for","valasz2":"instead","valasz3":"to"},{"kerdes":"French people usually speak ... than English people.","valasz2":"faster","valasz1":"more fast","valasz3":"more fastly"},{"kerdes":"I told John how to get to my place but perhaps I ... him a map.","valasz1":"should have given","valasz2":"must have given","valasz3":"ought to give"},{"kerdes":"I would like ... it again.","valasz1":"you to read","valasz2":"you reading","valasz3":"you read"},{"kerdes":"I haven \'t got a chair ... .","valasz1":"to sit on","valasz2":"for to sit on","valasz3":"for sitting in"},{"kerdes":"Please ask ... and see me.","valasz1":"Bill to come","valasz2":"Bill come","valasz3":"Bill coming"},{"kerdes":"Don \'t you remember that we ... to the cinema tonight? – asked my friend.","valasz1":"are going","valasz2":"would go","valasz3":"go"},{"kerdes":"He couldn \'t help ... that his wife was worried.","valasz1":"noticing","valasz2":"notice","valasz3":"to notice"},{"kerdes":"By the time we get there, the film ... .","valasz1":"will have started","valasz2":"will start","valasz3":"has started"},{"kerdes":"I was tired because I ... hard for several hours.","valasz1":"had been working","valasz2":"have been working","valasz3":"have worked"}]'

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
//console.log(tomb);

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
        document.querySelector("#kerdesek").innerHTML = "Gratulálok! Mind a 10 kérdést végigcsináltad!";
        $("#valaszok").text("A pontszámod: " + pontok);
    }
}
var pontok = 0;
function ellenorzes() {
    if (kor < szovegbolObjektum.length) {
        console.log(this.id);
        if ($(this).text() === szovegbolObjektum[kor].valasz1) {
            pontok++;
            $("#valaszok").text("Helyes a válasz");
            $(this).addClass("joValaszSzinezes");
            for (var i = 0; i < 3; i++) {
                $("#szavak button").eq(i).addClass("joValaszTobbi");
            }
        } else {
            $("#valaszok").text("Rossz a válasz");
            $(this).addClass("rosszValaszSzinezes");
            for (var i = 0; i < 3; i++) {
                $("#szavak button").eq(i).addClass("joValaszTobbi");
                $("#valaszok1").addClass("joValaszSzinezes");
            }
        }
    } else {
            document.querySelector("#kerdesek").innerHTML = "Gratulálok! Mind a 10 kérdést végigcsináltad!";
    }
}