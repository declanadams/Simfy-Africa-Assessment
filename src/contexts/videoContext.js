import React, {createContext} from 'react';

import FetchDataHook from '../utils/fetchDataHook';

import LoadingSpinner from '../components/loading-spinner/loading-spinner.component';

export const VideosContext = createContext();

export const VideoProvider = ({children}) => {

    const vidAPI = process.env.REACT_APP_VIDEOS_API;
    const {videos, loading, error} = FetchDataHook(vidAPI);

    if (loading) return <LoadingSpinner/>;
    if (error) return "Error";

    return(
        <>
            <VideosContext.Provider value={videos}>
                {children}
            </VideosContext.Provider>
        </>
    )
}

