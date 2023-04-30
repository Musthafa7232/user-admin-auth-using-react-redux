import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {Button,TextField,Grid,Box,Typography,Avatar} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from '../../Axios'
function Signup() {
  const navigate=useNavigate()
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[confPassword,setConfPassword]=useState('')
  const [error,setError]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
const user={
  name,
  email,
  password,
  confPassword
}
axios.post('/signup',user).then((res)=>{
  if(res.data.success){
navigate('/login')
  }
else if(res.data.error){
  setError(res.data.error)
}
})
  }
  return (
    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
      <Card sx={{ maxWidth: 400,marginTop:'10rem' }}>
      
      <Avatar sx={{ m: 2,width: 100, height: 100, bgcolor: 'primary.main',marginX:'auto' }}> 
          </Avatar>
      <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <p style={{color:'red'}}>{error}</p>
        <CardContent>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '35ch' },
        
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
        <TextField
          label="Name"
          id="outlined-size-small"
          margin="dense"
          onChange={(e)=>setName(e.target.value)}
        />
   
    <TextField
          id="outlined-password-input"
          label="Email"
          type="email"
          margin="dense"
          onChange={(e)=>setEmail(e.target.value)}
        />
  
   <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          margin="dense"
          autoComplete="current-password"
          onChange={(e)=>setPassword(e.target.value)}
        />
        <TextField
          id="outlined-password-input"
          label="Confirm Password"
          type="password" 
          margin="dense"
          autoComplete="current-password"
          onChange={(e)=>setConfPassword(e.target.value)}
        />
        <Button variant="outlined" color="primary" type='submit'>
  Submit
</Button>
<Typography sx={{display:'block',textAlign:'center',mt:2}} variant="p" gutterBottom>
       Already Have an Account?<Link style={{color:'black'}} to="/login">Login</Link>
      </Typography>
       </Box>
        </CardContent>
    
    </Card>
    </Grid>
    
  )
}

export default Signup