
$(function () {
    arnyek();
    link();
});


function arnyek() {
    $(document).ready(function () {
        $("#nyelvvalaszto img").mouseover(function () {
            $(this).fadeOut('slow').fadeIn('slow');
        });
    });
}

function link() {
    $(document).ready(function () {
        $("#angol img").wrap($("<a>").attr("href", "angol.html"));
        $("#nemet img").wrap($("<a>").attr("href", "nemet.html"));

    });
}

