import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Names } from "./MultiStepForm/Names"
import { Address } from "./MultiStepForm/Address";
import { Contact } from "./MultiStepForm/Contact";
import { Review } from "./MultiStepForm/Review";
import { Submit } from "./MultiStepForm/Submit";
import { Income } from "./MultiStepForm/Income";
import { Financial } from "./MultiStepForm/Financial";

const defaultData = {
  firstName: "",
  lastName: "",
  nickName: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  phone: "",
  email: "",
  creditscore: "",
  rent: "",
  assistance: "",
  eviction: "", 
  late:"",
};

const steps = [
  { id: "names" },
  { id: "address" },
  { id: "income"},
  { id: "financial"},
  { id: "contact" },
  { id: "review" },
  { id: "submit" },
];

export const MultiStepForm = () => {
  
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });
   
  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "names":
      return <Names {...props} />;
    case "address":
      return <Address {...props} />;
    case "income":
      return <Income {...props} />;
    case "financial":
      return <Financial {...props} />
    case "contact":
      return <Contact {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>Apply now to get instant result!</h1>
    </div>
  );
};