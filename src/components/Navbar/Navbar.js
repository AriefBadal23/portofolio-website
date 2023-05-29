import './Navbar.css';

function Navbar() {
    return ( 
        <nav className="Navbar">
            <ul>
                {/* TODO: #container has changed to project-header so the anchor will work */}
            <a href='#demo'><item className='Navbar-item demo-nav-button'>
                    Projects
                    </item></a>
            <a href='#skills'><item className='Navbar-item skills-nav-button'>
                    Skills
                    </item></a>
            <a href='#contact'><item className='Navbar-item contact-nav-button'>
                    Contact
                    </item></a>
            </ul>
        </nav>
     );
}

export default Navbar;