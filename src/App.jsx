import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import { useEffect, useState } from 'react'
import './App.css';


function App() {

  const [show, setshow]=useState(true);

  return (

    <div className="App">
       
       



      <button className="togglebtn" onClick={()=>{
        setshow(!show)
      }}>{show?"Go To Student List":"Add Student"}</button>
      {show?<AddStudent/>:<ShowStudents/>}
      { /* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;