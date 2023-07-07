import React from 'react'
import './OrangUtan.css'
import Navbar from '../Navbar'

function BungaBangkai() {
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
            backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/c/c0/Titan-arum1web.jpg")'
        }}></div>
        <div className='deskripsiBinatang'>
            <div style={{fontSize:'30px', marginBottom:'20px'}}>Bunga Bangkai</div>
            <div>Titan Arum, juga dikenal sebagai bunga Raksasa atau bunga Bangkai, merupakan salah satu spesies tumbuhan yang menarik perhatian di Indonesia. Bunga ini terkenal karena ukurannya yang besar dan aroma busuk yang khas. Titan Arum dapat tumbuh hingga ketinggian dua hingga tiga meter. Meskipun populer, Titan Arum terancam punah karena hilangnya habitat alami dan eksploitasi manusia. Upaya konservasi yang serius diperlukan untuk melindungi Titan Arum dan memastikan kelangsungan spesies ini di Indonesia.</div>
        </div>
      </div>
    </div>
  )
}

export default BungaBangkai