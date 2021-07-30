import './loading-spinner.styles.css';

import loadingSpinnerIcon from '../../assets/svgs/loading.svg';

const LoadingSpinner = () => {
    return (
        <div className='laoding_spinner'>
            <img className='image_loader' src={loadingSpinnerIcon} alt='loading-icon'/>
        </div>
    )
}

export default LoadingSpinner;