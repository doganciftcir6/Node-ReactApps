//mouse bir kere tıklama eventi.
$(function(){
    $("p").click(function(){
        alert("Alert");
    })
})

//mouse ile iki kere tıklama eventi.
$(function(){
    $("p").dbclick(function(){
        alert("Alert");
    })
})

//sol mouse tuşu ile tıklanılıp bırakılmadığı zaman mousedown eventi çalışır
//after() sayfaya ekleme yapar. Divin içerisine ekleme yapacaktır burada.
$(function(){
    $("div").mousedown(function(){
        $(this).after("<p style='color:red';>Mouse Down</p>")
    })
})

//sol mouse tuşu ile tıklanılıp bırakıldığı zaman mouseup eventi çalışır
//after() sayfaya ekleme yapar. Divin içerisine ekleme yapacaktır burada.
$(function(){
    $("div").mouseup(function(){
        $(this).after("<p style='color:green';>Mouse Up</p>")
    })
})

//mouse öğenin üzerine geldiğinde mousenter eventi çalışır
$(function(){
    $("p").mouseenter(function(){
        $("p").css("background-color","yellow");
    })
})

//mouse öğenin üzerine gittiğinde mouseleave eventi çalışır
$(function(){
    $("p").mouseleave(function(){
        $("p").css("background-color","blue");
    })
})

//hover eventi fare işaretlisinin  seçilen elemanaların üzerine geldiğinde çalışacak 2 işlevi birlikte belirtir. mousenter ve mouseleave i birlikte kullanmak istiyorsak hover kullanabiliriz
//ilk function mouse üzerine geldiğinde mouseenter ikinci function ise mouseleave özelliğidir mouse üzerinden gittiğinde çalışır.
$(function(){
    $("p").hover(function(){
        $(this).css("background-color","yellow");
    },function(){
        $(this).css("background-color","green");
    })
})

//fare imleci seçilen elemanın içerisinde hareket ettiğinde orataya çıkan event mousemovedur.
$(function(){
    $(document).mousemove(function(event){
        $("span").text(event.pageX+"."+event.pageY);
    })
})