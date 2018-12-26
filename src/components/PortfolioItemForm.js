import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


//const date = new Date();
//moment example
const now = moment();
console.log(now.format('MMM Do, YYYY'));

// * using local state to keep track of the changes the user makes in the form
// only if user submits we send it of to redux
// * why did we switch back to the constructor function? We want to 
//populate the state with exitsing state which we get passed down from the edit expense page 
// via props. If we dont set up the contructor function there is no way to access the props! 
export default class PortfolioItemForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headline: props.portfolioItem ? props.portfolioItem.headline : '',
            description: props.portfolioItem ? props.portfolioItem.description : '',
            features: props.portfolioItem ? props.portfolioItem.features : [],
            link: props.portfolioItem ? props.portfolioItem.link : '',
            createdAt: props.portfolioItem ? moment(props.portfolioItem.createAt) : moment(),
            error: ''
        };
    };

    onHeadlineChange = e => {
      const headline = e.target.value;
      this.setState(() => ({ headline })); 
    };

    onDescriptionChange = e => {
        const description = e.target.value;
        this.setState(() => ({ description })); 
    };

    onFeatureChange = e => {
   
        const features = e.target.value.split(',');
        console.log('FEATURES:', typeof features)
        this.setState(() => ({ features }));   
        console.log('STATE', this.state.features)
    };

    onLinkChange = e => {
        const link = e.target.value;
        this.setState(() => ({ link }));
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
        this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    };

    onSubmit = e => {
        e.preventDefault();

        if (!this.state.description || !this.state.headline || !this.state.link) {
            this.setState(() => ({ error: 'Missing Information. please enter all required fields'}));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({ 
                headline: this.state.headline,
                description: this.state.description,
                link: this.state.link,
                // valueOf() -> momentJS method to get the timestamp back
                createdAt: this.state.createdAt.valueOf(),
                //features: () => String.prototype.join.apply(this.state.features)
                features: this.state.features
            })
        }
    };

    render() {
        return ( 
          <form className="form" onSubmit={this.onSubmit}>
          { this.state.error && <p className="form__error" >{this.state.error}</p>}
              <input type="text"
                  className="text-input"
                  placeholder="Description"
                  autoFocus
                  //controlled components for single point of truth
                  value={this.state.description}
                  onChange={this.onDescriptionChange}
              />
              <input type="text" 
                  className="text-input" 
                  placeholder="Headline"
                     //controlled components for single point of truth
                  value={this.state.headline}
                  onChange={this.onHeadlineChange}
              />
              <SingleDatePicker 
                  //required
                  date={this.state.createdAt}
                  onDateChange={this.onDateChange}
                  focused={this.state.calenderFocused}
                  onFocusChange={this.onFocusChange}
                  // custom
                  numberOfMonths={1}
                  isOutsideRange={() => false}
              />
              <textarea 
                  className="textarea"
                  placeholder="Add a Feature"
                  value={this.state.features}
                  onChange={this.onFeatureChange}
              />
              <input type="text" 
                className="text-input" 
                placeholder="link"
                    //controlled components for single point of truth
                value={this.state.link}
                onChange={this.onLinkChange}
              />
             
              <div>
                <button className="button">Save Portfolio Item</button>
              </div>
              
          </form>
        )
    }
}