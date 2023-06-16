function Topla(sayi1:number=10,sayi2?:number){
   if(sayi2){
    return sayi1+sayi2;
   }
   else{
    return sayi1;
   }
}

console.log(Topla(5,10));
