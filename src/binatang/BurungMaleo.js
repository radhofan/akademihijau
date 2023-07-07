import React from 'react'
import './OrangUtan.css'
import Navbar from '../Navbar'

function BurungMaleo() {
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
            backgroundImage: 'url("https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/06/23165256/AEB1BC50-3AC5-430E-BC80-E5FE475DBBB3.jpeg")'
        }}></div>
        <div className='deskripsiBinatang'>
            <div style={{fontSize:'30px', marginBottom:'20px'}}>Burung Maleo</div>
            <div>
Burung Maleo adalah salah satu spesies burung endemik yang hanya dapat ditemukan di Sulawesi, Indonesia. Mereka memiliki penampilan yang unik dengan bulu berwarna coklat kemerahan dan ukuran tubuh yang besar. Burung Maleo terkenal dengan kebiasaannya bertelur di dalam tanah vulkanik yang panas, dengan menggunakan panas alami dari aktivitas gunung berapi untuk mengerami telurnya. Meskipun mereka memiliki mekanisme yang unik untuk reproduksi, populasi burung Maleo terancam oleh hilangnya habitat dan perburuan ilegal. Upaya konservasi yang serius diperlukan untuk melindungi burung Maleo dan menjaga keberlangsungan spesies ini agar tetap menjadi bagian yang penting dari keanekaragaman hayati Sulawesi dan warisan alam Indonesia.</div>
        </div>
      </div>
    </div>
  )
}

export default BurungMaleo