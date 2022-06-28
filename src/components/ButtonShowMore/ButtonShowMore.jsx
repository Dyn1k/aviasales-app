import React from 'react';

import classes from './ButtonShowMore.module.scss';

const ButtonShowMore = () => (
  <button className={classes['show-more']} type="button">
    Показать еще 5 билетов!
  </button>
);

export default ButtonShowMore;
