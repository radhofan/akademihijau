import React from 'react'
import './OrangUtan.css'
import Navbar from '../Navbar'

function KayuHitam() {
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
            backgroundImage: 'url("https://cdn-cms.pgimgs.com/static/2020/11/1.-Fakta-Kayu-Eboni-Hitam-Sulawesi-yang-Kian-Langka-dan-Mahal.png")'
        }}></div>
        <div className='deskripsiBinatang'>
            <div style={{fontSize:'30px', marginBottom:'20px'}}>Kayu Hitam Sulawesi</div>
            <div>Kayu Hitam Sulawesi, juga dikenal sebagai "Ebony Sulawesi", adalah salah satu jenis kayu yang langka dan berharga di Indonesia. Kayu ini memiliki warna hitam yang pekat dan serat yang indah, menjadikannya pilihan yang populer dalam industri kerajinan tangan dan pembuatan furnitur mewah. Kayu Hitam Sulawesi juga memiliki kekuatan yang tinggi dan daya tahan yang baik terhadap serangan hama dan kelembaban. Namun, karena permintaan yang tinggi dan aktivitas illegal logging yang merajalela, keberadaan Kayu Hitam Sulawesi semakin terancam. Upaya konservasi yang serius dan pengelolaan yang berkelanjutan diperlukan untuk melindungi kayu berharga ini dan memastikan keberlanjutan sumber daya alam yang berlimpah di Sulawesi.</div>
        </div>
      </div>
    </div>
  )
}

export default KayuHitam