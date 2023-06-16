//animate özel animasyonlar oluşturmamızı sağlar.
// $(selector).animate({params},hiz,geri donus);

$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({left:"250px",opacity:"0.5"});
    })
})