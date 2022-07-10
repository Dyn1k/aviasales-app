import React from 'react';

import Img from './Loader.gif';

import classes from './Loader.module.scss';

const Loader = () => (
  <div className={classes.loader}>
    <img className={classes.loader__img} src={Img} alt="Loader" />
  </div>
);

export default Loader;
