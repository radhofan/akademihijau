import './App.css';
import React, { useState } from 'react'
import { Link } from "react-scroll";
import { Outlet, Navigate } from "react-router-dom";
import SlideFaunaTerancam from './slideImg/SlideFaunaTerancam';
import SlideFloraTerancam from './slideImg/SlideFloraTerancam';
import SlideFaunaEndemik from './slideImg/SlideFaunaEndemik';
import SlideFloraEndemik from './slideImg/SlideFloraEndemik';
import SlideSustainableLiving from './slideImg/SlideSustainableLiving';
import SlideQuiz from './slideImg/SlideQuiz';
import { AiFillHome } from 'react-icons/ai';

function App() {
  const [test, setTest] = useState(false);
  const [faunaTerancam, setFaunaTerancam] = useState(false);
  const [floraTerancam, setFloraTerancam] = useState(false);
  const [faunaEndemik, setFaunaEndemik] = useState(false);
  const [floraEndemik, setFloraEndemik] = useState(false);
  const [sustainableLiving, setSustainableLiving] = useState(false);
  const [quiz, setQuiz] = useState(false);
  const [home, setHome] = useState(false);

  const menuItems = [
    {
      id: 1,
      title: 'Fauna Terancam',
      slide: <SlideFaunaTerancam/>,
      desc: 'Indonesia merupakan tempat tinggal bagi fauna yang terancam punah. Harimau Sumatera, orangutan Borneo, badak Jawa, penyu sisik, gajah Sumatera, komodo, dan jalak Bali adalah beberapa spesies yang berisiko mengalami kepunahan akibat hilangnya habitat, perburuan, dan perdagangan ilegal. Upaya konservasi yang mendesak diperlukan untuk melindungi hewan-hewan ikonik ini dan menjaga keanekaragaman hayati Indonesia.',
    },
    {
      id: 2,
      title: 'Flora Terancam',
      slide: <SlideFloraTerancam/>,
      desc: 'Indonesia memiliki flora yang beragam dan unik, namun sayangnya beberapa spesies tumbuhan di negara ini menghadapi risiko kepunahan. Rafflesia arnoldii, bunga terbesar di dunia, dan Amorphophallus titanum, bunga "mayat hidup," adalah contoh tumbuhan yang terancam punah akibat hilangnya habitat dan pemanenan ilegal. Upaya konservasi yang serius diperlukan untuk melindungi keanekaragaman flora Indonesia.'
    },
    {
      id: 3,
      title: 'Fauna Endemik',
      slide: <SlideFaunaEndemik/>,
      desc: 'Indonesia terkenal dengan keanekaragaman hayatinya, termasuk banyaknya fauna endemik yang hanya ditemukan di Indonesia. Spesies-spesies unik ini telah beradaptasi dengan beragam ekosistem di kepulauan ini. Contoh fauna endemik di Indonesia termasuk orangutan Sumatera yang terancam punah, katak terbang Wallace yang menakjubkan, jalak Bali yang berwarna-warni, dan elang jawa yang sulit ditemukan. Menjaga habitat mereka dan menerapkan langkah-langkah konservasi yang efektif sangat penting untuk melindungi fauna endemik Indonesia yang luar biasa ini agar dapat dinikmati oleh generasi mendatang.'
    },
    {
      id: 4,
      title: 'Flora Endemik',
      slide: <SlideFloraEndemik/>,
      desc: 'Indonesia memiliki flora endemik yang kaya, yang hanya dapat ditemukan di Indonesia. Tanaman-tanaman ini telah beradaptasi dengan lingkungan yang unik di kepulauan ini. Contohnya adalah Rafflesia arnoldii, bunga terbesar di dunia yang hanya ada di Indonesia, serta pohon-pohon seperti pohon Bintang (Cinnamomum clemensiae), pohon Karimunjawa (Alseodaphne peduncularis), dan bunga anggrek seperti Vanda roeblingiana dan Paphiopedilum rothschildianum. Menjaga habitat dan menerapkan upaya konservasi yang efektif sangat penting untuk melindungi flora endemik Indonesia yang istimewa ini agar tetap lestari bagi masa depan.'
    },
    {
      id: 5,
      title: 'Sustainable Living',
      slide: <SlideSustainableLiving/>,
      desc: 'Hidup berkelanjutan merupakan gaya hidup yang bertujuan untuk menjaga keseimbangan antara kebutuhan manusia dengan kesehatan lingkungan dan keberlanjutan ekonomi. Dalam hidup berkelanjutan, kita mengadopsi praktik-praktik yang ramah lingkungan seperti penghematan energi, penggunaan sumber daya yang bertanggung jawab, daur ulang, pertanian organik, transportasi yang ramah lingkungan, dan penggunaan produk yang berkelanjutan. Dengan hidup berkelanjutan, kita dapat menjaga alam, meningkatkan kualitas hidup, dan mewariskan dunia yang baik kepada generasi mendatang.'
    },
    {
      id: 6,
      title: 'Quiz Pengetahuan',
      slide: <SlideQuiz/>,
      desc: 'Uji pengetahuan anda tentang keragaman alam di Indonesia'
    },

  ]
  function goHome(){
    setHome(true);
  }
  function testSet(username){
    if(username === "Fauna Terancam") {
      setFaunaTerancam(true)
    }
    if(username === "Flora Terancam") {
      setFloraTerancam(true)
    }
    if(username === "Fauna Endemik") {
      setFaunaEndemik(true)
    }
    if(username === "Flora Endemik") {
      setFloraEndemik(true)
    }
    if(username === "Sustainable Living") {
      setSustainableLiving(true)
    }
    if(username === "Quiz Pengetahuan") {
      setQuiz(true)
    } 
    setTest(true);
  }
  
  return (
    <div className='App'>
      <header className='header'>
      <h1 className='atas'>Selamat Datang di Website Akademi Hijau Indonesia</h1>
        <nav>
        <AiFillHome size='3em' className='homeButton' onClick={setHome}/>
        {home &&(<Navigate to="/" replace={true} />)}
          <ul>
            {menuItems.map((menu) => (
              <li>
                <Link
                  to={menu.title}
                  smooth={true}
                  offset={-160}
                  duration={500}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        {menuItems.map((menu) => (
          <div className="content">
            <h1 className='gambar'>
              {menu.slide}
            </h1>
            <h1 className="content-header" id={menu.title} onClick={() => testSet(menu.title)}>
              {menu.title}
              <p className='paragraf'>{menu.desc}</p>
            </h1>
            
            {test && faunaTerancam &&(<Navigate to="/faunaTerancam" replace={true} />)}
            {test && floraTerancam &&(<Navigate to="/floraTerancam" replace={true} />)}
            {test && faunaEndemik &&(<Navigate to="/faunaEndemik" replace={true} />)}
            {test && floraEndemik &&(<Navigate to="/floraEndemik" replace={true} />)}
            {test && sustainableLiving &&(<Navigate to="/sustainableLiving" replace={true} />)}
            {test && quiz &&(<Navigate to="/quiz" replace={true} />)}
          </div>
        ))}
      </main>
      <div className='sl-footer'></div>
    </div>
  );
}

export default App;
