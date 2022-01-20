import React, { FC } from 'react';

import './Hello.css';

interface IHelloProps {
  name: string;
}

const Hello: FC<IHelloProps> = ({ name }) => {
  return <h1>Hello blue {name}!</h1>;
};

export default Hello;
