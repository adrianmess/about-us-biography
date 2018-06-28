import React from 'react';
import PropTypes from 'prop-types';

function Biography(props){
  return (
    <div className="grid">
      <style jsx>{`
        .grid{
          display: grid;
          grid-template-columns: 1fr 2fr;
        }
      `}</style>
      <div>
        <img src={props.img}/>
      </div>
      <div>
        <h3 className="bioName">{props.name}</h3>
        <p className="bioTitle"><em>{props.title}</em></p>
        <p className="bioInfo">{props.bio}</p>
      </div>
    </div>
  );
}

Biography.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  title: PropTypes.string,
  bio: PropTypes.string
};

export default Biography;
