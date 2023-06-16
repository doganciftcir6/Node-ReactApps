//remove metotuyşa html elementlerini kaldırabiliriz.

$(document).readt(function(){
    $("button").click(function(){
        $("#div1").remove();
    })
});

$(document).readt(function(){
    $("button").click(function(){
        $("#div1").empty();
    })
})