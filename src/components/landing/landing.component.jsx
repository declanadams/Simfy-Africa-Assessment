import './landing.styles.css';

import Button from '../button/button.component';

import {Link} from 'react-router-dom';

const Landing = () => {
    return (
        <div className='background_image'>

                <div className='content'>
                    <h2 className='landing_heading'>
                        This is a test heading.
                    </h2>
                    <h6 className='landing_sub_heading'>
                        The same over here , this sub heading is a test for content.
                    </h6>
                    <Link className='link' to ='/videos'><Button>View videos</Button></Link>
                </div>

        </div>
    )
}

export default Landing;