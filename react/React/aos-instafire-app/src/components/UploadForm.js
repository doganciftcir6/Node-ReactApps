import React, {useState} from 'react'
import ProgressBar from './ProgressBar';

export default function UploadForm() {

    //upload inputa girilen dosyayı state içinde tutucaz bilgisini.
    const[file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const types = ["image/png", "image/jpeg"];
    //file inputa upload yapıldığında bu metotta yakalıcaz.
    const ChangeHandler = (e)=>{
        //e parametresi ile seçilmiş bilgilere erişebiliriz. İlk seçilen resme erişicez 0 indeksi ile.
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError("");
        }
        else{
            setFile(null);
            setError("Lutfen .png ya da .jpg uzantili bir resim dosyasi yukleyniz!");
        }
    }

  return (
    <form>
      <label>
          <input type='file' onChange={ChangeHandler}/>
          <span>+</span>
      </label>

      <div className='output'>
        {file && <div>{file.name}</div>}  
        {error && <div className='error'>{error}</div>}
        {file && <ProgressBar file={file} setFile={setFile}/>}
      </div>
    </form>
  )
}
