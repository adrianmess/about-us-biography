import React from 'react';
import PropTypes from 'prop-types';

function Biography(){
  return (
    <div>
      <h3 className="bioName">{props.name}</h3>
      <p className="bioTitle"><em>{props.title}</em></p>
      <p className="bioInfo">{props.bio}</p>
    </div>
  );
}

Biography.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
};

export default Biography;
