
$(function () {
    arnyek();
    link();
});


function arnyek() {
    $(document).ready(function () {
        $("#szintek img").mouseover(function () {
            $(this).fadeOut('slow').fadeIn('slow');
        });
    });
}


function link() {
  $(document).ready(function () {
        $("#halado img").wrap($("<a>").attr("href", "mondatkiegeszitoNemet.html"));
        $("#kozephalado img").wrap($("<a>").attr("href", "nemetKozephalado.html"));
        $("#kezdo img").wrap($("<a>").attr("href", "nemetMemoriaKezdo.html"));
$("#szotarkep img").wrap($("<a>").attr("href", "szotar.html"));
       

    });
}
