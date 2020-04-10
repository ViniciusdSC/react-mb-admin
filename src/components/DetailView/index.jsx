import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './style.css';

const DetailView = ({ values }) => (
  <Table className="detailView" bordered>
    <tbody>
      { Object.keys(values).map((key) => (
        <tr key={key}>
          <th>{ key }</th>
          <td>{ values[key] }</td>
        </tr>
      )) }
    </tbody>
  </Table>
);

DetailView.propTypes = {
  values: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default DetailView;
