import React from 'react';

import cn from 'classnames';

import classes from './Tabs.module.scss';

const Tabs = () => (
  <nav className={classes.tabs}>
    <div className={cn(classes.tab, classes['tab--active'])}>Самый дешевый</div>
    <div className={classes.tab}>Самый быстрый</div>
    <div className={classes.tab}>Оптимальный</div>
  </nav>
);

export default Tabs;
