import React, {useState, useEffect} from 'react'
import ContactForm from './ContactForm'
import firebaseDB from '../firebase';

export default function Contact() {

    //firebase e bu verileri ekleme işlemi ve güncelleme bu fonksiyonda olacak.
    const VeriEkle = (nesne) =>{
        //kullanıcı contactform componentinde forma veri girip submit yaptığında buraya veriler ContactFormdan gelmiş oluyor. Nesne parametresi içerisine verileri ordan gönderdik burda alıyoruz.
        //console.log(nesne);
        //iletisim diye bir koleksiyon olusur.
       if(currentId == ""){
        //ekleme işlemi yapılacak
        firebaseDB.child("iletisim").push(
            nesne,
            err=>{
                if(err){
                    console.log(err);
                }
            }
        )
       }else{
        //güncelleme işlemi yapılacak
        firebaseDB.child(`iletisim/${currentId}`).set(
            nesne,
            err=>{
                if(err){
                    console.log(err);
                }else{
                    setCurrentId("");
                }
            }
        )
       }
    }

    //sayfa yüklendiğinde firebaseten verileri çekmek için state içine verileri atıcaz.
    const [iletisimVeriler, setIletisimVeriler] = useState({});
    useEffect(() => {
        firebaseDB.child("iletisim").on("value", snapshot => {
            if(snapshot.val()!=null){
                setIletisimVeriler({
                    ...snapshot.val()
                });
            }
        })
    },[]);

    //güncelleme islemi icin state lazım
    const [currentId, setCurrentId] = useState("");

    //silme islemi
    const VeriSil = (id) =>{
        if(window.confirm("Silmek Istediginizden Emin misiniz?")){
            firebaseDB.child(`iletisim/${id}`).remove(
                err=>{
                    if(err){
                        console.log(err);
                    }else{
                        setCurrentId("");
                    }
                }
            )
        }
    }

  return (
    <div>
      <div className='jumbotron'>
        <div className='container'>
            <h1 className='display-4'>
                Iletisim Bilgileri Giris Sayfasi
            </h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-5'>
            <ContactForm {...({VeriEkle, currentId, iletisimVeriler})}/>
        </div>
        <div className='col-md-7'>
            <table className='table table-borderless table-stripped'>
                <thead className='thead-light'>
                    <tr>
                        <th>Isim Soyisim</th>
                        <th>Mail</th>
                        <th>Telefon</th>
                        <th>Islemler</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(iletisimVeriler).map((id) => {
                        return <tr key={id}>
                            <td>{iletisimVeriler[id].isim} {iletisimVeriler[id].soyisim}</td>
                            <td>{iletisimVeriler[id].mail}</td>
                            <td>{iletisimVeriler[id].telefon}</td>
                            <td>
                                <a className='btn text-primary' onClick={() => setCurrentId(id)}>
                                    <i className='fas fa-pencil-alt'></i>
                                </a>
                                <a className='btn text-danger' onClick={() => VeriSil(id)}>
                                    <i className='fas fa-trash'></i>
                                </a>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}
