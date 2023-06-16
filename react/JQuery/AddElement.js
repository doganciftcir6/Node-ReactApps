//yeni içerik eklemek için

//sona ekleme yapar
$(document).ready(function(){
    $("#btnText").click(function(){
        $("p").append("Eklenen Yazi");
    });
    $("#btnListe").click(function(){
        $("ol").append("<li>Eklenen Liste</>");
    });
})

//başa ekleme yapar
$(document).ready(function(){
    $("#btnText").click(function(){
        $("p").prepend("Eklenen Yazi");
    });
    $("#btnListe").click(function(){
        $("ol").prepend("<li>Eklenen Liste</>");
    });
});

//ol tagının öncesine li tagı eklemiş oldu before ile, after ile sonrasına eklemiş oluyor.
$(document).ready(function(){
    $("#btnText").click(function(){
        $("p").after("Eklenen Yazi");
    });
    $("#btnListe").click(function(){
        $("ol").before("<li>Eklenen Liste</>");
    });
})

//birden fazla ekleme işlemi
$(document).ready(function(){
    function appendText(){
        var txt1="<p>Text1</p>";
        var txt2=$("<p></p>").text("Text2");
        var txt3=document.createElement("p");
        txt3.innerHTML = "Text3";

        $("body").append(txt1,txt2,txt3);
    }
})