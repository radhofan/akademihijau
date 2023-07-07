import React from 'react'
import './OrangUtan.css'
import Navbar from '../Navbar'

function AnggrekHitam() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='kontenBinatang'>
        <div style={{
            border: '1px solid white',
            marginTop: '50px',
            marginLeft: '50px',
            height: '350px',
            width: '350px',
            borderRadius: '20px 20px 20px 20px',
            backgroundSize: 'cover',
            backgroundImage: 'url("https://o-cdn-cas.sirclocdn.com/parenting/images/Anggrek_Hitam.width-500.format-webp.webp")'
        }}></div>
        <div className='deskripsiBinatang'>
            <div style={{fontSize:'30px', marginBottom:'20px'}}>Anggrek Hitam</div>
            <div>Coelogyne pandurata, juga dikenal sebagai Anggrek Hitam, merupakan salah satu spesies anggrek endemik Indonesia. Anggrek ini memiliki bunga yang unik dengan warna hitam pekat dan bentuk yang elegan. Coelogyne pandurata hanya ditemukan di beberapa daerah di Indonesia, terutama di Sumatera dan Jawa. Sayangnya, Anggrek Hitam menghadapi ancaman kepunahan akibat hilangnya habitat alami dan perburuan ilegal. Upaya konservasi yang berkelanjutan diperlukan untuk melindungi Coelogyne pandurata dan memastikan kelangsungan spesies ini di alam liar Indonesia.</div>
        </div>
      </div>
    </div>
  )
}

export default AnggrekHitam