import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { useFormspark } from "@formspark/use-formspark";

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    phoneno,
    address,
    city,
    state,
    zip,
    phone,
    email,
    creditscore,
    rent,
    assistance,
    eviction, 
    late, occupation, income, education, lastpayday
  } = formData;

  const FORMSPARK_FORM_ID = "1FZGdacE";
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });


  const onSubmit = async (e) => {
    e.preventDefault();
    await submit({   });
   };

  return (
    <form onSubmit={onSubmit}>

    <Container maxWidth='sm'>
         <br />
      <h3>Review</h3>
      <br />
      <RenderAccordion summary="Names" go={ go } details={[
        { 'First Name': firstName },
        { 'Last Name': lastName },
        { 'Phone': phoneno },
      ]} />
      <RenderAccordion summary="Address" go={ go } details={[
        { 'Address': address },
        { 'City': city },
        { 'State': state },
        { 'Zip': zip },
      ]} />
      <RenderAccordion summary="Income" go={ go } details={[
        { 'Occupation' : occupation },
        { 'Income' : income },
        { 'Education': education},
        { 'Lastpayday': lastpayday}
      ]} />
      <RenderAccordion on summary="Financialres" go={ go } details={[
        { 'Credit': creditscore },
        { 'Rent': rent },
        { 'Assistance': assistance },
        { 'Eviction': eviction },
        { 'Late': late },
      ]} />
      <RenderAccordion summary="Contact" go={ go } details={[
        { 'Phone': phone },
        { 'Email': email },
      ]} />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: '1.5rem' }}
        onClick={() => go('submit')}
        disabled={submitting}
      >
        Submit
      </Button>
    </Container>
  </form>
  
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        { details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

        }) }
        <IconButton
          color="primary"
          type="submit"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        ><EditIcon />
         <br />
         </IconButton>
         <br />
         <br />
      </div>
    </AccordionDetail>
    <br />
    <br />
  </Accordion>
)