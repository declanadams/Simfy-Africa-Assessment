import './footer.styles.css';

const Footer = () => {

    let date = new Date();

    return (
        
        <footer className='page_footer'>
            <h3 className='foot_head'>Declan Adams   {date.getFullYear()} </h3>
        </footer>

    )
}

export default Footer;