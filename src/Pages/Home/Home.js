import React, { Fragment } from 'react';
import './Home.css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <div className="container mb-10">        
        <h2>Welcome to Bananagrams Game - Anime/Manga version</h2>
      </div>
    </Fragment>
  );
}

export default Home;
