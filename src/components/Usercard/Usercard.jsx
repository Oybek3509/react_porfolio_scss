import React from 'react';
import "./index.scss";

const User = (props) => {
      return (
         <>
        
   
         
         <div className="furute_item_box">
                          
                          <img className="box_img" src={props.img} alt=""/>
                       
                         <div className="box_wrap">
                          <h3>{props.title}</h3>
                          <div className="box_item">
                              <p>{props.year}</p>
                              <p>{props.category}</p>
                          </div>
                          <p className="box_text">{props.text}</p>
   
                         </div>
   
          </div>
         
         
         </>
   
      )
       
     
   };

   
export default User;