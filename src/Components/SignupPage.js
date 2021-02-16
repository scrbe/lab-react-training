import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const style = {
    display: 'flex',
    'justify-content': 'center',
}

const formSize = { width: '50%' }

function SignupPage() {
    return (
      <div style={style}>
      <Form style={formSize}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="your email" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="your password" />
        </FormGroup>
        <FormGroup>
        <Label for="nationality">Nationality</Label>
        <Input type="select" name="nationality" id="nationality">
          <option>en</option>
          <option>de</option>
          <option>fr</option>
        </Input>
      </FormGroup>
          <Button>Sign up</Button>
            </Form>
            </div>
  );
}

function validateEmail(email) {
        var regEx = /\S+@\S+\.\S+/;
        return regEx.test(email);
}
    
export default SignupPage;
