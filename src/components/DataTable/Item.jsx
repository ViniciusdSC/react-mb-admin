import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ fields, item }) => (
  <tr>
    { fields.map((field) => (
      <td key={field.name}>{ item[field.name] }</td>
    )) }
  </tr>
);

Item.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  item: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Item;
