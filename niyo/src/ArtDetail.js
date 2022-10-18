import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import "./assets/styles/ArtDetail.css";

import ImagePreview from "./assets/images/png/HeadSculpt.png";

function ArtDetail({ match }) {

  const { id } = useParams();
  useEffect (() => {
    fetchItem();
  }, [])

  const [ story, setStory ] = useState({});

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://api.artic.edu/api/v1/artworks/${id}`);

    const item = await fetchItem.json();

    setStory(item.data);

  }
  return (
    <div className="art_details">
      {/* controls  */}
        <div className="controls">
          <Link to="/"><KeyboardBackspaceIcon /></Link>
          <ShareIcon />
        </div>

      {/* art content  */}
        <div  className='art_content'>
          <div className='art_content_ImgWrap'>
            <img className='art_content_Img' src={`https://www.artic.edu/iiif/2/${story.image_id}/full/843,/0/default.jpg`} alt={story.title} />
          </div>
          <div className='art_content_text'>
  
              {/* <> */}
                <h5 className='art_content_text_title'>{story.title}</h5>
                <p className="art_content_text_desc">
                  {story.credit_line}
                </p>
              {/* </>/ */}

              <div className='explore_buttons'>
                  <div className='ExploreBtnN'>
                    Explore Arts
                  </div> 
                  <div className='ExploreBtntrans'>
                    Explore Arts
                  </div> 
              </div>
          </div>
        </div>

    </div>
  )
}

export default ArtDetail