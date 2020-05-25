import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../components/Home/Home';
import Albums from './Albums';
import Favourites from './Favourites';
import NoMatch from '../components/NoMatch/NoMatch';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/albums">
          <Albums />
        </Route>
        <Route path="/favourites">
          <Favourites />
        </Route>
        <Route path="/*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
