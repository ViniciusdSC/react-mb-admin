import './style.css';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useStore } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import { register } from '~/services/api';
// eslint-disable-next-line import/no-unresolved
import { setToken } from '~/store/actions/auth';


const Register = () => {
  const store = useStore();
  const router = useHistory();
  const {
    handleSubmit, errors, values, handleChange,
  } = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
    onSubmit: (form) => {
      register(form).then((res) => {
        store.dispatch(setToken(res.data.token));
        router.push('/');
      });
    },
    validationSchema: yup.object({
      name: yup.string().required('Name is required'),
      username: yup.string().required('Username is required'),
      email: yup.string().required('Email is required').email('Email must be valid'),
      password: yup.string().required('Password is required'),
    }),
  });

  return (
    <div className="container login-container">
      <Form onSubmit={handleSubmit} className="login-form">
        <h3>New Account</h3>

        <Form.Group controlId="name">
          <Form.Label>Enter your name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={values.name}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="username">
          <Form.Label>Enter your username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Name"
            onChange={handleChange}
            value={values.username}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Enter your email address</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={values.email}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Enter your password</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={values.password}
            type="password"
            name="password"
            placeholder="Password"
            isInvalid={!!errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Button
            style={{
              float: 'right',
            }}
            variant="primary"
            type="submit"
          >
            Register
          </Button>
        </Form.Group>

        <Form.Group>
          <Link to="/auth/login" className="btnForgetPwd text-primary">
            I already have a account
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Register;
