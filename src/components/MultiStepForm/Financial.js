import React from 'react'
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export const Financial = ({ formData, setForm, navigation }) => {
    const {creditscore, rent, assistance, eviction, late} = formData;
  return (
    <Container maxWidth="xs">
         <br />
    <h3>Financial Responsibility</h3>
    <br />
    <TextField
      label="Credit"
      name="What is your credit scores? best guess"
      value={creditscore}
      onChange={setForm}
      margin="normal"
      variant="outlined"
      autoComplete="off"
      fullWidth
    />
    <TextField
      label="Rent"
      name="What is your monthly rent payment?"
      value={rent}
      onChange={setForm}
      margin="normal"
      variant="outlined"
      autoComplete="off"
      fullWidth
    />
     <TextField
      label="Assistance with?"
      name="What assistance you need help with today?"
      value={assistance}
      onChange={setForm}
      margin="normal"
      variant="outlined"
      autoComplete="off"
      fullWidth
    />
     <TextField
      label="Eviction"
      name="Have you ever been evicted before?"
      value={eviction}
      onChange={setForm}
      margin="normal"
      variant="outlined"
      autoComplete="off"
      fullWidth
    />
     <TextField
      label="Do you regularily pay late/overdraft fees?"
      name="Do you regularily pay late/overdraft fees?"
      value={late}
      onChange={setForm}
      margin="normal"
      variant="outlined"
      autoComplete="off"
      fullWidth
    />
    <div style={{ marginTop: "1rem" }}>
      <Button
        color="secondary"
        variant="contained"
        style={{ marginRight: "1rem" }}
        onClick={() => navigation.previous()}
      >
        Back
      </Button>
      <Button
        color="primary"
        variant="contained"
        onClick={() => navigation.next()}
      >
        Next
      </Button>
      <br />
      <br />
    </div>
  </Container>

  );
};

 