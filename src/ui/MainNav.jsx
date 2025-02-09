import { useLogout } from "../features/authentication/useLogout";
import MainNavLink from "./MainNavLink";

const mainNavContainerStyle = "w-max h-full flex flex-row gap-2.5 justify-start items-center";

function MainNav() {
    const {logout, isLoading} = useLogout();

    function handleLogout() {
        logout();
    }

    return (
        <nav className={mainNavContainerStyle}>
            <MainNavLink to="character" icon="FaPerson" />
            <MainNavLink to="skills" icon="ImTree" />
            <MainNavLink to="guilds" icon="FaHouseFlag" />
            <MainNavLink to="quests" icon="FaScroll" />
            <MainNavLink to="contracts" icon="FaFileContract" />
            <MainNavLink to="inventory" icon="BsBackpack4Fill" />
            <MainNavLink to="settings" icon="FaGear" />
            <MainNavLink icon="HiLogout" onClick={handleLogout}/>
        </nav>
    );
};

export default MainNav;
