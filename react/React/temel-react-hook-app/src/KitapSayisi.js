import React, {useState, useContext} from 'react'
import { KitapContext } from './KitapContext';


export default function KitapSayisi() {
    //artık burda da contextteki veriyi direkt olarak contextten çekip verinin sayısına bakalabilirim kitap sayısına yani conxttten gelen bilgiyi alalım.
    var [kitaplar,setKitaplar] = useContext(KitapContext);
  return (
    <div>
      {kitaplar.length}
    </div>
  )
}
