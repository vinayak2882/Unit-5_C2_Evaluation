import { useEffect, useState } from 'react'
// import { AddStudent } from "./AddStudent";


export const ShowStudents = () => {

const [todo, setTodo]=useState([]);

useEffect(()=>{
    async function getdata(){
        const data = await fetch("http://localhost:8080/students").then((e)=>e.json()
        );
        setTodo(data);
    }
    getdata();
},[]);

    return (
      <div>
        <div className="controls">
          <div>
           
            Sort By:{" "}
            <select
              // select dropdown needs both value and onChange
              className="sortby"
            >
              <option value="first_name">First Name</option>
              <option value="gender">Gender</option>
              <option value="age">Age</option>
              <option value="tenth_score">10th Score</option>
              <option value="twelth_score">12th Score</option>
            </select>
          </div>
          <div>
            Order:
            <select
              // select dropdown needs both value and onChange
              className="sortorder"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <button className="sort">sort</button>
        </div>
        <table className="table">
           
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Age</th>
              <th>10th Score</th>
              <th>12th Score</th>
              <th>Branch</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {/* populate all rows like below: */ todo.map((todo)=>(
                
            <tr className="row">
              <td className="first_name">{todo.first_name}</td>
              <td className="last_name">{todo.last_name}</td>
              <td className="email">{todo.email}</td>
              <td className="gender">{todo.gender}</td>
              <td className="age">{todo.age}</td>
              <td className="tenth_score">{todo.tenth_score}</td>
              <td className="twelth_score">{todo.twelth_score}</td>
              <td className="preferred_branch">{todo.preferred_branch}</td>
            </tr>
                  ))}
          </tbody>
        </table>
      </div>
    );
  };