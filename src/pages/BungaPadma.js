import React from 'react'
import './OrangUtan.css'
import Navbar from '../Navbar'

function BungaPadma() {
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
            backgroundImage: 'url("https://asset.kompas.com/crops/cv5nh_NNfOEmxiXuKv1Fq_c2VHA=/7x0:1000x662/750x500/data/photo/2022/01/25/61ef9ca74ad26.jpg")'
        }}></div>
        <div className='deskripsiBinatang'>
            <div style={{fontSize:'30px', marginBottom:'20px'}}>Bunga Padma</div>
            <div>"Bunga Bangkai" adalah salah satu spesies tumbuhan yang menarik perhatian di Indonesia. Bunga ini terkenal karena aroma busuk yang kuat dan tumbuhnya yang langka. Stinky Corpse Lily tumbuh di hutan-hutan lebat dan mekar hanya beberapa kali dalam beberapa tahun. Meskipun memiliki aroma yang tidak sedap, bunga ini memiliki daya tarik tersendiri bagi para peneliti dan penggemar alam. Bunga Bangkai memainkan peran penting dalam menjaga keseimbangan alam.</div>
        </div>
      </div>
    </div>
  )
}

export default BungaPadma