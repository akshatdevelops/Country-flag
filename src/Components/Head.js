import React, { useState } from 'react'

const Head = () => {
  const [isdark,setisdark]=useState(true)
  const handleClick=()=>{
    document.body.classList.toggle("light-theme")
    setisdark(!isdark)

  }
  return (
    <div>
      <header className='header'>
        <div>
            <h1>Where in the world?</h1>
        </div>

        <div className='dark-mode-btn'>
            <button onClick={handleClick}>{isdark?"Light Mode ☀️":"Dark Mode🌙"}</button>
        </div>

      </header>
    </div> 
  )
}

export default Head
