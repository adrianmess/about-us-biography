import React from 'react';
import {Switch, Route} from 'react-router-dom';
import BioPage from './BiographyPage';
import Home from './Homepage';

function Router(){

  return (
    <div>
      <Switch>
        <Route exact path = "/" component={Home} />
        <Route path = "/about" component={BioPage} />
      </Switch>
    </div>
  );
}

export default Router;
