//bu konunun anlatımı için index9.html sayfasını kullandık.

//önceki derste ul etiketi içine yeni bir li eklemeyi ve li nin üstüne tıkladığında li yi silmeyi göstermiştik ancak yeni bir li oluşturunca ve üstüne tıklayınca silinmediğini farkettik. Bunun için ul ve li click eventlerinin farkını bilmemiz gerekiyor.
//lilere tıkladığım zaman lilerin silinmesini sağlayalım

//yeni li eklendiğinde sayfanın temel yapısı bu yeni li yi göremiyor o yüzden silme işlemi çalışmıyor bu nedenle bu silme işlemini li eventinde değil ul eventinde yapmak lazım.

//UL nin click eventi
//böylece yeni eklenen liyide silebiliyoruz.
const ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
    console.log("UL tiklandi");
    console.log(e);
    if(e.target.tagName === "LI"){
        e.target.remove();
    }
});

//LI nin click eventi
// const list = document.querySelectorAll("li");
// list.forEach(item => {
//     item.addEventListener("click",(e) => {
//         e.target.remove();
//         console.log("LI tiklandi");
//     });
// });
//LI TIKLANDI UL TIKLANDI yani önce liyi tıklıyor sonra ul yi tıklıyor.

//yeni li ekleme
const button = document.querySelector("button");
button.addEventListener("click", function(){
    // ul.innerHTML += "<li>Yeni Kurs</li>";

    //böyle de yapabiliriz, document.CreateElement kullanarak yeni liyi oluşturabiliriz
    const li = document.createElement("li");
    li.textContent = "yeni kurs";
    console.log(li);
    //liyi oluşturduk şimdi bu yeni oluşan li yi append metotu ile ul etkiket içine atabiliriz. Append sona ekleme yapar. Append yerine prepend kullansaydık bu sefer en başa ekleme yapardı.
    ul.append(li);
});