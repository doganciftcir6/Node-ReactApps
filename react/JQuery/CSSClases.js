//html elementlerinin css özelliklerini değiştirebiliriz.
//toggle hem ekleme yapar hemde silme yapar.
 $(document).ready(function(){
    $("button").click(function(){
        $("h1,p").addClass("mavi");
        $("h1").removeClass("onemli");
        $("h1").toggleClass("onemli");
    });
 })