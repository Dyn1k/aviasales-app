import React, { useState } from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';

import s from './CustomCheckbox.module.scss';

const CustomCheckbox = ({ label }) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <label className={s.checkbox} htmlFor={label}>
      <input
        type="checkbox"
        onChange={() => setChecked(!isChecked)}
        id={label}
      />
      <span
        className={cn(
          s['checkbox--default'],
          isChecked ? s['checkbox--checked'] : null
        )}
      />
    </label>
  );
};

CustomCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CustomCheckbox;
