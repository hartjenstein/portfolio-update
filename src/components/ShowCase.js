import React from 'react';
import { connect } from 'react-redux';
import ShowCaseItem from './ShowCaseItem';


export const ShowCase = (props) => {
  console.log(props.showCaseItems)
  return (
    <div className="content-container showcase__container">
      {props.showCaseItems.map((showCaseItem) => (<ShowCaseItem className='showcase__item'
       key={showCaseItem} item={showCaseItem} />))}
    </div>
  );

}
const mapStateToProps = (state) => {

  return {
      showCaseItems: state.showCaseItems
  }
};

export default connect(mapStateToProps)(ShowCase);