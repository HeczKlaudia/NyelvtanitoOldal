$(function () {

    kiir();
    $("#kuld").click(ellenoriz);
    $("#valasz").on('keydown', function (e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            $("#kuld").click();
        }
    });
});

var szam;
var kerdesekszama = 1;
var helyesvalasz;
var rendszervalasz;
var szamok = [];
var n = 0;
var tesztVege = true;
var eredmeny = 0;

function kiir() {
    if (n < 10) {
        for (var i = 0; i < 10; i++) {
            szamok[i] = i;
        }
        szamok.sort(function (a, b) {
            return Math.random() - 0.5;
        });


        szam = szamok[0];

//    console.log(szam);
        $("#kerdes").text(kerdesek[n].kerdes);


    } else {
        $("#kerdes").text("Gratulálok! Sikeresen elvégezted a tesztet! Az eredményed: " + eredmeny / 10 + "%");
        tesztVege = false;
    }
}

function ellenoriz() {

    if (tesztVege) {
        if ($("#valasz").val().toString().toLowerCase() === kerdesek[n].valasz) {
            helyesvalasz = true;
            rendszervalasz = "Helyes";
            $("aside ul").append("<li>A(z) " + kerdesekszama + ". kérdésre a válasz: " + rendszervalasz + "</li>");
            eredmeny++;
        } else {
            helyesvalasz = false;
            rendszervalasz = "Helytelen";
            $("aside ul").append("<li>A(z) " + kerdesekszama + ". kérdésre a válasz: " + rendszervalasz + " | A helyes válasz: " + kerdesek[n].valasz + "</li>");
        }
        kerdesekszama++;
        n++;
        kiir();
    }
}


var kerdesek = [{
        kerdes: "Wenn die ______ weg ist, ist es ganz schön kalt.",
        valasz: "sonne"
    }, {
        kerdes: "Hast du meine E-Mail ______?",
        valasz: "bekommen"
    }, {
        kerdes: "Ist hier rechts vor ______?",
        valasz: "links"
    }, {
        kerdes: "Ich ______ in Budapest.",
        valasz: "wohne"
    }, {
        kerdes: "Er sucht zwar eine Arbeit, ______ er findet keine.",
        valasz: "aber"
    }, {
        kerdes: "Michael hat kein Geld ______ auch keine Arbeit.",
        valasz: "und"
    }, {
        kerdes: "Deutschland gefällt mir sehr gut. Aber meine Heimat und meine Freunde ______ mir sehr.",
        valasz: "fehlen"
    }, {
        kerdes: "Der Lehrer fragt den Schüler. Aber er ______ ihm nicht.",
        valasz: "antwortet"
    }, {
        kerdes: "Ingo will ______ einen Cent in der Tasche nach Spanien fahren.",
        valasz: "ohne"
    }, {
        kerdes: "______ wen ist dieses teure Geschenk?",
        valasz: "für"
    }];


