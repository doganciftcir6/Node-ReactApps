import React, {createContext, useReducer, useEffect} from "react";
import { bookReducer } from "../reducers/bookReducer";

//conexti oluştur ve dışarıya aç
export const BookContext = createContext();

//bu contexteki bilgileri dışarıya aktarabilmek için provider oluştur
const BookContextProvider = (props) =>{


    //VERİLERİ DİREKT BURDA TANIMALMIŞTIK AMA REDUCER KULLANDIKTAN SONRA VERİLERİ BURDA TANIMLAMICAZ İKİNCİ PARAMETRE YANİ ACTİON PARAMETRESİ [] DİYEREK BOŞ GÖNDERDİĞİMİZ İÇİN SWİTCH CASEİN DEFAULTU ÇALIŞIP SADECE GERİYE STATE DÖNECCEK.
    //kitap bilgilerini bir statette tut. Verileri reducerdan çekicez.
    //reducerdaki statete güncelleme yapmak için artık dispatch kullanmamız lazım. Bütün fonksiyonlar bu dispatch içerisinde olmuş olacak. Yani dispatch ile reducerdaki actionlara ulaşmış oluşaz. Verileri kullanıcı ekleyecek eklenen veriler localstrogea düşecek ve burda localstrogedaki verileri redurecare 3.paramettre olarak göndericez
    const [books,dispatch] = useReducer(bookReducer,[], ()=>{
        const localData = localStorage.getItem("books");
        return localData ? JSON.parse(localData):[];
    });


    //localstroge e veri eklemek için books stateini takip edecek.
    useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books]);


    //REDUCER KULLANDIĞIMIZ İÇİN BU FONKSİYONLAR ORADA OLACAK BURDA BUNLARA İHTİYACIMIZ ARTIK YOK
    //Bu books nesnesini yeni bir kitap eklendiği zaman çalışacak olan bir fonksiyon üret
   // const AddBook = (title,author) =>{
        //setBooks fonksiyonunu çalıştaracak
        //bu fonksiyonun içerisine yani setBooksun içine books nesnesinin yeni değeri olacak. Var olan değeri tutabilmek eski verileri kaybetmemek için ...books yapıyoruz, attıktan sonra yeni gelen değerin özelliklerini veriyoruz. Yeni gelen kayıdın idsini paket ile uniq yapalım. uuid paketi.
   //    setBooks([...books, {title:title, author:author, id:uuidv1()}])
   // }

    //silme işlemi gerçekleştiğinde çalışacak olan fonksiyon
   // const RemoveBook = (id) => {
        //aslında filtreleme yapıcaz idsi bu olmayan tüm kitapları getir dicez.
     //   setBooks(books.filter(book=> book.id!=id));
   // }

    //Oluşan statei ve fonksyionu Provider oluşturarak dışarıya aktarıma aç value ile bunu yapalım.
    //provider içerisine componentler alacağı için burda bizim App compoenentin çocuklarını alacagını props ile belirtmem lazım.
    return(
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

//providerı dışarıya aç
export default BookContextProvider;