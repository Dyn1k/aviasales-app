import React from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import classes from './Tabs.module.scss';

const Tabs = ({ sorting, cheap, fast, optimal }) => {
  const tabClass = (tabName) =>
    cn({
      [classes.tab]: true,
      [classes['tab--active']]: tabName === sorting,
    });

  return (
    <nav className={classes.tabs}>
      <div onClick={cheap} className={tabClass('SORT_CHEAP')}>
        Самый дешевый
      </div>
      <div onClick={fast} className={tabClass('SORT_FAST')}>
        Самый быстрый
      </div>
      <div onClick={optimal} className={tabClass('SORT_OPTIMAL')}>
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
  cheap: PropTypes.func.isRequired,
  fast: PropTypes.func.isRequired,
  optimal: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(Tabs);
