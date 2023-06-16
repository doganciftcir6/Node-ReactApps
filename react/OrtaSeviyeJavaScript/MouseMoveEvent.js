//bu konunun anlatımı için index2.html sayfasını kullandık.

//öncelikle kullanmak istediğim elementi oluşturmam lazım
//mousemove eventi mouse hareketine göre tetiklenen bir eventtir ve herhangi bir nesne üzerinde çalışabilir.

//sadece bu kutunun sınırları içinde çalışacaktır event.
const kutu = document.querySelector(".kutu");
//tetiklendiğinde bilgilere erişebilmek için e parametresi alınır
kutu.addEventListener("mousemove",(e)=>{
    console.log(e);
    //offsetx ve offsety değeri mouseun div içindeki konumunun sayılarıdır. Bu noktaları div içerisinde yazdıralım. En sol üst köşede x ve y 0 dır.
    kutu.textContent = `kutu x noktasi ${e.offsetX} ve y noktasi ${e.offsetY}`;
});
