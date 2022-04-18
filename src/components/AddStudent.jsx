import { useState } from "react";
import { ShowStudents } from "./ShowStudents";

export const AddStudent = () => {
// const [adddata,setadddata]=useState({
//     "id": 3,
//     "first_name": "",
//     "last_name": "",
//     "email": "",
//     "gender": ["Female","male"],
//     "age": "",
//     "tenth_score": "",
//     "twelth_score": "",
//     "preferred_branch": ["law","commerce","science","sports","arts","acting"]
// })

const [adddata,setadddata]=useState([]);


const handleChenge=(e)=>{
    const {name,value}=e.target
    setadddata({
        ...adddata,
        [name]:value
    })
}

const handleSubmit = (e)=>{
    e.preventDefault();
    const vina =adddata;
    fetch("http://localhost:8080/students",{
      method: "POST",
      body: JSON.stringify(vina),
      headers:{"Content-Type": "application/json"}
    }).then(()=>{
      console.log(vina)
    })
  }


    return (
      <form className="addstudent">
        <div>
          Firstname:{" "}
          <input
          onChange={handleChenge}
        //   value={adddata.first_name}
            type="text"
            name="first_name"
            className="first_name"
            placeholder="enter first name"
          />
        </div>
        <div>
          {" "}
          Last Name:
          <input
           onChange={handleChenge}
        //    value={adddata.last_name}
            type="text"
            name="last_name"
            className="last_name"
            placeholder="enter last name"
          />
        </div>
        <div>
          {" "}
          Email:
          <input
           onChange={handleChenge}
        //    value={adddata.email}
            type="email"
            name="email"
            className="email"
            placeholder="enter email"
          />
        </div>
  
        <div>
          Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
          <div>
            Male
            <input
             onChange={handleChenge}
             
              name="gender"
              className="male"
              type="radio"
              value={"male"}
            />{" "}
            Female{" "}
            <input
             onChange={handleChenge}
          
              name="gender"
              className="female"
              type="radio"
              value={"female"}
            />
          </div>
        </div>
        <div>
          Age{" "}
          <input
           onChange={handleChenge}
        //    value={adddata.email}
            type="number"
            name="age"
            className="age"
            placeholder="enter age"
          />
        </div>
        <div>
          Tenth Score:{" "}
          <input
           onChange={handleChenge}
        //    value={adddata.email}
            type="number"
            name="tenth_score"
            className="tenth_score"
            placeholder="enter 10th score"
          />{" "}
        </div>
        <div>
          Twelth Score:{" "}
          <input
           onChange={handleChenge}
        //    value={adddata.email}
            type="number"
            name="twelth_score"
            className="twelth_score"
            placeholder="enter 12th score"
          />{" "}
        </div>
        <div>
          <select
            value={""} // select dropdown needs both value and onChange attributes
            name="preferred_branch"
            className="preferred_branch"
          >
            <option value="law">law</option>
            <option value="commerce">commerce</option>
            <option value="science">science</option>
            <option value="sports">sports</option>
            <option value="arts">arts</option>
            <option value="acting">acting</option>
          </select>
        </div>
  
        <input className="submit" type="submit" value="Submit" />
        {
          // <div className="error"></div>
          // show this div with proper error before submitting form, if there's anything not provided
          // eg: first name missing, age cannot be greater than 100 etc
        }
      </form>
    );
  };