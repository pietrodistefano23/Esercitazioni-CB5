import "./index.css";
const MainLayout = ({children}) =>{

    return (
        <div className="MainLayout">
            <header>
                <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Quibi_logo_purple.svg/1200px-Quibi_logo_purple.svg.png" alt="logo" />
                </div>
                <nav>
                    <ul>
                        <li>nome utente</li>
                        <li><img src="" alt="userImage"/> </li>
                        <li><a href="#Home">🏠Home</a></li>
                        <li><a href="#End">⬇️ End</a></li>
                    </ul>
                </nav>
            </header>
            {children}
        </div>
    )
}

export default MainLayout;