//seciciler html ögelerini secmemize ve değiştirmemize izin verir. $() ile başlarlar seçiciler.
$(document).ready(function(){
    //element seçicisi direkt etiket ile çağırıyoruz elemanı.
    $("button").click(function(){
        //click eventinde p etiketini hide yani gizeleme yapabiliriz. Hide css display:none verir elemente.
        $("p").hide();
    })

    //id seçicisi
    $("#btnTikla").click(function(){})

    //class seçicisi,
    $(".ikinciP").click(function(){})

    //bütün elemanları seç anlamına gelir *
    $("*").hide();

    //this o anki mevcut html elementini ifade eder 
    //bu çrmelte this #btnTikle idli elemanın içinde oluğu için o elemanı ifade eder.
    $("#btnTikla").click(function(){
        $(this).hide();
    })

    //classı ikincip olan p elementlerini seçmemizi sağlar.
    $("p.ikincip").hide();

    //p etiketlerinin ilkini seçmeyi sağlar.
    $("p:first").hide();

    //ilk ul etiketini ve ul etiketinin içindeki lilerin ilkini seçmeyi sağlar.
    $("ul li:first").hide();

    //ilk ul etiketinin ilk lisi ve ikinci ul nin ilk lisi silinmiş oluyor
    $("ul li:first-child").hide();

    //href özelliğine sahip her şeyi saklar.
    $("[href]").hide();

    //a etiketinin içerisindeki targeti blank olanları seçer.
    $("a[target='blank']").hide();
    //a etiketinin içerisindeki targeti blank olmayanları seçer.
    $("a[target!='blank']").hide();

    //button etiketlerini ve typei button olan input etiketlerini seçer.
    $(":button").hide();

    //tablodaki ilk tr even sonraki tr odd sonraki tr yine even oluyor böyle böyle gidiyor bu şekilde sadece even olan trleri seçiyoruz.
    $("tr:even").hide();
    $("tr:odd").hide();

    //css() fonksiyonu ile ilk attribute css özelliği ikincisi ise bunun değeri. Css ayarlaması yapar elemana.
    $("tr:even").css("background-color","green");
})