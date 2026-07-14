import axios from 'axios'

import { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewTeam= () => {
    const [data, changeData] = useState([])
    const fetchData = () => {
        axios.post("http://localhost:2000/view-team").then(

            (response) => {

                changeData(response.data)

            }
        ).catch(
            (error) => {
                console.log(error)
            }
        )
    }
    useEffect (
        () => {
            fetchData()
        },[]
    )


return (
    <div>
      <NavigationBar/>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">TeamID</th>
                    <th scope="col">TeamName</th>
                    <th scope="col">TeamLeader</th>
                    <th scope="col">LeaderEmail</th>
                    <th scope="col">LeaderPhone</th>
                    <th scope="col">CollegeName</th>
                    <th scope="col">NumberofMembers</th>
                    <th scope="col">ProjectTitle</th>
                    <th scope="col">ProblemState</th>
                    <th scope="col">technologyStack</th>
                    <th scope="col">Mentor</th>
                    <th scope="col">RegistrationDate</th>
                    <th scope="col">Table</th>
                </tr>
            </thead>
            <tbody>
                {data.map(
                    (value, index )=> {
                        return (
                            <tr>
                                
                                <td>{value.teamid}</td>
                                <td>{value.teamname}</td>
                                <td>{value.teamleadername}</td>
                                <td>{value.leaderemail}</td>
                                <td>{value.leaderphone}</td>
                                <td>{value.collegename}</td>
                                <td>{value.numberofmembers}</td>
                                <td>{value.projecttitle}</td>
                                <td>{value.problemstatementtrack}</td>
                                <td>{value.technologystack}</td>
                                <td>{value.mentorname}</td>
                                <td>{value.registrationdate}</td>
                                <td>{value.stationnumber}</td>

                            </tr>
                        )
                    }
                    )}
            </tbody>
        </table>
    </div>
)
}



export default ViewTeam