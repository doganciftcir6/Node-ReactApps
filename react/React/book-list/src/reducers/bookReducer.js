//burayı ara bir fonksiyon olarak düşünebiliriz BookContextten aldığı değerleri diğer componentlere aktarmak için kullanıcaz. Yani bu sayede bu BookContext fonksiyon kullanmıcaz verileri kullanımış olucaz. Reducer içerisinde actionlarımız ile fonksiyon kullamış olucaz.
//reducerda global bir state tanımlamış oluyoruz state tanımıda burada olacak contextte değil.
//bu reducera diğer componentlerden ulaşıcaz.
import {v1 as uuidv1} from "uuid";

//reducer oluşturalım. Parametre olarak state ve bu statelere neolacağını söylecek action alacak.
export const bookReducer = (state,action) =>{
    //actionun tipine bakmam lazım.
    switch (action.type) {
        case "ADD_BOOK":
             //Var olan değeri tutabilmek eski verileri kaybetmemek için ...books yapıyoruz, attıktan sonra yeni gelen değerin özelliklerini veriyoruz. Yeni gelen kayıdın idsini paket ile uniq yapalım. uuid paketi.
            return [...state,{
                title: action.book.title,
                author: action.book.author,
                id:uuidv1()
            }]
        case "REMOVE_BOOK":
            //aslında filtreleme yapıcaz idsi bu olmayan tüm kitapları getir dicez.
            return state.filter(book=> book.id!=action.id)
        default:
            return state;
    }
} 