import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './Home.css';
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <>
      <Header />
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey">
            <div className="card-content white-text">       
              <h2>Welcome to Bananagrams Game - Anime/Manga version</h2>
              <img className="image" src="https://prodimage.images-bn.com/pimages/9781932188127_p0_v2_s1200x630.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
