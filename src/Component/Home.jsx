import React from 'react'

export default function Home() {
  return (
    <div style={{textAlign:'center'}}>
    <h1>JOB PORTAL</h1>

    <a href='AddJobs'>
        <div id='home'>
            <h1>Add Jobs</h1>
       </div>
    </a>

    <a href='ViewJobs'>
        <div id='home'>
        <h1>View Jobs</h1>
       </div>
    </a>

    </div>
  )
}
