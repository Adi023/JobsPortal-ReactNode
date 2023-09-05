import React, { useEffect } from 'react'
import { useState } from 'react'

export default function ViewJobs() {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8001/viewjobs")
            .then(response => response.json())
            .then((result) => {
                console.log(result)
                setData(result)
            })
    }, [])

    return (
        <div id='dv'>
            <h1>View Jobs</h1>
            <a href='/'><button>Home</button></a>
            <br></br>

            <div > {data.map((d) =>
            (
                <div id='home' key={d.id}>
                    <h1>Job Title :  {d.jobtitle}</h1>
                    <h3>Company Name : {d.companyname}</h3>
                    <h3>Location :  {d.location}</h3>
                    <h3>Compansation : {d.compansation}</h3>
                    <a href={'ViewDetails/'+d.id}> ViewDetails </a>
                </div>
            ))}    
            </div>

        </div>
    )
}
