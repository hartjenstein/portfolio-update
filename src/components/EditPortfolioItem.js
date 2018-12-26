import React from 'react';
import { connect } from 'react-redux';
import PortfolioItemForm from './PortfolioItemForm';
import { editPortfolioItem, startRemovePortfolioItem, startEditPortfolioItem } from '../actions/sectionItems';
// Refactor to class based components so we can convert inline functions (meaning in JSX defined) to methods, 
// so that they dont have to be redefined everytime the component gets rendered (for testing purposes )

// there are special props that are passed down by react router like the history object
export class EditPortfolioItem extends React.Component {
  handleOnSubmit = (portfolioItem) => {
    this.props.startEditPortfolioItem(this.props.portfolioItem.id, portfolioItem);
    this.props.history.push('/');
  };

  handleOnClick= () => {
    this.props.startRemovePortfolioItem({id: this.props.portfolioItem.id})
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit PortfolioItem</h1>
          </div>
        </div>
        <div className="content-container">
          <PortfolioItemForm 
              portfolioItem={this.props.portfolioItem}
              onSubmit={this.handleOnSubmit}
          />
          <button className="button button--secondary"
            onClick={this.handleOnClick}
          >Remove PortfolioItem</button>
        </div>
      </div>
    );
  }
};

// we are searching the state object in the store for the id we get from the props that are passed down by the router 
// we can pass state and props as arguments to the higher order component (hoc) in order to do that
const mapStateToProps = (state, props) => {
  return {
    // we generate a new prop called PortfolioItem and add it on to props
    portfolioItem: state.portfolioItems.find((PortfolioItem) => PortfolioItem.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, props) => (
  { startEditPortfolioItem: (id, 
    portfolioItem) => dispatch(startEditPortfolioItem(id, portfolioItem)),
    startRemovePortfolioItem: (data) => dispatch(startRemovePortfolioItem(data))
  });

export default connect(mapStateToProps, mapDispatchToProps)(EditPortfolioItem);