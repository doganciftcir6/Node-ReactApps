import React, {useState,useContext} from 'react'
import { KitapContext } from './KitapContext'

export default function KitapEkle() {
    const [isim, setIsim] = useState("");
    const [yazar, setYazar] = useState("");

     //conxttten gelen bilgiyi alalım.
     var [kitaplar,setKitaplar] = useContext(KitapContext);
     //isim ve yazar güncelleme fonksiyonlarımız olsun
     const IsimGuncelle = (e) => {
        setIsim(e.target.value);
     }
     const YazarGuncelle = (e) => {
        setYazar(e.target.value);
     }
     const KitapEkle = (e) => {
        e.preventDefault();
        setKitaplar([...kitaplar, {kitapAd:isim,kitapYazar:yazar}]);
     }
  return (
    <form onSubmit={KitapEkle}>
      <input type='text' name='kitapAd' value={isim} onChange={IsimGuncelle} />
      <input type='text' name='yazarAd' value={yazar} onChange={YazarGuncelle} />
      <button type="submit">Ekle</button>
    </form>
  )
}
