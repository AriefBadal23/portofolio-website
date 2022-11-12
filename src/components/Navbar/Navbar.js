import './Navbar.css';

function Navbar() {
    return ( 
        <nav className="Navbar">
            <ul>
            <a href='#container'><item className='Navbar-item'>
                    Projects
                    </item></a>
            <a href='#'><item className='Navbar-item'>
                    Skills
                    </item></a>
            <a href='#'><item className='Navbar-item'>
                    Contact
                    </item></a>
            </ul>
        </nav>
     );
}

export default Navbar;