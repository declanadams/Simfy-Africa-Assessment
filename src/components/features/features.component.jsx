import './features.styles.css';

import {AiOutlineSearch, AiOutlineDownload, AiOutlineUsergroupAdd} from 'react-icons/ai';

const Features = () => {
    return (
        <div className='features_container'>
            <div className='feature_item'>
                <AiOutlineSearch className='feature_icon'/>
                <h4 className='feature_heading'>Search unlimited</h4>
                <p className='feature_heading_sub'>This is default text to test the features sub heading.</p>
            </div>

            <div className='feature_item'>
                <AiOutlineDownload className='feature_icon'/>
                <h4 className='feature_heading'>Download videos</h4>
                <p className='feature_heading_sub'>This is default text to test the features sub heading.</p>
            </div>

            <div className='feature_item'>
                <AiOutlineUsergroupAdd className='feature_icon'/>
                <h4 className='feature_heading'>Watch together</h4>
                <p className='feature_heading_sub'> This is default text to test the features sub heading.</p>
            </div>
        </div>
    )
}

export default Features;