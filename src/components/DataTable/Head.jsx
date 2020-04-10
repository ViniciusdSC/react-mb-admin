import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import HeadTitle from './HeadTitle';

const Head = ({ fields, onSort }) => {
  const [sort, setSort] = useState({});

  useEffect(() => {
    if (Object.keys(sort).length > 0) {
      onSort(sort);
    }
  }, [sort, onSort]);

  return (
    <tr>
      { fields.map((field) => (
        <HeadTitle
          key={field.name}
          field={field}
          onSort={() => {
            if (onSort) {
              const sortObj = {};
              sortObj[field.name] = sort[field.name] === 'asc' ? 'desc' : 'asc';
              setSort(sortObj);
            }
          }}
          sort={sort[field.name] ? sort[field.name] : 'none'}
        />
      )) }
    </tr>
  );
};

Head.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  onSort: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

Head.defaultProps = {
  onSort: false,
};

export default Head;
