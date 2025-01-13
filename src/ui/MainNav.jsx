import { NavLink } from "react-router-dom";
import { useLogout } from "../features/authentication/useLogout";

function MainNav() {
    const {logout, isLoading} = useLogout();

    function handleLogout() {
        logout();
    }

    return (
        <nav className="bg-orange-500 flex flex-row gap-4 justify-end items-center p-2">
            <ul><NavLink to="character">Character</NavLink></ul>
            <ul><NavLink to="skills">Skills</NavLink></ul>
            <ul><NavLink to="guilds">Guilds</NavLink></ul>
            <ul><NavLink to="quests">Quests</NavLink></ul>
            <ul><NavLink to="inventory">Inventory</NavLink></ul>
            <ul><button onClick={handleLogout}>Logout</button></ul>
        </nav>
    );
};

export default MainNav;
