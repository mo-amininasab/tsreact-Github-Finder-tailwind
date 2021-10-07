import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';

// cmp
import Navbar from './components/layout/Navbar';

// pages
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import UserDetail from './components/pages/UserDetail';

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <Navbar />
      <div className="mx-auto w-11/12 md:w-3/4 mt-6 mb-12">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/user/:login" exact component={UserDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Fragment>
  );
};

export default App;
