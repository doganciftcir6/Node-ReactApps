//fade ile html öğelerini soluklaştırabilir veya tamamen görünmez yapabiliriz.

//fadeIn() elemanı görünür yapıyor. Yavaşlatabiliyoruz.
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(5000);
    });
});

//fadeOut() elemanı görünmez yapıyor. Yavaşlatabiliyoruz.
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(5000);
    });
});

//fadeToogle() ise bunların birleşmiş halidir görünüyor ise görünmez görünmüyor ise görünür yapar. Yavaşlatabiliyoruz.
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeToogle();
        $("#div2").fadeToogle("slow");
        $("#div3").fadeToogle(5000);
    });
});

//fadeTo() ise belli bir opacity sine kadar görünüp görünmediğini ayarlıyoruz.
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeTo("slow",0.5);
        $("#div2").fadeTo("slow",0.9);
        $("#div3").fadeTo("slow",0.1);
    });
});