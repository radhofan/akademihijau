import './App.css';
import React, { useState } from 'react'
import { Link } from "react-scroll";
import { Outlet, Navigate } from "react-router-dom";
import SlideFaunaTerancam from './slideImg/SlideFaunaTerancam';
import SlideFloraTerancam from './slideImg/SlideFloraTerancam';
import SlideFaunaEndemik from './content/FaunaEndemik';
import SlideFloraEndemik from './slideImg/SlideFloraEndemik';
import SlideSustainableLiving from './slideImg/SlideSustainableLiving';
import SlideQuiz from './slideImg/SlideQuiz';
import { AiFillHome } from 'react-icons/ai';

function Navbar() {
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
    },
    {
      id: 2,
      title: 'Flora Terancam',
      slide: <SlideFloraTerancam/>,
    },
    {
      id: 3,
      title: 'Fauna Endemik',
      slide: <SlideFaunaEndemik/>,
    },
    {
      id: 4,
      title: 'Flora Endemik',
      slide: <SlideFloraEndemik/>,
    },
    {
      id: 5,
      title: 'Sustainable Living',
      slide: <SlideSustainableLiving/>,
    },
    {
      id: 6,
      title: 'Quiz Pengetahuan',
      slide: <SlideQuiz/>,
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
      <h1 className='atas'>Selamat Datang di Aplikasi Akademi Hijau Indonesia</h1>
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
                  onClick={() => testSet(menu.title)}
                >
                  {menu.title}
                </Link>

                {test && faunaTerancam &&(<Navigate to="/faunaTerancam" replace={true} />)}
                {test && floraTerancam &&(<Navigate to="/floraTerancam" replace={true} />)}
                {test && faunaEndemik &&(<Navigate to="/faunaEndemik" replace={true} />)}
                {test && floraEndemik &&(<Navigate to="/floraEndemik" replace={true} />)}
                {test && sustainableLiving &&(<Navigate to="/sustainableLiving" replace={true} />)}
                {test && quiz &&(<Navigate to="/quiz" replace={true} />)}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navbar