import React from 'react';

import Ticket from '../Ticket';

import classes from './TicketList.module.scss';

const TicketList = () => (
  <div className={classes['ticket-list']}>
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
    <Ticket />
  </div>
);

export default TicketList;
