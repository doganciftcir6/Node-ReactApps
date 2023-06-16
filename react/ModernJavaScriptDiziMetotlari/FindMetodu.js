const dizi = [12,45,78,95,42,75];
//find metodunu kullandığımızda belirli bir kritere göre dönderme işlemi yaptığımız.
//find metotu callback fonksiyon alır. Aynı foreach gibi tüm dixi elemanlarını gezer ve Parametre içindeki item bu dizi elemanlarını tek tek tutar.
const ilk = dizi.find((item) => {
    console.log(item);
    return item>30;
});

const ilk2 = dizi.filter((item) => {
    console.log(item);
    return item>30;
});

//filter ve find metotu aynı işlemi yapıyor gibi gözüksede farklı olarak find metotunda geriye bir dizi dönmez sadece 1 tane eleman döner. Find burada dizi içinde 30 dan büyük olan gördüğü ilk değeri döndürür sadece. Filter da ise geriye bir dizi döndü kaç tane 30 değerinden yüksek eleman varsa hepsi döner.
console.log(ilk);
console.log(ilk2);