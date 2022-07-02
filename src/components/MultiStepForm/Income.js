import React from 'react'
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export const Income = ({ formData, setForm, navigation }) => {
    const { occupation, income, education, lastpayday} = formData;

  return (
    <Container maxWidth="xs">
     <br />
    <h3>Short life history</h3>
    <TextField
      label="What you do?"
      name="phone"
      value={occupation}
      onChange={setForm}
      margin="normal"
      variant="outlined"
      autoComplete="off"
      fullWidth
    />
    <TextField
      label="Income"
      name="income"
      value={income}
      onChange={setForm}
      margin="normal"
      variant="outlined"
      autoComplete="off"
      fullWidth
    />
     <TextField
      label="Your highest level of education"
      name="your highest level of education"
      value={education}
      onChange={setForm}
      margin="normal"
      variant="outlined"
      autoComplete="off"
      fullWidth
    />
     <TextField
      label="Your Last Pay Day"
      name="your last pay day"
      value={lastpayday}
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

 