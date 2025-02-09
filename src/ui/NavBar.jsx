const navBarStyle = "w-full h-full flex flex-row justify-between items-center px-2.5 bg-main2 rounded-full";

function NavBar({children}) {
    return (
        <div className={navBarStyle}>
            {children}
        </div>
    );
};

export default NavBar;
