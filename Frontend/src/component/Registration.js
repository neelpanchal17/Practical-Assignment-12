import axios from "axios";
import { Link } from "react-router-dom";

const Registration = () =>{
    const user ={
        name:"",
        username:"",
        password:"",
        age:"",
    };
    const registeruser = () =>{
        axios.post("/api/registration",user).then(res => console.log(res.data));
    };
    return(
        <div>
            <h1>Registration Form</h1>
            <br/>
            <input type="text"
            placeholder="Enter Name"
            onChange={(e)=>(user.name = e.target.value)}
            />
            <br/>
            <input type="text"
            placeholder="Enter Username"
            onChange={(e) => (user.username = e.target.value)}
            /> 
            <br/>
            <input type="password"
            placeholder="Enter Password"
            onChange={(e) => (user.password = e.target.value)}
            />
            <br/>
            <input type="text"
            placeholder="Enter Age"
            onChange={(e) => (user.age = e.target.value)}
            />
            <br/>
            <button onClick={registeruser}>Register</button>
            <br/>
            <Link to='/'>Already have an Account ?</Link>
        </div>
    );
}
export default Registration