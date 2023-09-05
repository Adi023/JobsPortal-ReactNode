import React, { useEffect } from 'react'
import { useState } from 'react'

export default function ViewDetails() {
    const [data, setData] = useState([]);

    useEffect((id) => {
        
        fetch("http://localhost:8001/view/"+{id})
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                setData(result)
            })
    }, [])

  return (
    <div style={{textAlign:'center',backgroundColor:'#eaa9a9',width:'1000px',left:'20%',position:'relative',borderRadius:'70px 0px 70px 0px'}}>
        
        {/* <div > {data.map((d) =>
            (
                <div id='home' key={d.id}>
                    <h1>Job Title :  {d.jobtitle}</h1>
                    <h3>Company Name : {d.companyname}</h3>
                    <h3>Location :  {d.location}</h3>
                    <h3>Compansation : {d.compansation}</h3>
                    <h3>Job Discription :{d.jobdiscription }</h3>
                    <h3>Requirements : {d.requirements}</h3>
                    <a href='/ViewJobs'><button>Back To View All Jobs</button></a>
                </div>
            ))}    
        </div> */}
                    <h1>Job Title :  {data.jobtitle}</h1>
                    <h3>Company Name : {data.companyname}</h3>
                    <h3>Location :  {data.location}</h3>
                    <h3>Compansation : {data.compansation}</h3>
                    <h3>Job Discription :{data.jobdiscription }</h3>
                    <h3>Requirements : {data.requirements}</h3>
                    <a href='/ViewJobs'><button>Back To View All Jobs</button></a>
        
    </div>
  )
}
