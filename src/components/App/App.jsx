import React, { useEffect, useState } from 'react';

import useWindowDimensions, {
  getWindowDimensions,
} from '../../hooks/useWindowDimensions';

import FilterList from '../FilterList';
import Tabs from '../Tabs';
import ButtonShowMore from '../ButtonShowMore';
import HeaderLogo from '../HeaderLogo';
import TicketList from '../TicketList';
import MobileWrapper from '../MobileWrapper';

import classes from './App.module.scss';

const App = () => {
  const [isFilterShow, setFilterShow] = useState(useWindowDimensions());

  useEffect(() => {
    setFilterShow(getWindowDimensions() > 768);
  }, [useWindowDimensions()]);

  const onShowFilters = () => setFilterShow(!isFilterShow);

  return (
    <div className={classes.container}>
      <MobileWrapper onShowFilters={onShowFilters} />
      <HeaderLogo />
      <main className={classes.content}>
        <FilterList show={isFilterShow} />
        <div className={classes['right-wrapper']}>
          <Tabs />
          <TicketList />
          <ButtonShowMore />
        </div>
      </main>
    </div>
  );
};

export default App;
