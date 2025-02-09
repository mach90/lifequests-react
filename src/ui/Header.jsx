import UserInfos from "./UserInfos";
import MainNav from "./MainNav";
import NavBar from "./NavBar";

const headerContainerStyle = "w-full h-max pb-5 border-b border-b-main3 flex flex-row justify-between items-center";

function Header() {
    return (
        <div className={headerContainerStyle}>
            <NavBar>
                <UserInfos />
                <MainNav />
            </NavBar>
        </div>
    );
}

export default Header;