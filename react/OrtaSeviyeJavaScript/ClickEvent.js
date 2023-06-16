//bu konunun anlatımı için index7.html sayfasını kullandık.

//click eventini yakalamak, önce butonu yakalamak lazım
const buton = document.querySelector("button");
//click eventini tetiklettiğinde çalışması için bir fonksiyon üretmeliyiz. Bu fonksiyonu ister dışarıda üretebiliriz ister click event çalıştığı anda üretebiliriz.
//eventini yakalacağımız butonun veya listenin AddEventListener metotuyla eventi yakalayabiliriz.
//bu metotun iilk parametresinde hangi eventi gerçekleştirmesini istediğimiz ikinci parametre ise bu event gerçekleştiğinde hangi fonksiyon çalışacak onu yazarız.
buton.addEventListener("click",function (){
    console.log("butona tiklandi.");
});


//bir checkbox koyduk amacımız chechbox seçildiği zaman buton tıklanabilir olsun onun haricinde butona tıklanmasın
const input = document.querySelector("input");
input.addEventListener("click", ()=>{
    //checkboxın tıklanıp tıklanmadığını bize bildirir checked tıklandığında true verir tekrar tıklamayı kaldırdığımda false verir
    console.log(input.checked);
    //disabled özelliği ise butonun tıklanabilirliği kapalıysa yani disabled özelliği varsa true verir.
    console.log(buton.disabled);
    if(input.checked){
        buton.disabled = false;
    }
    else{
        buton.disabled = true;
    }
});

//li etiketleri için tıklanma özelliğini inceleyelim
//bu lilerin üzerine tıkladığımda üzerini çizmesini istiyorum tekrar tıkladığımda açsın
const li = document.querySelectorAll("li");
li.forEach(kurs => {
    //hangisine neye tıkladık o yüzden e diye bir parametre alamalı
    kurs.addEventListener("click",(e) => {
        //target ise hangi li ye tıklandığını verir direkt etiket verir yani
        console.log(e.target); 
        //veya li etiketlerini yakalamak için direkt böyle de yapabilirdik
        console.log(kurs);
        //tıklanılan elemana üzerini çizebilmem için textDecoration stilini vermem gerekir
        e.target.style.textDecoration = "line-through";
    });
});
