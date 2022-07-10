import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import CustomCheckbox from '../CustomCheckbox';

import classes from './Filter.module.scss';

const Filter = ({ property, filter, onToggleFilter }) => (
  <label
    onChange={() => onToggleFilter(property.label)}
    className={classes.filter}
    htmlFor={property.label}
  >
    <CustomCheckbox label={property.label} checked={filter[property.label]} />
    <span>{property.name}</span>
  </label>
);

Filter.propTypes = {
  property: PropTypes.shape({
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  filter: PropTypes.shape({
    TRANSFERS_ALL: PropTypes.bool.isRequired,
    TRANSFERS_WITHOUT: PropTypes.bool.isRequired,
    TRANSFERS_ONE: PropTypes.bool.isRequired,
    TRANSFERS_TWO: PropTypes.bool.isRequired,
    TRANSFERS_THREE: PropTypes.bool.isRequired,
  }).isRequired,
  onToggleFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: state.filter,
});

export default connect(mapStateToProps, actions)(Filter);
