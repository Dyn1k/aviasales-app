import React from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';

import Filter from '../Filter';
import FiltersName from './FiltersName';

import classes from './FilterList.module.css';

const FilterList = ({ show }) => (
  <div
    className={cn(
      classes['filter-list'],
      !show ? classes['filter-list--hide'] : null
    )}
  >
    <h3 className={classes['filter-list__title']}>количество пересадок</h3>
    {FiltersName.map((item) => (
      <Filter key={item.label} property={item} />
    ))}
  </div>
);

FilterList.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default FilterList;
