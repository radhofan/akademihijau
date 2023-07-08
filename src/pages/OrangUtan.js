import React from 'react'
import './OrangUtan.css'
import Navbar from '../Navbar'

function OrangUtan() {
  return (
    <div className='App'>
      <Navbar/>
      <div className='kontenBinatang'>
        <div className='gambarBinatang'></div>
        <div className='deskripsiBinatang'>
            <div style={{fontSize:'30px', marginBottom:'20px'}}> Orang Utan</div>
            <div>
Orangutan adalah salah satu primata yang tinggal di hutan-hutan Indonesia. Mereka dikenal dengan kecerdasan mereka dan kemampuan menggunakan alat. Orangutan terancam punah karena hilangnya habitat akibat deforestasi, perburuan ilegal, dan perdagangan liar. Upaya konservasi yang serius diperlukan untuk melindungi orangutan dan memastikan keberlanjutan populasi mereka di alam liar.</div>
        </div>
      </div>
    </div>
  )
}

export default OrangUtan