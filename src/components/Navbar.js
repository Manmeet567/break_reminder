import React from 'react'

function Navbar() {
    
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const currentDate = new Date();
    const dayName = currentDate.getDay()

  return (
    <nav style={{padding:'20px'}}>
        <h1>BREAK REMINDER</h1>
        <div className="dateContent">
            <b><p className='date' style={{fontFamily:'Verdana, Geneva, Tahoma, sans-serif'}}>{currentDate.getDate() <= 9 ? '0'+currentDate.getDate():currentDate.getDate()}-{currentDate.getMonth() <= 9 ? '0'+(currentDate.getMonth()+1):currentDate.getMonth()}-{currentDate.getFullYear() <= 9 ? '0'+currentDate.getFullYear():currentDate.getFullYear()}</p></b>
            <p className='day' style={{marginTop:'5px'}}>{days[dayName]}</p>
        </div>
    </nav>
  )
}

export default Navbar