import React from 'react'

import { useForm } from 'react-hook-form'
import axios from 'axios'

export default function AddJobs() {
    const{register,handleSubmit}=useForm()
    const sendData=(e)=>
    {
        // console.log(e);
        axios.post("http://localhost:8001/add",{e})
        alert("Data Inserted Succesfully")
    }

  return (
    <div id='dv'>
        <h1>Add Jobs</h1>
        
<a href='/'><button>Home</button></a>

<form onSubmit={handleSubmit(sendData)}>
    <h2>Add Details</h2>
    <label>Job Title : </label><input type="text" {...register('jobtitle')}></input><br/><br/>
    <label>Company Name : </label><input type="text" {...register('companyname')}></input><br/><br/>
    <label>Location : </label><input type="text" {...register('location')}></input><br/><br/>
    <label>Compansation : </label><input type="text" {...register('compansation')}></input><br/><br/>
    <label>Job Discription : </label><input type="textarea" {...register('jobdeatils')}></input><br/><br/>
    <label>Requirements : </label><input type="text" {...register('requirements')}></input><br/><br/>
    <label></label><input type={'submit'}></input>
    
</form>

    </div>
  )
}
