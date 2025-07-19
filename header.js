import './header.css';
import image1 from './kp logo.png';
function Header() {
    return (
        <>
            <div id="header">
                <img class="logo" src={image1} alt='logo' />
                <div class="home">
                    <a href='index.js' style={{ textDecoration: 'none', color: 'white' }}>Home</a>
                    <a href='#' style={{ textDecoration: 'none', color: 'white' }}>About Us</a>
                    <a href='#' style={{ textDecoration: 'none', color: 'white' }}>Courses</a>
                    <a href='#' style={{ textDecoration: 'none', color: 'white' }}>Contact</a>
                </div>
            </div>
        </>
    )
}


export default Header;