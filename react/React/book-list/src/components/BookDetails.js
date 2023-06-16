//burda da navbar gibi BookContext kullanıcaz.

import React,{useContext} from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetail = ({book}) =>{
    //contexti ayarla
    const {dispatch} = useContext(BookContext);
    
    //book un bilgisi Booklist componentten props gönderip propstan gelecek ama RemoveBook fonksiyonunu contextten çekecez.
    //li etiketine click eventi vererek silme fonksiyonunu atayacağım bu sayede divlerin üzerine tıkladığımda silme işlemi olacak.

    return(
        <li onClick={() => dispatch({type:"REMOVE_BOOK", id:book.id})}>
            <div className="title">{book.title}</div>
            <div className="author">{book.author}</div>
        </li>
    )
}

export default BookDetail