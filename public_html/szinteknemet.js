
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
//        $("#halado img").wrap($("<a>").attr("href", "mondatkiegeszito.html"));
        $("#kozephalado img").wrap($("<a>").attr("href", "nemetKozephalado.html"));
//        $("#kezdo img").wrap($("<a>").attr("href", "kezdoMemoria.html"));
       

    });
}
