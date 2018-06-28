import React from 'react';
import PropTypes from 'prop-types';

function Biography(props){
  return (
    <div className="grid">
      <style jsx>{`
          .grid{
            display: grid;
            grid-template-columns: 1fr 2fr;
            margin: 5vw 5vw;
          }
          img{
            height: 390px;
            margin-right: 50px;
          }
          .bioInfo {
            font-weight: 300;
            letter-spacing: normal;
            text-transform: none;
            font-size: 13px;
            line-height: 2em;
            color: #767676;
          }
          .bioName, .bioTitle, .bioInfo {
            margin-bottom: 20px;
          }
          .biographyContainer{
            max-height: 390px;
            max-width: 420px;
          }
          `}</style>
        <div>
          <img src={props.img}/>
        </div>
        <div className="biographyContainer">
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
