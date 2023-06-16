//dom elementlerine set işlemi yapıcaz. 
$(document).ready(function(){
    $("#btn1").click(function(){
        $("#test1").text("set edilen deger");
    });
    $("#btn2").click(function(){
        $("#test2").html("<b>set edilen deger</b>");
    });
    $("#btn3").click(function(){
        $("#test3").val("Ali Osman");
    });
    $("#btn4").click(function(){
        $("#test3").attr("href","www.google.com");
    });
    $("#btn4").click(function(){
        $("#test3").attr({
            "href":"link1",
            "title":"yenititle"
        });
    });
})