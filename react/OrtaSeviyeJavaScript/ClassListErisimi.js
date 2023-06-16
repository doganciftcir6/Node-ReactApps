//bu konunun anlatımı için index5.html sayfasını kullandık.

const baslik = document.querySelectorAll("h1");
//classlistleri görüntülemek için DOMTokenList türünde etiketin sahip olduğu class name bilgisi gelir.
console.log(baslik[0].classList);

//bu classliste ekleme yapabiliriz, parametre olarak yazdığımız etiketin claslarına app 'i ekler.
baslik[0].classList.add("app");

//bir class silmek istediğimizde ise
baslik[0].classList.remove("test");

//toggle metotu ise eğer kullandığımız class ekli değil ise ekler ekli ise de bu classı siler.
baslik[0].classList.toggle("deneme");


//örnek yapalım
const li = document.querySelectorAll("li");
li.forEach(item => {
    //böyle innerText ile log yaptığımızda safyada görünen listemizdeki etiketleri getirir.
    console.log(item.innerText);
    //ancak textContent ile log yaptığımızda görünmeyen display none olan elemanlar bile gelir. Görünmeyen display none özelliği olan textleride bu şekilde yakalayabiliyoruz.
    console.log(item.textContent);

    //li elemanlarının içerisinde udemy geçen elemanlarının classına ekleme yapalım mesela.
    if(item.textContent.includes("udemy")){
        item.classList.add("udemy");
    }
    else{
        item.classList.add("youtube");
    }
});