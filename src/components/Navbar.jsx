export const Navbar = () => {
    return (
        <>
            <header className="navbar">
                <div className="container">
                    <div className="navbar__logo">
                        <img src="./images/marca_2020_blanco.svg" />
                    </div>
                    <nav>
                        <NavList />
                    </nav>
                </div>
            </header>
        </>
    );
};


function NavList() {

    const menuItems = ["About", "Skills", "Projects", "Experience", "Contacto"]

    const listElements = menuItems.map((item) => {
        return (
            <li className="navbar__listItem" key={item} >
                <a href={`#${item}`}>
                    {item}
                </a>
            </li>
        )
    }
    )

    return (
        <>
            <ul className="navbar__list">
                {listElements}
            </ul>
        </>
    )
} 