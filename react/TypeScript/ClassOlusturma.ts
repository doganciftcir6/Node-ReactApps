class Kus{
    kusTip:string;
    ucabilme:boolean;

    //constr
    constructor(tip:string,ucabilme:boolean){
        this.kusTip=tip;
        this.ucabilme=ucabilme;
    }

    Uc(){
        if(this.ucabilme){
            console.log(`${this.kusTip} ucabilir`);
        }
        else{
            console.log(`${this.kusTip} ucamaz`);
        }
    }
}

let penguen = new Kus("Penguen",false);
penguen.Uc();
let serce = new Kus("Serce",true);
serce.Uc();