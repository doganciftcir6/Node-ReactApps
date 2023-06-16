import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

//yarn add axios paketini kullanarak fetch yönetminden farklı olarak apilere istek atabiliyoruz.
export default function Sehiler() {

    //apiden gelen verileri aktarabilmek için state kullanıcaz.
    const [sehirler,setSehirler] = useState([]);
    const [sehirlerTampon,setSehirlerTampon] = useState(null);

    //veri çekme fonksiyonunu sayfa açıldığında tetiklet
    useEffect(()=>{
        SehirlerGetir2();
    },[]);
    

    //veri çekme fonksiyonu FETCH METODU İLE
    const SehirlerGetir = async ()=>{
        const response = await fetch("https://worldtimeapi.org/api/timezones");
        //cevap response şeklinde döner. Verilere listeye ulaşmak için json tipine dönüştür.
        const sehirler = await response.json();
    }
    //veri çekme AXİOS PAKETİ İLE async olmasına gerek yok. Promise tipinde işlem gerçekleştiği için then catch kullanıcaz.
    const SehirlerGetir2 = ()=>{
        axios.get("https://worldtimeapi.org/api/timezones")
            .then((response) => {
                console.log(response.data);
                //veriler geldikten sonra statein içine verileri aktar.
                setSehirler(response.data);
            });
    }

    //input ile sehir araması yapabilmek için fonksiyon, e parametresi ile inputun içine ne yazılıyorsa yakalarız.
    const SehirleriFiltrele = (e)=>{
        var input = e.target.value;
        setSehirlerTampon((oncekiSehirler) => {
            return sehirler.filter((s) => {
                return s.toLowerCase().includes(input.toLowerCase());
            });
        });
    }
    //map ile sehirler stateinin tüm elemenlarında tek tek gezeriz ve bu diziyi istediğimiz gibi düzenleyebiliriz.
  return (
    <div>
        <div className='row container'>
            <form className='col s12 l12 m12'>
                <div className='input-field col s12'>
                    <input id='sehir' className='input-field' type='text' onChange={SehirleriFiltrele} />
                    <label htmlFor='sehir' className='deep-orange-text'>Sehir Ara</label>
                </div>
            </form>
        </div>

    <div className='row'>
      {
        sehirlerTampon != null?(sehirlerTampon.map((item) => (
            <Link key={item} to={`/${item}`}>
                <div className='col l3 m4 s6'>
                    <div className='card blue-grey darken-1'>
                        <div className='card-content white-text'>
                            <p>{item}</p>
                        </div>
                    </div>
                </div>
            </Link>
          ))):(sehirler.map((item) => (
            <Link key={item} to={`/${item}`}>
            <div className='col l3 m4 s6'>
                <div className='card blue-grey darken-1'>
                    <div className='card-content white-text'>
                        <p>{item}</p>
                    </div>
                </div>
            </div>
            </Link>
          )))
      }
    </div>
    </div>
  )
}
