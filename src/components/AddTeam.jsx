import axios from 'axios'
import React, { useState } from 'react'
import NavigationBar from './NavigationBar'


const AddTeam= () => {
    const [input, changeInput] = useState(
         {
        teamid:"",
        teamname:"",
        teamleadername:"",
        leaderemail:"",
        leaderphone:"",
        collegename:"",
        numberofmembers:"",
        projecttitle:"",
        problemstatementtrack:"",
        technologystack:"",
        mentorname:"",
        registartiondate:"",
        stationnumber:""
    }

    )

const inpuHandler=(event)=>{
    changeInput({...input,[event.target.name]:event.target.value})
}

const readValue=()=>{
    console.log(input)
    axios.post("http://localhost:2000/add-team",input).then(
        (response)=>{
            alert("Team added successfully")
        }
    ).catch(
        (error)=>{
            console.error("Error adding Team",error)
            alert("failed to add Team")
        }
    )
    
}


    return (
        <div>
           <NavigationBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Team ID</label>
                                <input 
                                name="teamid"
                                value={input.teamid}
                                onChange={inpuHandler}
                                type="text" className="form-control"
                                 />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Team Name</label>
                                <input 
                                name="teamname"
                                value={input.teamname}
                                onChange={inpuHandler}
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Team Leader Name</label>
                                <input 
                                name="teamleadername"
                                value={input.teamleadername}
                               onChange={inpuHandler}
                                
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Leader Email</label>
                                <input
                                name="leaderemail"
                                value={input.leaderemail}
                                onChange={inpuHandler}
                                
                                type="email" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Leader Phone</label>
                                <input 
                                name="leaderphone"
                                value={input.leaderphone}
                               onChange={inpuHandler}
                                type="number" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">College Name</label>
                                <input 
                                name="collegename"
                                value={input.collegename}
                                onChange={inpuHandler}
                                
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Number of Members</label>
                                <input 
                                name="numberofmembers"
                                value={input.numberofmembers}
                                onChange={inpuHandler}
                                type="number" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Project Title</label>
                                <input
                                name="projecttitle"
                                value={input.projecttitle}
                                onChange={inpuHandler}
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Problem Statement Track</label>
                                <input 
                                name="problemstatementtrack"
                                value={input.problemstatementtrack}
                                onChange={inpuHandler}
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Technology Stack</label>
                                <input
                                name="technologystack"
                                value={input.technologystack}
                                onChange={inpuHandler}
                                type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Mentor Name</label>
                                <input
                                name="mentorname"
                                value={input.mentorname}
                                onChange={inpuHandler}
                                type="text" className="form-control"/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Registration Date</label>
                                <input
                                name="registartiondate"
                                value={input.registartiondate}
                                onChange={inpuHandler}
                                type="date" className="form-control"/>

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Station Number</label>
                                <input
                                name="stationnumber"
                                value={input.stationnumber}
                                onChange={inpuHandler}
                                type="number" className="form-control"/>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-success" onClick={readValue}>ADD</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTeam