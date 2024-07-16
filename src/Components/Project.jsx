import React, { useEffect } from 'react'
import image1 from '../images/1.png';
import image2 from '../images/2.png';
import image3 from '../images/3.png';
import image4 from '../images/4.png';
import image5 from '../images/5.png';
import image6 from '../images/6.png';
import image7 from '../images/7.png';
import image8 from '../images/8.png';
import image9 from '../images/9.png';
import image10 from '../images/10.png';
import image11 from '../images/11.png';
import image12 from '../images/12.png';
import image13 from '../images/13.png';
import image14 from '../images/14.png';
import image15 from '../images/15.png';
import image16 from '../images/16.png';
import image17 from '../images/17.png';
import image18 from '../images/18.png';
import image19 from '../images/19.png';
import image20 from '../images/20.png';
import image21 from '../images/21.png';
import image22 from '../images/22.png';
import image23 from '../images/23.png';
import image24 from '../images/24.png';
import image25 from '../images/25.png';
import './Project.css';
import imagegif1 from '../images/Spotlight_gif.gif';
import imagegif2 from '../images/OrderReciveed_gif.gif';
import { useParams } from 'react-router-dom';
const Project = () => {
    const images = [{path : image1 , heigth : 810} , {path : image2 , heigth : 837} , {path : image3 , heigth : 748} , {path : image4 , heigth : 709} ,
      {path : image5 , heigth : 1113} , {path : image6 , heigth : 1685} , {path : image7 , heigth : 810 } , {path : image8  , height : 790} ,
      {path : image9 , heigth : 810} ,{path : image10 , heigth : 810} ,{path : image11  , heigth : 1155}, {path : image12 , heigth : 695} , 
      {path : image13 , heigth : 1114} , {path : image14 , heigth : 1128} ,{path : image15 , heigth : 1245} , {path : image16 , heigth : 1115} ,
      {path : image17 , heigth : 1157} , {path : image18 , heigth : 1157} , {path : image19 , heigth : 810 } , {path : image20 , heigth : 810} ,
       {path : image21 , heigth : 658} , {path : image22 , heigth : 618} , {path : image23 , heigth : 552} , {path : image24 , heigth : 597}, {path : image25 , heigth : 656}];
       const {name} = useParams();
       
  if(name === "Netflix Merchandise Store"){
    return (
      <div className='project-details'>
        {
          images.map((img)=>{
            const { path , heigth } = img;
              return <img src={path} style={{height : heigth}} alt='err' className='project-img' />
          })
        }
      </div>
    )
  }else if(name === "Spotlight"){
    return (
      <div className='project-details'>
         <img src={imagegif1}  alt='err' className='project-img spotligth ' />
      </div>
    )
  }
  else if(name === "Order Shipped"){
    return (
      <div className='project-details'>
         <img src={imagegif2}  alt='err' className='project-img spotligth ' />
      </div>
    )
  }
}

export default Project
