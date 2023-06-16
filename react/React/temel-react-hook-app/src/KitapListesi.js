import React, {useState, useEffect, useContext} from 'react'
import Kitap from "./Kitap"
import { KitapContext } from './KitapContext';

export default function KitapListesi() {
    //coxttten gelen bilgiyi alalım.
    var [kitaplar,setKitaplar] = useContext(KitapContext);


    const baslikStyle = {
        color:"coral"
    }

    //conxten aldığımız verileri dönerek Kitap componentine props olarak gönderelim.
  return (
    <div>
        <h2 style={baslikStyle}>Kitap Listesi</h2>
        {kitaplar.map((kitap) => (
            <Kitap ad={kitap.kitapAd} yazar={kitap.kitapYazar} key={kitap.kitapId}/>
        ))}
    </div>
  )
}
