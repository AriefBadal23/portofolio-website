import './Navbar.css';

function Navbar() {
    return ( 
        <nav className="Navbar">
            <ul>
            <a href='#'><item className='Navbar-item'>
                    Projects
                    </item></a>
            <a href='#'><item className='Navbar-item'>
                    About
                    </item></a>
            <a href='#'><item className='Navbar-item'>
                    Contact
                    </item></a>
            </ul>
        </nav>
     );
}

export default Navbar;