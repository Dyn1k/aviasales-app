import React from 'react';

import Logo from './S7 Logo.png';
import classes from './Ticket.module.scss';

const Ticket = () => (
  <section className={classes.ticket}>
    <h3 className={classes.ticket__header}>
      <span className={classes.ticket__price}>13 400 Р</span>
      <img src={Logo} alt="Company Logotype" />
    </h3>
    <div className={classes['ticket__flight-data']}>
      <div className={classes.ticket__flight}>
        <div className={classes.ticket__wrapper}>
          <span className={classes.ticket__title}>MOW – HKT</span>
          <span className={classes.ticket__description}>10:45 – 08:00</span>
        </div>

        <div className={classes.ticket__wrapper}>
          <span className={classes.ticket__title}>в пути</span>
          <span className={classes.ticket__description}>21ч 15м</span>
        </div>

        <div className={classes.ticket__wrapper}>
          <span className={classes.ticket__title}>2 пересадки</span>
          <span className={classes.ticket__description}>HKG, JNB</span>
        </div>
      </div>

      <div className={classes.ticket__flight}>
        <div className={classes.ticket__wrapper}>
          <span className={classes.ticket__title}>MOW – HKT</span>
          <span className={classes.ticket__description}>11:20 – 00:50</span>
        </div>

        <div className={classes.ticket__wrapper}>
          <span className={classes.ticket__title}>в пути</span>
          <span className={classes.ticket__description}>13ч 30м</span>
        </div>

        <div className={classes.ticket__wrapper}>
          <span className={classes.ticket__title}>1 пересадка</span>
          <span className={classes.ticket__description}>HKG</span>
        </div>
      </div>
    </div>
  </section>
);

export default Ticket;
