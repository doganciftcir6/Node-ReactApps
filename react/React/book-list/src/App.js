import './App.css';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        {/* BURAYA BOOKCONTEXTİ KULLANCAK KULLANAN COMPONNETLER GELECEK BURAYA GELEN COMPONENTLER CHİLD PROPS OLACAK */}
        <Navbar/>
        <BookList/>
        <NewBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
