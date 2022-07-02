import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export const Names = ({ formData, setForm, navigation }) => {
  const { firstName, lastName, phoneno } = formData;

  return (
    <Container maxWidth="xs">
        <br />
      <h3>Lets start with your lovely Name</h3>
      <TextField
        label="First Name"
        name="firstName"
        value={firstName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={lastName}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Your Phone Number"
        name="phone"
        value={phoneno}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <Button
        variant="contained"
        fullWidth
        color="primary"
        style={{ marginTop: "1rem" }}
        onClick={() => navigation.next()}
      >
        Next
      </Button>
      We’ll send you a verification code via SMS.
<br />
Don't have an account? <Link to="/sign-up">Create one</Link>.
<br />
<br />
By continuing, I agree to Axcess Fund’s <Link to="/sign-up"> Terms of Service</Link> and authorize Axcess Fund to obtain, use, and share consumer reports about me.
    
    <br />
    <br />

    </Container>
  );
};