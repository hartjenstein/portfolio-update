import React from 'react';
import { Link } from 'react-router-dom';

const ShowCaseItem = (props) => (
      <div className="showcase__item">
        <Link to="/">{props.item}</Link>
      </div>
);

export default ShowCaseItem;