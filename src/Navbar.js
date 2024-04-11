
function Navbar() {
    return (
        <nav className="text-right text-[#444444] no-underline lg:m-6 font-medium  ">
            <ul>
                {/* TODO: #container has changed to project-header so the anchor will work */}
                <a href='#demo'><item className="ml-2 hover:underline">
                    Projects
                </item></a>
                <a href='#skills'><item className="ml-2 hover:hover:underline">
                    Skills
                </item></a>
                <a href='#contact'><item className="m-4 hover:underline">
                    Contact
                </item></a>
            </ul>
        </nav>
    );
}

export default Navbar;