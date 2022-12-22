import './/header.css'

export const Header = () => {
    const menuItems = [
        {label : 'Home', href : '#header'},
        {label : 'Main Content', href : '#main'},
        {label : 'Footer', href : '#footer'}
    ]

    return <header className="Header">
        <div className="container">
            <h1>Welcome</h1>
        </div>
        <nav className="Nav">
            {
                menuItems.map(function(item){
                    return (
                        <li key={item.id} role="menuitem">
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ) 
                })
            }

        </nav>
    </header>
}