import React from 'react';
import { Link } from 'react-router-dom';


const ShowCaseItem = (props) => {
   return (
      <div className={props.hoverStatus ? 'showcase__item effect-bubba js-flip' : 'showcase__item effect-bubba'}>
        <Link to={`/section/${props.item}`}>
          <div className="showcase__item-inner" onMouseEnter={() => props.onMouseEnter(props.index)} onMouseLeave={props.onMouseLeave}>  
            <h2>{props.item}</h2>
            <p>View Projects</p>
          </div>
        </Link>  
      </div>
  );
}

export default ShowCaseItem;

