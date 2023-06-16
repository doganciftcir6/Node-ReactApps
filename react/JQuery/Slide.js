//belli bir alanı aşağı ya da yukarı kaydırır.

//slidedown aşağı kaydırır
$(document).ready(function(){
    $("#button").click(function(){
        $("#panel").slideDown("slow");
    })
});
//slideup yukarı kaydırır
$(document).ready(function(){
    $("#button").click(function(){
        $("#panel").slideUp("slow");
    })
});
//slideToggle hem aşağı hem yukarı kaydırır.
$(document).ready(function(){
    $("#button").click(function(){
        $("#panel").slideToggle("slow");
    })
});