import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import classes from './ButtonShowMore.module.scss';

const ButtonShowMore = ({ showMoreTickets }) => (
  <button
    onClick={showMoreTickets}
    className={classes['show-more']}
    type="button"
  >
    Показать еще 5 билетов!
  </button>
);

const mapStateToProps = (state) => ({
  displayedTickets: state.displayedTickets,
});

ButtonShowMore.propTypes = {
  showMoreTickets: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(ButtonShowMore);
