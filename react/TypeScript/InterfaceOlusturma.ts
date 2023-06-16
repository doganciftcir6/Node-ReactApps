interface Pesonel{
    isim:string,
    soyisim:string,
    yas:number
}

function personelGetir(personel:Pesonel){
    console.log(`isim: ${personel.isim} - soyisim: ${personel.soyisim} * yas ${personel.yas}`);
}

let p = {
    isim:"Ali Osman",
    soyisim:"Hazir",
    yas:30
}

personelGetir(p);