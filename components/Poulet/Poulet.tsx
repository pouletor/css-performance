import React, { FC } from 'react';

import './Poulet.css';

const Poulet: FC = () => {
  return (
    <div className="poulet-wrapper">
      <div className="poulet">
        Poulet is better word than toto
        <p>This message should be red</p>
      </div>
    </div>
  );
};

export default Poulet;
