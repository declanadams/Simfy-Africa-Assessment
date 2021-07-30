import React, {useContext} from 'react';

import ListItem from '../../components/list-item/list-item.component';
import Heading from '../../components/heading/heading.component';

import './list-page.styles.css';

import { VideosContext } from '../../contexts/videoContext';

const ListPage = () => {

    const videos = useContext(VideosContext);

    return(
        <>
            <Heading>{videos.name}</Heading>
            <div className='container'>
                <div className='grid_display'>
                    <ListItem />
                </div>
            </div>
        </>
    )
}

export default ListPage;