//elimizde birden fazla yapılacak birbiriyle bağlantılı işler var ise bunu bir döngüde yapabiliriz. Benzer işleri ard arda yazarak yapmak yerine uygulamayı bir döngüye alırız ve bu benzer işleri ortak bir şekilde yazarak gerçekleştiririz.

//konsola 0 dan 10 a kadar sayıları yazdırmak istiyorum mesela. Burada 100 e kadar yazdırmak istesem yapmam daha da zorlaşacaktı bu noktada döngüler devreye giriyor.
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

//ilk ; öncesinde ilk olarak kaç tane döndüreceğimi belirlediğim sayıyı tanımlıyorum ve ilk değerini burada atıyorum. ikinci bölümde ise bu sayının kaça kadar artacağını belirliyorum, üçüncü bölümde ise arttırma işlemini gerçekleştiriyorum.
for(let i=0; i<10; i++){
    console.log(i);
}
console.log("for döngüsünden çikildi.");

//for döngüsünde diziler içerisinde gezebiliyoruz.
let dizi = ["Ali", "Osman", "Esra"];
for (let i = 0; i < dizi.length; i++) {
    console.log(dizi[i]);
}

//ul ve li etiketlerinin içini doldururken for döngüsü çok kullanılır.
//aşağıdaki örnekte başta bir <ul> etiketi en sonda bunun kapanoş etikedi olan </ul> etiketi ve içinede ayrı ayrı <li></li> etiketleri içinde 3 adet 3 elemanımız yazılır.
let html = `<ul>`;
for (let i = 0; i < dizi.length; i++) {
    //dizi birleştirme işlemi yapıcaz.
    html = html.concat(`
    <li>
        ${dizi[i]}
    </li>
    `)
}
html = html.concat(`
    </ul>
`);
console.log(html);