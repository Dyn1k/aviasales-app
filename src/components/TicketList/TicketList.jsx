import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';
import { sortTickets, pushSelectedFilters } from './helpers';

import Ticket from '../Ticket';
import ButtonShowMore from '../ButtonShowMore';
import Loader from '../Loader';
import Alert from '../Alert';

import classes from './TicketList.module.scss';

const TicketList = ({
  searchId,
  getSearchId,
  tickets,
  getTickets,
  receivingData,
  displayedTickets,
  sorting,
  filter,
}) => {
  useEffect(() => {
    getSearchId();
  }, []);

  useEffect(() => {
    searchId && getTickets(searchId);
  }, [searchId]);

  const filterTickets = (allTickets) =>
    sortTickets(allTickets, sorting).filter((ticket) => {
      const transfersCount =
        ticket.segments[0].stops.length + ticket.segments[1].stops.length;
      return pushSelectedFilters(filter).includes(transfersCount);
    });

  const renderedTickets = filterTickets(tickets)
    .slice(0, displayedTickets)
    .map((ticket) => <Ticket key={uuid()} ticket={ticket} />);

  const renderTickets = tickets.length ? renderedTickets : null;

  const showLoader = receivingData ? <Loader /> : null;

  const wereTicketsFound = renderedTickets.length ? (
    <ButtonShowMore />
  ) : (
    <Alert />
  );

  return (
    <div className={classes['ticket-list']}>
      {showLoader}
      {renderTickets}
      {wereTicketsFound}
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchId: state.searchId,
  tickets: state.tickets,
  receivingData: state.receivingData,
  displayedTickets: state.displayedTickets,
  sorting: state.sorting,
  filter: state.filter,
});

TicketList.propTypes = {
  searchId: PropTypes.string.isRequired,
  getSearchId: PropTypes.func.isRequired,
  tickets: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
  getTickets: PropTypes.func.isRequired,
  receivingData: PropTypes.bool.isRequired,
  displayedTickets: PropTypes.number.isRequired,
  sorting: PropTypes.string.isRequired,
  filter: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps, actions)(TicketList);
