import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Button,TextField,Grid,Box,Typography,Avatar} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import axios from '../../Axios'
import { useDispatch } from 'react-redux';
import { authUser } from '../../Actions/AuthUser';
function Login() {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
const [error,setError]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    const user = {
      email,
      password
    }
    axios.post('/login',user).then((res)=>{
if(res.data.success){
  localStorage.setItem('authorization.user', JSON.stringify(res.data.token))
 dispatch(authUser())
  navigate('/')
}else if(res.data.error){
  setError(res.data.error)
}
    })
  }
  return (
    <div className=''>
        <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
      <Card sx={{ maxWidth: 345,marginTop:'10rem' }}>
      <Avatar sx={{ m: 2,width: 100, height: 100, bgcolor: 'success.main',marginX:'auto' }}> 
          </Avatar>
      <Typography component="h1" variant="h5">
           Login
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

        <Button variant="outlined" color="success" type='submit'>
  Submit
</Button>
<Typography sx={{display:'block',textAlign:'center',mt:2}} variant="p" gutterBottom>
       Already Have an Account?<Link style={{color:'black'}} to="/signup">Signup</Link>
      </Typography>
       </Box>
        </CardContent>
    
    </Card>
    </Grid>
    </div>
  
  )
}

export default Login