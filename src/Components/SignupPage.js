import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const style = {
  display: 'flex',
    'justify-content': 'center',
  padding: '25px'
};

const formSize = { width: '50%' };

const nations = {
    en: 'Hello',
    de: 'Hallo',
    fr: 'Bonjour',
};

const initialState = {
    email: '',
    password: '',
    nationality: 'en',
    emailState: 'correct'
}



function SignupPage() {

    const [formState, setFormState] = React.useState(initialState) // [state, setState]
  
const handleChange = (event) => {
  const { value, name } = event.target; // target es de dónde está saliendo el evento, en este caso el input.
  setFormState((state) => ({
    ...state,
    [name]: value,
  }));
};

const handleSubmit = (event) => {
    event.preventDefault()
    const formValues = {...formState}
} 
    
    // validateEmail(formState.email) ? isValidEmail = 'valid' : isValidEmail = 'invalid';
    
  return (
      <div style={style}>
      <Form style={formSize}>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
                      id="exampleEmail"s
                      value={formState.email}
                      placeholder="your email"
                      onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
                      id="examplePassword"
                      value={formState.password}
                      placeholder="your password"
                      onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nationality">Nationality</Label>
          <Input type="select" name="nationality" id="nationality" onChange={handleChange} value={formState.nationality}>
            <option>en</option>
            <option>de</option>
            <option>fr</option>
          </Input>
        </FormGroup>
        <Button type='submit'>Sign up</Button>
          </Form>
          
          <div>
              <p>{nations[formState.nationality]}</p>
              <p>Your email address is: {formState.email}</p>
              <p> Your email address is {formState.emailState}</p>
          </div>
    </div>
  );
}

function validateEmail(email) {
  var regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}

export default SignupPage;
