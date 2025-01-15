import UserInfos from "./UserInfos";
import MainNav from "./MainNav";

function Header() {
    return (
        <div className="col-span-full flex flex-row justify-between">
            <UserInfos />
            <MainNav />
        </div>
    );
}

export default Header;