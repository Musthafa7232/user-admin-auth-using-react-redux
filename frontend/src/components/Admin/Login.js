import React,{useState} from 'react'
import { Link  ,useNavigate } from 'react-router-dom';
import {Button,TextField,Grid,Box,Typography,Avatar} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import axios from '../../Axios'
import { useDispatch } from 'react-redux';
import { authAdmin } from '../../Actions/AuthAdmin';
const Login = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
  const [error,setError]=useState('')
  const submitHandler=(e)=>{
    e.preventDefault()
    const admin = {
      email,
      password
    }
    console.log(admin);
    axios.post('/admin/login',admin).then((res)=>{
if(res.data.success){
  localStorage.setItem('authorization.admin', JSON.stringify(res.data.token))
  dispatch(authAdmin())
  navigate('/admin/home')
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
  <Avatar sx={{ m: 2,width: 100, height: 100, bgcolor: 'error.main',marginX:'auto' }}> 
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

    <Button variant="outlined" color="error" type='submit'>
Submit
</Button>

   </Box>
    </CardContent>

</Card>
</Grid>
</div>
  )
}

export default Login