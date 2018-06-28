import React from 'react'
import Header from './Header'
function Home(){
  return(
    <div className="hero">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat');
        .hero{
          background: url(https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
          background-size: 120vw;
          background-repeat: no-repeat;
          background-position: center;
          height: 60vh;
          width: 100%;
          margin: 0;
        }
        h1{
          text-align: center;
          font-size: 5em;
          color: white;
          text-shadow: 1px 1px 35px black;
          padding-top: 15%;
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    <Header/>
    <h1>Innovative design</h1>
    </div>
  );
}
export default Home;
