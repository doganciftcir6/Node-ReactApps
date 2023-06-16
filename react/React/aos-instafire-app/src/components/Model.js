import React from 'react'
import {animate, delay, motion} from "framer-motion"

export default function Model({selectedImg, setSelectedImg}) {
    const HandleClick = (e) => {
        if(e.target.classList.contains("backdrop")){
            setSelectedImg(null);
        }
    }

  return (
    <motion.div className='backdrop' onClick={HandleClick} initial={{opacity:0}} animate={{opacity:1}}>
      <motion.img src={selectedImg} initial={{y:"-400vh"}} animate={{y:0}}/>
    </motion.div>
  )
}
