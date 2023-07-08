import React from 'react'
import './OrangUtan.css'
import Navbar from '../Navbar'

function Komodo() {
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
            backgroundImage: 'url("https://images.unsplash.com/photo-1529977600152-26a6fecfb3ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=799&q=80")'
        }}></div>
        <div className='deskripsiBinatang'>
            <div style={{fontSize:'30px', marginBottom:'20px'}}>Komodo</div>
            <div>Komodo adalah salah satu spesies reptil yang unik dan menarik yang berasal dari Indonesia. Dikenal juga dengan sebutan "naga komodo", hewan ini merupakan kadal terbesar yang masih hidup di dunia saat ini. Komodo memiliki ukuran tubuh yang besar dan berat, dengan panjang mencapai 2-3 meter dan berat mencapai 70-90 kg. Mereka memiliki kulit yang kasar dan berwarna abu-abu, dengan tekstur yang menyerupai sisik dan ciri khas berupa leher dan ekor yang panjang. Habitat alami komodo terdapat di Pulau Komodo, Rinca, Flores, Gili Motang, dan beberapa pulau kecil di sekitarnya. Hewan ini terkenal karena memiliki kekuatan yang dahsyat dalam berburu mangsa dan menguasai wilayahnya. Komodo juga menjadi simbol kebanggaan dan kekayaan alam Indonesia, serta dilindungi sebagai spesies yang terancam punah.</div>
        </div>
      </div>
    </div>
  )
}

export default Komodo