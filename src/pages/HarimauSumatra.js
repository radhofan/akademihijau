import React from 'react'
import './OrangUtan.css'
import Navbar from '../Navbar'

function HarimauSumatra() {
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1602612639468-cd507b1cada9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80")'
        }}></div>
        <div className='deskripsiBinatang'>
            <div style={{fontSize:'30px', marginBottom:'20px'}}>Harimau Sumatra</div>
            <div>Harimau Sumatera adalah spesies harimau yang hanya dapat ditemukan di pulau Sumatera, Indonesia. Mereka merupakan karnivora terbesar di Indonesia dan dianggap sebagai salah satu kunci dari ekosistem hutan hujan Sumatera. Sayangnya, harimau Sumatera menghadapi ancaman kepunahan akibat hilangnya habitat, perburuan ilegal, dan konflik dengan manusia. Upaya konservasi yang kuat diperlukan untuk melindungi harimau Sumatera dan memastikan kelangsungan hidup mereka di alam liar.</div>
        </div>
      </div>
    </div>
  )
}

export default HarimauSumatra