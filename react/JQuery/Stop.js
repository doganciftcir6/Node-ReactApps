//stop fonksiyonu animasyonları efektleri durdurmayı sağlıyor.
// $(selector).stop(hepsinidurdur,sonagit)

$(document).ready(function(){
    $("#buton").click(function(){
        $("#panel").slideDown(5000);
    })

    $("#durdur").click(function(){
        $("#panel").stop();
    })
})