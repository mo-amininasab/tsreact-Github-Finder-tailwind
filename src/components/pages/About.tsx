import React, { Fragment } from 'react';

interface Props {}

const About: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <h1 className="text-4xl font-semibold mb-2">About This App</h1>
      <p>App to search Github users</p>
      <p>Version: 1.0.0</p>
    </Fragment>
  );
};

export default About;
