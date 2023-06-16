import { useState, useEffect } from "react";
import {projectStorage, projectFireStore, timestamp} from "../firebase/config";

//elimde bir dosya olması gerekiyor bu dosyayı firestroa yükleyecek.
const useStorage = (file)=>{
    //statelerim
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    //fie geldiği zaman çalışsın.
    useEffect(()=>{
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFireStore.collection("resimler");

        storageRef.put(file).on("state_changed",(snap) =>{
            let yuzdelik = (snap.bytesTransferred / snap.totalBytes)*100;
            setProgress(yuzdelik);
        },(err) => {
            setError(err);
        }, async ()=>{
            const url = await storageRef.getDownloadURL();
            setUrl(url);
            const olusturulmaTarih = timestamp();
            collectionRef.add({
                "resimUrl":url,
                "olusturulmaTarih":olusturulmaTarih,
                "resimAd":file.name
            });
        });
    },[file]);
    return {progress,error,url}
}

export default useStorage