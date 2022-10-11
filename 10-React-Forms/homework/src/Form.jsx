import React from 'react';
import { useState } from 'react';


export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password) {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
  }
  return errors;
}


export default function  Form() {

  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const [valid, setValid] = useState(true);

  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach( (val) => val.length > 0 && (valid = false)
    );
    if(valid) {
      setValid(false)
    } else {
      setValid(true)
    }
  }

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value
    }));
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    validateForm(errors);
  }

  return (
    <form>
      <div>
        <label>Username:</label>
        <input
          className={errors.username && 'danger'}
          key='username'
          type='text'
          name='username'
          value={input.username}
          onChange={handleInputChange}
        />
        {errors.username && (
          <span className='danger'>{errors.username}</span>
        )}
      </div>

      <div>
        <label>Password:</label>
        <input
          className={errors.password && 'danger'}
          key='password'
          type='password'
          name='password'
          value={input.password}
          onChange={handleInputChange}
        />
        {errors.password && (
          <span className='danger'>{errors.password}</span>
        )}
      </div>
      <input disabled={Object.keys(errors).length !== 0 || !input.password || !input.username} type='submit' value='Send' />
    </form>
  )
}

