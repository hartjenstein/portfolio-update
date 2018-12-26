import React from 'react';
import { connect } from 'react-redux';
import ShowCaseItem from './ShowCaseItem';


export class ShowCase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoverStatus: this.props.showCaseItems.map(() => false)
    }
  }

  handleHover = (index) => {
    setTimeout(() => {
      const nextHoverStatus = [...this.state.hoverStatus];
      nextHoverStatus[index] = !this.state.hoverStatus[index];
      this.setState(() => ({
        hoverStatus: nextHoverStatus
      }));
    }, 20);
  }

  resetHoverStatus = () => {
    console.log('Mouseleave')
   this.setState(() => ({
      hoverStatus: this.props.showCaseItems.map((item) => item = false)
    }));
    console.log(this.state.hoverStatus)
  }

  render() {
    return (
      <div className="content-container showcase__container">
        {this.props.showCaseItems.map((showCaseItem, index) => (<ShowCaseItem 
        key={showCaseItem} 
        index= {index} 
        item={showCaseItem} 
        onMouseEnter={this.handleHover} 
        onMouseLeave={this.resetHoverStatus}
        hoverStatus = {this.state.hoverStatus[index]}
        />))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {

  return {
      showCaseItems: state.showCaseItems
  }
};

export default connect(mapStateToProps)(ShowCase);