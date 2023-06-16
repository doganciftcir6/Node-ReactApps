import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment/moment';

export default function Saat() {
    const id = useParams();

    //state oluştur saat bilgisini almak için. moment paketi ile saat formatını değişitrebiliyoruz.
    const [saat, setSaat] = useState("");
    const [hafta, setHafta] = useState("");
    const [gun, setGun] = useState("");

    useEffect(()=>{
        SaatiGetir();
    },[])

    //getbyid yapacak fonksiyon
    const SaatiGetir = () =>{
        axios.get(`https://worldtimeapi.org/api/timezone/${id.kita}/${id.yer}`)
            .then((response) =>{
                setSaat(response.data.datetime);
                setHafta(response.data.week_number);
                setGun(response.data.day_of_year);
            })
    }
  return (
    <div className='container'>
      <div className='card'>
            <Link className='btn-floating left halfway-fab waves-light waves-effect deep-orange' to={"/"}><i className='material-icons'>undo</i></Link>
            <div className='card-content'>
                <h4 className='center deep-orange-text'>{id.yer}</h4>
                <h1 className='center blue-grey-text'>{moment(saat).calendar()}</h1>
                <h6 className='center brown-text'>Yilin {hafta}. Haftasi</h6>
                <h6 className='center brown-text'>Yilin {gun}. Gunu</h6>
            </div>
      </div>
    </div>
  )
}
