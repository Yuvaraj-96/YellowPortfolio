import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from '../../img/heartemoji.png';
import { useContext } from 'react';
import { themeContext } from '../../Context';



const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
   <div className="services">
       <div className="awesome">
           <span style={{color:darkMode?'white':''}}> My Awesome</span>
           <span>services</span>
           <span>Lorem <br/>ispum</span>
           <a href={Resume} download>
           <button className='button s-button'>Download CV</button>
           </a>
          
           <div className="blur s-blur1" style={{background:'#ABF1FF94'}}></div>

       </div>
       <div className="cards">
           <div style={{left:'18rem'}}>
               <Card emoji={HeartEmoji} heading={'Design'} detail={"Figma,sketch,Photoshop"}/>                           
           </div>
           <div style={{top:'12rem',left:'-4rem'}}>
               <Card emoji={Glasses} heading={'Developer'} detail={"HTML, CSS, JavaScript, React"}/>                           
           </div>
           <div style={{top:'19rem',left:'12rem'}}>
              <Card emoji={Humble} heading={'UI/UX'} detail={"Figma,sketch,Photoshop"}/>             
           </div>
           <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>
       </div>
   </div>
  )
}

export default Services