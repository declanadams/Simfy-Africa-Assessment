import './home-page.styles.css';

import Landing from '../../components/landing/landing.component';
import Features from '../../components/features/features.component';

const HomePage = () => {
    return (
        <div className='home_page'>
            <Landing/>
            <Features/>
        </div>
    )
}

export default HomePage;