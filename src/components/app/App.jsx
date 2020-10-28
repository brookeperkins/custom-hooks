import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import QueenDetailPage from '../../pages/QueenDetailPage';
import QueensPage from '../../pages/QueensPage';
import Header from '../header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={QueensPage} />
        <Route exact path="/characters/:id" component={QueenDetailPage} />
      </Switch>
    </Router>
  );
}
