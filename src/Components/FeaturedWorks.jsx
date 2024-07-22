import React ,{  useState } from 'react'
import './FeaturedWorks.css';
import { FaArrowRight } from "react-icons/fa";
import image1 from '../images/nextflix.png';
import image2 from '../images/spotlight.png';
import image3 from '../images/ordershiped.png';
import imagegit1 from '../images/Spotlight_gif.gif';
import imagegif2 from '../images/OrderReciveed_gif.gif';
import { Link } from 'react-router-dom';

const FeaturedWorks = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
    const imagepath = [{imgpath  : image1 , imggif : image1, title : "Netflix Merchandise Store" , sub_title : "Mobile App" ,to_path_text : "View Case  Study" } , {imgpath : image2, imggif : imagegit1 , title : "Spotlight"  , to_path_text : "View"} , {imgpath : image3, imggif : imagegif2,title : "Order Shipped " , to_path_text : "View" }]; 
    const handleMouseEnter = (image) => {
      setHoveredImage(image);
    };
  
    const handleMouseLeave = () => {
      setHoveredImage(null);
    };
  return (
    

   
     <div className='fetures'>
      <h1>Featured Works</h1>
      <div className='features-imgs'>
        {
            imagepath.map((image,index)=>{
              const {imgpath,imggif , title , sub_title , to_path_text } = image;
                return (
                  <Link to={`/work/${title}`} className='link' >
                <div className='card'  onMouseEnter={() => handleMouseEnter(title)}
        onMouseLeave={handleMouseLeave} >
                  <img key={index}   src={hoveredImage === title ? imggif : imgpath} alt={title} className='features-img  full-image' />
                  <div className='image-text'>
                  <span className='title'>{title}</span><br />
                  <span className='sub_title'>{sub_title}</span>
                  <br />
                 
                  <span className='to_path_text'>{to_path_text}</span>
                  <span className='arrow'><FaArrowRight/></span>
                  
                  </div>
                </div></Link>)
            })
        }
         
      </div>
      
    </div>
  
    
   
  )
}

export default FeaturedWorks
