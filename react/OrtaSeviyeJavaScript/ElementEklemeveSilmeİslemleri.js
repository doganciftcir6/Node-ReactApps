//bu konunun anlatımı için index8.html sayfasını kullandık.

//butona erişelim
const button = document.querySelector("button");
//button.remove(); diyerek bu etiketi yok edebilirim.
    // button.remove();
//etiket ekleme işleminde ise butona tıklanıldığında ul etiketi içine yeni bir eleman ekleme işlemi yapıcaz
const ul = document.querySelector("ul");
button.addEventListener("click", function(){
    // ul.innerHTML += "<li>Yeni Kurs</li>";

    //böyle de yapabiliriz, document.CreateElement kullanarak yeni liyi oluşturabiliriz
    const li = document.createElement("li");
    li.textContent = "yeni kurs";
    console.log(li);
    //liyi oluşturduk şimdi bu yeni oluşan li yi append metotu ile ul etkiket içine atabiliriz. Append sona ekleme yapar. Append yerine prepend kullansaydık bu sefer en başa ekleme yapardı.
    ul.append(li);
});

//lilere tıkladığım zaman lilerin silinmesini sağlayalım
const list = document.querySelectorAll("li");
list.forEach(item => {
    item.addEventListener("click",(e) => {
        e.target.remove();
    });
});