import React from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';

import classes from './CustomCheckbox.module.scss';

const CustomCheckbox = ({ label, checked }) => (
  <label className={classes.checkbox} htmlFor={label}>
    <input type="checkbox" id={label} />
    <span
      className={cn(
        classes['checkbox--default'],
        checked ? classes['checkbox--checked'] : null
      )}
    />
  </label>
);

CustomCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default CustomCheckbox;
