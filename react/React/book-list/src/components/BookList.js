//burada tüm bookları listelicez dolayısıyla contexte ihtiyacımız var ve ayrıca BookDetails sayfasına props olarak book verisi göndericez.

import React, {useContext} from "react";
import BookDetail from "./BookDetails";
import { BookContext } from "../contexts/BookContext";

const BookList = () =>{
    //contextten booksları çek
    const {books} = useContext(BookContext);

    //eğer books içerisinde veriler var ise verileri gösterelim eğer veri yoksa veriler henüz yüklenmedi diye mesaj gösterelim. Map ile tüm verilerde gezip BookDetail componentine bu verileri props olarak gönderelim.
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map((book) => {
                    return(<BookDetail book={book} key={book.id}/>)
                })}
            </ul>
        </div>
    ):(
        <div className="empty">Henuz Kitap Eklenmedi</div>
    )
}

export default BookList