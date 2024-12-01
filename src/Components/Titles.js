import React from 'react'

function Titles({text,className,anger,classNames}) {
  return (
    <>
       <div  className={className}>{text} <a className={classNames} href="#">{anger}</a></div>  
      
    </>
  )
}

export default Titles