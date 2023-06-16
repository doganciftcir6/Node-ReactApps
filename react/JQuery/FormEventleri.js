//submit eventi from submit olduğunda tetiklenir
$(document).ready(function(){
    $("form").submit(function(){
        alert("submit olayi gerceklesti");
    })
});

//change eventi bir ögenin degeri değiştirildiğinde çalışır ve yalnızca input textarea ve select elementleri için çalışır.
$(document).ready(function(){
    $("input").change(function(){
        alert("degisiklik olayi gerceklesti");
    })
});

//focus ve blur eventleri, focus bir öğe netlendiğinde yani inputa tıklandığında blur ise netlik kaldırıldığında yani inputun dışına tıklandığında çalışır.
$(document).ready(function(){
    $("input").focus(function(){
        alert("focus olayi gerceklesti");
    })
});
$(document).blur(function(){
    $("input").focus(function(){
        alert("blur olayi gerceklesti");
    })
});