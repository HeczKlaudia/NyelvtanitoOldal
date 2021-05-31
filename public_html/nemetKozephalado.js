var szovegJSON = '[{"kerdes": "Damit der Kuchen gelingt, darfst du nicht vergessen, eine minimale ... Muskatnuss hineinzustreuen. - Muskatnuss? Bist du dir sicher?","valasz1": "Menge von","valasz2": "Käufer von","valasz3": "Hilfe bei"},{"kerdes": "Die ... Person hat Anzeige erstattet, deshalb wird es zu einer Gerichtsverhandlung kommen.","valasz2": "belästigte","valasz1": "belästigt","valasz3": "belästigen"},{"kerdes": "Kannst du ... Englisch sprechen oder beherrschst du nur deine Muttersprache?","valasz1": "auch","valasz2": "doch","valasz3": "besonders"},{"kerdes": "Wenn Rosa eine Telefonnummer wissen will, erkundigt sie sich ... der Telefonauskunft.","valasz1": "bei","valasz2": "über","valasz3": "zu"},{"kerdes": "Frau Müller schämt sich ... den Arbeitskollegen, da sie einen Fleck auf der Bluse hat.","valasz1": "vor","valasz2": "für","valasz3": "bei"},{"kerdes": "Bis zum Tod des Malers blieben die Werke ... .","valasz1": "unverkäuflich","valasz2": "averkäuflich","valasz3": "ilverkäuflich"},{"kerdes": "Bitte finden Sie die richtige Antwort: beherrscht","valasz1": "unbeherrscht","valasz2": "missbeherrscht","valasz3": "disheberrscht"},{"kerdes": "Lass dich doch nicht immer so von deinen Kindern provozieren! ... ausgeglichener du wirkst, ... ruhiger werden sie auch. Glaub mir das, ich spreche aus Erfahrung!","valasz1": "Je - desto","valasz2": "Entweder - oder","valasz3": "Weder - noch"},{"kerdes": "Laura, jetzt bist du schon ein so großes Mädchen. Da ... du sicher keinen Schnuller mehr.","valasz1": "brauchst","valasz2": "sollst","valasz3": "kannst"},{"kerdes": "Meine Mutter möchte, dass ich mich in Zukunft ... Heavy Metal- Konzerten fern halte.","valasz1": "von","valasz2": "auf","valasz3": "mit"}]';
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