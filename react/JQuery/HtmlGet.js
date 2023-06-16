
//text ile etiket içindeki değere ulaşırız yazıya, html ile ise direkt etiket olarak ulaşırız. val ile inputa yazılan yazıyı yakalayabiliyoruz.
$(document).ready(function(){
    $("#btn1").click(function(){
        alert("Text:"+$("#test").text());
    })
    $("#btn2").click(function(){
        alert("Text:"+$("#test").html());
    })
    $("#btn2").click(function(){
        alert("Deger:" + $("#test2").val);
    })
})