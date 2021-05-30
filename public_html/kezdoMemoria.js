var kep1 = {
    eleresiUt: "kepekMemoria/1.jpg",
    alt: "alma",
    class: "kep"
};
var kep2 = {
    eleresiUt: "kepekMemoria/13.png",
    alt: "fiú",
    class: "kep"
};
var kep3 = {
    eleresiUt: "kepekMemoria/3.png",
    alt: "könyv",
    class: "kep"
};
var kep4 = {
    eleresiUt: "kepekMemoria/4.png",
    alt: "ceruza",
    class: "kep"
};
var kep5 = {
    eleresiUt: "kepekMemoria/5.jpg",
    alt: "csillag",
    class: "kep"
};
var kep6 = {
    eleresiUt: "kepekMemoria/6.jpg",
    alt: "nap"
    , class: "kep"
};

var kep7 = {
    eleresiUt: "kepekMemoria/7.png",
    alt: "alma",
    class: "szo"
};
var kep8 = {
    eleresiUt: "kepekMemoria/25.png",
    alt: "fiú",
    class: "szo"
};
var kep9 = {
    eleresiUt: "kepekMemoria/9.png",
    alt: "könyv",
    class: "szo"
};
var kep10 = {
    eleresiUt: "kepekMemoria/10.png",
    alt: "ceruza",
    class: "szo"
};
var kep11 = {
    eleresiUt: "kepekMemoria/11.png",
    alt: "csillag",
    class: "szo"
};
var kep12 = {
    eleresiUt: "kepekMemoria/12.jpg",
    alt: "nap",
    class: "szo"
};

var kep17 = {
    eleresiUt: "kepekMemoria/hatlap.png",
    alt: "hatlap"
};


var kepek = [kep1, kep2, kep3, kep4, kep5, kep6, kep7, kep8, kep9, kep10, kep11, kep12];
var kulon = false;
var elso = true;
var megtalaltParok = 0;
var elozo;
var alap;
var probakSzama = 0;

$(function () {
    $('#könnyit').click(function () {
        alert("Ezzel a gombal a képek és a szöveg képek el külünölnek egymástól.Az első 6 kép a szóhoz tartozó képet ábrázolja az utána lévő 6 kép pedig a szavakat tartalmazza!");
        kulon = true;
        ujJatek();
    });
    $('#kever').click(ujJatek);
    ujJatek();

});
function ujJatek() {
    elso = true;
    probakSzama = 0;
    megtalaltParok = 0;
    $("#proba").text("Próbák száma: " + probakSzama);
    kever();
    kepekMegjelenitese();
    for (var i = 0; i < kepek.length; i++) {
        $("section img ").eq(i).attr("src", kep17.eleresiUt);
    }
    $("section img ").click(ellenoriz);

}
function kepekMegjelenitese() {
    $("section div").empty();
    for (var i = 0; i < kepek.length; i++) {
        var elem = '<img id="' + i + '">';
        $("section div").append(elem);
    }
    var kepElemTomb = $("section img");

    for (var i = 0; i < kepElemTomb.length; i++) {
        kepElemTomb.eq(i).attr("src", kepek[i].eleresiUt);
        kepElemTomb.eq(i).attr("alt", kepek[i].alt);
    }
    console.log(kepElemTomb);
}



function kever() {
    console.log(kepek);
    var tombKepek = [];
    var tombSzoveg = [];
    if (!kulon) {
        kepek.sort(function () {
            return 0.5 - Math.random();
        });
        console.log("if");
    } else {
        console.log("else");
        for (var i = 0; i < kepek.length; i++) {
            if (kepek[i].class.includes("szo")) {
                tombSzoveg.push(kepek[i]);
            } else {
                tombKepek.push(kepek[i]);
            }
        }

        tombKepek.sort(function () {
            return 0.5 - Math.random();
        });
        tombSzoveg.sort(function () {
            return 0.5 - Math.random();
        });
        console.log(tombKepek);
        console.log(tombSzoveg);
        var i = 0;
        for (var j = 0; j < tombKepek.length; j++) {
            kepek[i] = tombKepek[j];
            i++;
        }
        for (var j = 0; j < tombSzoveg.length; j++) {
            kepek[i] = tombSzoveg[j];
            i++;
        }

    }

}

function ellenoriz() {
    fordit($(this).attr("id"));
    console.log("ellenoriz");
    if (elso) {
        console.log(elso);
        if ($("section img").eq(elozo).attr("alt") === $("section img").eq(alap).attr("alt")) {
            console.log("ugyan az");
            $("section img").eq(elozo).css("border", "3px solid green");
            $("section img").eq(alap).css("border", "3px solid green");
            megtalaltParok++;
        } else {
            console.log("nem ugyan az");
            $("section img").eq(alap).css("border", "3px solid red");
            $("section img").eq(elozo).css("border", "3px solid red");
            setTimeout(
                    function idozetes() {
                        $("section img").eq(elozo).css("border", "2px solid grey");
                        $("section img").eq(alap).css("border", "2px solid grey");
                    }, 800);
            visszafordit(elozo, alap);
        }
        probakSzama++;
        $("#proba").text("Próbák száma: " + probakSzama);
        console.log(elozo, alap);
    }
    if (kepek.length / 2 <= megtalaltParok) {
        setTimeout(
                function idozetes() {
                    alert("Megtaláltad az össszes párt.Ügyes vagy!" + "Próbálkozásaid száma: " + probakSzama);
                }, 500);

    }
}
function fordit(id) {
    $("section img").eq(id).attr("src", kepek[id].eleresiUt);
    console.log(kepek[id]);
    $("section img").eq(id).unbind("click");
    if (elso) {
        elozo = id;
        elso = false;
    } else {
        elso = true;
        alap = id;

    }

}
function visszafordit(id1, id2) {
    console.log("fordul");
    setTimeout(
            function idozetes(id1, id2) {
                $("section img").eq(id1).attr("src", kep17.eleresiUt);
                $("section img").eq(id2).attr("src", kep17.eleresiUt);
                $("section img").eq(id1).click(ellenoriz);
                $("section img").eq(id2).click(ellenoriz);
            }, 800, id1, id2);

}
