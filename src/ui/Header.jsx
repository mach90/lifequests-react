import UserInfos from "./UserInfos";
import MainNav from "./MainNav";

const headerContainerStyle = "col-span-full flex flex-row justify-between";

function Header() {
    return (
        <div className={headerContainerStyle}>
            <UserInfos />
            <MainNav />
        </div>
    );
}

export default Header;