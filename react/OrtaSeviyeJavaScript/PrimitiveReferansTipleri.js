//Primitive
/*
    -number
    -string
    -boolean
    -null
    -undefined

    belleğin stack alanında tutulur
*/



//Reference
/*
    -object
    -array
    -function
    -date

    belleğin heap alanında tutulur
    tuttuğu tipi referans olarak stack alanına gönderir
*/

//PRİMİTİVE VE REFERENCE TİPİN FARKI

//böyle bir durumda deger1 ve deger2 stack alanında oluşacak çünkü ikiside number değer tipi.  2 deger için stack alanında ayrı ayrı alanlar oluşur böylece deger1 in değişikliğinden deger2 nin haberi olmaz
let deger1 = 100;
let deger2 = deger1;
console.log(deger1,deger2);
//burada deger1 400 olmışkan deger2 hala 100 olarak kalacaktır. Stack alanı için durum böyle.
deger1 = 400;
console.log(deger1,deger2);

//heap alanı içinde obj1 nesnem oluştu ve içinde ali ve yas degeri bulunuyor. Ardından bu obje nesne benim stack alanıma refrans olarak aktarılıyor. Ardından obj2 için ben bunu obj1 den türettiğim için heap alanında ayrı olarak ikinci objem oluşmaz eğer ayrı bir nesne tanımlasaydım ikinci ayrı bir oluşum olurdu ancak bu durumda direkt olarak stack alanına obj2 nin referansı oluşur ve heap alanında bulunan obj1 stack alanında bulunan 2 referansa bağlı olur.
let obj1 = {isim:"Ali",yas:30};
let obj2 = obj1;
console.log(obj1,obj2);
//bu durumda heap alanında bulunan obj1 stack alanında bulunan obj1 ve obj2 referansına bağlı olduğu için isim alanı hem obj1 için değişecek hemde obj2 için değişecek. Karışmasın bu obj2 nin içine obj1 attığımız için böyle.
obj1.isim = "Osman";
console.log(obj1,obj2);

