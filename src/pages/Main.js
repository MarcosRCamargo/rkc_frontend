 import React from 'react';
 import './Main.css';
 import logo from '../assets/logo.svg';
 import heart_solid from '../assets/heart-solid.svg';
 import times_solid from '../assets/times-solid.svg';

 export default function Main({ match }){
     return (
        <div className="main-container">
        <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4"alt="" />
                    <footer>
                        <strong>Marcos Camargo</strong>
                        <p>CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.</p>
                    </footer>
                    <div className="buttons">
                        <button>
                            <img src={heart_solid} alt="Like" />
                        </button>
                        <button>
                            <img src={times_solid} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4"alt="" />
                    <footer>
                        <strong>Marcos Camargo</strong>
                        <p>CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.</p>
                    </footer>
                    <div className="buttons">
                        <button>
                            <img src={heart_solid} alt="Like" />
                        </button>
                        <button>
                            <img src={times_solid} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4"alt="" />
                    <footer>
                        <strong>Marcos Camargo</strong>
                        <p>CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.</p>
                    </footer>
                    <div className="buttons">
                        <button>
                            <img src={heart_solid} alt="Like" />
                        </button>
                        <button>
                            <img src={times_solid} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
            <ul>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/4248081?v=4"alt="" />
                    <footer>
                        <strong>Marcos Camargo</strong>
                        <p>CTO na @Rocketseat. Apaixonado por Javascript, ReactJS, React Native, NodeJS e todo ecossistema em torno dessas tecnologias.</p>
                    </footer>
                    <div className="buttons">
                        <button>
                            <img src={heart_solid} alt="Like" />
                        </button>
                        <button>
                            <img src={times_solid} alt="Like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
     )
}