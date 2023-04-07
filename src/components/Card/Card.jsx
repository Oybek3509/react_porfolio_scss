import React from 'react';
import "./index.scss";
const Card = (props) => {
   return (
      <>
      <div className='posts_wrap_one'>
           <h3>{props.title}</h3>
           <p>{props.year}      |    {props.name}</p>
           <p>{props.text}</p>




      </div>


     
      
      
      </>

   )
    
  
};
export default Card;
