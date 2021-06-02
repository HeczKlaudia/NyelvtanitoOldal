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
        $("#kerdes").text("Gratulálok! Sikeresen elvégezted a tesztet! Az eredményed: " + eredmeny/10 + "%");
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
            $("aside ul").append("<li>A(z) " + kerdesekszama + ". kérdésre a válasz: " + rendszervalasz + " | A helyes válasz: " + kerdesek[n].valasz +"</li>");
        }
        kerdesekszama++;
        n++;
        kiir();
    }
}


var kerdesek = [{
        kerdes: "The tiger is ______. Don't get close to it. It can hurt you.",
        valasz: "dangerous"
    }, {
        kerdes: "When the sun set, the field became ______.",
        valasz: "dark"
    }, {
        kerdes: "We were driving east, but we needed to go the opposite way. So, we turned around and drove ______.",
        valasz: "west"
    }, {
        kerdes: "I read some ______ news this morning: there was an earthquake in China yesterday.",
        valasz: "bad"
    }, {
        kerdes: "After waking up with a fever and a headache, I knew I must be ______.",
        valasz: "sick"
    }, {
        kerdes: "Mom wanted to be ______, so she gave us each the same amount of candy.",
        valasz: "fair"
    }, {
        kerdes: "Although there were many boys in the art classroom, there was not a single ______.",
        valasz: "girl"
    }, {
        kerdes: "Someone who is twenty-one years old is a(n) ______.",
        valasz: "adult"
    }, {
        kerdes: "A(n) ______ is an insect that can lift objects that are many times its own weight, then carry them a long way.",
        valasz: "ant"
    }, {
        kerdes: "When you ______ something, you get money in exchange for it.",
        valasz: "sell"
    }];


