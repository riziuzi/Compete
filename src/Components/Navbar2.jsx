import useAuthenticate from "./Hook/useAuthenticate"

export default function Navbar2() {
    const { authenticated, loading, userObj } = useAuthenticate()
    const renderNavItem = (text, link) => (
        <div className="navItem flex items-center px-3 py-2 justify-center hover:shadow-md hover:bg-skin-primary200 rounded-lg transition ease-in-out  duration-100">
            <a className="navLink  text-base text-center font-bold text-skin-text200 whitespace-nowrap justify-center flex" href={link}>
                {text==="Loading"?(<><div className="animate-pulse"> Loading </div></>):(text)}
            </a>
        </div>
    );
    return (
        <div className="header sticky top-0 px-5 bg-skin-bg200 flex justify-between items-center w-full h-14">
            <a className="logo w-36" href="/welcome">
                <img className='hover:cursor-pointer' src="./img/dark.svg" alt="Logo" />
            </a>
            <div className="items w-1/3 flex justify-between">
                {renderNavItem("Home", "/welcome")}
                {renderNavItem("JournalAI", "/JournalAI")}
                {renderNavItem("Resources", "/resource")}
                {loading ? renderNavItem('Loading', '/profile') :
                    authenticated ? renderNavItem(userObj.userId, '/profile') :
                        renderNavItem('Login', '/signin')
                }
                {renderNavItem("About", "/about")}
            </div>

        </div>
    );
}
