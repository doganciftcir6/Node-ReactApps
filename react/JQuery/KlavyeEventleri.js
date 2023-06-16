
//keypress klavyeden normal bir tuşa basıldığında tetiklenir. ctrl alt shift gibi tuşları algılamaz.
var i = 0
$(document).ready(function(){
    $("input").keypress(function(){
        $("span").text(i+=1);
    })
})

//ctrl alt shift gibi tuşlarıda algılamak için keydown eventini kullanıyoruz. tuşa basıldığı anda tetiklenir.
$(document).ready(function(){
    $("input").keydown(function(){
        $("span").text(i+=1);
    })
})

//ctrl alt shift gibi tuşlarıda algılamak için keyup eventini kullanıyoruz. tuşa basılıp çekildiğinden sonra tetikleniyor.
$(document).ready(function(){
    $("input").keyup(function(){
        $("span").text(i+=1);
    })
})

//hangi kalvye ya da fare tuşunu basıldığını yakalamak için event.which kullanıyoruz. burda mousedown kullanırsak bu sefer mouse tuşlarını yakalarız.
$(document).ready(function(){
    $("input").keydown(function(event){
        $("p").html("key:" + event.which)
    })
})