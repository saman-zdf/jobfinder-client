import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';

import { useNavigate } from 'react-router-dom';
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
};
const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);
  // global state and useNavigate
  const { isLoading, showAlert, displayAlert, registerUser, user } =
    useAppContext();

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      console.log('already a member');
    } else {
      registerUser(currentUser);
    }
  };
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            labelText='name'
            name='name'
            type='text'
            handleChange={handleChange}
            value={values.name}
          />
        )}
        {/* email input */}
        <FormRow
          labelText='email'
          name='email'
          type='email'
          handleChange={handleChange}
          value={values.email}
        />
        {/* email input */}
        <FormRow
          labelText='password'
          name='password'
          type='password'
          handleChange={handleChange}
          value={values.password}
        />
        <button type='submit' className='btn btn-block'>
          Submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button
            type='button'
            onClick={toggleMember}
            className='member-btn'
            disabled={isLoading}
          >
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
