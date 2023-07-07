import React from 'react'
import './OrangUtan.css'
import Navbar from '../Navbar'

function BungaEdelweiss() {
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
            backgroundImage: 'url("https://1.bp.blogspot.com/-nA5TAFOesqE/WATH4TyNQzI/AAAAAAAAFmk/UxYyL1Qtr64_3LLxlLZFdLRx1U9_v6wAgCLcB/s1600/bunga-edelweiss-Anaphalis-javanica.jpg")'
        }}></div>
        <div className='deskripsiBinatang'>
            <div style={{fontSize:'30px', marginBottom:'20px'}}>Bunga Edelweiss</div>
            <div>Edelweiss Jawa, atau yang dikenal juga sebagai "Bunga Abadi" adalah salah satu spesies tumbuhan yang langka dan endemik di Pulau Jawa, Indonesia. Bunga ini memiliki keindahan yang khas dengan kelopak putih yang menyerupai bintang. Edelweiss Jawa tumbuh di dataran tinggi, terutama di pegunungan. Sayangnya, spesies ini terancam kepunahan akibat kerusakan habitat dan perburuan ilegal. Upaya konservasi yang serius diperlukan untuk melindungi Edelweiss Jawa dan menjaga keberlanjutan keindahan alam Indonesia.</div>
        </div>
      </div>
    </div>
  )
}

export default BungaEdelweiss