import React from 'react';

import PropTypes from 'prop-types';

import {
  numberOfTransfers,
  formatPrice,
  formatTravelTime,
  formatFlightTime,
} from './formatTicketData';

import classes from './Ticket.module.scss';

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket;

  return (
    <section className={classes.ticket}>
      <h3 className={classes.ticket__header}>
        <span className={classes.ticket__price}>{formatPrice(price)}</span>
        <img
          src={`https://pics.avs.io/99/36/${carrier}.png`}
          alt="Company Logotype"
        />
      </h3>
      <div className={classes['ticket__flight-data']}>
        <div className={classes.ticket__flight}>
          <div className={classes.ticket__wrapper}>
            <span className={classes.ticket__title}>
              {segments[0].origin} – {segments[0].destination}
            </span>
            <span className={classes.ticket__description}>
              {formatFlightTime(segments[0].date, segments[0].duration)}
            </span>
          </div>
          <div className={classes.ticket__wrapper}>
            <span className={classes.ticket__title}>в пути</span>
            <span className={classes.ticket__description}>
              {formatTravelTime(segments[0].duration)}
            </span>
          </div>
          <div className={classes.ticket__wrapper}>
            <span className={classes.ticket__title}>
              {numberOfTransfers(segments[0].stops.length)}
            </span>
            <span className={classes.ticket__description}>
              {segments[0].stops.length
                ? segments[0].stops.join(', ')
                : 'Без пересадок'}
            </span>
          </div>
        </div>
        <div className={classes.ticket__flight}>
          <div className={classes.ticket__wrapper}>
            <span className={classes.ticket__title}>
              {segments[1].origin} – {segments[1].destination}
            </span>
            <span className={classes.ticket__description}>
              {formatFlightTime(segments[1].date, segments[1].duration)}
            </span>
          </div>
          <div className={classes.ticket__wrapper}>
            <span className={classes.ticket__title}>в пути</span>
            <span className={classes.ticket__description}>
              {formatTravelTime(segments[1].duration)}
            </span>
          </div>
          <div className={classes.ticket__wrapper}>
            <span className={classes.ticket__title}>
              {numberOfTransfers(segments[1].stops.length)}
            </span>
            <span className={classes.ticket__description}>
              {segments[1].stops.length
                ? segments[1].stops.join(', ')
                : 'Без пересадок'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

Ticket.propTypes = {
  ticket: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  }).isRequired,
};

export default Ticket;
