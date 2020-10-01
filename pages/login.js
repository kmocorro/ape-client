import React, { useState } from 'react';
import { useRouter } from 'next/router'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export default function Index() {
  const router = useRouter();
  const [ token, setToken ] = useState('');
  const [ loginResponse, setLoginResponse ] = useState('');

  if(token.token){
    cookies.set('token', token.token, {path: '/'});
  } else {
    cookies.set('token', '', {path: '/'});
  }

  //console.log(token)

  const username = useLogin('');
  const password = useLogin('');
  const [ user_profile, setUser_profile ] = useState({employee_number: '', name: '', email: '', sps_team: '', shift: ''});

  function useLogin(init){
    const [ value, setValue ] = useState(init);
    const handleOnChange = (e) => {
      setValue(e.target.value);
    } 
    return {
      value,
      onChange: handleOnChange
    }
  }

  async function handleLogin(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', '123456789');
   // console.log('logging in..')
    let response = await fetch('http://meswebspf409.sunpowercorp.com:8080/api/login', {
      headers: headers,
      method: 'POST',
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })

    if(response.status === 200){
      setToken(await response.json());
      router.push('/')
    } else if(response.status === 401){
      setLoginResponse(await response.json())
    }
  }

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h3" component="h6" style={{fontWeight: 'bold'}} gutterBottom>
          maxeon ape +
        </Typography>
        <Container>
          <Grid container >
            <Typography variant="h6" gutterBottom style={{fontWeight: 'bold', marginBottom: 12}}>Employee Login</Typography>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="subtitle2">Username</Typography>
              <TextField 
                type="text"
                variant="outlined"
                id="username"
                margin="dense"
                value={username.value}
                onChange={username.onChange}
              />
              <Typography variant="subtitle2">Password</Typography>
              <TextField 
                type="password"
                variant="outlined"
                id="username"
                margin="dense"
                value={password.value}
                onChange={password.onChange}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={8}>
              <Typography variant="body2" color="textSecondary" gutterBottom style={{marginTop: 12, marginBottom: 8}} >
                By continuing means that you have read and agree to the terms and conditions of maxeon ape +.
              </Typography>
              {
                loginResponse ? (
                  <Typography color="error" gutterBottom>{loginResponse.message}</Typography>
                ):(
                  <></>
                )
              }
              {
                username.value && password.value ? (
                  <Button size="large" variant="contained" color="primary" onClick={handleLogin}>Login</Button>
                ):(
                  <Button size="large" variant="outlined" disabled>Login</Button>
                )
              }
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}
