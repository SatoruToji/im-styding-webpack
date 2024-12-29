import hutaoPng from '@/assets/images/1.png'
import hutaoJpg from '@/assets/images/2.jpg'
import hutaoJpeg from '@/assets/images/3.jpeg'
import hutaoJpegFull from '@/assets/images/3_full.jpeg'
import '@/style.scss'
import { useState } from 'react'

export default function Hutaochka() {
  const [hutaoFull, setHutaoFull] = useState(hutaoJpeg)

  return(
    <div className='container'>
      <img src={hutaoPng} alt="" />
      <img src={hutaoJpg} alt="" />
      <button onClick={()=>{
        setHutaoFull(hutaoJpegFull)
      }}>
        <img src={hutaoFull} alt="" />
      </button>
    </div>
  )
}