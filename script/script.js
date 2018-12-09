$("#our-team").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
});

$("#gallery-link").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
});


$(function(){
    $("#slides").slidesjs({
        width: 740,
        height: 528,
        pagination: {
            active: false,
            // [boolean] Create pagination items.
            // You cannot use your own pagination. Sorry.
            effect: "slide"
            // [string] Can be either "slide" or "fade".
        }


    });
});