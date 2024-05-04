var counter = 0;

var counts = [];

var total = 0;

$(".increment").on("click",function () {
    counter++;
    $(".count").text(counter);
    $('.increment').addClass("pressed");
    setTimeout(function () {
        $(".increment").removeClass("pressed");
    }, 300);
});


$(".save").on("click", function () {
    counts.push(counter)
    $(".num-count").append(counter + "  ");
    counter = 0;
    $(".count").text(counter);
    $('.save').addClass("pressed");
    setTimeout(function () {
        $(".save").removeClass("pressed");
    }, 300);
}
);

$(".total").on("click", function () {
    for (var index = 0; index < counts.length; index++) {total += counts[index];}

    $(".p-total").text("The total is: " + total);
    $('.total').addClass("pressed");
    setTimeout(function () {
        $(".total").removeClass("pressed");
    }, 300);
    counts = [];
    total = 0;
    $(".num-count").text("Counts: ");
}
);

$(".decrement").on("click",function () {
    if(counter > 0){
        counter--;
        $(".count").text(counter);
        $('.decrement').addClass("pressed");
        setTimeout(function () {
            $(".decrement").removeClass("pressed");
        }, 300);
    }
});
