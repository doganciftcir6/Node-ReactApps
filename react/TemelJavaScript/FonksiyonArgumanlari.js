//argüman ile parametreleri tanımlarsak fonksiyonu çağırırken hangi parametreyi nasıl kullancağımızı net bir şekilde ayıralım
const ArgumanFonk = function({sayi:sayi=10, yazi:yazi="ali"}){
    console.log(`sayi: ${sayi} ve yazi: ${yazi}`);
};

//artık burada argümanlar sayesinde hangi parametreye hangi değeri atamak istediğimi kendim fonksiyonu çağırırken ayarlayabiliyorum. Normal 2 parametreli bir fonksiyonda örneğin ilk parametrede sayi varsa mecburen benim önce o sayi parametresini vermem gerekiyor ikinci parametreyi önce atayamıyorum sıralı bir işlem söz konusu. Argümanda iste parametreleri istediğim gibi verebiliyorum. Bu sayede sayi parametresi default değerini alır. Ancak normal argüman olmayan parametrede bu verdiğim yazı parametresi fonksiyon tanımı sırasında önce sayi parametresi olduğu için onun yerine sayılır ve yazi parametresi default değerini alırdı.
ArgumanFonk({yazi:"Ahmet"})