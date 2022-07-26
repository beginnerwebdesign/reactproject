import { Link, useNavigate } from "react-router-dom";
import { FormControl, TextField } from "@mui/material";
import { InputLabel, OutlinedInput } from "@mui/material";
import {Button} from '@mui/material';
import { useState } from "react";

export default function Login() {
    let navigate=useNavigate();
    const [email,setEmail]=useState('');
    return (
        <>
           
                <div className="container text-center p-5">
                    <h3>Login</h3>
                    <p>Don't have an account?<Link to="/signup" style={{ 'color': 'black' }}>Create now</Link></p>
                    <br />
                    <br />
                    <form onSubmit={e=>email?navigate('/userhome'):navigate('/adminhome')}>
                        <div className="p-2">
                        <FormControl>
                            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} size='small' onChange={e=>setEmail(e.target.value)} />
                        </FormControl>
                        </div>
                        <div className="p-2">
                        <FormControl >
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput size="small"
                                label="Password"
                            />
                        </FormControl>
                        </div>
                        <div className="p-2">
                        <Button type="submit" variant="contained" style={{ 'backgroundColor': "#525b69" }} > Submit </Button>
                        </div>
                        </form>
                        <Link to="/forgotpassword" style={{ 'color': 'black' }}>Forgot your Password?</Link>
                    
                </div>
       
        </>
    )
}