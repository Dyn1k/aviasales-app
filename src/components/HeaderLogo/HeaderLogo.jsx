import React from 'react';

import classes from './HeaderLogo.module.scss';
import Logo from './Logo.png';

const HeaderLogo = () => (
  <div className={classes.logo}>
    <img src={Logo} alt="Aviasales Logo" />
  </div>
);

export default HeaderLogo;
