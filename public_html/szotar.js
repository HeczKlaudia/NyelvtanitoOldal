
$(function () {
    hozzad();
    nyomtat();
});



function hozzad() { // az input fieldekből beírás során adja hozzá a táblázathoz

    $('#szotar').submit(function (event) {
        event.preventDefault();
        var $inputs = $('#szotar :input');
        var values = {};
        $inputs.each(function () {
            values[this.name] = $(this).val();
        });
        $('#megjelenites').append("<tr><td>" + values.magyar + "</td><td>" + values.angol + "</td><td>" + values.nemet + "</td><td></tr>"); //táblázat
        $("input[type=text], textarea").val("");
    });

}
function nyomtat() {
    $('#nyomtat').on('click', function () {
        $('#felvetel').css('visibility', 'hidden'); // eltűntetés, hogy ezt a részt ne mutassa nyomtatáskor
        $('footer').css('visibility', 'hidden'); // eltűntetés, hogy ezt a részt ne mutassa nyomtatáskor
        $('#szotaram').css('visibility', 'visible'); // ezt a részt mutassa nyomtatáskor
        window.print(); //nyomtatás felugró ablak
    });
}
   