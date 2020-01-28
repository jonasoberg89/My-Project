import React, { useState, useEffect } from 'react';
import './style.css';
import Notis from "../../components/notis"
import getJoke from "../../utils/api/jokeapi/api"
function Home() {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    getJoke().then(res=>{
      setJoke(res)
    })
    
  }, []);


  return (
    <div className="home">
    <div className="home-all-message"></div>
    <div className="home-diverse">
      <Notis header="Daily Joke" message={joke.setup} secondMessage={joke.punchline} />
    </div>
    </div>
  );
}

export default Home;
