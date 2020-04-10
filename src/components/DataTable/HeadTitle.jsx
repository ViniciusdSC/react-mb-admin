import React from 'react';
import PropTypes from 'prop-types';

const HeadTitle = ({ field, onSort, sort }) => {
  const getSort = (sortOption) => {
    switch (sortOption) {
      case 'asc':
        return 'fas fa-sort-up position-absolute';
      case 'desc':
        return 'fas fa-sort-down position-absolute';
      default:
        return '';
    }
  };

  return (
    <th
      className="hover"
      onClick={onSort}
      key={field.name}
    >
      <span style={{ userSelect: 'none' }} className="mr-2">{field.text}</span>
      <i className={getSort(sort)} />
    </th>
  );
};

HeadTitle.propTypes = {
  field: PropTypes.shape({
    text: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  onSort: PropTypes.func,
  sort: PropTypes.string.isRequired,
};

HeadTitle.defaultProps = {
  onSort: () => ({}),
};

export default HeadTitle;
