import React, {useState, useEffect} from 'react'

export default function ContactForm(props) {
    //verileri useState içinde tutucaz bu statein için başlangıç değeri olarak bu oluşturduğumuz nesne bilgisini verelim.
    const formAlanlar = {
        isim:"",
        soyisim:"",
        telefon:"",
        mail:""
    }
    const [alanlar,setAlanlar] = useState(formAlanlar);

    //güncelleme islemi icin butona tıklandığında ilgili veri buraya düşecek
    //butona tıklandığında old veri input içine value kısmına düşecek.
    useEffect(() => {
        console.log(props.currentId);
        if(props.currentId == ""){
            setAlanlar({
                ...formAlanlar
            })
        }
        else{
            setAlanlar({
                ...props.iletisimVeriler[props.currentId]
            })
        }
    },[props.currentId, props.iletisimVeriler])

    //kullanıcının inputa girdiği verileri yakalayacak olan bir fonksiyon
    const AlanlarDegisti = (e)=>{
        //inputların name bilgilerini çekerek inputa isim vermiş olalım isim = ali gibi olsun örneğin.
        var alanIsim = e.target.name;
        //inputların girilen deger bilgilerini cekelim
        var alanDeger = e.target.value;
        //... ile alanlar statei içindeki verileri teker teker yakalamamızı sağlayacak. Önce eski veriyi koyacağız sonra yeni gelen veriyi. Eski veriyi kaybetmemek için. Bu aşağakidaki işlem ile state içine girilen yeni verileri yazdıralım.
        setAlanlar({
            ...alanlar,[alanIsim]:alanDeger
        });
    }
    //form submit olunca girilen verileri Contact componentine gönderen fonksiyon
    const VerileriContactaGonder = (e) =>{
        e.preventDefault();
        //burda yani eklenin içinde Contact componentinden props olarak gönderdiğimiz fonksiyon var.
        props.VeriEkle(alanlar);
    }
  return (
    <form onSubmit={VerileriContactaGonder}>
        <div className='form-group input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
                <i className='fas fa-user'></i>
            </div>
          </div> 
          <input className='form-control' name='isim' placeholder='Isim Giriniz' onChange={AlanlarDegisti} value={alanlar.isim || ""}/>
        </div>
        <div className='form-group input-group'>
          <div className='input-group-prepend'>
            <div className='input-group-text'>
                <i className='fas fa-user'></i>
            </div>
          </div> 
          <input className='form-control' name='soyisim' placeholder='Soyisim Giriniz' onChange={AlanlarDegisti} value={alanlar.soyisim || ""}/>
        </div>

        <div className='form-row'>
            <div className='form-group input-group col-md-6'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fas fa-phone'></i>
                    </div>
                </div> 
            <input className='form-control'name='telefon' placeholder='Telefon Giriniz' onChange={AlanlarDegisti} value={alanlar.telefon || ""}/>
            </div>
            <div className='form-group input-group col-md-6'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>
                        <i className='fas fa-envelope-square'></i>
                    </div>
                </div> 
            <input className='form-control' name='mail' placeholder='Mail Adresi Giriniz' onChange={AlanlarDegisti} value={alanlar.mail || ""}/>
            </div>
        </div>
        <div className='form-group'>
            <input type='submit' value="Kaydet" className='btm btn-success btn-block'/>
        </div>
    </form>
  )
}
