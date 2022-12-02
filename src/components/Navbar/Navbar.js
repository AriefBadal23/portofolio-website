import './Navbar.css';

function Navbar() {
    return ( 
        <nav className="Navbar">
            <ul>
                {/* TODO: #container has changed to project-header so the anchor will work */}
            <a href='#demo-container'><item className='Navbar-item'>
                    Projects
                    </item></a>
            <a href='#skills-header'><item className='Navbar-item'>
                    Skills
                    </item></a>
            <a href='#contact-section'><item className='Navbar-item'>
                    Contact
                    </item></a>
            </ul>
        </nav>
     );
}

export default Navbar;