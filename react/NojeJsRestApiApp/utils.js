// herhangi bir yere bağlı olmayan yardımcı fonskyiyonlarımı burda yazıcam

//insert işlemi yapıldığında yeni kaydı dbmiz olmadığı için db olarak kullandığımız json dsoyasına yazdırmalıyız.
const fs = require("fs");
const { resolve } = require("path");
async function DosyayaYaz(dosyaAd,icerik){
    fs.writeFileSync(dosyaAd,JSON.stringify(icerik),"utf-8",(err) => {
        if(err){
            console.log(err);
        }
    });
}

//postun datasını getiren alan bir fonksiyon Bunun sayesinde post işleminde postmande body e girilen veriyi yakalayacağız.
async function GetPostData(req){
    return new Promise((resolve,reject) => {
        try {
            let body = "";
            //data eventi yakalandığında çalışsın. Chunk şeklinde bodyin parametresini yakalıcaz.
            req.on("data",(chunk) => {
                body += chunk.toString();
            });
            //işlemin bittiği anı end eventi ile yaklıcaz.
            req.on("end",() => {
                resolve(body);
            });
        } catch (error) {
            reject(error);
        }
    }) ;
}

module.exports = {
    DosyayaYaz,
    GetPostData
}