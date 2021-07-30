import { useEffect, useState} from 'react';

const FetchDataHook = url => {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {
        const  fetchData = async () => {
            try{
                const res = await fetch(url);
                const resVids = await res.json();
              
                setVideos(resVids);
                setLoading(false);
                setError(false);
    
            }catch(e){
                setError(true);
                setLoading(false);
            }
        }
        fetchData();
    }, [url])


    return {videos, loading, error}
}

export default FetchDataHook;