/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Head from './Head';
import Data from './Data';

const DataTable = ({
  fields, items, onSort, ...props
}) => (
  <Table {...props}>
    <thead>
      <Head fields={fields} onSort={onSort} />
    </thead>
    <tbody>
      <Data fields={fields} items={items} />
    </tbody>
  </Table>
);

DataTable.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    dataField: PropTypes.string,
  })).isRequired,
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  onSort: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

DataTable.defaultProps = {
  items: [],
  onSort: false,
};

export default DataTable;
