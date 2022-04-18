import React from 'react'
import './Intro.css';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import Linkedin from '../../img/linkedin.png';

import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Yuvaraj Poobalan</span>
                <span>Frontend Developer with
                 high level of experience in web designing
                 and development, producting the quality work</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <img src={Github} alt=''></img>
                <img src={Instagram} alt=''></img>
                <img src={Linkedin} alt=''></img>
            </div>
        </div>
        <div className="i-right">        
                <img src={Vector1} alt=''></img>
                <img src={Vector2} alt=''></img>
                <img src={boy} alt=''></img>
                <img src={glassesimoji} alt=''/>
                <div style={{top:'-4%', left:'68%'}}>
                    <FloatingDiv image={crown} txt1='web' txt2='Developer'></FloatingDiv>
                </div>
                <div style={{top:'18rem', left:'0rem'}}>
                    <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'></FloatingDiv>
                </div>
        </div>
    </div>
  )
}

export default Intro