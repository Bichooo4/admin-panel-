import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <div>
      <div>
        <p>OPPS you are like lost here !!</p>
        <p>Page Not Found !!</p>
      </div>
      <div>
        <Link
          to="/home"
        >
          Go Home
        </Link>
      </div>
    </div>
  </div>
);

export default NotFound;
