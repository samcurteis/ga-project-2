// import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

function Spinner() {
  return (
    <div className="Loading">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#007A7A"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Spinner;
