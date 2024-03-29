import React, { Fragment, useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright'
import useSWR from 'swr'
import Cookies from 'universal-cookie'
import fetch from 'unfetch'
const cookies = new Cookies()

import Cohen from '../components/Cohen'
import SnackbarCohen from '../components/SnackbarCohen'
import { useRouter } from 'next/router'

function EmployeeProfile() {
}

export default function Index() {
  
  const router = useRouter()

  const [token, setToken] = useState(cookies.get('token'))

  const fetcher = url => fetch(url, {headers: { 'Content-Type': 'application/json', 'Authorization': token}, method: 'POST'}).then(r => r.json())

  const { data, error } = useSWR('http://meswebspf409.maxeoncorp.com:7001/api/employee', fetcher)

  const handleLogin = () => {
    router.push('/login');
  }
  const handleLogout = () => {
    cookies.remove('token', { path: '/' })
    setToken('')
  }
  
  /*
  const [ isCohen, setIsCohen ] = useState({});
  useEffect(() => {
    cohen();

    async function cohen(){
      let response = await fetch('http://meswebspf409.maxeoncorp.com:7001/api/iscohen', {
        headers: { 'Content-Type': 'application/json', 'Authorization': token},
        method: 'POST'
      })
  
      if(response.status === 200){
        console.log(await response.json())
      }
    }
  
  }, [data])
  */

  // cohenn
  const [ toggle_cohen, setToggle_cohen ] = useState(true)
  const [ isSubmitCohen, setIsSubmitCohen ] = useState(false)

  const b1 = useCohen('', 'b1');
  const b2 = useCohen('', 'b2');
  const b3 = useCohen('', 'b3');
  const b6 = useCohen('', 'b6');
  const b9 = useCohen('', 'b9');
  const b10 = useCohen('', 'b10');
  const b4 = useCohen('', 'b4');
  const b5 = useCohen('', 'b5');
  const b7 = useCohen('', 'b7');
  const b8 = useCohen('', 'b8');
  const a1 = useCohen('', 'a1');
  const a2 = useCohen('', 'a2');
  const a3 = useCohen('', 'a3');
  const a4 = useCohen('', 'a4');
  const a5 = useCohen('', 'a5');
  const a6 = useCohen('', 'a6');
  const a7 = useCohen('', 'a7');
  const d1 = useCohen('', 'd1');
  const d2 = useCohen('', 'd2');
  const d3 = useCohen('', 'd3');
  const d4 = useCohen('', 'd4');
  const d5 = useCohen('', 'd5');
  const d6 = useCohen('', 'd6');
  const d7 = useCohen('', 'd7');

  function useCohen(init, id){
    const [ value, setValue ] = useState(init);

    const handleOnChange = (e, newValue) => {
      setValue(newValue);
    }
    
    const handleReset = () => {
      setValue('')
    }

    return {
      id,
      value,
      onChange: handleOnChange,
      onReset: handleReset
    }
  }
  
  const [ openSnackbarCohen, setOpenSnackbarCohen ] = useState(false);
  const [ submitCohenResponse, setSubmitCohenResponse ] = useState('');

  async function handleSubmitCohen(){
    setIsSubmitCohen(true)
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('Authorization', isToken);

    let response = await fetch('http://meswebspf409.maxeoncorp.com:7001/api/cohen', {
      headers: headers,
      method: 'POST',
      body: JSON.stringify({
        employee_number: data.profile.employeeNumber,
        b1: b1.value,
        b2: b2.value,
        b3: b3.value,
        b6: b6.value,
        b9: b9.value,
        b10: b10.value,
        b4: b4.value,
        b5: b5.value,
        b7: b7.value,
        b8: b8.value,
        a1: a1.value,
        a2: a2.value,
        a3: a3.value,
        a4: a4.value,
        a5: a5.value,
        a6: a6.value,
        a7: a7.value,
        d1: d1.value,
        d2: d2.value,
        d3: d3.value,
        d4: d4.value,
        d5: d5.value,
        d6: d6.value,
        d7: d7.value,
      })
    })

    if(response.status === 200){
      setToggle_cohen(false)
      setSubmitCohenResponse(await response.json())
      setOpenSnackbarCohen(true)
      
      router.reload();
      
    }
  }

  const handleCloseSnackbarCohen = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbarCohen(false);
  }
  

  if(error) return <div>failed to load.</div>
  if(!token) return <div>Please scan QR code and login. or <Link href="/login" style={{color:"blue"}}>go to login</Link></div>
  if(!data) return <div>loading...</div>

  return (
    <Container maxWidth="sm">
      <Box my={4}>
            <Fragment>
                <Typography variant="h3" component="h6" style={{fontWeight: 'bold'}} gutterBottom>
                  maxeon ape +
                </Typography>
                <Typography variant="h6" style={{fontWeight: 'bold'}} color="primary" >
                  {data.profile.displayName} / {data.profile.employeeNumber}
                </Typography>
                <Typography variant="body2" color="textPrimary">
                  {data.profile.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {data.profile.department}
                </Typography>
                <Button size="small" onClick={handleLogout} variant="text">
                  logout
                </Button>
                {
                  data.flow.length > 0 ? (
                    data.flow.map(data => (
                      data.flow_id === "1" ? (
                        data.status === 0 ? (
                          <Grid>
                            <Grid item>
                              <Typography variant="h6">Urinalysis</Typography>
                            </Grid>
                          </Grid>
                        ):(
                          <div style={{display: 'flex'}}>
                          <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">Urinalysis</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                          </div>
                        )
                      ):(
                        data.flow_id === "2" ? (
                          data.status === 0 ? (
                            <Grid>
                              <Grid item>
                                <Typography variant="h6">CBC</Typography>
                              </Grid>
                            </Grid>
                          ):(
                            <div style={{display: 'flex'}}>
                            <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">CBC</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                            </div>
                          )
                        ):(
                          data.flow_id === "3" ? (
                            data.status === 0 ? (
                              <Grid>
                                <Grid item>
                                  <Typography variant="h6">Liver Function Test</Typography>
                                </Grid>
                              </Grid>
                            ):(
                              <div style={{display: 'flex'}}>
                              <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">Liver Function Test</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                              </div>
                            )
                          ):(
                            data.flow_id === "4" ? (
                              data.status === 0 ? (
                                <Grid>
                                  <Grid item>
                                    <Typography variant="h6">Eye Test</Typography>
                                  </Grid>
                                </Grid>
                              ):(
                                <div style={{display: 'flex'}}>
                                <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">Eye Test</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                                </div>
                              )
                            ):(
                              data.flow_id === "5" ? (
                                data.status === 0 ? (
                                  <Grid>
                                    <Grid item>
                                      <Typography variant="h6">ECG</Typography>
                                    </Grid>
                                  </Grid>
                                ):(
                                  <div style={{display: 'flex'}}>
                                  <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">ECG</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                                  </div>
                                )
                              ):(
                                data.flow_id === "6" ? (
                                  data.status === 0 ? (
                                    <Grid>
                                      <Grid item>
                                        <Typography variant="h6">Ultrasound</Typography>
                                      </Grid>
                                    </Grid>
                                  ):(
                                    <div style={{display: 'flex'}}>
                                    <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">Ultrasound</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                                    </div>
                                  )
                                ):(
                                  data.flow_id === "7" ? (
                                    data.status === 0 ? (
                                      <Grid>
                                        <Grid item>
                                          <Typography variant="h6">Chest Xray</Typography>
                                        </Grid>
                                      </Grid>
                                    ):(
                                      <div style={{display: 'flex'}}>
                                      <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">Chest Xray</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                                      </div>
                                    )
                                  ):(
                                    data.flow_id === "8" ? (
                                      data.status === 0 ? (
                                        <Cohen
                                          b1={b1}
                                          b2={b2}
                                          b3={b3}
                                          b6={b6}
                                          b9={b9}
                                          b10={b10}
                                          b4={b4}
                                          b5={b5}
                                          b7={b7}
                                          b8={b8}
                                          a1={a1}
                                          a2={a2}
                                          a3={a3}
                                          a4={a4}
                                          a5={a5}
                                          a6={a6}
                                          a7={a7}
                                          d1={d1}
                                          d2={d2}
                                          d3={d3}
                                          d4={d4}
                                          d5={d5}
                                          d6={d6}
                                          d7={d7}
                                          isSubmitCohen={isSubmitCohen}
                                          handleSubmitCohen={handleSubmitCohen}
                                        />
                                      ):(
                                        <div style={{display: 'flex'}}>
                                        <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">Cohen / HADS Form</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                                        </div>
                                      )
                                    ):(
                                      data.flow_id === "9" ? (
                                        data.status === 0 ? (
                                          <Grid>
                                            <Grid item>
                                              <Typography variant="h6">Vital Signs Monitoring</Typography>
                                            </Grid>
                                          </Grid>
                                        ):(
                                          <div style={{display: 'flex'}}>
                                          <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">Vital Signs Monitoring</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                                          </div>
                                        )
                                      ):(
                                        data.flow_id === "10" ? (
                                          data.status === 0 ? (
                                            <Grid>
                                              <Grid item>
                                                <Typography variant="h6">Physical Examination</Typography>
                                              </Grid>
                                            </Grid>
                                          ):(
                                            <div style={{display: 'flex'}}>
                                            <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">Physical Examination</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                                            </div>
                                          )
                                        ):(
                                          data.flow_id === "11" ? (
                                            data.status === 0 ? (
                                              <Grid>
                                                <Grid item>
                                                  <Typography variant="h6">Pulmonary Function Test</Typography>
                                                </Grid>
                                              </Grid>
                                            ):(
                                              <div style={{display: 'flex'}}>
                                              <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">Pulmonary Function Test</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                                              </div>
                                            )
                                          ):(
                                            data.flow_id === "12" ? (
                                              data.status === 0 ? (
                                                <Grid>
                                                  <Grid item>
                                                    <Typography variant="h6">Papsmear</Typography>
                                                  </Grid>
                                                </Grid>
                                              ):(
                                                <div style={{display: 'flex'}}>
                                                <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">Papsmear</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                                                </div>
                                              )
                                            ):(
                                              data.flow_id === "13" ? (
                                                data.status === 0 ? (
                                                  <Grid>
                                                    <Grid item>
                                                      <Typography variant="h6">Dental Examination</Typography>
                                                    </Grid>
                                                  </Grid>
                                                ):(
                                                  <div style={{display: 'flex'}}>
                                                  <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">Dental Examination</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                                                  </div>
                                                )
                                              ):(
                                                data.flow_id === "14" ? (
                                                  data.status === 0 ? (
                                                    <Grid>
                                                      <Grid item>
                                                        <Typography variant="h6">PFT</Typography>
                                                      </Grid>
                                                    </Grid>
                                                  ):(
                                                    <div style={{display: 'flex'}}>
                                                    <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">PFT</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                                                    </div>
                                                  )
                                                ):(
                                                  data.flow_id === "15" ? (
                                                    data.status === 0 ? (
                                                      <Grid>
                                                        <Grid item>
                                                          <Typography variant="h6">Dental</Typography>
                                                        </Grid>
                                                      </Grid>
                                                    ):(
                                                      <div style={{display: 'flex'}}>
                                                      <Typography variant="h6" style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid'}} color="textSecondary">Dental</Typography><Typography style={{lineHeight: 2, marginLeft: 8, color:'lime'}}>Complete!</Typography>
                                                      </div>
                                                    )
                                                  ):(
                                                    data.flow_id === "16" ? (
                                                      <Grid>
                                                        <Grid item>
                                                          <Typography variant="h6"></Typography>
                                                        </Grid>
                                                      </Grid>
                                                    ):(
                                                      <></>
                                                    )
                                                  )
                                                )
                                              )
                                            )
                                          )
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    ))
                  ):(
                  <Container style={{paddingTop: 44}}>
                    <Grid>
                      <Grid item xs={12} sm={12} md={12} lg={12}>
                        <Typography variant="body1" gutterBottom>To begin, go to Check-in station and present your Employee ID to start your annual physical examination.</Typography>
                        <Typography variant="body2" color="textSecondary" gutterBottom>We will verify and check-in your account. (We need to make sure that it is you) Then we will assign your APE process flow.</Typography>
                      </Grid>
                    </Grid>
                  </Container>
                  )
                }
                <SnackbarCohen
                  openSnackbarCohen={openSnackbarCohen}
                  handleCloseSnackbarCohen={handleCloseSnackbarCohen}
                  message={submitCohenResponse}
                />
              </Fragment>
      </Box>
    </Container>
  );
}
