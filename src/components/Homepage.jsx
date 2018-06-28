import React from 'react'
import Header from './Header'
import SecondStories from './SecondStories'
import Particles from 'react-particles-js';

function Home(){
  return(
    <div className="hero">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat');
        .hero{
          background: url(https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
          background-size: 100vw ;
          background-repeat: no-repeat;
          background-position: center top;
          height: 30vh;
          width: 100%;
          min-width: 520px;
          margin: 0;
        }
        h1{
          text-align: center;
          font-size: 7vw;
          color: white;
          text-shadow: 1px 1px 35px black;
          padding-top: 10%;
          font-family: 'Montserrat', sans-serif;
          position: absolute;
          margin-left: 20%;
        }
        .particles {
  display: block;
  vertical-align: top!important;
  height: 40vh!important;
  width: 100vw!important;
  background-attachment:fixed;
}
      `}</style>
    <Header/>
    <h1>Innovative design</h1>
      <Particles
        params={{
                        particles: {
                          "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 600
        }
      },
                          line_linked: {
                            shadow: {
                              enable: true,
                              color: "#00baff",
                              blur: 5
                            }
                          }
                        }
                      }}
                      style={{
                        height: '10%',
                        width: '100%'
                      }}
        />
    </div>
  );
}
export default Home;
