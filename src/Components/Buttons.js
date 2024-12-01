import React from 'react'

function Buttons({text,className} ) {
    return (
        <>
         <button className={className}>{text}</button>
        </>
    )
}

export default Buttons