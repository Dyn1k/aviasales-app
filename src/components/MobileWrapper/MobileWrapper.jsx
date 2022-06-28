import React from 'react';

import PropTypes from 'prop-types';

import classes from './MobileWrapper.module.scss';
import FilterMenu from './menu-512.png';

const MobileWrapper = ({ onShowFilters }) => (
  <div className={classes['mobile-wrapper']}>
    <button
      className={classes['menu-button']}
      type="button"
      onClick={onShowFilters}
    >
      <img
        className={classes['menu-button__image']}
        src={FilterMenu}
        alt="Filter Menu"
      />
    </button>
  </div>
);

MobileWrapper.propTypes = {
  onShowFilters: PropTypes.func.isRequired,
};

export default MobileWrapper;
