import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioSection from './PortfolioSection';
import PortfolioSectionFilters from './PortfolioSectionFilters';
import { connect } from 'react-redux';


export const PortfolioSectionDashboard = (props) => (
    <div className="content-container">
      <div className="dashboard__head">
        <PortfolioSectionFilters sectionName={props.match.url.substring(9)}/>
        <div className="page-header__actions">
        {props.user.uid && <Link className="button" to="/create">Add Project</Link>}
        </div>
      </div>
      <PortfolioSection {...props} />
    </div>
);

const mapStateToProps = (state) => {
  return {
      user: state.auth
  }
};

export default connect(mapStateToProps)(PortfolioSectionDashboard);