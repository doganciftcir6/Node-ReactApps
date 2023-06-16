//html elementlerinin csslerini değiştirebiliriz veya erişebiliriz
$(document).ready(function(){
    $("button").click(function(){
        alert("Arka plan rengi:"+$("p").css(`background-color`));
        $("p").css("backgorund-color","red");
    });
 })