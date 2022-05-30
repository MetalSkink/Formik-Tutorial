import React from 'react';
import { ErrorMessage ,useField } from 'formik';

const Textfield = ({label, ...props}) => {
  const [field, meta] = useField(props);
  // console.log('field',field);
  // console.log('meta',meta);

  return (
    <div className='mb-2'>
      <label htmlFor={field.name}>{label}</label>
      <input className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
             {...field} {...props}  
             autoComplete='off'/>
      <ErrorMessage name={field.name} component="div" className='error'/>
    </div>
  )
}

export default Textfield