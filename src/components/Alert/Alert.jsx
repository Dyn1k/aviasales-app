import React from 'react';

import classes from './Alert.module.scss';

const Alert = () => (
  <div className={classes.alert}>
    Рейсов, подходящих под заданные фильтры, не найдено!
  </div>
);

export default Alert;
