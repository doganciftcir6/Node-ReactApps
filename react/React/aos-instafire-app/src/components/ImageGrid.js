import React from 'react'
import useFirestore from '../hooks/useFirestore'
import {animate, delay, motion} from "framer-motion"

export default function ImageGrid({setSelectedImg}) {
    const {docs} = useFirestore("resimler");
    console.log(docs);
  return (
    <div className='img-grid'> 
        {
            docs && docs.map(doc => (
                <motion.div whileHover={{opacity:1}} layout className='img-wrap' key={doc.id} onClick={() => setSelectedImg(doc.resimUrl)}>
                    <motion.img src={doc.resimUrl} alt={doc.resimAd} initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1}}/>
                </motion.div>
            ))
        }
    </div>
  )
}
