import React, { useEffect } from 'react';

import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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

  useEffect(() => () => searchId && getTickets(searchId), [searchId]);

  const sortTickets = (allTickets, sortValue) => {
    switch (sortValue) {
      case 'SORT_CHEAP': {
        return allTickets.sort((a, b) => (a.price > b.price ? 1 : -1));
      }
      case 'SORT_FAST': {
        return allTickets.sort((a, b) => {
          const aSumDuration = a.segments[0].duration + a.segments[1].duration;
          const bSumDuration = b.segments[0].duration + b.segments[1].duration;
          return aSumDuration > bSumDuration ? 1 : -1;
        });
      }
      case 'SORT_OPTIMAL': {
        return allTickets.sort((a, b) => {
          const aSumDuration = a.segments[0].duration + a.segments[1].duration;
          const bSumDuration = b.segments[0].duration + b.segments[1].duration;
          return aSumDuration + a.price > bSumDuration + b.price ? 1 : -1;
        });
      }
      default: {
        return allTickets;
      }
    }
  };

  const pushSelectedFilters = (filters) => {
    const array = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const key in filters) {
      if (filter[key]) {
        // eslint-disable-next-line default-case
        switch (key) {
          case 'TRANSFERS_ALL':
            array.push(100);
            break;
          case 'TRANSFERS_WITHOUT':
            array.push(0);
            break;
          case 'TRANSFERS_ONE':
            array.push(1);
            break;
          case 'TRANSFERS_TWO':
            array.push(2);
            break;
          case 'TRANSFERS_THREE':
            array.push(3);
            break;
        }
      }
    }
    return array;
  };

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
