//bu konu anlatımı için veriler.json dosyasını kullanacağız

const TodoOlustur = (callback)=>{
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", ()=>{
        if(request.readyState == 4 && request.status == 200){
            //verileri jasona parse edebiliriz bu sayede verilere json halinde erişiriz.
            let veriler = JSON.parse(request.responseText);
            callback(veriler, undefined);
        }
        else if(request.readyState == 4){
            callback(undefined, "bir hata olustu");
        }
    });

    request.open("GET", "https://jsonplaceholder.typicode.com/todos");
    request.send();
};

TodoOlustur((veri, hata)=>{
    if(hata){
        console.log(hata);
    }
    else{
        console.log(veri);
    }
});

//kendi oluşturduğumuz json dosyasına erişelim bu sefer
const TodoOlustur2 = (callback)=>{
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", ()=>{
        if(request.readyState == 4 && request.status == 200){
            //verileri jasona parse edebiliriz bu sayede verilere json halinde erişiriz.
            let veriler = JSON.parse(request.responseText);
            callback(veriler, undefined);
        }
        else if(request.readyState == 4){
            callback(undefined, "bir hata olustu");
        }
    });
    //open esnasında soya yolumu gönderiyorum bu sayede kendi json verilerime ulaşabilirim.
    request.open("GET", "veriler.json");
    request.send();
};

TodoOlustur2((veri, hata)=>{
    if(hata){
        console.log(hata);
    }
    else{
        console.log(veri);
    }
});