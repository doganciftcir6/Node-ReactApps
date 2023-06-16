//burada contextteki book ekleme metodunu kullanarak kullanıcınun form inputundan yolladığı bilgilerle kitap eklemesi yapacağız.

import React, {useState,useContext} from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () =>{
    
    //contexntten ilgili ekleme fonksiyonunu çek
    const {dispatch} = useContext(BookContext);

    //yeni eklenen kitabın adını ve yazarını tutmak için bu alanlara özel state lazım. Settitle fonkisyoları ile inputlardan yeni gelen verileri bu statelere eklicez.
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    
    //form submit eedildiğinde yeni bilgilerle bu ekleme metodu çalışacak. Ekleme yapıldıktan sonra statelerimin içini boşaltmalıyım.
    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:"ADD_BOOK", book:{
            title,author
        }})
        setTitle("");
        setAuthor("");
    }

    //onChange ile değişiklik anındaki eventi yakalıcaz ve parametredeki e bu değişikliğe denk geliyor.
    return(
        <form onSubmit={HandleSubmit}>
            <input type="text" placeholder="Kitap Basligi" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <input type="text" placeholder="Kitap Yazari" value={author} onChange={(e) => setAuthor(e.target.value)}/>
            <input type="submit" value="Kitap Ekle"/>
        </form>
    )
}

export default NewBookForm