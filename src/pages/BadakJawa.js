import React from 'react'
import './OrangUtan.css'
import Navbar from '../Navbar'

function BadakJawa() {
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
            backgroundImage: 'url("https://images.unsplash.com/flagged/photo-1556983257-71fddc36bc75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80")'
        }}></div>
        <div className='deskripsiBinatang'>
            <div style={{fontSize:'30px', marginBottom:'20px'}}>Badak Jawa</div>
            <div>Badak Jawa adalah salah satu spesies badak yang paling langka di dunia dan hanya dapat ditemukan di Jawa, Indonesia. Mereka merupakan hewan berukuran besar dan memiliki ciri khas satu tanduk. Badak Jawa menghadapi ancaman kepunahan yang serius akibat hilangnya habitat, perburuan ilegal, dan rendahnya populasi yang tersisa. Upaya konservasi yang mendalam diperlukan untuk melindungi badak Jawa dan memastikan kelangsungan hidup mereka di alam liar.</div>
        </div>
      </div>
    </div>
  )
}

export default BadakJawa