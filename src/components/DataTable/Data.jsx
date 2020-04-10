/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const Data = ({ fields, items }) => items.map((item, index) => (
  <Item key={index} fields={fields} item={item} />
));

Data.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
};

Data.defaultProps = {
  items: [],
};

export default Data;
