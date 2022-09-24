import React, {useState} from 'react';
import { InfoSection, Sidebar } from '../../components';
import { homeObjOne, homeObjThree, homeObjNine } from './Data';
import Application from './Signin';
import {useAuth0} from '@auth0/auth0-react'
import { Grid } from '@material-ui/core';
import Auth from './Auth';
import { Button } from '../../globalStyles';

function SignUp() {
  const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated} = useAuth0();

  
  return (
    <>  
    <br />
    <br />
    {/* <div>
      <h1>
        <ul>
          <li><button onClick={loginWithPopup}>Login</button></li>
          <li><button onClick={loginWithRedirect}>Login with loginWithRedirect</button></li>
          <li><button onClick={logout}>Logout</button></li>
        </ul>
        <h3>You are is { isAuthenticated ? "logged in" : "Not logged in"} as</h3>
        {isAuthenticated && (
        <div>
          <img src={user.picture} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
        )}
      </h1>
    </div> */}

    <br />
<Grid container spacing >
  <Grid item xs={8}>
  <div>
    <Auth />
  </div>  
  </Grid>
  <Grid item xs={4}>
    <div>
      <br />
      <br />
      <br />
      <br />
    <Button onClick={loginWithPopup}>Login</Button>
    <br />
    <br />
    <br />
    {/* <Button onClick={logout}>Logout</Button> */}
    <h1>
      <br />
    
        {isAuthenticated && (
        <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
 
        </div>
        )}
    </h1>
    </div>
  </Grid>
</Grid>
<br />
<br />
<br />
<br />
 <div style={{background: "white"}}>
   <Application />
 </div>
      <br />
  
      <br />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjNine} />
    </>
  );
}

export default SignUp;
