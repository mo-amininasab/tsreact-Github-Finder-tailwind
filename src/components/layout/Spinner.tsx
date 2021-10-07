import React, { Fragment } from 'react';
import spinner from './spinner.gif';
interface Props {}

const Spinner: React.FC<Props> = (props) => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading..." className="w-32 mx-auto" />
    </Fragment>
  );
};

export default Spinner;
