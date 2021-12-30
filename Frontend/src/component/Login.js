import axios from "axios";
import  { Link, useNavigate } from 'react-router-dom';

const Login = () =>{
    const user ={
        username:"",
        password:"",
       
    };
    let navee=useNavigate()
    const loginUser = () =>{
        axios.post("/api/login",user).then((res)=>{
            console.log(res.data.data);
            if((res.data.data).length===1)
            {
               navee('/addtask',{replace:true}) 
            }
        });
    };
    return(
        <div>
                <br/>
                <br/>
                <h3>Login </h3>
                <input 
                    placeholder="username"
                    type="text"
                    onChange={(e) => (user.username = e.target.value)}/>
                <br/>
                <br/>
                <input 
                    placeholder="password" 
                    type="password"
                    onChange={(e) => (user.password = e.target.value)}
                    />
                <br/>
                <br/>
                <button onClick={loginUser}>Login</button>
                <br/>
                <Link to='/registration'>Register here</Link>
        </div>
    )
}
export default Login