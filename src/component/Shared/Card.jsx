import React from "react";

function Card({children, reverse}) {
  return (
    
       <div className={`card ${reverse && 'reverse'}`}>
           {children}
       </div>

       )

// return(
//     <div className="card" style= {{ backgroundColor: reverse ? 'red' : 'blue', color : reverse ? 'white' : 'red', }}>
//         {children}
//     </div>
// ) 

}

Card.defaultProps= {
    reverse: false,
}

export default Card;
