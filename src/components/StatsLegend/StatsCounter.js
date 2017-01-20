import React, { PropTypes } from 'react';

const StatsCounter = (props) => {
  const { cyclist, ped, driver, total, title } = props;

  return (
    <div className="stats-counter">
      <h6 className="roboto-bold">{title}</h6>
      <div className="count">
        <p>{cyclist}</p>
        <p>Cyclist</p>
      </div>
      <div className="count">
        <p>{ped}</p>
        <p>Ped</p>
      </div>
      <div className="count">
        <p>{driver}</p>
        <p>Driver</p>
      </div>
      <div className="count">
        <p>{total}</p>
        <p>Total</p>
      </div>
    </div>
  );
};

StatsCounter.defaultProps = {
  cyclist: 0,
  driver: 0,
  ped: 0,
  total: 0,
  title: ''
};

StatsCounter.propTypes = {
  cyclist: PropTypes.number,
  driver: PropTypes.number,
  ped: PropTypes.number,
  total: PropTypes.number,
  title: PropTypes.string
};

export default StatsCounter;
