import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAlphabet, sortByDate } from '../actions/filters';


export class PortfolioSectionFilters extends React.Component {

  componentDidMount() {
    this.props.setTextFilter(this.props.sectionName);
  }

  onTextFilterChange = (e) => {
      this.props.setTextFilter(e.target.value);
  }

  onSortByChange = (e) => {
      e.target.value === 'date' ?  this.props.sortByDate() : this.props.sortByAlphabet();
  }

  render() { 
      return (
        <div>
          <div className="input-group">
            <div className="input-group__item">
                <input className="text-input" placeholder="Search Projects" type="text" value={this.props.filters.text} onChange={this.onTextFilterChange} />
            </div>
            <div className="input-group__item">
                <select className="select"
                value={this.props.filters.sortBy} // provides controlled input - single point of truth.
                // Otherwise data would be coming from DOM and could differ
                onChange={this.onSortByChange}
                >
                    <option value="date">Date created at</option>
                    <option value="alphabet">A-Z</option>
                </select>
            </div>
          </div>   
        </div> 
      );
  }
};


// passing in the state object gives us access to the whole state 
// we then return whatever we need from it, in this case all the filters
// we add filters to props
const mapStateToProps = state => {
  return {
      filters: state.filters
  };
};

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAlphabet: () => dispatch(sortByAlphabet())
});
//connect creates a higher order component that wraps this component 
//with the functionality to connect to the redux store

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioSectionFilters);