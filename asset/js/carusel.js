script type="text/javascript"
    // Call carousel manually
    $('#myCarouselCustom').carousel();
    $("#prevBtn").click(function () {
        $("#myCarouselCustom").carousel("prev");
    });
    // Go to the previous item
    $("#nextBtn").click(function () {
        $("#myCarouselCustom").carousel("next");
    });

script type="text/javascript"
    $('.carousel').carousel({
        interval: 4000,
        pause: false,
        wrap: false
    });
