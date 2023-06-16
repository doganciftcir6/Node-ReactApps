//hide saklama, show ise gösterme işlemi yapıyor.
//1000, 1 saniye şeklinde yavaşlamasını sağlayabiliyoruz. Milisaniye cinsinden.
$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide(1000);
    });
    $("#show").click(function(){
        $("p").show(5000);
    })
});

//hide ve show işlemlerini bir arada yapan eventimiz toggle oluyor. Bir kere tıklanınca gizler bir kere tıklanınca görünür element.
$(document).ready(function(){
    $("button").click(function(){
        $("p").toggle();
    });
});