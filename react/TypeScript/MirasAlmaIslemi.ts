class Personel{
    isim:string

    constructor(isim:string){
        this.isim = isim;
    }

    public IsYap(){
        console.log("is yapildi");
    }
}

class Yonetici extends Personel{
    constructor(yoneticiIsim:string) {
        super(yoneticiIsim)
    }
    public Yonet(){
        console.log("yonet");
    }
}

let y = new Yonetici("Ali");
y.IsYap();
y.Yonet();