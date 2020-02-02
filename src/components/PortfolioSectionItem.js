import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
 
const PortfolioSectionItem = ({ id, headline, description, createdAt, features, link, uid, handleClick, itemIndex, animationTime}  ) => {
  console.log("ANIMATIONTIME:", animationTime)
  return (
  
    <div>
      <Link className={"section-item section-item__item-" + itemIndex} to={link} style={{animationDelay: `${animationTime}ms`}}>
        <div>
          <h3 className="section-item__headline">{headline}</h3>
          <h4 className="section-item__title">{description}</h4>
          <span className="section-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
          {console.log(typeof features)}
          <span className="section-item__features"> {features &&  <span>Features: {features.map((feature, index) => (<span className="section-item__feature" key={index}>{feature}</span>)) }</span>}</span>
          <h4 className="section-item__link">{link}</h4>
          </div>
          {uid && <button className="button" onClick={() => handleClick(id)}>Edit Project</button>}
      </Link>
    </div> 
  )
}
export default PortfolioSectionItem; 