import React, {useState} from 'react';
import './App.css';
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBG9qC2CtjeynAOmWH7o3E7oubQnWke54",
  authDomain: "fire-chat-app-aad37.firebaseapp.com",
  projectId: "fire-chat-app-aad37",
  storageBucket: "fire-chat-app-aad37.appspot.com",
  messagingSenderId: "14056141499",
  appId: "1:14056141499:web:e9b2823b10e3c245d72f9e"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <header>
        <SignOut/>
      </header>
      <section>
        {user ? <ChatRoom/>:<SignIn/>}
      </section>
    </div>
  );
}

export default App;

function SignIn(){
  const signInGoogle = ()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return(
    <div>
      <button className='sign-in' onClick={signInGoogle}>Giris Yap</button>
    </div>
  )
}

function SignOut(){
  return auth.currentUser && (
    <button className='sign-out' onClick={()=>auth.signOut()}>
      Cikis Yap
    </button>
  );
}

function ChatRoom() {
  const messageRef = firestore.collection("mesajlar");
  const query = messageRef.orderBy("olusturulmaTarihi").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messageRef.add({
      text: formValue,
      olusturulmaTarihi: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      fotoURL: photoURL,
    });

    setFormValue("");
  };

  return (
    <>
      <div>
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
        />
        <button type="submit" disabled={!formValue}>
          Gonder
        </button>
      </form>
    </>
  );
}



function ChatMessage(props){
  const {text, uid, fotoURL} = props.message;
  const messageClass = uid===auth.currentUser.uid ? "sent":"received";
  return (
    <div className={`message ${messageClass}`}>
      <img src={fotoURL} alt={uid}/>
      <p>{text}</p>
    </div>
  );
}