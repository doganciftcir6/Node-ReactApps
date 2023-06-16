//aşağıdaki kullandımda documen.ready işi yapıyor. $(function(){} kullanımı. Yani client sayfası tamamen yüklendiğinde anlamı var.
//slideToggle() aşağı ve yukarı animasyon şeklinde açılıp kapanmasını sağlıyor.
$(function(){
    $("button").click(function(){
        $("p").slideToggle();
    })
})

//Bir veya birden fazla eventi içerisinde kullanmayı sağlıyor. On() eventi.
//bir event için kullanılma hali
$(function(){
    $("p").on("click",function(){
        $(this).hide();
    })
})
//birden fazla event için kullanılma hali
//mouseenter ile mouse üzerine geldiğinde çalış.
//mouseleave ile mouse üzerinden ayrıldığında çalışır.
$(function(){
    $("p").on({
        mouseenter:function(){
            $(this).css("background-color","green");
        },
        mouseleave:function(){
            $(this).css("background-color","yellow");
        },
        click:function(){
            $(this).css("background-color","red");
        }
    })
})