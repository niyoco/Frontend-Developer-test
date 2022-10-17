import React, { useEffect, useState } from 'react';
import "../assets/styles/ArtCollection.css";
import ImagePreview from "../assets/images/png/artPreview1.png";
import { Link } from 'react-router-dom';
import { useGetAllArtWorksQuery } from "../features/api/apiSlice";


function ArtCollection() {
    
    useEffect(() => {
        fetchItems().catch(err => {
            console.log("something went wrong");
        }) ;
    },[]);
    
    const { data } = useGetAllArtWorksQuery();

    const [searchKey, setSearchKey] = useState("");
    const [searchValue, setSearchValue] = useState([]);

    const [artWorks, setArtWorks ] = useState([]);
    
    const searchItems = async () => {
        
    }

    const fetchItems = async () => {
        let articles = [];
        
        const data = await fetch("https://api.artic.edu/api/v1/artworks");

        const items = await data.json();

        let newList = items.data
        .sort(() => Math.random() - 0.5)
        .filter((item, index) => index < 6);

        console.log(newList);
        setArtWorks(newList);
    }

  return (
    <div className='ac'>
        {/* Art texts and search form  */}
        <div className='ac__desc'>
            <div className='ac__desc_text'>
                <h4 className='ac__desc_text__title'>Art in the collection</h4>
                <p className='ac__desc_text__caption'>
                Browse a curated selection of art around the world, 
                including museum
                exhibitions, gallery openings, upcoming and many
                 more
                </p>
            </div>
            <form className='ac__desc__form'>
                <input className='ac__desc__form__input'
                 type="text" 
                 placeholder="&#61442; Search"
                 value={searchKey}
                 onChange={(e) =>(setSearchKey(e.target.value))}
                 
                  />
            </form>
        </div>

     {/* preview of some art works  */}
        <div className='art__preview'>
    
            {   
                searchKey === "" ? 
                artWorks.filter((value) => {
                        if(searchKey === ""){
                            return value;
                        }else if(value.title.toLowerCase().includes(searchKey.toLowerCase())){
                            return value;
                        }
                    }).map((item) => 
                    <div className='art__previewCard' key={`${item.id} ${item.title}`}>
                        <Link to={`/explore/${item.id}`}>
                            <div className='art__previewImg'>
                                <img src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`} alt={`${item.title} image`} />
                            </div>
                            <div className="art__previewText">
                                <h6 className='art__previewTitle'>{item.title}</h6>
                                <p className='art__previewDate'>{item.date_display}</p>
                                <p className='art__previewLocation'>{item.artist_display}</p>
                            </div>
                        </Link>          
                    </div> )  
                      :
                        data?.data?.filter((value) => {
                        if(searchKey === ""){
                            return value;
                        }else if(value.title.toLowerCase().includes(searchKey.toLowerCase())){
                            return value;
                        }
                    }).map((item) => 
                    <div className='art__previewCard' key={`${item.id} ${item.title}`}>
                        <Link to={`/explore/${item.id}`}>
                            <div className='art__previewImg'>
                                <img src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`} alt={`${item.title} image`} />
                            </div>
                            <div className="art__previewText">
                                <h6 className='art__previewTitle'>{item.title}</h6>
                                <p className='art__previewDate'>{item.date_display}</p>
                                <p className='art__previewLocation'>{item.artist_display}</p>
                            </div>
                        </Link>         
                    </div> )
            }
            

              <Link to="/explore">
                <div className='ExploreBtn_wrap'>
                    <div className='ExploreBtn'>
                        Explore More
                        </div>  
                </div>  
              </Link>
             
        </div>
    </div>
  )
}

export default ArtCollection