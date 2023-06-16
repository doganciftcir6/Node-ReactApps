import React, {useState, createContext} from "react";

export const KitapContext = createContext();

export const KitapProvider = props => {

    //veri tanımla
    const[kitaplar, setKitaplar] = useState([
        {kitapId: 1, kitapAd: "Bunu Herkes Bilir", kitapYazar:"Emrah Safa Gurkan"},
        {kitapId: 2, kitapAd: "Zafer Sizlanarak Kazanilmaz", kitapYazar:"Haluk Tatar Gurkan"}
    ]);

    //value ile veriyi gönder
    return(
        <KitapContext.Provider value={[kitaplar,setKitaplar]}>
            {props.children}
        </KitapContext.Provider>
    )
}