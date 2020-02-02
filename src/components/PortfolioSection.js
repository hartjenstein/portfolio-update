import React from 'react';
import { connect } from 'react-redux';
import PortfolioSectionItem from './PortfolioSectionItem';
import selectSection from '../selectors/sections';
//import { history } from '../routers/AppRouter';
//exporting the unconnected function for testing with enzyme
export const PortfolioSection = (props) => {
  const setAnimationTime = (animationTime = 0) => {
    return animationTime + 100;
  }
  const handleClick = (id) => {
    setTimeout(() => {
      props.history.push(`/edit/${id}`);
    }, 50);
  }
  
  return (
 
      <div className="content-container">
      <div className="section__header">
      {console.log('props.userAuth', props.userAuth.uid)}
        <div>Projects</div>
      </div>
        <div className="section__body">
          {
              props.portfolioItems.length === 0 ? (
                <div className="section-item section-item__message">
                  <span>No Projects available</span>
                </div>
                
              ) : props.portfolioItems.map((portfolioItem, index) => {
                const animationTime = (index + 1) * 100;
        
                return ( 
                  <PortfolioSectionItem 
                  animationTime={animationTime}
                  itemIndex={index}
                  key={portfolioItem.id}
                  {...portfolioItem}
                  {...props.userAuth}
                  handleClick={handleClick}
                  />
                )
              }
          )}
        </div>
    </div>
    );
}
//Connecting the component to the redux store with a higher order component (hoc)
// Connect returns another function which 
// creates a higher order component in order to connect to the store
// the stores state gets passed in and we return the props we need out of the state

const mapStateToProps = (state) => {
  return {
      portfolioItems: selectSection(state.portfolioItems, state.filters),
      userAuth: state.auth
  }
};

export default connect(mapStateToProps)(PortfolioSection);