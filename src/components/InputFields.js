import React from 'react'

function InputFields({ workTime,breakTime, setWorkTime, setBreakTime }) {


  return (
    <form className="inputFields">
                <div className="TimeInput">
                    <label htmlFor="workTime">Select Work Time (Minutes)</label>
                    <div className='range'>
		                <input type="range" min='1' max='60' step='1' onChange={(e) => setWorkTime(e.target.value)} value={workTime}/>
		                <span>{workTime < 9 ? '0'+workTime : workTime}</span>
	                </div>
                </div>

                <div className="TimeInput">
                    <label htmlFor="workTime">Select Break Time (Minutes)</label>
                    <div className='range'>
		                <input type="range" min='1' max='20' step='1' onChange={(e) => setBreakTime(e.target.value)} value={breakTime}/>
		                <span>{breakTime < 9 ? '0'+ breakTime : breakTime}</span>
	                </div>
                </div>

            </form>
  )
}

export default InputFields