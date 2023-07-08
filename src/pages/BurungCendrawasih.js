import React from 'react'
import './OrangUtan.css'
import Navbar from '../Navbar'

function BurungCendrawasih() {
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
            backgroundImage: 'url("https://jurnalpost.com/wp-content/uploads/2023/01/Burung-Cendrawasih.webp")'
        }}></div>
        <div className='deskripsiBinatang'>
            <div style={{fontSize:'30px', marginBottom:'20px'}}>Burung Cendrawasih</div>
            <div>
Burung Cendrawasih merupakan salah satu burung yang paling menakjubkan dan eksotik di Indonesia. Mereka dikenal dengan bulu-bulu indah dan berwarna-warni serta tarian yang mempesona saat berusaha memikat pasangan. Burung Cendrawasih hidup di hutan-hutan tropis, terutama di Papua dan Kepulauan Maluku. Sayangnya, burung Cendrawasih menghadapi ancaman kepunahan akibat perburuan ilegal dan hilangnya habitat. Upaya konservasi yang serius diperlukan untuk melindungi burung Cendrawasih dan menjaga keberlangsungan spesies ini agar tetap menjadi harta kekayaan alam Indonesia yang unik dan mempesona.</div>
        </div>
      </div>
    </div>
  )
}

export default BurungCendrawasih