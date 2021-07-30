import './heading.styles.css';

const Heading = ({children}) => {
    return(
        <div className='heading_container'>
            <h1 className='heading'>{children}</h1>
        </div>
    )
}

export default Heading;