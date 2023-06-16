import React, {useState} from "react";
import './App.css';
import KitapListesi from "./KitapListesi";
import KitapSayisi from "./KitapSayisi";
import { KitapProvider } from "./KitapContext";
import KitapEkle from "./KitapEkle";


function App() {
  //burda kitapsayisini tututmam lazım
  const [sayi, setSayi] = useState(0);
  //burda kitap sayısını buraya getirecek bir fonksiyon yazıp bunu Kitaplistesi componentine gönderelim.
  const kitapSayisiGetir = (s) => {
    //veri burda Kitaplistesi componentine gittikten sonra s parametresine düştü bunu kullanarak sayi statemizi güncelleyelim ve bu state verisini props olarak KitapSayisi compoenentine gönderelim
    setSayi(s);
  }
  return (
    <KitapProvider>
      <KitapEkle/>
      <KitapListesi/>
      <KitapSayisi/>
    </KitapProvider>
  );
}

export default App;
