import React from 'react';

import PropTypes from 'prop-types';

import CustomCheckbox from '../CustomCheckbox';

import s from './Filter.module.scss';

const Filter = ({ property }) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <label className={s.filter} htmlFor={property.label}>
    <CustomCheckbox label={property.label} />
    <span>{property.name}</span>
  </label>
);

Filter.propTypes = {
  property: PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Filter;
