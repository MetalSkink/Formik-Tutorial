import React from 'react';
import Textfield from './Textfield';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(15, 'Must be 15 characters or less')
      .required('Name is Required'),
    lastName: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(20, 'Must be 20 characters or less')
      .required('Last Name is Required'),
      email: Yup.string()
      .email('Invalid email address')
      .required('Email is Required'),
    password: Yup.string()
      .min(6, 'Must be at least 6 characters')
      .max(20, 'Must be 20 characters or less')
      .required('Password is Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is Required'),  
  })

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values);
      }}
      >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          {/* {console.log(formik)} */}
          <Form>
            <Textfield label={"First Name"} name={"firstName"} type={"text"}/>
            <Textfield label={"Last Name"}  name={"lastName"} type={"text"}/>
            <Textfield label={"Email"} name={"email"} type={"email"}/>
            <Textfield label={"Password"} name={"password"} type={"password"}/>
            <Textfield label={"Confirm Password"} name={"confirmPassword"} type={"password"}/>
            <button className='btn btn-dark mt-3' type='submit'>Register</button>
            <button className='btn btn-danger mt-3 ms-3' type='reset'>Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}

export default Signup