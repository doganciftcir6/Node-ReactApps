//navbar componentte contexti kullanıcaz
import Reac,{useContext} from "react";
import { BookContext } from "../contexts/BookContext";


const Navbar = ()=>{
    //kullanacağın contexti tanımla
    //contexteki kitap stateinin lenthine ihtiyaç var
    const {books} = useContext(BookContext);

    return(
        <div className="navbar">
            <h1>AOS Kitap Listesi</h1>
            <p>{books.length} adet kitap var</p>
        </div>
    )
}

export default Navbar;

