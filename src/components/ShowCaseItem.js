import React from 'react';
import { Link } from 'react-router-dom';

const ShowCaseItem = (props) => (
      <div className="showcase__item effect-bubba">
        <div className="showcase__item-inner">
          <h2><Link to="/">{props.item}</Link></h2>
          <p>View Projects</p>
        </div>
      </div>
);

export default ShowCaseItem;

