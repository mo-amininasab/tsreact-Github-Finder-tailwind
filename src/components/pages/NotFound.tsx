import React, { Fragment } from 'react';

interface Props {}

const NotFound: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <h1 className="text-3xl font-semibold">404 Not Found</h1>
      <p>The page you are looking for does not exist...</p>
    </Fragment>
  );
};

export default NotFound;
