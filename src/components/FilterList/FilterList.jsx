import React from 'react';

import PropTypes from 'prop-types';
import { getWindowDimensions } from '../../hooks/useWindowDimensions';
import Filter from '../Filter';
import FiltersName from './FiltersName';

import classes from './FilterList.module.css';

const FilterList = ({ onCloseFilters }) => {
  const listRef = React.createRef();

  const handleClick = (e) => {
    if (!(e.target.id === 'close-button')) {
      if (
        !listRef?.current?.contains(e.target) &&
        getWindowDimensions() <= 768
      ) {
        onCloseFilters();
      }
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className={classes['filter-list']} ref={listRef}>
      <h3 className={classes['filter-list__title']}>количество пересадок</h3>
      {FiltersName.map((item) => (
        <Filter key={item.label} property={item} />
      ))}
    </div>
  );
};

FilterList.propTypes = {
  onCloseFilters: PropTypes.func.isRequired,
};
export default FilterList;
