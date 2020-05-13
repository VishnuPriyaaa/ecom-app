import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps}/> 
      {console.log("LENGTH"+JSON.stringify(otherProps))}
      {label ? (
      <label
        className={`${
          otherProps.value.length ? 'form-input-label' : ''
        } shrink`}
      >
        {label}
      </label>
    ) : null}
  </div>
 
  );
  

export default FormInput;