import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './style.css';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useStore } from 'react-redux';
// eslint-disable-next-line import/no-unresolved
import { login } from '~/services/api';
// eslint-disable-next-line import/no-unresolved
import { setToken } from '~/store/actions/auth';


const Login = () => {
  const store = useStore();
  const router = useHistory();
  const {
    handleSubmit, errors, values, handleChange,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (form) => {
      login(form).then((res) => {
        store.dispatch(setToken(res.data.token));
        router.push('/');
      });
    },
    validationSchema: yup.object({
      email: yup.string().required('Email is required').email('Email must be valid'),
      password: yup.string().required('Password is required'),
    }),
  });

  return (
    <div className="container login-container">
      <Form onSubmit={handleSubmit} className="login-form">
        <h3>Mighty Blade Admin</h3>

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
            Login
          </Button>
        </Form.Group>

        <Form.Group>
          <Link to="/auth/register" className="btnForgetPwd text-primary">
            Don&apos;t have a account?
          </Link>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Login;
