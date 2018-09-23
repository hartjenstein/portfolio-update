import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PortfolioPage from '../components/PortfolioPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import ShowCase from '../components/ShowCase';
import PublicRoute from './PublicRoute';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import About from '../components/About';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
    <Header /> 
      <Switch>
        <Route path="/" component={PortfolioPage} exact={true} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/about" component={About} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
//     <PublicRoute path="/" component={LoginPage} exact={true} />
// <PrivateRoute path="/dashboard" component={DashboardPage} />
// <PublicRoute path="/" component={LoginPage} exact={true} />
export default AppRouter;
