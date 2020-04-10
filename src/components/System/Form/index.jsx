import React from 'react';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

const SystemForm = ({
  name, life, mana, onSubmit,
}) => {
  const {
    handleSubmit, errors, values, handleChange,
  } = useFormik({
    initialValues: {
      name,
      life,
      mana,
    },
    onSubmit,
    validationSchema: yup.object({
      name: yup.string().required('Name is required'),
      life: yup.number().required('Life is required'),
      mana: yup.number().required('Mana is required'),
    }),
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Name
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            name="name"
            placeholder="System name"
            onChange={handleChange}
            value={values.name}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Life
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            name="life"
            placeholder="System life"
            onChange={handleChange}
            value={values.life}
            isInvalid={!!errors.life}
          />
          <Form.Control.Feedback type="invalid">
            {errors.life}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Mana
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            name="mana"
            placeholder="System mana"
            onChange={handleChange}
            value={values.mana}
            isInvalid={!!errors.mana}
          />
          <Form.Control.Feedback type="invalid">
            {errors.mana}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>

      <Form.Group>
        <Button
          style={{
            float: 'right',
          }}
          variant="primary"
          type="submit"
        >
          Create
        </Button>
      </Form.Group>
    </Form>
  );
};

SystemForm.propTypes = {
  name: PropTypes.string,
  life: PropTypes.string,
  mana: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};

SystemForm.defaultProps = {
  name: '',
  life: '',
  mana: '',
};

export default SystemForm;
