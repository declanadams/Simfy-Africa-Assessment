import React, {useContext} from 'react';

import { VideosContext } from '../../contexts/videoContext';

import './video-details.styles.css';

import {useParams} from  'react-router-dom'

import Heading from '../heading/heading.component';

import {Link} from 'react-router-dom';

import {scrollToTop} from '../../utils/scrollToTop';



const VideoDetails = () => {

    const {id} = useParams();
    const videos = useContext(VideosContext);


    const items = videos._embedded.episodes;
    let i = items.find(item => item.id == id )
    
    return(
        <div className='vids_page'>
            <Heading> Details  </Heading>
            <div className='container'>
                <div className= 'grid_display2'>
                    
                    <div className='grid_item'>
                        <img className='video_image_single' src={i.image.original} alt={i.name} />
                    </div>

                    <div className='grid_item'>
                        <p className='video_id'>{i.id}</p>
                        <h3 className='video_name_single'>{i.name}</h3>
                        <h4>Episode: {i.number}</h4>
                        <p className='video_para_single'>{i.summary.replace(/(<([^>]+)>)/gi, "")}</p>
                        <h4 className='video_airdate'>{i.airdate}</h4>
                        <Link onClick={scrollToTop} className='link g' to ='/videos' ><button className='btn-back'>Go back</button></Link>
                    </div>
                    
                </div>
            </div>
         
        </div>
    )
}

export default VideoDetails;