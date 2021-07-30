import React, {useContext} from 'react';

import './list-item.styles.css';

import {Link} from 'react-router-dom';

import { VideosContext } from '../../contexts/videoContext';
import { scrollToTop } from '../../utils/scrollToTop';


const ListItem = () => {

    const videos = useContext(VideosContext);
    
    return(
      
            <>
                {videos._embedded.episodes.map((vid) =>{
                    const {id, image, name, number} = vid;
                    
                    return(
                
                        <Link className='title' to ={`/videos/${id}`} key={id} onClick={scrollToTop}>
                            <div className='video_card' >
                                <img className='image' src={image.original} alt={name}/>
                        
                                <div className='video_content'>
                                    <h3>{name}</h3>
                                    <h3>{number}</h3>
                                </div>
                            </div>
                        </Link>
                
                    )
                })}
            </>
        
    )
}


export default ListItem;