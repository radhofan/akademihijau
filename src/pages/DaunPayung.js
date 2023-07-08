import React from 'react'
import './OrangUtan.css'
import Navbar from '../Navbar'

function DaunPayung() {
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
            backgroundImage: 'url("https://asset.kompas.com/crops/mSwX9-N-pNfEcvscBcmmLBZPd1Q=/0x0:525x350/750x500/data/photo/2021/05/22/60a89c12d646f.jpg")'
        }}></div>
        <div className='deskripsiBinatang'>
            <div style={{fontSize:'30px', marginBottom:'20px'}}>Daun Payung</div>
            <div>Daun Payung, juga dikenal sebagai Daun Sirih Gading, merupakan salah satu tanaman yang khas di Indonesia. Daun ini memiliki bentuk yang unik, menyerupai payung dengan serangkaian daun yang menutupi batang tengahnya. Daun Payung biasanya digunakan dalam tradisi dan upacara adat, seperti dalam pembungkusan sirih sebagai simbol kebersamaan dan kesucian. Selain itu, daun ini juga memiliki nilai medis dan digunakan dalam pengobatan tradisional. Daun Payung memiliki keindahan dan makna budaya yang mendalam, serta menjadi bagian penting dari kehidupan sehari-hari masyarakat Indonesia.</div>
        </div>
      </div>
    </div>
  )
}

export default DaunPayung