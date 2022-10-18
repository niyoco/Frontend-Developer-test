import React from 'react';
import "../assets/styles/Home.css";
import HeadSculpt from "../assets/images/png/HeadSculpt.png";
import FloatingNet from "../assets/images/png/floatingNet.png";
import ArtCollection from './ArtCollection';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='container'>
        <div className='home'>
        {/* texts  */}
          <div className='home__text'>
            <h3 className='home__text__header'>
            Discover amazing art around the <span className='unique__text'>world</span>
            </h3>
            <p className='home__text__caption'>
            Browse a curated selection of art around the world, including
            museum
            exhibitions, gallery openings, upcoming and many more
            </p>

            <Link to="/explore">
              <div className='ExploreBtn_wrap'>
                <div className='ExploreBtn'>
                  Explore Arts
                </div>  
              </div>   
            </Link>    
          </div>

        {/* images  */}
          <div className='home__artImage'>
            <div className='headSculpt'>
              {/* <div className='floatingNet'>
                <img src={FloatingNet} alt="floating net" />
              </div> */}
                <img className='headSculpt__img' src={HeadSculpt} alt="section 1 image" />
              </div>
          </div>
          
      </div>

      <ArtCollection />
    </div>
  )
}


export default Home