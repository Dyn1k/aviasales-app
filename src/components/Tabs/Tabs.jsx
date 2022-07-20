import React from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { SORT_CHEAP, SORT_FAST, SORT_OPTIMAL } from '../../actions/actionTypes';

import classes from './Tabs.module.scss';

const Tabs = ({ sorting, sortCheap, sortFast, sortOptimal }) => {
  const tabClass = (tabName) =>
    cn({
      [classes.tab]: true,
      [classes['tab--active']]: tabName === sorting,
    });

  return (
    <nav className={classes.tabs}>
      <div onClick={sortCheap} className={tabClass(SORT_CHEAP)}>
        Самый дешевый
      </div>
      <div onClick={sortFast} className={tabClass(SORT_FAST)}>
        Самый быстрый
      </div>
      <div onClick={sortOptimal} className={tabClass(SORT_OPTIMAL)}>
        Оптимальный
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  sorting: state.sorting,
});

Tabs.propTypes = {
  sorting: PropTypes.string.isRequired,
  sortCheap: PropTypes.func.isRequired,
  sortFast: PropTypes.func.isRequired,
  sortOptimal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(Tabs);
