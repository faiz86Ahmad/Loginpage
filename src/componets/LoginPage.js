import React from 'react'
import {Paper,Box, TextField, Button} from "@material-ui/core";
import Image from "../Images/Login.jpg"


const LoginPage = () => {
    return (
        <div className="container login-page">
            <Paper  elevation={20} style={{marginTop:"30px",height:"104vh"}}>
            <div className="col-md-6 col-12 right">
                <div className="right-box">
            <button type="button" class="btn btn-warning test-btn">Test</button>
            <h1 style={{fontSize:"25px",marginTop:"20px"}}>Unlock your stuck revenue</h1>
            <p style={{textAlign:"center"}}>We help you unlock the true potential connect with your customer to understand the rights and wrong with your product.</p>
            
         <img src={Image} alt="img" className="img-fluid" width="310px" height="230px"/>
         </div>

</div>

            <div className="brand-box">
                        <h1 style={{color:"#F6D832"}}>DOOF</h1>
                    </div>
                   
                   
                    <Box p={2}>
            <div className="row">
                
                <div className="col-md-6 col-12">
                    
                    <h1>Login</h1>
                    <form>
                    
                        <TextField id="Email" 
                        type="email" 
                        variant="outlined" 
                        label="Email" 
                        placeholder="Enter your Email Id"
                        fullWidth 
                        style={{marginTop:"30px",width:"400px",height:"55px",backgroundColor:"#F0F0F0"}}
                        
                        />
                
                  
                    
                        <TextField id="password" 
                        type="email" 
                        variant="outlined" 
                        label="password" 
                        placeholder="Enter your password"
                        fullWidth
                        style={{marginTop:"30px",width:"400px",height:"55px",backgroundColor:"#F0F0F0"}} 
        
                        
                        />
        
                        <a href=""><h4 className="forgot-p">Forgot Password</h4></a>
                        <button type="button" class="btn btn-warning login-btn">Login</button>
                        </form>
                    
                        </div>
                 
                       
            
                <div style={{marginTop:"10px"}}>
                    <span>Dont't have an account yet? <a><b>Signup</b></a></span>
                </div>
                
                
                
            </div>
            

            <div className="footer">
                <span>Terms of service</span>
                <span className="privacy"> Privacy Ploicy</span>
                <div className="footer-bubble"></div>
               
            </div>
            
            </Box>
                </Paper>
            
        </div>
    )
}

export default LoginPage
