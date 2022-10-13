import React from 'react';
import { About} from './views/About'
import { Contact } from './views/Contact'
import { Portfolio } from './views/Portfolio'
import { Resume } from './views/Resume'
import { Route, Switch, Redirect } from 'react-router-dom';
import {Footer} from './components/Footer/index'
import {Header} from './components/Header/index'

export const Routes = () => {
  return (
    <div>
      <Header>      </Header>
      <Switch>
        <Route exact path="/About" component={About}></Route>
        <Route exact path="/"><Redirect to= "/About"></Redirect></Route>
        <Route exact path="/Portfolio" component={Portfolio}></Route>
        <Route exact path="/Resume" component={Resume}></Route>
        <Route exact path="/Contact" component={Contact}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
};