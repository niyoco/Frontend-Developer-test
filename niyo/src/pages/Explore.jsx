import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import { useGetAllArtWorksQuery } from "../features/api/apiSlice";

function Explore() {

    const { data } = useGetAllArtWorksQuery();


  return (
   <div className="explorebg">
         <div className='art__preview'>
            {
                data?.data?.map((aw, index) => 
                    <div className='art__previewCard' key={`${aw.id} ${aw.title}`}>
                        <Link to={`/explore/${aw.id}`}>
                            <div className='art__previewImg'>
                                <img src={`https://www.artic.edu/iiif/2/${aw.image_id}/full/843,/0/default.jpg`} alt={`${aw.title} image`} />
                            </div>
                            <div className="art__previewText">
                                <h6 className='art__previewTitle'>{aw.title}</h6>
                                <p className='art__previewDate'>{aw.date_display}</p>
                                <p className='art__previewLocation'>{aw.artist_display}</p>
                            </div>
                        </Link>         
                    </div> 
                )
            }

            <div className='ExploreBtn_wrap'>
            <Link to="/explore">
                <div className='ExploreBtn'>
                    Explore More
                    </div>  
            </Link>
            </div>  
        </div>
   </div>
  )
}

export default Explore