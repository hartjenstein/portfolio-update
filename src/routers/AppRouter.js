import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PortfolioFrontPage from '../components/PortfolioFrontPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import About from '../components/About';
import PortfolioSectionDashboard from '../components/PortfolioSectionDashboard';
import AddPortfolioItem from '../components/AddPortfolioItem';
import EditPortfolioItem from '../components/EditPortfolioItem';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
    <Header /> 
      <Switch>
        <Route path="/" component={PortfolioFrontPage} exact={true} />
        <Route path="/contact" component={ContactForm} />
        <Route path="/about" component={About} />
        <Route path="/section/:section" component={PortfolioSectionDashboard} />
        <Route path="/create" component={AddPortfolioItem} />
        <PrivateRoute path="/edit/:id" component={EditPortfolioItem} />
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
// <PublicRoute path="/" component={LoginPage} exact={true} />
// <PrivateRoute path="/dashboard" component={DashboardPage} />
// <PublicRoute path="/" component={LoginPage} exact={true} />
export default AppRouter;
