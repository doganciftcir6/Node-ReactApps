//burada + işareti toplama işareti yapacak ve 11 yazılacak
let degisken = 10;
console.log(degisken+1);

//degisken2 string olduğundan dolayı birleştirme yapılacak ve 101 yazılacak.
let degisken2 = "10";
console.log(degisken+1);

//bu noktada toplama işlemi yapmak istersem degisken2 stringini numbera dönüştürmem gerekir
yeniDegisken = Number(degisken2);
//artık toplama işlemi yapılır.
console.log(yeniDegisken+1);

//bu noktoda NoN ifadesi alacağız merhaba bir number olmadığından numbera dönüştürme işlemi yapılamayacak.
let tip = "merhaba";
tip = Number(tip);

//burada artık say numberı stringe dönüştürülür.
//degiskenin tipini almak için typeof kullanılır. Say değişkeninin tipini verecek.
let say = 30;
say = String(say);
console.log(typeof say);

//dönüştürme esnasında değer 0 olarak gelirse false olur 0 haricinde herhangi bir şey geldiğinde true olarak döüştürülür. 100 olduğu için true olarak dönüşüm yapılacaktır.
let bit = Boolean(100);
console.log(bit);

//stringte ise dönüştürülecek değerde tırnaklar içi doluysa yani herhangi bir ifade ile dolusa string boş değilse trueya dönüştürülür ancak string boşsa tırnakların içi boşsa değer false a dönüştürülür.
bit = Boolean("100");
console.log(bit);