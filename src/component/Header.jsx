import React from 'react'

function Header( {text,bgColor,fcolor}) {
    const hStyle= {
        backgroundColor:bgColor,
        color:fcolor,
    }
  return (
    <header style ={hStyle}>
      <p>{text}</p>
    </header>
  )
}
Header.defaultProps= {
    text:'Feedback UI'
}
export default Header

